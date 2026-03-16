export class Player {
    private playbackNode: AudioWorkletNode | null = null;

    async init(sampleRate: number) {
        const audioContext = new AudioContext({ sampleRate });
        
        // Check if we're in a secure context
        if (!window.isSecureContext) {
            console.warn("AudioWorklet requires a secure context (HTTPS or localhost)");
        }
        
        // Try multiple path approaches
        const paths = [
            "/audio-playback-worklet.js",
            "./audio-playback-worklet.js",
            "audio-playback-worklet.js",
            `${window.location.origin}/audio-playback-worklet.js`
        ];
        
        let loaded = false;
        let lastError;
        
        for (const path of paths) {
            try {
                console.log(`Attempting to load worklet from: ${path}`);
                await audioContext.audioWorklet.addModule(path);
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

        this.playbackNode = new AudioWorkletNode(audioContext, "audio-playback-worklet");
        this.playbackNode.connect(audioContext.destination);
    }

    play(buffer: Int16Array) {
        if (this.playbackNode) {
            this.playbackNode.port.postMessage(buffer);
        }
    }

    stop() {
        if (this.playbackNode) {
            this.playbackNode.port.postMessage(null);
        }
    }
}
