import CustomCursor from '../components/landing/CustomCursor';
import FloatingDock from '../components/landing/FloatingDock';
import HorizonHero from '../components/landing/HorizonHero';
import StorePulse from '../components/landing/StorePulse';
import BrandLedger from '../components/landing/BrandLedger';
import PortalFooter from '../components/landing/PortalFooter';

const HERO_IMAGE = 'https://picsum.photos/seed/ebuka-hero/1600/900';

const stores = [
  {
    name: 'Atelier Noir',
    category: 'Apparel',
    featured: true,
    image: 'https://picsum.photos/seed/atelier-noir/1200/900',
    images: ['https://picsum.photos/seed/atelier-noir/1200/900', 'https://picsum.photos/seed/pixel-foundry/1200/900', 'https://picsum.photos/seed/skin-theory/1200/900'],
    url: '#',
  },
  {
    name: 'Volt Supply',
    category: 'Technology',
    featured: true,
    image: 'https://picsum.photos/seed/volt-supply/1200/900',
    images: ['https://picsum.photos/seed/volt-supply/1200/900', 'https://picsum.photos/seed/thread-bone/1200/900'],
    url: '#',
  },
  {
    name: 'Casa Forma',
    category: 'Home & Living',
    featured: true,
    image: 'https://picsum.photos/seed/casa-forma/1200/900',
    images: ['https://picsum.photos/seed/casa-forma/1200/900', 'https://picsum.photos/seed/skin-theory/1200/900'],
    url: '#',
  },
  {
    name: 'Skin Theory',
    category: 'Beauty',
    featured: false,
    image: 'https://picsum.photos/seed/skin-theory/1200/900',
    images: ['https://picsum.photos/seed/skin-theory/1200/900', 'https://picsum.photos/seed/casa-forma/1200/900'],
    url: '#',
  },
  {
    name: 'Thread & Bone',
    category: 'Accessories',
    featured: false,
    image: 'https://picsum.photos/seed/thread-bone/1200/900',
    images: ['https://picsum.photos/seed/thread-bone/1200/900', 'https://picsum.photos/seed/atelier-noir/1200/900'],
    url: '#',
  },
  {
    name: 'Pixel Foundry',
    category: 'Art & Design',
    featured: false,
    image: 'https://picsum.photos/seed/pixel-foundry/1200/900',
    images: ['https://picsum.photos/seed/pixel-foundry/1200/900', 'https://picsum.photos/seed/volt-supply/1200/900'],
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