import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ElectricBorder from './ElectricBorder';

const PricingCard = ({ title, price, features, isPopular, isActive, onClick }) => {
    return (
        <div
            className="h-[500px] w-[350px] cursor-pointer"
            onClick={onClick}
        >
            <ElectricBorder
                color={isPopular ? '#00ff88' : '#ffffff'}
                intensity={isActive ? 1.5 : 0.5}
            >
                <div className="p-8 h-full flex flex-col relative bg-[#0a0a0a]">
                    {isPopular && (
                        <div className="absolute top-3 right-3 bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold border border-primary">
                            POPULAR
                        </div>
                    )}
                    <h3 className="text-2xl mb-4 text-white font-bold">{title}</h3>
                    <div className="text-5xl font-bold mb-8 text-white">
                        {price}<span className="text-lg text-gray-500 font-normal">/mo</span>
                    </div>
                    <ul className="space-y-4 mb-10 flex-1">
                        {features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-gray-300">
                                <span className={`mr-3 ${isPopular ? 'text-primary' : 'text-gray-500'}`}>✓</span>
                                {feature}
                            </li>
                        ))}
                    </ul>
                    <button
                        className={`w-full py-3 rounded-lg font-bold transition-all duration-300 ${isActive
                                ? 'bg-primary text-black hover:bg-white hover:shadow-[0_0_20px_rgba(0,255,136,0.5)]'
                                : 'bg-white/10 text-white hover:bg-white hover:text-black'
                            }`}
                    >
                        Choose Plan
                    </button>
                </div>
            </ElectricBorder>
        </div>
    );
};

const PricingSection = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    const cards = [
        {
            title: "Starter",
            price: "$29",
            features: ["Basic Indicators", "Daily Signals", "Community Access", "Email Support"],
            isPopular: false
        },
        {
            title: "Pro",
            price: "$59",
            features: ["All Indicators", "Real-time Signals", "Strategy Backtester", "Priority Support"],
            isPopular: true
        },
        {
            title: "Lifetime",
            price: "$499",
            features: ["One-time Payment", "All Future Updates", "Private Discord", "1-on-1 Mentoring"],
            isPopular: false
        }
    ];

    return (
        <section className="py-32 bg-bg relative overflow-hidden min-h-screen flex flex-col justify-center">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-5xl font-bold mb-4 text-white">Simple <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-primary">Pricing</span></h2>
                    <p className="text-gray-400 text-xl">Choose the plan that fits your trading style.</p>
                </div>

                <div className="relative h-[600px] flex justify-center items-center [perspective:1000px]">
                    {cards.map((card, index) => {
                        const offset = index - activeIndex;
                        const isActive = index === activeIndex;

                        return (
                            <motion.div
                                key={index}
                                className="absolute"
                                initial={false}
                                animate={{
                                    x: offset * 380, // Spacing between cards
                                    scale: isActive ? 1 : 0.85,
                                    rotateY: offset * -25, // Rotate towards center
                                    z: Math.abs(offset) * -200, // Push back side cards
                                    opacity: isActive ? 1 : 0.6,
                                    zIndex: 10 - Math.abs(offset)
                                }}
                                transition={{
                                    duration: 0.5,
                                    ease: "easeInOut"
                                }}
                            >
                                <PricingCard
                                    {...card}
                                    isActive={isActive}
                                    onClick={() => setActiveIndex(index)}
                                />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
