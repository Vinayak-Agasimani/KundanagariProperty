"use client";

import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useSpring, motion, useMotionValue } from "framer-motion";

const FRAME_COUNT = 224; // Using all available frames for maximum smoothness
const BASE_PATH = "/sequence/frame_";

interface BungalowScrollProps {
  onLoadProgress: (progress: number) => void;
  onLoaded: () => void;
}

const BungalowScroll: React.FC<BungalowScrollProps> = ({ onLoadProgress, onLoaded }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isReady, setIsReady] = useState(false);

  // Scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Preloading images
  useEffect(() => {
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    const preloadImages = () => {
      for (let i = 0; i < FRAME_COUNT; i++) {
        const img = new Image();
        img.src = `${BASE_PATH}${i}.jpg`;
        img.onload = () => {
          loadedCount++;
          onLoadProgress(Math.floor((loadedCount / FRAME_COUNT) * 100));
          if (loadedCount === FRAME_COUNT) {
            setImages(loadedImages);
            setIsReady(true);
            onLoaded();
          }
        };
        loadedImages[i] = img;
      }
    };

    preloadImages();
  }, [onLoadProgress, onLoaded]);

  // Render loop
  useEffect(() => {
    if (!canvasRef.current || images.length === 0) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context) return;

    const render = (progress: number) => {
      const frameIndex = Math.min(
        FRAME_COUNT - 1,
        Math.floor(progress * FRAME_COUNT)
      );
      
      const img = images[frameIndex];
      if (!img) return;

      const canvasWidth = window.innerWidth;
      const canvasHeight = window.innerHeight;
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;

      const context = canvas.getContext("2d");
      if (!context) return;

      // Responsive Optimization
      const isMobile = canvasWidth < 768;
      const scaleFactor = isMobile ? 0.9 : 0.7; 
      const borderRadius = isMobile ? 20 : 40;

      const maxWidth = canvasWidth * scaleFactor;
      const maxHeight = canvasHeight * scaleFactor;

      const imgRatio = img.width / img.height;
      const targetRatio = maxWidth / maxHeight;

      let drawWidth, drawHeight;

      if (imgRatio > targetRatio) {
        drawWidth = maxWidth;
        drawHeight = maxWidth / imgRatio;
      } else {
        drawHeight = maxHeight;
        drawWidth = maxHeight * imgRatio;
      }

      const x = (canvasWidth - drawWidth) / 2;
      const y = (canvasHeight - drawHeight) / 2;

      context.clearRect(0, 0, canvasWidth, canvasHeight);
      
      // HD Optimization & High-Quality Smoothing
      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = "high";
      
      // Premium Rounded "Card" Effect
      context.beginPath();
      context.moveTo(x + borderRadius, y);
      context.lineTo(x + drawWidth - borderRadius, y);
      context.quadraticCurveTo(x + drawWidth, y, x + drawWidth, y + borderRadius);
      context.lineTo(x + drawWidth, y + drawHeight - borderRadius);
      context.quadraticCurveTo(x + drawWidth, y + drawHeight, x + drawWidth - borderRadius, y + drawHeight);
      context.lineTo(x + borderRadius, y + drawHeight);
      context.quadraticCurveTo(x, y + drawHeight, x, y + drawHeight - borderRadius);
      context.lineTo(x, y + borderRadius);
      context.quadraticCurveTo(x, y, x + borderRadius, y);
      context.closePath();
      context.clip();

      // Draw img within clipped rounded rect
      context.drawImage(img, x, y, drawWidth, drawHeight);

      // Add a subtle border to the card for depth
      context.strokeStyle = "rgba(255, 255, 255, 0.05)";
      context.lineWidth = 1; // Thinner border for mobile
      context.stroke();
    };

    // Update canvas on smooth progress change
    const unsubscribe = smoothProgress.on("change", (latest) => {
      render(latest);
    });

    // Initial render
    render(smoothProgress.get());

    return () => unsubscribe();
  }, [images, smoothProgress]);

  return (
    <div ref={containerRef} className="canvas-container relative">
      <div className="sticky-canvas">
        <canvas ref={canvasRef} className="w-full h-full object-contain" />
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity: useTransform(smoothProgress, [0, 0.1], [1, 0]) }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-white/40 text-xs tracking-[0.2em] uppercase">Scroll to Explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </div>
  );
};

export default BungalowScroll;
