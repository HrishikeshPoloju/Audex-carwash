'use client';

import { useRef } from 'react';
import { useScroll, motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import ZondaScrollCanvas from '@/components/ZondaScrollCanvas';
import ZondaExperience from '@/components/ZondaExperience';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <main className="bg-pagani-black min-h-screen text-white relative">
      <Navbar />

      {/* SCROLL SEQUENCE SECTION */}
      {/* 
        height: 600vh ensures a long scroll area.
        The content inside is sticky, so it stays fixed while we scroll through the 600vh.
      */}
      <section ref={containerRef} className="h-[600vh] relative">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <ZondaScrollCanvas
            scrollYProgress={scrollYProgress}
            totalFrames={240}
            imageFolderPath="/images/zonda-sequence"
          />
          <ZondaExperience scrollYProgress={scrollYProgress} />
        </div>
      </section>

      {/* REST OF SITE */}
      <div className="relative z-20 bg-pagani-black border-t border-white/10">
        <SpecsGrid />
        <Features />
        <Footer />
      </div>
    </main>
  );
}

function SpecsGrid() {
  const specs = [
    { title: "ENGINE", value: "Mercedes-Benz AMG V12" },
    { title: "DISPLACEMENT", value: "5987 cc" },
    { title: "POWER", value: "750 hp @ 7,500 rpm" },
    { title: "TORQUE", value: "710 Nm @ 5,700 rpm" },
    { title: "WEIGHT", value: "1,070 kg" },
    { title: "0-100 KM/H", value: "2.7 sec" },
  ];

  return (
    <section className="py-24 px-6 md:px-24 max-w-7xl mx-auto">
      <h3 className="text-4xl font-orbitron font-bold mb-16 text-center text-pagani-gold tracking-widest">
        TECHNICAL SPECIFICATIONS
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
        {specs.map((spec, i) => (
          <div key={i} className="flex flex-col border-l border-pagani-gold/30 pl-6">
            <span className="text-gray-400 font-orbitron tracking-widest text-sm mb-2">{spec.title}</span>
            <span className="text-3xl font-rajdhani font-medium text-white">{spec.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="py-24 bg-carbon-gray relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 md:px-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <h3 className="text-4xl font-orbitron font-bold mb-6 text-white uppercase">
              The Art of Speed
            </h3>
            <p className="text-lg font-rajdhani text-gray-300 leading-relaxed mb-8">
              The Zonda R is the ultimate expression of the Zonda line. Designed without constraints, it is a track-only hypercar that represents the pinnacle of Pagani's engineering and artistic philosophy.
            </p>
            <button className="px-8 py-3 bg-pagani-gold text-pagani-black font-orbitron font-bold tracking-widest hover:bg-white transition-colors">
              DISCOVER MORE
            </button>
          </div>
          <div className="md:w-1/2 h-80 bg-black/40 border border-white/10 flex items-center justify-center">
            <span className="text-white/20 font-orbitron tracking-widest">[ IMAGE PLACEHOLDER ]</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-white/10 text-center">
      <h4 className="font-orbitron text-2xl tracking-[0.2em] text-white mb-6">PAGANI</h4>
      <div className="flex justify-center gap-8 mb-8 text-sm font-rajdhani text-gray-400 tracking-wider">
        <a href="#" className="hover:text-pagani-gold transition-colors">MODELS</a>
        <a href="#" className="hover:text-pagani-gold transition-colors">BESPOKE</a>
        <a href="#" className="hover:text-pagani-gold transition-colors">HISTORY</a>
        <a href="#" className="hover:text-pagani-gold transition-colors">CONTACT</a>
      </div>
      <p className="text-xs text-gray-600 font-sans">
        © 2026 PAGANI AUTOMOBILI S.P.A. - ALL RIGHTS RESERVED
      </p>
    </footer>
  );
}
