"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import BungalowScroll from "@/components/BungalowScroll";
import LoadingScreen from "@/components/LoadingScreen";
import ProfileSection from "@/components/ProfileSection";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import ContactSection from "@/components/ContactSection";
import BookCallSection from "@/components/BookCallSection";

const BEATS = [
  {
    title: "Belgaum Real Estate",
    subtitle: "Helping you buy, sell, rent, and invest in the right property with trusted local guidance.",
    range: [0, 0.2],
  },
  {
    title: "Smart Property Selection",
    subtitle: "We identify the best residential and commercial properties with clear documents and strong value.",
    range: [0.25, 0.45],
  },
  {
    title: "End-to-End Support",
    subtitle: "From site visits to final paperwork, we ensure smooth and hassle-free property transactions.",
    range: [0.5, 0.70],
  },
  {
    title: "Invest With Confidence",
    subtitle: "Discover high-potential opportunities in Belgaum’s growing real estate market.",
    range: [0.75, 0.95],
    hasCTA: true,
  },
];

export default function Home() {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const smoothYProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // img1/img2 background transition logic
  const imgOpacity = useTransform(scrollYProgress, [0.85, 0.95, 1], [0, 1, 1]);
  const img1Visible = useTransform(scrollYProgress, [0.85, 0.92], [1, 0]);
  const img2Visible = useTransform(scrollYProgress, [0.92, 1], [0, 1]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="bg-[#000000] min-h-screen selection:bg-white/20 relative">
      {/* Grain Overlay */}
      <div className="grain-overlay pointer-events-none fixed inset-0 z-[100] opacity-[0.03]" />

      <AnimatePresence>
        {!isLoaded && <LoadingScreen progress={loadingProgress} />}
      </AnimatePresence>

      <div className={isLoaded ? "opacity-100" : "opacity-0 transition-opacity duration-1000"}>
        {/* Navigation */}
        <nav className="fixed top-0 left-0 w-full z-[100] px-6 py-6 md:p-8 flex justify-between items-center bg-gradient-to-b from-[#000000] to-transparent">
          <div 
            className="text-white/90 text-[10px] md:text-xs tracking-[0.8em] font-black uppercase cursor-pointer z-[101]" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            kundanagariproperties
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-12 items-center">
            <span onClick={() => scrollToSection('land')} className="text-white/40 text-[9px] tracking-[0.4em] uppercase cursor-pointer hover:text-white transition-all">Land</span>
            <span onClick={() => scrollToSection('builders')} className="text-white/40 text-[9px] tracking-[0.4em] uppercase cursor-pointer hover:text-white transition-all">Builders</span>
            <span onClick={() => scrollToSection('strategy')} className="text-white/40 text-[9px] tracking-[0.4em] uppercase cursor-pointer hover:text-white transition-all">Strategy</span>
            <button 
              onClick={() => scrollToSection('strategy')}
              className="px-6 py-2 border border-white/20 text-white text-[9px] tracking-[0.3em] uppercase font-bold hover:bg-white hover:text-black transition-all"
            >
              Book Call
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white z-[101]" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Menu Overlay */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed inset-y-0 right-0 w-[80%] bg-[#050505] border-l border-white/10 z-[100] p-12 flex flex-col justify-center gap-12"
              >
                <div className="flex flex-col gap-8 text-left">
                  <span 
                    onClick={() => { scrollToSection('land'); setIsMenuOpen(false); }} 
                    className="text-white text-3xl font-black tracking-tighter uppercase"
                  >
                    Land
                  </span>
                  <span 
                    onClick={() => { scrollToSection('builders'); setIsMenuOpen(false); }} 
                    className="text-white text-3xl font-black tracking-tighter uppercase"
                  >
                    Builders
                  </span>
                  <span 
                    onClick={() => { scrollToSection('strategy'); setIsMenuOpen(false); }} 
                    className="text-white text-3xl font-black tracking-tighter uppercase"
                  >
                    Strategy
                  </span>
                </div>
                
                <button 
                  onClick={() => { scrollToSection('strategy'); setIsMenuOpen(false); }}
                  className="w-full py-5 border border-white/20 text-white text-[10px] tracking-[0.5em] uppercase font-black hover:bg-white hover:text-black transition-all mt-8"
                >
                  Book A Call
                </button>

                <div className="mt-auto pt-12 border-t border-white/5">
                  <p className="text-white/20 text-[9px] tracking-[0.4em] uppercase">Belgaum Real Estate</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        {/* 1. SCROLLYTELLING SECTION - 400vh Track */}
        <div className="relative h-[450vh]">
          <BungalowScroll
            onLoadProgress={setLoadingProgress}
            onLoaded={() => setIsLoaded(true)}
          />

          {/* Text Overlays */}
          {BEATS.map((beat, i) => (
            <BeatSection
              key={i}
              beat={beat}
              progress={scrollYProgress} // Use raw progress for better sync
            />
          ))}

          {/* Background Images Transition */}
          <motion.div
            style={{ opacity: imgOpacity }}
            className="fixed inset-0 z-10 pointer-events-none"
          >
            <motion.div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('/sequence/img1.jpeg')`, opacity: img1Visible }}
            />
            <motion.div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('/sequence/img2.jpg')`, opacity: img2Visible }}
            />
            <div className="absolute inset-0 bg-black/70" />
          </motion.div>
        </div>

        {/* 2. LOWER CONTENT - Appears only after 450vh */}
        <div className="relative bg-[#000000] z-[60] shadow-[0_-50px_100px_rgba(0,0,0,1)]">
          <div id="land">
            <ProfileSection />
          </div>
          <div id="builders">
            <ProjectsShowcase />
          </div>
          <div id="strategy">
            <BookCallSection />
          </div>
          <ContactSection />
        </div>

        {/* Footer */}
        <footer className="h-[40vh] bg-[#000000] flex flex-col items-center justify-center border-t border-white/5 gap-6 p-8 text-center">
          <div className="text-white/5 text-[60px] md:text-[120px] font-black tracking-tighter select-none">BHARAT</div>
          <p className="text-white/20 text-[8px] md:text-[9px] tracking-[0.4em] md:tracking-[0.6em] uppercase">© 2024 Avant-Garde Real Estate Consultancy India</p>
        </footer>
      </div>
    </main>
  );
}

function BeatSection({ beat, progress }: { beat: any, progress: any }) {
  const opacity = useTransform(
    progress,
    [beat.range[0], beat.range[0] + 0.05, beat.range[1] - 0.05, beat.range[1]],
    [0, 1, 1, 0]
  );

  const y = useTransform(
    progress,
    [beat.range[0], beat.range[0] + 0.05, beat.range[1] - 0.05, beat.range[1]],
    [40, 0, 0, -40]
  );

  const scale = useTransform(
    progress,
    [beat.range[0], beat.range[0] + 0.1, beat.range[1] - 0.1, beat.range[1]],
    [0.95, 1, 1, 1.05]
  );

  return (
    <motion.div
      style={{ opacity, y, scale }}
      className="fixed inset-0 flex flex-col items-center justify-center p-8 text-center pointer-events-none z-20"
    >
      <div className="max-w-5xl space-y-4 md:space-y-8">
        <h2 className="text-4xl sm:text-5xl md:text-8xl lg:text-[10rem] font-black text-white tracking-[-0.05em] leading-[0.85] uppercase">
          {beat.title}
        </h2>
        <p className="text-[10px] md:text-base text-white/40 font-light tracking-[0.3em] md:tracking-[0.4em] uppercase max-w-2xl mx-auto leading-relaxed">
          {beat.subtitle}
        </p>
        {beat.hasCTA && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="pt-8 md:pt-16 pointer-events-auto"
          >
            <button 
              onClick={() => {
                const el = document.getElementById('strategy');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 md:px-12 md:py-5 border border-white/20 text-white text-[9px] md:text-[10px] tracking-[0.5em] uppercase font-bold hover:bg-white hover:text-black transition-all hover:scale-110 active:scale-95 duration-500"
            >
              Explore Collection &mdash;&gt;
            </button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
