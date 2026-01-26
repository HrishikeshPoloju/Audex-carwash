'use client';

import { MARKETING_DATA } from '@/data/marketingData';
import { clsx } from 'clsx';

export function TrustBar() {
    return (
        <div className="bg-white/5 border-y border-white/10 py-6">
            <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-12 md:gap-24 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Placeholder Logos / Trust Indicators */}
                <span className="font-orbitron font-bold text-lg">⭐⭐⭐⭐⭐ 5.0 Rating</span>
                <span className="font-orbitron font-bold text-lg">150k+ Washes</span>
                <span className="font-orbitron font-bold text-lg">Eco-Friendly</span>
                <span className="font-orbitron font-bold text-lg">Local Business</span>
            </div>
        </div>
    );
}

export function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
    return (
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white mb-4 uppercase">{title}</h2>
            {subtitle && <p className="text-gray-400 font-rajdhani text-lg max-w-2xl mx-auto">{subtitle}</p>}
        </div>
    );
}

export function AboutSection() {
    return (
        <section className="py-24 px-6 max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-4xl font-orbitron font-bold text-pagani-gold mb-6">{MARKETING_DATA.about.title}</h2>
                    <p className="text-gray-300 font-rajdhani text-lg leading-relaxed mb-8">
                        {MARKETING_DATA.about.description}
                    </p>
                    <div className="flex gap-12">
                        {MARKETING_DATA.about.stats.map((stat, i) => (
                            <div key={i}>
                                <div className="text-3xl font-bold text-white font-sans">{stat.value}</div>
                                <div className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="h-full min-h-[400px] bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center relative overflow-hidden group">
                    <img
                        src="/images/faculty.jpg"
                        alt="Pristine Auto Spa Facility"
                        className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-pagani-black/80 to-transparent pointer-events-none"></div>
                </div>            </div>
        </section>
    );
}

export function ServicesGrid() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-pagani-gold/5 via-transparent to-pagani-gold/5 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <SectionHeader title="Our Services" subtitle="Precision engineering for your vehicle's exterior." />
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {MARKETING_DATA.services.map((service, i) => (
                        <div key={i} className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-pagani-gold/50 transition-all duration-300 group">
                            <h3 className="text-xl font-orbitron font-bold text-white mb-3 group-hover:text-pagani-gold transition-colors">{service.title}</h3>
                            <p className="text-gray-400 font-rajdhani">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function HowItWorks() {
    return (
        <section className="py-24 max-w-7xl mx-auto px-6">
            <SectionHeader title="How It Works" />
            <div className="grid md:grid-cols-3 gap-12 relative">
                <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-pagani-gold/30 to-transparent z-0"></div>
                {MARKETING_DATA.howItWorks.map((step, i) => (
                    <div key={i} className="relative z-10 text-center">
                        <div className="w-24 h-24 mx-auto bg-pagani-black border-2 border-pagani-gold rounded-full flex items-center justify-center text-3xl font-bold font-orbitron text-pagani-gold mb-8 shadow-[0_0_20px_rgba(212,175,55,0.2)] bg-gradient-to-br from-pagani-black to-gray-900">
                            {step.step}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                        <p className="text-gray-400 font-rajdhani max-w-xs mx-auto">{step.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export function WhySubscribe() {
    return (
        <section className="py-24 relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.1),transparent_70%)] pointer-events-none"></div>
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <SectionHeader title="Why Subscribe?" subtitle="Join the smart way to keep your car looking its best." />
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {MARKETING_DATA.whySubscribe.map((item, i) => (
                        <div key={i} className="text-center p-6 bg-white/5 border border-white/10 rounded-lg hover:transform hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-12 h-12 mx-auto bg-pagani-gold rounded-lg mb-6 flex items-center justify-center text-black font-bold shadow-lg">✓</div>
                            <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-sm text-gray-400 font-rajdhani">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function Testimonials() {
    return (
        <section className="py-24 px-6 relative bg-[#0a0a0a]">
            {/* Grid Background Pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <SectionHeader title="Member Stories" />
                <div className="grid md:grid-cols-3 gap-8">
                    {MARKETING_DATA.testimonials.map((t, i) => (
                        <div key={i} className="bg-pagani-black p-8 rounded-2xl border border-white/10 relative shadow-2xl hover:border-pagani-gold/30 transition-colors">
                            <div className="text-pagani-gold text-4xl font-serif mb-4 opacity-50">"</div>
                            <p className="text-gray-300 font-rajdhani text-lg mb-6 italic">{t.text}</p>
                            <div>
                                <div className="font-bold text-white">{t.name}</div>
                                <div className="text-xs text-pagani-gold uppercase tracking-wider">{t.role}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function FAQ() {
    return (
        <section className="py-24 max-w-3xl mx-auto px-6">
            <SectionHeader title="Frequency Asked Questions" />
            <div className="space-y-6">
                {MARKETING_DATA.faq.map((item, i) => (
                    <div key={i} className="bg-white/5 p-6 rounded-xl border border-white/5">
                        <h3 className="font-bold text-white mb-2 text-lg">{item.q}</h3>
                        <p className="text-gray-400 font-rajdhani">{item.a}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export function Contact() {
    return (
        <section className="py-24 bg-pagani-gold text-pagani-black text-center">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-4xl font-orbitron font-bold mb-6">{MARKETING_DATA.contact.title}</h2>
                <p className="text-xl font-rajdhani font-bold mb-8">{MARKETING_DATA.contact.text}</p>
                <div className="flex flex-col md:flex-row justify-center gap-8 font-sans">
                    <a href={`tel:${MARKETING_DATA.contact.phone}`} className="hover:opacity-70 transition-opacity">
                        <strong>Call:</strong> {MARKETING_DATA.contact.phone}
                    </a>
                    <a href={`mailto:${MARKETING_DATA.contact.email}`} className="hover:opacity-70 transition-opacity">
                        <strong>Email:</strong> {MARKETING_DATA.contact.email}
                    </a>
                    <span>
                        <strong>Hours:</strong> {MARKETING_DATA.contact.hours}
                    </span>
                </div>
            </div>
        </section>
    );
}
