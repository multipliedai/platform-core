import { AnimatePresence, motion } from "framer-motion";
import Lottie from "lottie-react";
import React from "react";
import wind from "../lottie/wind.json";

function WindLoader({ loadingText }: { loadingText: string }) {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{
            opacity: { duration: 0.5, ease: "easeInOut" },
            y: { duration: 0.5, ease: "easeInOut" },
          }}
          className="flex flex-col items-center justify-center"
        >
          <Lottie
            animationData={wind}
            loop={true}
            autoplay={true}
            style={{ transform: "scale(1.5)", width: 300, height: 300 }}
          />
        </motion.div>
      </AnimatePresence>
      <div className="h-16 flex items-center justify-center mt-8">
        <AnimatePresence mode="wait">
          <motion.div
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
              {loadingText}
            </h3>
            <div className="flex justify-center space-x-1">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-black rounded-full"
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
  );
}

export default WindLoader;
