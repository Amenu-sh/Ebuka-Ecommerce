import CustomCursor from '../components/landing/CustomCursor';
import FloatingDock from '../components/landing/FloatingDock';
import HorizonHero from '../components/landing/HorizonHero';
import StorePulse from '../components/landing/StorePulse';
import BrandLedger from '../components/landing/BrandLedger';
import PortalFooter from '../components/landing/PortalFooter';

// const HERO_IMAGE = 'https://picsum.photos/seed/ebuka-hero/1600/900';
const HERO_IMAGE = 'https://media.base44.com/images/public/69e6c3c98617c81789aac943/e18f1f8a1_generated_a94e2a15.png';
const stores = [
  {
    name: 'Atelier Noir',
    category: 'Apparel',
    featured: true,
    image: 'https://media.base44.com/images/public/69e6c3c98617c81789aac943/b4f1e2abc_generated_cd4f1dec.png',
    // image: 'https://picsum.photos/seed/atelier-noir/1200/900',
    images: ['https://media.base44.com/images/public/69e6c3c98617c81789aac943/b4f1e2abc_generated_cd4f1dec.png', 'https://media.base44.com/images/public/69e6c3c98617c81789aac943/b4f1e2abc_generated_cd4f1dec.png', 'https://media.base44.com/images/public/69e6c3c98617c81789aac943/b4f1e2abc_generated_cd4f1dec.png'],
    url: '#',
  },
  {
    name: 'Volt Supply',
    category: 'Technology',
    featured: true,
    image: 'https://media.base44.com/images/public/69e6c3c98617c81789aac943/ae1f81de4_generated_8b23d845.png',
    // image: 'https://picsum.photos/seed/volt-supply/1200/900',
    images: ['https://media.base44.com/images/public/69e6c3c98617c81789aac943/ae1f81de4_generated_8b23d845.png', 'https://media.base44.com/images/public/69e6c3c98617c81789aac943/ae1f81de4_generated_8b23d845.png'],
    url: '#',
  },
  {
    name: 'Casa Forma',
    category: 'Home & Living',
    featured: true,
    image: 'https://media.base44.com/images/public/69e6c3c98617c81789aac943/b9003c31f_generated_b6922808.png',
    images: ['https://media.base44.com/images/public/69e6c3c98617c81789aac943/b9003c31f_generated_b6922808.png', 'https://media.base44.com/images/public/69e6c3c98617c81789aac943/b9003c31f_generated_b6922808.png'],
    url: '#',
  },
  {
    name: 'Skin Theory',
    category: 'Beauty',
    featured: false,
    image: 'https://media.base44.com/images/public/69e6c3c98617c81789aac943/5f43bbafe_generated_a6230997.png',
    images: ['https://media.base44.com/images/public/69e6c3c98617c81789aac943/5f43bbafe_generated_a6230997.png', 'https://media.base44.com/images/public/69e6c3c98617c81789aac943/b9003c31f_generated_b6922808.png'],
    url: '#',
  },
  {
    name: 'Thread & Bone',
    category: 'Accessories',
    featured: false,
    image: 'https://media.base44.com/images/public/69e6c3c98617c81789aac943/172bfb664_generated_068f7d1d.png',
    images: ['https://media.base44.com/images/public/69e6c3c98617c81789aac943/172bfb664_generated_068f7d1d.png', 'https://media.base44.com/images/public/69e6c3c98617c81789aac943/b4f1e2abc_generated_cd4f1dec.png'],
    url: '#',
  },
  {
    name: 'Pixel Foundry',
    category: 'Art & Design',
    featured: false,
    image: 'https://media.base44.com/images/public/69e6c3c98617c81789aac943/d86a443a8_generated_ab8e7945.png',
    images: ['https://media.base44.com/images/public/69e6c3c98617c81789aac943/d86a443a8_generated_ab8e7945.png', 'https://media.base44.com/images/public/69e6c3c98617c81789aac943/ae1f81de4_generated_8b23d845.png'],
    url: '#',
  },
];

export default function Landing() {
  return (
    <div className="relative bg-background text-foreground overflow-x-hidden">
      <CustomCursor />
      <FloatingDock />
      <HorizonHero heroImage={HERO_IMAGE} />
      <StorePulse stores={stores} />
      <BrandLedger />
      <PortalFooter />
    </div>
  );
}