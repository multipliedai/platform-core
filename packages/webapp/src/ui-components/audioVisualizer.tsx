import React from "react";
import { motion } from "framer-motion";

interface AudioVisualizerProps {
  isRecording: boolean;
  audioLevel: number;
}

const AudioVisualizer: React.FC<AudioVisualizerProps> = ({
  isRecording,
  audioLevel,
}) => {
  const bars = Array.from({ length: 8 }, (_, i) => i);

  return (
    <div className="flex items-center justify-center space-x-1 h-8">
      {bars.map((bar) => (
        <motion.div
          key={bar}
          className="w-1 bg-black dark:bg-white/25 rounded-full"
          animate={{
            height: isRecording
              ? Math.min(54, Math.max(4, audioLevel * 24 + Math.random() * 12))
              : 4,
            opacity: isRecording ? 1 : 0.3,
          }}
          transition={{
            duration: 0.1,
            ease: "easeOut",
          }}
          style={{
            animationDelay: `${bar * 0.05}s`,
          }}
        />
      ))}
    </div>
  );
};

export default AudioVisualizer;
