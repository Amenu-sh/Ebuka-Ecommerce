import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['Apparel', 'Jewelry', 'Beauty', 'Accessories', 'Art & Design'];

export default function HorizonHero({ heroImages = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const images = heroImages.length > 0 ? heroImages : ['/images/EbukaHero.png'];

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % categories.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const cycleCategory = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev + 1) % categories.length);
    setTimeout(() => setIsAutoPlaying(true), 6000);
  };

  return (
    <section id="hero" className="relative w-full min-h-screen overflow-hidden flex items-center justify-center">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={images[activeImageIndex]}
            src={images[activeImageIndex]}
            alt={`Banner slide ${activeImageIndex + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-background/70" />
      </div>

      <a
        href="#hero"
        className="absolute top-2 left-2 sm:top-1 sm:left-1 z-20 inline-flex items-center rounded-br-2xl border-r border-b border-foreground/15 bg-background/85 px-4 py-3 sm:px-5 sm:py-4 shadow-lg backdrop-blur-md"
      >
        <img
          src="/images/Ebukalogo.jpg"
          alt="Ebuka logo"
          className="h-14 w-auto sm:h-16 md:h-20 object-contain"
        />
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
            Ladidier eCommerce — Curated Digital Retail
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

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-5 flex items-center justify-center gap-2 flex-wrap"
          >
            {images.map((image, i) => (
              <button
                key={image}
                onClick={() => setActiveImageIndex(i)}
                aria-label={`Go to banner slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === activeImageIndex ? 'w-8 bg-primary' : 'w-3 bg-foreground/25 hover:bg-foreground/45'
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