import tempfile
import subprocess
import anyio
import os
from openai import AsyncAzureOpenAI
from pydub import AudioSegment
from download_media import download_audio_with_file_path

async def convert_audio_file_into_wav(file_path):
    tmp_wav = tempfile.NamedTemporaryFile(delete=False, suffix=".wav").name
    cmd = [
        "ffmpeg","-loglevel", "error", "-y", "-i", str(file_path),
        "-vn",
        "-ac", "1",
        "-ar", "16000",
        "-c:a", "pcm_s16le",
        tmp_wav
    ]
    try:
        await anyio.run(cmd)
    except Exception:
        subprocess.run(cmd)
    file_path = tmp_wav
    return file_path

def split_audio_into_chunks(audio_path, chunk_minutes=5, overlap_seconds=10):
    """Split audio file into 3-minute chunks with overlap."""
    try:
        audio = AudioSegment.from_file(audio_path)
        total_duration_ms = len(audio)
        chunk_duration_ms = chunk_minutes * 60 * 1000  # 3 minutes in milliseconds
        overlap_ms = overlap_seconds * 1000
        
        # If audio is shorter than chunk duration, return original file
        if total_duration_ms <= chunk_duration_ms:
            print(f"Audio is shorter than chunk duration, using original file")
            return [audio_path]
        
        chunks = []
        start_time = 0
        chunk_number = 1
        
        while start_time < total_duration_ms:
            end_time = min(start_time + chunk_duration_ms, total_duration_ms)
            
            # Extract chunk
            chunk = audio[start_time:end_time]
            
            # Create temporary file for chunk
            with tempfile.NamedTemporaryFile(delete=False, suffix=".wav") as temp_file:
                chunk.export(temp_file.name, format="wav")
                chunks.append(temp_file.name)
            
            # Move to next chunk (subtract overlap to ensure continuity)
            start_time = end_time - overlap_ms
            chunk_number += 1
            
            # Prevent infinite loop if we're near the end
            if end_time >= total_duration_ms:
                break
        
        return chunks
    except Exception as e:
        raise Exception(f"Error splitting audio: {str(e)}")

async def process_audio_from_url(url,api_version,api_key,azure_endpoint,model):    

    file_path,is_large = await download_audio_with_file_path(url)
    if not file_path:
        return ""
    file_path = await convert_audio_file_into_wav(file_path)

    if is_large:
        # Split audio into chunks
        chunk_paths = split_audio_into_chunks(file_path, chunk_minutes=10, overlap_seconds=10)
        
        # Process each chunk and accumulate transcripts
        full_transcript = ""
        client = AsyncAzureOpenAI(api_version=api_version, api_key=api_key, azure_endpoint=azure_endpoint)
        for i, chunk_path in enumerate(chunk_paths, 1):
            # chunk_transcript = await process_audio_from_file(chunk_path)
            with open(chunk_path, "rb") as fh:
                resp =await client.audio.transcriptions.create(
                    file=fh,
                    model=model,  # your model deployment name if required
                    language="en"
                )
            chunk_transcript = getattr(resp, "text", None)
            if chunk_transcript:
                if full_transcript:
                    full_transcript += " " + chunk_transcript
                else:
                    full_transcript = chunk_transcript
            # Clean up temporary chunk file
            try:
                os.unlink(chunk_path)
            except Exception as e:
                print(f"Warning: Could not delete chunk file {chunk_path}: {str(e)}")
        
        # Clean up original downloaded file
        try:
            os.unlink(file_path)
        except Exception as e:
            print(f"Warning: Could not delete original file {file_path}: {str(e)}")
        
        return full_transcript
    
    else:
        try:
            client = AsyncAzureOpenAI(api_version=api_version, api_key=api_key, azure_endpoint=azure_endpoint)  # requires OPENAI_API_KEY / configuration in env
            with open(file_path, "rb") as fh:
                resp =await client.audio.transcriptions.create(
                    file=fh,
                    model=model,  # your model deployment name if required
                    language="en"
                )
            # Clean up file after processing
            try:
                os.unlink(file_path)
            except Exception as e:
                print(f"Warning: Could not delete file {file_path}: {str(e)}")
            return getattr(resp, "text", None)
        except Exception as e:
            print(f"Error processing audio from file: {str(e)}")
            return ""
