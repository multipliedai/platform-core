import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Props {
  src: string;
  isPlaying: boolean;
  onEnded?: () => void; // callback to parent
}

const CustomVisualizerCard: React.FC<Props> = ({ src, isPlaying, onEnded }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const sourceRef = useRef<MediaElementAudioSourceNode | null>(null);
  const animationRef = useRef<number | null>(null);

  const [numBars, setNumBars] = useState(32);
  const [freqData, setFreqData] = useState<number[]>([]);

  // Calculate number of bars based on container width
  useEffect(() => {
    const updateBars = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.offsetWidth;
      const calculatedBars = Math.floor(width / 6); // 4px bar + 2px gap
      setNumBars(calculatedBars);
      setFreqData(
        Array.from({ length: calculatedBars }, () => Math.random() * 5 + 2)
      );
    };

    updateBars();
    window.addEventListener("resize", updateBars);
    return () => window.removeEventListener("resize", updateBars);
  }, []);

  // Initialize AudioContext once
  useEffect(() => {
    if (!audioRef.current || audioCtxRef.current) return;

    const audioCtx = new (window.AudioContext ||
      (window as any).webkitAudioContext)();
    const analyser = audioCtx.createAnalyser();
    analyser.fftSize = 64;
    const source = audioCtx.createMediaElementSource(audioRef.current);
    source.connect(analyser);
    analyser.connect(audioCtx.destination);

    audioCtxRef.current = audioCtx;
    analyserRef.current = analyser;
    sourceRef.current = source;
  }, []);

  // Animation loop
  useEffect(() => {
    const tick = () => {
      if (!analyserRef.current) return;
      const bufferLength = analyserRef.current.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);
      analyserRef.current.getByteFrequencyData(dataArray);

      // Map dataArray to numBars
      const step = Math.floor(dataArray.length / numBars) || 1;
      const bars = Array.from(
        { length: numBars },
        (_, i) => dataArray[i * step] || 0
      );

      setFreqData(bars);
      animationRef.current = requestAnimationFrame(tick);
    };

    if (isPlaying) {
      if (audioCtxRef.current?.state === "suspended") {
        audioCtxRef.current.resume();
      }
      audioRef.current?.play();
      tick();
    } else {
      audioRef.current?.pause();
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    }

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isPlaying, numBars]);

  return (
    <div ref={containerRef} className="w-full">
      <audio
        ref={audioRef}
        src={src}
        crossOrigin="anonymous"
        onEnded={onEnded} // notify parent when finished
      />
      <div className="flex items-end mt-4 w-full h-24">
        {freqData.map((value, index) => {
          const height = Math.max((value / 255) * 100, 3);
          return (
            <motion.div
              key={index}
              className="bg-white !rounded-full"
              style={{
                width: "4px",
                marginRight: index < freqData.length - 1 ? "2px" : 0,
              }}
              animate={{ height: `${height}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CustomVisualizerCard;
