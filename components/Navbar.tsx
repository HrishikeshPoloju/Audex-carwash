'use client';

import { useState, useEffect } from 'react';
import { clsx } from 'clsx';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

export default function Navbar() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    return (
        <motion.nav
            className={clsx(
                "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-6 py-4 transition-colors duration-300",
                isScrolled ? "bg-pagani-black/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
            )}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex items-center gap-2">
                <span className="font-orbitron font-bold text-2xl tracking-widest text-white">
                    PRISTINE
                </span>
            </div>

            <button className="px-6 py-2 bg-pagani-gold text-black font-orbitron font-bold text-sm tracking-wider hover:bg-white transition-colors uppercase rounded shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                Start Membership
            </button>
        </motion.nav>
    );
}
