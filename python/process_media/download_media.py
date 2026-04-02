import httpx
import mimetypes
import aiofiles

async def download_video(video_url: str, video_ext: str):
    async with httpx.AsyncClient(timeout=None) as client:
        async with client.stream("GET", video_url) as response:
            if not response.is_success:
                return None

            async with aiofiles.tempfile.NamedTemporaryFile(
                delete=False, suffix=video_ext, mode="wb"
            ) as tmp_file:

                async for chunk in response.aiter_bytes(chunk_size=1024 * 1024):  # 1 MB
                    await tmp_file.write(chunk)

                return tmp_file.name
        
async def download_audio_with_file_path(audio_url):
    async with httpx.AsyncClient(timeout=720) as client:
        async with client.stream("GET", audio_url) as r:
            if not r.is_success:
                return None, False
            size = int(r.headers.get("Content-Length", 0))
            is_large = size > 10 * 1024 * 1024 if size else False

            guessed_ext = mimetypes.guess_extension(
                r.headers.get("Content-Type", "")
            ) or ".bin"

            async with aiofiles.tempfile.NamedTemporaryFile(delete=False, suffix=guessed_ext) as f:
                async for chunk in r.aiter_bytes(chunk_size=1024 * 1024):
                    await f.write(chunk)

                return f.name, is_large