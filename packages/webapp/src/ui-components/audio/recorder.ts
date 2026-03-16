export class Recorder {
    onDataAvailable: (buffer: Iterable<number>) => void;
    private audioContext: AudioContext | null = null;
    private mediaStream: MediaStream | null = null;
    private mediaStreamSource: MediaStreamAudioSourceNode | null = null;
    private workletNode: AudioWorkletNode | null = null;

    public constructor(onDataAvailable: (buffer: Iterable<number>) => void) {
        this.onDataAvailable = onDataAvailable;
    }

    async start(stream: MediaStream) {
        try {
            if (this.audioContext) {
                await this.audioContext.close();
            }

            this.audioContext = new AudioContext({ sampleRate: 24000 });

            // Check if we're in a secure context
            if (!window.isSecureContext) {
                console.warn("AudioWorklet requires a secure context (HTTPS or localhost)");
            }
            
            // Try multiple path approaches
            const paths = [
                "/audio-processor-worklet.js",
                "./audio-processor-worklet.js",
                "audio-processor-worklet.js",
                `${window.location.origin}/audio-processor-worklet.js`
            ];
            
            let loaded = false;
            let lastError;
            
            for (const path of paths) {
                try {
                    console.log(`Attempting to load worklet from: ${path}`);
                    await this.audioContext.audioWorklet.addModule(path);
                    console.log(`Successfully loaded worklet from: ${path}`);
                    loaded = true;
                    break;
                } catch (error) {
                    console.error(`Failed to load worklet from ${path}:`, error);
                    lastError = error;
                }
            }
            
            if (!loaded) {
                throw new Error(`Failed to load audio worklet module: ${lastError instanceof Error ? lastError.message : 'Unknown error'}`);
            }

            this.mediaStream = stream;
            this.mediaStreamSource = this.audioContext.createMediaStreamSource(this.mediaStream);

            this.workletNode = new AudioWorkletNode(this.audioContext, "audio-processor-worklet");
            this.workletNode.port.onmessage = event => {
                this.onDataAvailable(event.data.buffer);
            };

            this.mediaStreamSource.connect(this.workletNode);
            this.workletNode.connect(this.audioContext.destination);
        } catch (error) {
            this.stop();
        }
    }

    async stop() {
        if (this.mediaStream) {
            this.mediaStream.getTracks().forEach(track => track.stop());
            this.mediaStream = null;
        }

        if (this.audioContext) {
            await this.audioContext.close();
            this.audioContext = null;
        }

        this.mediaStreamSource = null;
        this.workletNode = null;
    }
}
