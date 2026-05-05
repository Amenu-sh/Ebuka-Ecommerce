import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { PRIMARY_STORE_URL, getStoreByName } from '../../lib/storeLinks';

const lifestyleClusters = [
  {
    title: 'Home & Lifestyle',
    links: [
      getStoreByName('Ladidier Maison'),
      getStoreByName('Posh Paw Pet Supplies'),
      getStoreByName('Merry Wigs'),
    ],
  },
  {
    title: 'Beauty & Wellness',
    links: [
      getStoreByName('Ladidier Cosmetics'),
      getStoreByName('Ladidier Beauty Essence'),
      getStoreByName('The Scnt Shop'),
    ],
  },
  {
    title: 'Style & Apparel',
    links: [
      getStoreByName('Ladidier Jewelry'),
      getStoreByName('Adeva Store'),
      getStoreByName('Ladidier Homme'),
    ],
  },
  {
    title: 'Travel & Leisure',
    links: [
      getStoreByName('Just Rippin'),
      getStoreByName('Piata Noir Roast'),
      getStoreByName('Ladidier Maison'),
    ],
  },
];

export default function PortalFooter() {
  return (
    <footer className="relative bg-foreground text-background">
      {/* CTA Section */}
      <div className="px-6 py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="text-center mb-20 md:mb-28"
          >
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-background/50 mb-6">
              Either you’re a merchant looking to join, or a shopper looking for something new.
            </p>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[0.9] tracking-tight mb-8">
              You both deserve <br />
              <br />
              <span className="italic text-primary">a bigger stage</span>
            </h2>
            <p className="font-body text-base md:text-lg text-background/60 max-w-lg mx-auto mb-10 leading-relaxed">
              Join the curated network of visionary merchants. Submit your design/jewelry for review and reach a new audience of discerning shoppers.
            </p>
            <motion.a
              href={PRIMARY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-mono text-sm tracking-[0.1em] uppercase hover:bg-primary/90 transition-colors duration-300"
            >
              Submit Your Design
              <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
            </motion.a>
          </motion.div>

          {/* Lifestyle Clusters */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="border-t border-background/10 pt-12">
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-background/40 mb-8">
                Browse by Lifestyle
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                {lifestyleClusters.map((cluster) => (
                  <div key={cluster.title}>
                    <h4 className="font-display text-sm md:text-base text-background/90 mb-4">
                      {cluster.title}
                    </h4>
                    <ul className="space-y-2">
                      {cluster.links.map((link) => (
                        <li key={link.name}>
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-xs tracking-[0.03em] text-background/40 hover:text-primary transition-colors duration-300"
                          >
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Bottom bar */}
          <div className="border-t border-background/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-background/30">
              © 2026 Ladidier ECommerce. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {['Privacy', 'Terms', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={PRIMARY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[10px] tracking-[0.15em] uppercase text-background/30 hover:text-primary transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
            <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-background/30">
              <a
                 
                  href="https://amenushi.com" target="_blank" rel="noopener noreferrer"
                  className="font-mono text-[10px] tracking-[0.15em] uppercase text-background/30 hover:text-primary transition-colors duration-300"
                >
                  Designed & Built by Amenu Shilbe
                </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}