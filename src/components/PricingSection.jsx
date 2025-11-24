import React from 'react';
import ElectricBorder from './ElectricBorder';

const PricingCard = ({ title, price, features, isPopular }) => {
    return (
        <div className="h-full">
            <ElectricBorder color={isPopular ? '#00ff88' : '#ffffff'} intensity={isPopular ? 1.5 : 0.8}>
                <div className="p-10 h-full flex flex-col relative">
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
                        className={`w-full py-3 rounded-lg font-bold transition-all duration-300 ${isPopular
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
    return (
        <section className="py-32 bg-bg relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-5xl font-bold mb-4 text-white">Simple <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-primary">Pricing</span></h2>
                    <p className="text-gray-400 text-xl">Choose the plan that fits your trading style.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                    <PricingCard
                        title="Starter"
                        price="$29"
                        features={["Basic Indicators", "Daily Signals", "Community Access", "Email Support"]}
                    />
                    <PricingCard
                        title="Pro"
                        price="$59"
                        features={["All Indicators", "Real-time Signals", "Strategy Backtester", "Priority Support"]}
                        isPopular={true}
                    />
                    <PricingCard
                        title="Lifetime"
                        price="$499"
                        features={["One-time Payment", "All Future Updates", "Private Discord", "1-on-1 Mentoring"]}
                    />
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
