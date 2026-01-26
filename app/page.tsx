'use client';

import { useRef } from 'react';
import { useScroll } from 'framer-motion';
import Navbar from '@/components/Navbar';
import HeroCanvas from '@/components/HeroCanvas';
import ScrollText from '@/components/ScrollText';
import SubscriptionPlans from '@/components/SubscriptionPlans';
import {
  TrustBar, AboutSection, ServicesGrid, HowItWorks,
  WhySubscribe, Testimonials, FAQ, Contact, SectionHeader
} from '@/components/MarketingSections';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <main className="bg-pagani-black min-h-screen text-white relative">
      <Navbar />

      {/* 1. SCROLL SEQUENCE (Extended for Narrative Text) */}
      <section ref={containerRef} className="h-[700vh] relative">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
          <HeroCanvas
            scrollYProgress={scrollYProgress}
            totalFrames={240}
            imageFolderPath="/images/zonda-sequence"
          />
          <ScrollText scrollYProgress={scrollYProgress} />
        </div>
      </section>

      {/* 2. MAIN CONTENT FLOW */}
      <div className="relative z-20 bg-pagani-black border-t border-white/10">
        <TrustBar />
        <AboutSection />
        <ServicesGrid />
        <HowItWorks />

        <WhySubscribe />

        <section className="py-24">
          <SectionHeader title="Choose Your Plan" subtitle="Simple pricing. Unlimited washes." />
          <SubscriptionPlans />
        </section>

        <Testimonials />
        <FAQ />
        <div className="py-24 bg-white/5">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h3 className="text-2xl font-orbitron text-gray-500 mb-4">NOT READY TO SUBSCRIBE?</h3>
            <p className="text-gray-300 font-rajdhani text-lg mb-8">
              We offer single washes starting at $15. Experience the quality first, upgrade later.
            </p>
            <button className="text-white underline decoration-pagani-gold underline-offset-4 hover:text-pagani-gold transition-colors font-bold tracking-wider">
              Book a Single Wash
            </button>
          </div>
        </div>

        <Contact />
        <Footer />
      </div>
    </main>
  );
}

function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-white/10 text-center">
      <h4 className="font-orbitron text-2xl tracking-[0.2em] text-white mb-6">PRISTINE</h4>
      <div className="flex justify-center gap-8 mb-8 text-sm font-rajdhani text-gray-400 tracking-wider">
        <a href="#" className="hover:text-pagani-gold transition-colors">LOCATIONS</a>
        <a href="#" className="hover:text-pagani-gold transition-colors">MEMBERSHIP</a>
        <a href="#" className="hover:text-pagani-gold transition-colors">SUPPORT</a>
      </div>
      <p className="text-xs text-gray-600 font-sans">
        © 2026 PRISTINE AUTO SPA. - ALL RIGHTS RESERVED
      </p>
    </footer>
  );
}
