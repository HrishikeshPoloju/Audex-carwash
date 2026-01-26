'use client';

import { MotionValue, useTransform, motion } from 'framer-motion';
import { CAR_DATA } from '@/data/carData';

interface ZondaExperienceProps {
    scrollYProgress: MotionValue<number>;
}

export default function ZondaExperience({ scrollYProgress }: ZondaExperienceProps) {
    // Map scroll progress to phase opacity
    // Phase 1: Hero (0 - 0.33)
    const heroOpacity = useTransform(scrollYProgress, [0, 0.25, 0.33], [1, 1, 0]);
    const heroY = useTransform(scrollYProgress, [0, 0.25], [0, -50]);
    const heroScale = useTransform(scrollYProgress, [0, 0.33], [1, 0.9]);

    // Phase 2: Design (0.33 - 0.66)
    const designOpacity = useTransform(scrollYProgress, [0.33, 0.4, 0.6, 0.66], [0, 1, 1, 0]);
    const designX = useTransform(scrollYProgress, [0.33, 0.4], [-50, 0]);

    // Phase 3: Engine (0.66 - 1.0)
    const engineOpacity = useTransform(scrollYProgress, [0.66, 0.73, 1], [0, 1, 1]);
    const engineY = useTransform(scrollYProgress, [0.66, 0.73], [50, 0]);

    return (
        <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-center items-center w-full h-full">

            {/* PHASE 1: HERO */}
            <motion.div
                style={{ opacity: heroOpacity, y: heroY, scale: heroScale }}
                className="absolute flex flex-col items-center justify-center text-center px-4"
            >
                <h1 className="text-5xl md:text-9xl font-orbitron font-black text-white tracking-widest uppercase drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                    {CAR_DATA.hero.title}
                </h1>
                <p className="mt-4 text-xl md:text-3xl font-rajdhani text-pagani-gold tracking-widest">
                    {CAR_DATA.hero.price}
                </p>
                <div className="mt-8 px-8 py-3 bg-white/5 border border-white/20 backdrop-blur-sm">
                    <span className="font-orbitron tracking-widest text-sm text-white/80">SCROLL TO EXPLORE</span>
                </div>
            </motion.div>

            {/* PHASE 2: DESIGN */}
            <motion.div
                style={{ opacity: designOpacity, x: designX }}
                className="absolute left-6 right-6 md:right-auto md:left-32 max-w-xl text-center md:text-left"
            >
                <span className="block text-pagani-gold font-orbitron text-sm tracking-[0.3em] md:tracking-[0.5em] mb-4">
                    01 // AESTHETICS
                </span>
                <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-white mb-6 uppercase">
                    {CAR_DATA.design.title}
                </h2>
                <p className="text-xl md:text-2xl font-rajdhani text-gray-300 leading-relaxed md:border-l-2 border-pagani-gold md:pl-6">
                    {CAR_DATA.design.details}
                    <br />
                    <span className="text-lg text-gray-400 mt-2 block">
                        {CAR_DATA.design.description}
                    </span>
                </p>
            </motion.div>

            {/* PHASE 3: ENGINE */}
            <motion.div
                style={{ opacity: engineOpacity, y: engineY }}
                className="absolute left-6 right-6 md:left-auto md:right-32 text-center md:text-right max-w-xl"
            >
                <span className="block text-pagani-gold font-orbitron text-sm tracking-[0.3em] md:tracking-[0.5em] mb-4">
                    02 // POWERTRAIN
                </span>
                <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-white mb-6 uppercase">
                    {CAR_DATA.engine.title}
                </h2>

                <div className="grid grid-cols-1 gap-4 font-rajdhani text-lg md:text-base">
                    {CAR_DATA.engine.specs.map((spec, i) => (
                        <div key={i} className="flex justify-end items-center gap-4 py-2 border-b border-white/10">
                            <span className="text-gray-400 uppercase tracking-wider text-sm">{spec.label}</span>
                            <span className="text-2xl text-white font-bold">{spec.value}</span>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-4xl md:text-6xl font-orbitron font-black text-white/5 absolute left-0 right-0 md:left-auto md:-right-10 -bottom-20 z-[-1] text-center md:text-right">
                    V12
                </div>
            </motion.div>

            {/* Progress Indicators / HUD Decorations */}
            <div className="absolute bottom-10 w-full px-6 md:px-12 flex justify-between items-end opacity-50">
                <div className="h-[1px] w-16 md:w-32 bg-white/20 relative">
                    <div className="absolute top-0 right-0 w-2 h-[1px] bg-pagani-gold"></div>
                </div>
                <div className="font-rajdhani text-[10px] md:text-xs tracking-widest text-white/40 text-center mx-2">
                    AMG 6.0L V12 // 750HP // 710NM
                </div>
                <div className="h-[1px] w-16 md:w-32 bg-white/20 relative">
                    <div className="absolute top-0 left-0 w-2 h-[1px] bg-pagani-gold"></div>
                </div>
            </div>

        </div>
    );
}
