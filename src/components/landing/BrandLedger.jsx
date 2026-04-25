import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const ledgerStores = [
  { name: 'Atelier Noir', category: 'Apparel', status: 'Live', url: '#' },
  { name: 'Volt Supply', category: 'Technology', status: 'Live', url: '#' },
  { name: 'Casa Forma', category: 'Home & Living', status: 'Live', url: '#' },
  { name: 'Skin Theory', category: 'Beauty', status: 'New', url: '#' },
  { name: 'Thread & Bone', category: 'Accessories', status: 'Live', url: '#' },
  { name: 'Pixel Foundry', category: 'Art & Design', status: 'Live', url: '#' },
  { name: 'Matte Studio', category: 'Home & Living', status: 'New', url: '#' },
  { name: 'Drift Goods', category: 'Apparel', status: 'Live', url: '#' },
  { name: 'Lume Optics', category: 'Technology', status: 'Live', url: '#' },
  { name: 'Forme Botanics', category: 'Beauty', status: 'New', url: '#' },
];

export default function BrandLedger() {
  return (
    <section id="directory" className="py-20 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="mb-12 md:mb-16"
        >
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-3">
            Brand Ledger
          </p>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl leading-[0.9] tracking-tight">
            The <span className="italic text-primary">Directory</span>
          </h2>
        </motion.div>

        {/* Table Header */}
        <div className="grid grid-cols-12 gap-4 pb-3 border-b border-foreground/10">
          <div className="col-span-1 font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground">
            №
          </div>
          <div className="col-span-4 md:col-span-5 font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground">
            Store
          </div>
          <div className="col-span-3 font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground">
            Category
          </div>
          <div className="col-span-2 font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground">
            Status
          </div>
          <div className="col-span-2 md:col-span-1" />
        </div>

        {/* Rows */}
        <div>
          {ledgerStores.map((store, i) => (
            <motion.a
              key={store.name}
              href={store.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{
                duration: 0.5,
                delay: i * 0.05,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="grid grid-cols-12 gap-4 py-4 border-b border-foreground/5 items-center group hover:bg-foreground/[0.02] transition-colors duration-300 cursor-pointer"
            >
              <div className="col-span-1 font-mono text-xs text-muted-foreground">
                {String(i + 1).padStart(2, '0')}
              </div>
              <div className="col-span-4 md:col-span-5">
                <span className="font-display text-base md:text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                  {store.name}
                </span>
              </div>
              <div className="col-span-3 font-mono text-xs tracking-[0.05em] text-muted-foreground">
                {store.category}
              </div>
              <div className="col-span-2">
                <span
                  className={`inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.1em] uppercase ${
                    store.status === 'New' ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      store.status === 'New' ? 'bg-primary' : 'bg-muted-foreground/40'
                    }`}
                  />
                  {store.status}
                </span>
              </div>
              <div className="col-span-2 md:col-span-1 flex justify-end">
                <ArrowUpRight
                  className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={1.5}
                />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}