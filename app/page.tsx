'use client';

import { useRef } from 'react';
import { useScroll } from 'framer-motion';
import Navbar from '@/components/Navbar';
import HeroCanvas from '@/components/HeroCanvas';
import ScrollText from '@/components/ScrollText';
import SubscriptionPlans from '@/components/SubscriptionPlans';
import LiquidEther from '@/components/LiquidEther';
import ScrollVelocity from '@/components/ScrollVelocity';
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

        {/* Liquid Ether Background Section */}
        <section className="relative h-[80vh] w-full border-b border-white/10 overflow-hidden font-rajdhani">
          <LiquidEther />

          <div className="absolute inset-0 flex flex-col items-center justify-between py-24 z-10 pointer-events-none">

            {/* Spacer to push buttons up */}
            <div className="flex-1" />

            {/* Buttons moved up */}
            <div className="flex flex-col md:flex-row gap-8 mb-16 pointer-events-auto">
              <button className="group relative px-8 py-4 bg-pagani-gold overflow-hidden transition-transform duration-300 hover:scale-105 skew-x-[-12deg]">
                <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
                <span className="relative block skew-x-[12deg] font-orbitron font-bold tracking-[0.2em] text-black uppercase">
                  Book Now
                </span>
              </button>

              <button className="group relative px-8 py-4 bg-transparent border border-white/50 hover:border-white overflow-hidden transition-transform duration-300 hover:scale-105 skew-x-[-12deg]">
                <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
                <span className="relative block skew-x-[12deg] font-orbitron font-bold tracking-[0.2em] text-white group-hover:text-black transition-colors duration-300 uppercase">
                  Contact Us
                </span>
              </button>
            </div>

            {/* Scroll Velocity Text */}
            <div className="w-full pointer-events-auto mix-blend-overlay opacity-50">
              <ScrollVelocity
                texts={[
                  'Zero water. Full shine.',
                  'Advanced polymer cleaning.',
                  'Safe for modern paint systems.'
                ]}
                velocity={50}
                className="text-white font-orbitron top-2"
              />
            </div>

            <div className="flex-1" />
          </div>
        </section>

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
