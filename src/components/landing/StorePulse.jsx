import { motion } from 'framer-motion';
import StoreCard from './StoreCard';

export default function StorePulse({ stores }) {
  const featured = stores.filter((s) => s.featured);
  const newArrivals = stores.filter((s) => !s.featured);

  return (
    <section id="discover" className="relative py-20 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="flex items-end justify-between mb-12 md:mb-16"
        >
          <div>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-3">
              Store Pulse
            </p>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl leading-[0.9] tracking-tight">
              Discover
              <br />
              <span className="italic text-primary">Visionary</span> Merchants
            </h2>
          </div>
          <p className="hidden md:block font-mono text-[11px] tracking-[0.05em] text-muted-foreground max-w-xs text-right">
            Curated storefronts from the world's most compelling digital retailers
          </p>
        </motion.div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {/* Featured Stores — 8 cols */}
          <div className="md:col-span-8">
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {featured.map((store, i) => (
                <StoreCard
                  key={store.name}
                  store={store}
                  index={i}
                  isFeatured={i === 0}
                />
              ))}
            </div>
          </div>

          {/* New Arrivals — 4 cols */}
          <div className="md:col-span-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-6"
            >
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-primary mb-1">
                New Arrivals
              </p>
              <div className="h-px bg-border" />
            </motion.div>
            <div className="grid grid-cols-1 gap-6">
              {newArrivals.map((store, i) => (
                <StoreCard
                  key={store.name}
                  store={store}
                  index={i + featured.length}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}