"use client";

import React from "react";
import { motion } from "framer-motion";
import { Instagram, Facebook, Youtube } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="min-h-screen py-20 md:py-40 px-6 md:px-8 flex flex-col items-center justify-center border-t border-white/5 bg-[#000000]">
      <div className="w-full space-y-16 md:space-y-32 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-5xl sm:text-7xl md:text-[12rem] font-black text-white tracking-[-0.06em] leading-[0.8] uppercase select-none">
            Let&apos;s <br/> Connect
          </h2>
          <p className="text-white/30 text-[9px] md:text-sm tracking-[0.3em] md:tracking-[0.5em] uppercase w-full mx-auto font-medium max-w-lg">
            Your trusted partner for buying, selling, renting, and investing in Belgaum properties.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 items-start text-left w-full">
          
          {/* CONTACT + SOCIAL */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-white/20 text-[9px] tracking-[0.3em] uppercase">Contact</h4>
            
            <p className="text-white/80 text-xl font-light hover:text-white transition-colors cursor-pointer border-b border-white/5 pb-2">
              kundanagariproperties@gmail.com
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 pt-4">
              <a 
                href="https://www.instagram.com/kundanagariproperties/" 
                target="_blank" 
                className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
              >
                <Instagram size={18} />
              </a>

              <a 
                href="https://www.facebook.com/people/kundanagari-properties/61559642987642/?ref=NONE_xav_ig_profile_page_web#" 
                target="_blank" 
                className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
              >
                <Facebook size={18} />
              </a>

              <a 
                href="https://www.youtube.com/@kundanagariproperties" 
                target="_blank" 
                className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
              >
                <Youtube size={18} />
              </a>
            </div>
          </motion.div>

          {/* LOCATION */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <h4 className="text-white/20 text-[9px] tracking-[0.3em] uppercase">Location</h4>
            <p className="text-white/80 text-xl font-light leading-relaxed">
              Belgaum, Karnataka
            </p>
          </motion.div>

          {/* BUTTON */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <h4 className="text-white/20 text-[9px] tracking-[0.3em] uppercase">Direct Contact</h4>
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "white", color: "black" }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-6 border border-white/10 text-white text-[10px] tracking-[0.4em] font-black uppercase transition-all duration-500"
            >
              Call Now &mdash;&gt;
            </motion.button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;