'use client';

import { clsx } from 'clsx';
import { motion } from 'framer-motion';
import { WASH_DATA } from '@/data/washData';

export default function SubscriptionPlans() {
    return (
        <div className="w-full max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            {WASH_DATA.plans.map((plan, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className={clsx(
                        "relative p-8 rounded-2xl border backdrop-blur-md flex flex-col",
                        plan.popular
                            ? "bg-white/10 border-pagani-gold scale-105 z-10 shadow-[0_0_30px_rgba(212,175,55,0.2)]"
                            : "bg-white/5 border-white/10 hover:border-white/30"
                    )}
                >
                    {plan.popular && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-pagani-gold text-black text-xs font-bold py-1 px-4 rounded-full uppercase tracking-wider">
                            Most Popular
                        </div>
                    )}

                    <h3 className="text-xl font-orbitron font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline mb-6">
                        <span className="text-4xl font-sans font-bold text-white">{plan.price}</span>
                        <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>

                    <ul className="flex-grow space-y-3 mb-8">
                        {plan.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-gray-300 text-sm">
                                <span className="w-1.5 h-1.5 bg-pagani-gold rounded-full mr-3" />
                                {feature}
                            </li>
                        ))}
                    </ul>

                    <button className={clsx(
                        "w-full py-3 rounded-lg font-bold text-sm tracking-wider uppercase transition-all",
                        plan.popular
                            ? "bg-pagani-gold text-black hover:bg-white hover:scale-105"
                            : "bg-white/10 text-white hover:bg-white hover:text-black"
                    )}>
                        Select Plan
                    </button>
                </motion.div>
            ))}
        </div>
    );
}
