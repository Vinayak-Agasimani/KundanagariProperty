"use client";

import React from "react";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    title: "Residential Plot – Belgaum",
    category: "Residential Land",
    location: "Tilakwadi, Belgaum",
    image: "/projects/mumbai-seafront.png",
  },
  {
    title: "Commercial Space – Belgaum",
    category: "Shops & Offices",
    location: "Khade Bazaar",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Industrial Land – Belgaum",
    category: "Industrial Property",
    location: "Udyambag",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Luxury Villa – Belgaum",
    category: "Premium Homes",
    location: "Hanuman Nagar",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1000",
  },
];

const ProjectsShowcase = () => {
  return (
    <section className="py-20 md:py-40 px-6 md:px-8">
      <div className="w-full space-y-16 md:space-y-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12 border-l border-white/10 pl-6 md:pl-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-white/20 text-[9px] md:text-[10px] tracking-[0.6em] md:tracking-[0.8em] uppercase font-bold">
              Belgaum Properties
            </h3>
            <h2 className="text-4xl sm:text-6xl md:text-9xl font-black text-white tracking-tighter uppercase leading-[0.9]">
              Featured <br/> Properties
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white/30 max-w-xs text-xs uppercase tracking-[0.3em] font-light leading-relaxed pb-4"
          >
            Explore some of the most in-demand residential and commercial properties in Belgaum.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5">
          {PROJECTS.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative aspect-video md:aspect-square bg-[#050505] p-6 md:p-12 flex flex-col justify-between overflow-hidden cursor-pointer"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <motion.img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                  initial={{ scale: 1.1 }}
                  whileHover={{ scale: 1 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700" />
              </div>

              <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
                <div className="text-white/40 text-[8px] md:text-[9px] tracking-[0.3em] md:tracking-[0.4em] uppercase mb-2 md:mb-4 font-bold">
                  {project.category}
                </div>
                <div className="text-2xl md:text-5xl font-black tracking-tighter uppercase leading-tight text-white">
                  {project.title}
                </div>
              </div>

              <div className="relative z-10 flex justify-between items-end">
                <div className="text-white/60 text-[8px] md:text-[10px] tracking-[0.2em] md:tracking-[0.3em] uppercase font-medium">
                  {project.location}
                </div>
                <div className="w-10 h-10 md:w-14 md:h-14 border border-white/20 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all group-hover:scale-110 duration-500">
                  <span className="text-xl md:text-2xl">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;