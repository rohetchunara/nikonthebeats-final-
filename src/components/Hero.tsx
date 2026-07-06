import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 font-sans px-8 md:px-16">
      {/* Hairline rules */}
      <div className="absolute top-0 right-0 w-px h-48 bg-gradient-to-b from-transparent via-zinc-800 to-transparent" />
      <div className="absolute top-0 left-0 w-px h-48 bg-gradient-to-b from-transparent via-zinc-800 to-transparent" />

      {/* Centered Content Wrapper */}
      <div className="flex flex-col items-center justify-center text-center w-full max-w-5xl mx-auto min-h-[calc(100vh-6rem)]">
        
        {/* Badge */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase text-zinc-500 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 inline-block" />
            Nationwide &amp; International Sonic Architecture
          </span>
        </motion.div>

        {/* Main headline - Removed max-width constraint to let it breathe */}
        <motion.h1 
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-medium tracking-[-0.02em] leading-[0.95] text-white"
        >
          Your Vision, Our Sound.
        </motion.h1>

        {/* Sub-headline - Centered and constrained for readability */}
        <motion.p 
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="mt-12 max-w-2xl text-lg md:text-xl leading-[1.8] text-zinc-400 font-light"
        >
          We blend precision engineering with a human touch. From our studio in Nepal to wherever you are, we’re here to help you bring your next project to life.
        </motion.p>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="mt-14">
          <a href="#work" className="button-primary gap-3 group tracking-wide uppercase text-xs">
            Listen to the Reel <ArrowRight size={16} />
          </a>
        </motion.div>

        {/* Metrics row */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
          className="mt-24 py-10 border-t border-zinc-900 grid grid-cols-3 gap-12 w-full justify-items-center"
        >
          {[
            { value: '140+', label: 'Tracks Produced' },
            { value: '8+', label: 'Years Active' },
            { value: 'Remote', label: 'Global Delivery' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-medium text-white">{stat.value}</p>
              <p className="mt-2 text-[10px] tracking-[0.2em] uppercase text-zinc-600 font-semibold">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
