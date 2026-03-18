import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import aiCircle from "../lottie/ai-circle.json";
export const AIProcessor = () => {
  const [messageIndex, setMessageIndex] = useState(0);

  const messages = [
    "Gathering thoughts...",
    "Connecting the dots...",
    "Synthesizing ideas...",
    "Almost ready...",
  ];

  useEffect(() => {
    const messageTimer = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 2000);

    return () => {
      clearInterval(messageTimer);
    };
  }, []);

  return (
    <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50 min-h-screen">
      <div className="text-center">
        {/* Lottie Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              opacity: { duration: 0.5, ease: "easeInOut" },
              y: { duration: 0.5, ease: "easeInOut" },
            }}
          >
            <Lottie
              animationData={aiCircle}
              loop={true}
              autoplay={true}
              style={{ width: 300, height: 300 }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Dynamic Messages */}
        <div className="h-16 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={messageIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                opacity: { duration: 0.5, ease: "easeInOut" },
                y: { duration: 0.5, ease: "easeInOut" },
              }}
              className="text-center"
            >
              <h3 className="text-xl font-semibold text-black mb-4">
                {messages[messageIndex]}
              </h3>
              <div className="flex justify-center space-x-1">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-gradient-to-r from-cyan-300 to-purple-300 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
