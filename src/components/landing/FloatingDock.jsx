import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, LayoutGrid, List, ArrowUp } from 'lucide-react';

const dockItems = [
  { id: 'hero', icon: ArrowUp, label: 'Top' },
  { id: 'discover', icon: LayoutGrid, label: 'Discover' },
  { id: 'directory', icon: List, label: 'Directory' },
  { id: 'search', icon: Search, label: 'Search' },
];

export default function FloatingDock() {
  const [hovered, setHovered] = useState(null);

  const scrollTo = (id) => {
    if (id === 'search') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="flex items-center gap-1 px-1.5 sm:px-2 py-1.5 sm:py-2 rounded-full bg-foreground/5 backdrop-blur-xl border border-foreground/10 shadow-2xl">
        {dockItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
              className="relative flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-full transition-all duration-300 hover:bg-foreground/10"
            >
              <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-foreground" strokeWidth={1.5} />
              {hovered === item.id && (
                <motion.span
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -top-8 text-[10px] sm:text-xs font-mono tracking-wider uppercase text-foreground bg-background/90 backdrop-blur-sm px-2 py-1 rounded whitespace-nowrap"
                >
                  {item.label}
                </motion.span>
              )}
            </button>
          );
        })}
      </div>
    </motion.nav>
  );
}