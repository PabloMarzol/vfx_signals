import React, { useId } from 'react';
import { motion } from 'framer-motion';

const ElectricBorder = ({ children, color = '#00ff88', intensity = 1 }) => {
    const filterId = useId();
    const glowId = `glow-${filterId}`;

    return (
        <div className="relative h-full w-full group">
            {/* The SVG Filter Definition */}
            <svg width="0" height="0" className="absolute block">
                <defs>
                    <filter id={glowId} x="-50%" y="-50%" width="200%" height="200%">
                        {/* Create turbulence/noise */}
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.02"
                            numOctaves="3"
                            result="noise"
                        >
                            <animate
                                attributeName="baseFrequency"
                                dur="10s"
                                values="0.02;0.05;0.02"
                                repeatCount="indefinite"
                            />
                        </feTurbulence>

                        {/* Displace the source graphic with noise */}
                        <feDisplacementMap
                            in="SourceGraphic"
                            in2="noise"
                            scale={6 * intensity}
                            xChannelSelector="R"
                            yChannelSelector="G"
                        />

                        {/* Add Glow */}
                        <feGaussianBlur stdDeviation={2 * intensity} result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>
            </svg>

            {/* The Border Container */}
            <div className="relative h-full w-full bg-[#1c1c1c] rounded-xl">
                {/* Animated Border Line */}
                <motion.div
                    className="absolute -inset-4 z-0 pointer-events-none rounded-3xl"
                    style={{
                        border: `2px solid ${color}`,
                        filter: `url(#${glowId})`,
                        boxShadow: `0 0 ${15 * intensity}px ${color}, inset 0 0 ${5 * intensity}px ${color}`,
                        opacity: 0.8,
                    }}
                    animate={{
                        opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                {/* Content */}
                <div className="relative z-10 bg-[#0a0a0a] m-[2px] rounded-[10px] h-full overflow-hidden">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default ElectricBorder;
