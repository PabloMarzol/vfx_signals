import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="hero">
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="hero-video"
            >
                <source src="/assets/videos/vfx_token_2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="hero-overlay"></div>

            {/* Content */}
            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-title"
                >
                    VFX SIGNALS
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="hero-subtitle"
                >
                    Next-generation trading indicators powered by advanced algorithms.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <a href="#indicators" className="btn">
                        Explore Indicators
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
