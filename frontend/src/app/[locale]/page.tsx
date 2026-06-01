import { Nav } from '@/components/layout/Nav';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Intro } from '@/components/sections/Intro';
import { Disruption } from '@/components/sections/Disruption';
import { Unify } from '@/components/sections/Unify';
import { VendorLock } from '@/components/sections/VendorLock';
import { AIFoundation } from '@/components/sections/AIFoundation';
import { Services } from '@/components/sections/Services';
import { Process } from '@/components/sections/Process';
import { Contact } from '@/components/sections/Contact';
import { About } from '@/components/sections/About';
import { CTA } from '@/components/sections/CTA';
import { servicesSchema } from '@/lib/schema';

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema()) }}
      />
      <Nav />
      <main>
        <Hero />
        <Intro />
        <section id="approach" aria-label="Approach">
          <Disruption />
          <Unify />
          <VendorLock />
        </section>
        <section id="why" aria-label="Why LuRavAntI">
          <AIFoundation />
        </section>
        <Services />
        <Process />
        <Contact />
        <About />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
