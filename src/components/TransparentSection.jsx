import React from 'react';
import { motion } from 'framer-motion';

const FloatingCard = ({ delay, x, y, rotate, scale, children }) => (
    <motion.div
        animate={{
            y: [0, -20, 0],
            rotate: [rotate, rotate + 2, rotate]
        }}
        transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay
        }}
        className="glass-panel"
        style={{
            position: 'absolute',
            left: x,
            top: y,
            transform: `rotate(${rotate}deg) scale(${scale})`,
            padding: '2rem',
            width: '300px',
            zIndex: 1,
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
        }}
    >
        {children}
    </motion.div>
);

const TransparentSection = () => {
    return (
        <section className="section" style={{
            background: 'radial-gradient(circle at center, #1a1a1a 0%, #000 100%)',
            position: 'relative',
            padding: '12rem 0',
            overflow: 'hidden'
        }}>
            {/* Background Glows */}
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '20%',
                width: '400px',
                height: '400px',
                background: 'var(--color-primary)',
                filter: 'blur(150px)',
                opacity: 0.1,
                borderRadius: '50%'
            }}></div>
            <div style={{
                position: 'absolute',
                bottom: '20%',
                right: '20%',
                width: '500px',
                height: '500px',
                background: 'var(--color-secondary)',
                filter: 'blur(150px)',
                opacity: 0.1,
                borderRadius: '50%'
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '4rem' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="section-title"
                    >
                        Unmatched <span className="text-gradient-secondary">Clarity</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="section-desc"
                    >
                        Experience trading like never before with our crystal-clear data visualization.
                    </motion.p>
                </div>

                <div style={{ position: 'relative', height: '600px', width: '100%', maxWidth: '1000px', margin: '0 auto' }}>

                    {/* Main Center Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="glass-card"
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            padding: '3rem',
                            width: '100%',
                            maxWidth: '500px',
                            textAlign: 'center',
                            zIndex: 5,
                            background: 'rgba(10, 10, 10, 0.6)',
                            backdropFilter: 'blur(20px)',
                            border: '1px solid rgba(255, 255, 255, 0.1)'
                        }}
                    >
                        <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#fff' }}>Real-Time Data</h3>
                        <p style={{ color: '#ccc', marginBottom: '2rem' }}>
                            Our algorithms process millions of data points per second to give you the edge.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56' }}></div>
                            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }}></div>
                            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f' }}></div>
                        </div>
                    </motion.div>

                    {/* Floating Decorative Cards */}
                    <div className="hidden md:block">
                        <FloatingCard delay={0} x="5%" y="10%" rotate={-5} scale={0.8}>
                            <div style={{ height: '10px', width: '60%', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', marginBottom: '10px' }}></div>
                            <div style={{ height: '10px', width: '80%', background: 'rgba(255,255,255,0.1)', borderRadius: '4px' }}></div>
                        </FloatingCard>

                        <FloatingCard delay={1} x="70%" y="5%" rotate={5} scale={0.9}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                                <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: 'var(--color-primary)', opacity: 0.5 }}></div>
                                <div style={{ height: '10px', width: '50%', background: 'rgba(255,255,255,0.1)', borderRadius: '4px' }}></div>
                            </div>
                            <div style={{ height: '60px', background: 'linear-gradient(90deg, transparent, rgba(0,255,136,0.1), transparent)' }}></div>
                        </FloatingCard>

                        <FloatingCard delay={2} x="10%" y="60%" rotate={3} scale={0.85}>
                            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'rgba(255,255,255,0.2)' }}>+245%</div>
                            <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}>Profit PnL</div>
                        </FloatingCard>

                        <FloatingCard delay={1.5} x="75%" y="55%" rotate={-3} scale={0.9}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                                <span style={{ color: 'rgba(255,255,255,0.4)' }}>BTC/USD</span>
                                <span style={{ color: 'var(--color-secondary)' }}>LONG</span>
                            </div>
                            <div style={{ height: '2px', width: '100%', background: 'rgba(255,255,255,0.1)' }}>
                                <div style={{ height: '100%', width: '70%', background: 'var(--color-secondary)' }}></div>
                            </div>
                        </FloatingCard>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TransparentSection;
