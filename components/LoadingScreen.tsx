"use client";

import React from "react";
import { motion } from "framer-motion";

interface LoadingScreenProps {
  progress: number;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ progress }) => {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center gap-8"
    >
      <div className="flex flex-col items-center gap-2">
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-white/90 text-sm tracking-[0.3em] uppercase"
        >
          Preparing Experience
        </motion.h2>
        <div className="text-white/40 text-[10px] tracking-[0.1em]">{progress}%</div>
      </div>

      <div className="w-48 h-[1px] bg-white/10 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-white/60 origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: progress / 100 }}
          transition={{ duration: 0.2 }}
        />
      </div>

      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="w-10 h-10 border-[1px] border-white/5 border-t-white/40 rounded-full"
      />
    </motion.div>
  );
};

export default LoadingScreen;
