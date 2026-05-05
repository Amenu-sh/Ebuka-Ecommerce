import CustomCursor from '../components/landing/CustomCursor';
import FloatingDock from '../components/landing/FloatingDock';
import HorizonHero from '../components/landing/HorizonHero';
import StorePulse from '../components/landing/StorePulse';
import BrandLedger from '../components/landing/BrandLedger';
import PortalFooter from '../components/landing/PortalFooter';
import { getStoreByName } from '../lib/storeLinks';

const HERO_IMAGES = Array.from({ length: 11 }, (_, index) => `/images/bannersimages/${index + 1}.jpeg`);
const landingStoreNames = [
  'Ladidier Jewelry',
  'Ladidier Cosmetics',
  'The Scnt Shop',
  'Ladidier Beauty Essence',
  'Ladidier Homme',
  'Piata Noir Roast',
];

const stores = landingStoreNames.map((storeName, index) => {
  const store = getStoreByName(storeName);

  return {
    ...store,
    featured: index < 3,
    images: [store.image],
  };
});

export default function Landing() {
  return (
    <div className="relative bg-background text-foreground overflow-x-hidden">
      <CustomCursor />
      <FloatingDock />
      <HorizonHero heroImages={HERO_IMAGES} />
      <StorePulse stores={stores} />
      <BrandLedger />
      <PortalFooter />
    </div>
  );
}