'use client';

import { MotionValue, useTransform, motion } from 'framer-motion';

interface ScrollTextProps {
    scrollYProgress: MotionValue<number>;
}

export default function ScrollText({ scrollYProgress }: ScrollTextProps) {
    // PHASE 1: AWARENESS (0 - 30%)
    const p1Opacity = useTransform(scrollYProgress, [0, 0.15, 0.25], [0, 1, 0]);
    const p1Y = useTransform(scrollYProgress, [0, 0.25], [20, -20]);

    // PHASE 2: SOLUTION (35 - 65%)
    const p2Opacity = useTransform(scrollYProgress, [0.35, 0.5, 0.65], [0, 1, 0]);
    const p2Y = useTransform(scrollYProgress, [0.35, 0.65], [20, -20]);

    // PHASE 3: VALUE (70 - 100%)
    const p3Opacity = useTransform(scrollYProgress, [0.7, 0.85, 0.95], [0, 1, 0]);
    const p3Y = useTransform(scrollYProgress, [0.7, 0.95], [20, -20]);

    return (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center text-center px-4">
            {/* PHASE 1 */}
            <motion.div style={{ opacity: p1Opacity, y: p1Y }} className="absolute max-w-4xl">
                <h2 className="text-4xl md:text-7xl font-orbitron font-bold text-white mb-2 drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
                    Car Washes Shouldn't Be a Chore
                </h2>
                <p className="text-xl md:text-2xl text-blue-500 font-rajdhani font-bold tracking-wider drop-shadow-md">
                    TIME WASTED. MONEY WASTED. STOP THE CYCLE.
                </p>
            </motion.div>

            {/* PHASE 2 */}
            <motion.div style={{ opacity: p2Opacity, y: p2Y }} className="absolute max-w-4xl">
                <h2 className="text-4xl md:text-7xl font-orbitron font-bold text-pagani-gold mb-2 drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
                    Unlimited Washes. One Price.
                </h2>
                <p className="text-xl md:text-2xl text-gray-200 font-rajdhani font-bold tracking-wider drop-shadow-md">
                    ALWAYS CLEAN. ALWAYS READY.
                </p>
            </motion.div>

            {/* PHASE 3 */}
            <motion.div style={{ opacity: p3Opacity, y: p3Y }} className="absolute max-w-4xl">
                <h2 className="text-4xl md:text-7xl font-orbitron font-bold text-blue-400 mb-2 drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
                    The Smart Way to Shine
                </h2>
                <p className="text-xl md:text-2xl text-gray-200 font-rajdhani font-bold tracking-wider drop-shadow-md">
                    JOIN THE FUTURE OF CAR CARE.
                </p>
            </motion.div>
        </div>
    );
}
