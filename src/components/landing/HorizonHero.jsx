import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['Apparel', 'Jewelry', 'Beauty', 'Accessories', 'Art & Design'];

export default function HorizonHero({ heroImage }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % categories.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const cycleCategory = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev + 1) % categories.length);
    setTimeout(() => setIsAutoPlaying(true), 6000);
  };

  return (
    <section id="hero" className="relative w-full min-h-screen overflow-hidden flex items-center justify-center">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Premium texture background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      <a
        href="#hero"
        className="absolute top-2 left-2 sm:top-1 sm:left-1 z-20 inline-flex items-center gap-3 rounded-br-2xl border-r border-b border-foreground/15 bg-background/70 px-4 py-3 sm:px-5 sm:py-4 backdrop-blur-md"
      >
        <span className="inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold text-sm sm:text-base">
          E
        </span>
        <span className="font-mono text-xs sm:text-sm tracking-[0.18em] sm:tracking-[0.2em] uppercase text-foreground/90">
          Ebuka
        </span>
      </a>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pt-16 sm:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          className="text-center"
        >
          {/* Top tag */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-mono text-[10px] sm:text-xs tracking-[0.18em] sm:tracking-[0.2em] uppercase text-muted-foreground mb-6 sm:mb-8 md:mb-12"
          >
            Commerce Conduit — Curated Digital Retail
          </motion.p>

          {/* Main headline */}
          <div className="space-y-2 sm:space-y-3 md:space-y-4">
            <h1 className="font-display text-[12vw] sm:text-[9vw] md:text-[7vw] lg:text-[5.5vw] leading-[0.9] tracking-tight text-foreground">
              Are you looking for
            </h1>
            <div className="h-[14vw] sm:h-[11vw] md:h-[8vw] lg:h-[6vw] overflow-hidden flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.button
                  key={activeIndex}
                  onClick={cycleCategory}
                  initial={{ y: 60, opacity: 0, rotateX: -15 }}
                  animate={{ y: 0, opacity: 1, rotateX: 0 }}
                  exit={{ y: -60, opacity: 0, rotateX: 15 }}
                  transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                  className="font-display italic text-[12vw] sm:text-[9vw] md:text-[7vw] lg:text-[5.5vw] leading-[0.9] tracking-tight text-primary cursor-pointer hover:opacity-80 transition-opacity"
                >
                  {categories[activeIndex]}
                </motion.button>
              </AnimatePresence>
            </div>
          </div>

          {/* Category dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex items-center justify-center gap-2 mt-8 sm:mt-10 md:mt-14"
          >
            {categories.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setActiveIndex(i);
                  setIsAutoPlaying(false);
                  setTimeout(() => setIsAutoPlaying(true), 6000);
                }}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                  i === activeIndex ? 'bg-primary w-6' : 'bg-foreground/20'
                }`}
              />
            ))}
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="mt-12 sm:mt-16 md:mt-24"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              className="flex flex-col items-center gap-2"
            >
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                Scroll to discover
              </span>
              <div className="w-px h-8 bg-foreground/20" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}