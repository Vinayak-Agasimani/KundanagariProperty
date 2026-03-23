"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";

const BookCallSection = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="min-h-screen py-40 px-8 flex flex-col items-center justify-center border-t border-white/5 bg-[#000000]">
      <div className="w-full text-center space-y-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="flex justify-center mb-8">
             <div className="w-px h-24 bg-gradient-to-b from-white to-transparent opacity-20" />
          </div>
          <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase leading-none">
            Find Your <br/> Next Property
          </h2>
          <p className="text-white/30 text-[10px] md:text-sm tracking-[0.5em] uppercase font-medium max-w-xl mx-auto">
            Get expert guidance for buying, selling, renting, and investing in Belgaum real estate.
          </p>
        </motion.div>

        {/* Premium Calendly Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto w-full bg-[#050505] border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="p-8 border-b border-white/5 flex items-center justify-between text-left">
            <div>
              <h3 className="text-white text-xl font-black uppercase tracking-widest">
                Free Property Consultation
              </h3>
              <p className="text-white/40 text-[10px] tracking-widest uppercase mt-1">
                30 Minutes • Property Guidance • Belgaum
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-white/40 text-[9px] tracking-widest uppercase font-bold">
                Now Available
              </span>
            </div>
          </div>
          <div className="bg-white min-h-[660px]">
             <div 
                className="calendly-inline-widget"
                data-url="https://calendly.com/vintechlabs04/30min"
                style={{
                  width: '100%',
                  height: '660px',
                  overflow: 'hidden'
                }} 
              />
          </div>
        </motion.div>

        {/* Bottom Strategic Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto pt-12">
          {[
            { title: "Buy Property", desc: "Find verified residential and commercial properties in prime Belgaum locations." },
            { title: "Sell Property", desc: "Connect with the right buyers and get the best value for your property." },
            { title: "Rent Property", desc: "Quick and hassle-free rental solutions for property owners and tenants." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-[#050505] border border-white/5 text-left space-y-4"
            >
              <h4 className="text-white text-xs font-black tracking-widest uppercase">{item.title}</h4>
              <p className="text-white/30 text-xs leading-relaxed lowercase">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookCallSection;