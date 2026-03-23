"use client";

import React from "react";
import { motion } from "framer-motion";

const ProfileSection = () => {
  return (
    <section className="min-h-screen py-20 md:py-40 px-6 md:px-8 flex flex-col items-center justify-center border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center w-full">
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="relative aspect-[16/10] md:aspect-square bg-[#0a0a0a] border border-white/5 overflow-hidden group"
        >
          <motion.img 
            src="/projects/profile-bg.jpg"
            alt="Belgaum Real Estate"
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-20 transition-all duration-1000 group-hover:grayscale-0 group-hover:opacity-40 scale-110 group-hover:scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/80 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-1000" />
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="text-white/10 text-[7vw] md:text-[9vw] font-black tracking-tight uppercase select-none group-hover:text-white/5 transition-all duration-1000 whitespace-nowrap px-4">
               BELGAUM
             </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="space-y-12"
        >
          <div className="space-y-4 md:space-y-6">
            <h3 className="text-white/30 text-[9px] md:text-[10px] tracking-[0.4em] md:tracking-[0.6em] uppercase font-medium">
              Belgaum Real Estate
            </h3>
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-black text-white tracking-tighter leading-none uppercase">
              Kundanagari <br/> Properties
            </h2>
          </div>
          <p className="text-sm md:text-base text-white/50 leading-[2] max-w-xl font-light tracking-wide">
            Kundanagari Properties is a trusted real estate service in Belgaum, helping clients buy, sell, rent, and invest in residential and commercial properties. With strong local expertise and verified listings, we ensure every deal is smooth, transparent, and value-driven.
          </p>
          <div className="pt-8 md:pt-12 grid grid-cols-2 gap-8 md:gap-12 border-t border-white/5">
            <div className="space-y-1 md:space-y-2">
              <div className="text-white text-2xl md:text-3xl font-black tracking-tighter">500+</div>
              <div className="text-white/20 text-[8px] md:text-[9px] tracking-[0.2em] md:tracking-[0.3em] uppercase">Properties Listed</div>
            </div>
            <div className="space-y-1 md:space-y-2">
              <div className="text-white text-2xl md:text-3xl font-black tracking-tighter">100+</div>
              <div className="text-white/20 text-[8px] md:text-[9px] tracking-[0.2em] md:tracking-[0.3em] uppercase">Happy Clients</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfileSection;