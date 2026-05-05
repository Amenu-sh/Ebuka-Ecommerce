import { useState } from 'react';
import { motion } from 'framer-motion';

export default function StoreCard({ store, index, isFeatured = false }) {
  const [isHovered, setIsHovered] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  const images = store.images || [store.image];

  return (
    <motion.a
      href={store.url}
      target="_blank"
      rel="noopener noreferrer"
      data-store-card
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.23, 1, 0.32, 1],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setActiveImage(0);
      }}
      className={`group relative block overflow-hidden cursor-none ${
        isFeatured ? 'col-span-2 row-span-2' : ''
      }`}
      style={{ border: '0.5px solid transparent' }}
    >
      {/* Frame border that expands on hover */}
      <motion.div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          border: isHovered ? '1.5px solid hsl(var(--foreground))' : '0.5px solid hsl(var(--border))',
          transition: 'border 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
        }}
      />

      {/* Image container */}
      <div className="relative overflow-hidden">
        <motion.img
          src={images[activeImage]}
          alt={store.name}
          className="block w-full h-auto"
          animate={{
            scale: isHovered ? 1.02 : 1,
          }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        />

        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 bg-foreground/0 flex items-end"
          animate={{ backgroundColor: isHovered ? 'hsla(168, 7%, 6%, 0.3)' : 'hsla(168, 7%, 6%, 0)' }}
          transition={{ duration: 0.4 }}
        >
          {/* Image pagination dots on hover */}
          {isHovered && images.length > 1 && (
            <div className="absolute top-4 left-0 right-0 flex justify-center gap-1.5 z-20">
              {images.map((_, i) => (
                <button
                  key={i}
                  onMouseEnter={() => setActiveImage(i)}
                  className={`w-1 h-1 rounded-full transition-all duration-300 ${
                    i === activeImage ? 'bg-white w-4' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          )}
        </motion.div>
      </div>

      {/* Info bar */}
      <div className="py-4 px-1">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h3 className="font-display text-base md:text-lg leading-tight text-foreground truncate">
              {store.name}
            </h3>
            <p className="font-mono text-[11px] tracking-[0.05em] uppercase text-muted-foreground mt-1">
              {store.category}
            </p>
          </div>
          <motion.div
            animate={{ x: isHovered ? 0 : -4, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="font-mono text-[10px] tracking-[0.1em] uppercase text-primary mt-1 whitespace-nowrap"
          >
            Visit →
          </motion.div>
        </div>
      </div>
    </motion.a>
  );
}