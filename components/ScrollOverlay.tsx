'use client';

import { MotionValue, useTransform, motion } from 'framer-motion';
import { WASH_DATA } from '@/data/washData';
import SubscriptionPlans from './SubscriptionPlans';

interface ScrollOverlayProps {
    scrollYProgress: MotionValue<number>;
}

export default function ScrollOverlay({ scrollYProgress }: ScrollOverlayProps) {
    // PHASE 1: AWARENESS (0 - 25%)
    const p1Opacity = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
    const p1Scale = useTransform(scrollYProgress, [0, 0.25], [1, 0.9]);

    // PHASE 2: SOLUTION (25 - 50%)
    const p2Opacity = useTransform(scrollYProgress, [0.25, 0.35, 0.45, 0.5], [0, 1, 1, 0]);
    const p2Y = useTransform(scrollYProgress, [0.25, 0.35], [50, 0]);

    // PHASE 3: VALUE (50 - 75%)
    const p3Opacity = useTransform(scrollYProgress, [0.5, 0.55, 0.7, 0.75], [0, 1, 1, 0]);
    const p3X = useTransform(scrollYProgress, [0.5, 0.55], [-50, 0]);

    // PHASE 4: CONVERSION (75 - 100%)
    const p4Opacity = useTransform(scrollYProgress, [0.75, 0.8, 1], [0, 1, 1]);
    const p4Scale = useTransform(scrollYProgress, [0.75, 1], [0.95, 1]);

    return (
        <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-center items-center w-full h-full overflow-hidden">

            {/* PHASE 1: PROBLEM AWARENESS */}
            <motion.div
                style={{ opacity: p1Opacity, scale: p1Scale }}
                className="absolute flex flex-col items-center text-center px-6"
            >
                <span className="text-gray-400 font-rajdhani tracking-widest text-lg mb-4">THE REALITY</span>
                <h1 className="text-5xl md:text-7xl font-orbitron font-bold text-gray-200 mb-6 drop-shadow-md">
                    {WASH_DATA.phases.problem.headline}
                </h1>
                <p className="text-xl md:text-2xl text-red-400 font-rajdhani">
                    {WASH_DATA.phases.problem.subtext}
                </p>
            </motion.div>

            {/* PHASE 2: SOLUTION REVEAL */}
            <motion.div
                style={{ opacity: p2Opacity, y: p2Y }}
                className="absolute flex flex-col items-center text-center px-6"
            >
                <div className="inline-block px-4 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm font-bold mb-6 tracking-wider border border-blue-500/30">
                    SPARKLING CLEAN
                </div>
                <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-white mb-6">
                    {WASH_DATA.phases.solution.headline}
                </h2>
                <p className="text-xl md:text-2xl text-pagani-gold font-rajdhani">
                    {WASH_DATA.phases.solution.subtext}
                </p>
            </motion.div>

            {/* PHASE 3: VALUE REINFORCEMENT */}
            <motion.div
                style={{ opacity: p3Opacity, x: p3X }}
                className="absolute w-full px-6 flex flex-col md:flex-row gap-6 justify-center items-center"
            >
                {WASH_DATA.phases.value.cards.map((card, i) => (
                    <div key={i} className="bg-pagani-black/80 backdrop-blur-md border border-white/10 p-6 rounded-xl max-w-sm text-center">
                        <h3 className="text-pagani-gold font-orbitron font-bold text-xl mb-2">{card.title}</h3>
                        <p className="text-gray-400 font-rajdhani">{card.desc}</p>
                    </div>
                ))}
            </motion.div>

            {/* PHASE 4: CONVERSION */}
            <motion.div
                style={{ opacity: p4Opacity, scale: p4Scale }}
                className="absolute w-full flex flex-col items-center justify-center px-4 pointer-events-auto"
            >
                <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white mb-12 text-center">
                    Choose Your Plan
                </h2>
                <SubscriptionPlans />
            </motion.div>

        </div>
    );
}
