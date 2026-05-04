import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { PatientTriage } from './components/PatientTriage';
import { Behandlinger } from './components/Behandlinger';
import { Tannlegeskrekk } from './components/Tannlegeskrekk';
import { Tannlegevakt } from './components/Tannlegevakt';
import { Priser } from './components/Priser';
import { Reviews } from './components/Reviews';
import { OmOss } from './components/OmOss';
import { FAQ } from './components/FAQ';
import { Timebestilling } from './components/Timebestilling';
import { Kontakt } from './components/Kontakt';
import { Footer } from './components/Footer';
import { StickyPhone } from './components/StickyPhone';

/**
 * Section order (trust-then-action, deviates from AI default):
 * Nav → Hero → StatsBar → PatientTriage (weird thing) → Behandlinger
 * → Tannlegeskrekk → Tannlegevakt → Priser → Reviews → OmOss
 * → FAQ → Timebestilling → Kontakt → Footer
 */
export default function App() {
  return (
    <div className="bg-[#FAF6F0]">
      <Nav />
      <Hero />
      <StatsBar />
      <PatientTriage />
      <Behandlinger />
      <Tannlegeskrekk />
      <Tannlegevakt />
      <Priser />
      <Reviews />
      <OmOss />
      <FAQ />
      <Timebestilling />
      <Kontakt />
      <Footer />
      <StickyPhone />
    </div>
  );
}
