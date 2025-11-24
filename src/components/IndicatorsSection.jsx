import React from 'react';
import { motion } from 'framer-motion';

const IndicatorsSection = () => {
    return (
        <section className="section" style={{ background: '#080808' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="section-title"
                    >
                        Advanced <span className="text-gradient-primary">Analysis</span>
                    </motion.h2>
                    <p className="section-desc">
                        See the market clearly with our next-gen visualization tools.
                    </p>
                </div>

                {/* Feature 1: Video Showcase */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', marginBottom: '6rem' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="glass-panel"
                        style={{ padding: '2rem', overflow: 'hidden' }}
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', md: { flexDirection: 'row' }, alignItems: 'center', gap: '2rem' }}>
                            <div style={{ flex: 1 }}>
                                <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#fff' }}>Strategy Automation</h3>
                                <p style={{ color: '#aaa', lineHeight: '1.6', marginBottom: '2rem' }}>
                                    Convert complex indicator signals into actionable strategies. Our tools provide real-time feedback and backtesting capabilities directly on your chart.
                                </p>
                                <ul style={{ listStyle: 'none', color: '#ccc' }}>
                                    <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                                        <span style={{ color: 'var(--color-primary)', marginRight: '10px' }}>✓</span> Real-time execution
                                    </li>
                                    <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                                        <span style={{ color: 'var(--color-primary)', marginRight: '10px' }}>✓</span> Multi-condition logic
                                    </li>
                                </ul>
                            </div>
                            <div style={{ flex: 1.5, width: '100%' }}>
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    style={{ width: '100%', borderRadius: '12px', border: '1px solid #333' }}
                                >
                                    <source src="/assets/videos/indicator_to_strategy.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </motion.div>

                    {/* Feature 2: Image Showcase */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        style={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'center', gap: '4rem', flexWrap: 'wrap' }}
                    >
                        <div style={{ flex: 1, minWidth: '300px' }}>
                            <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#fff' }}>Mr. Indicator</h3>
                            <p style={{ color: '#aaa', lineHeight: '1.6' }}>
                                Your personal trading assistant. Mr. Indicator analyzes market conditions 24/7 to bring you the most relevant data points when you need them most.
                            </p>
                        </div>
                        <div style={{ flex: 1, minWidth: '300px' }}>
                            <img
                                src="/assets/images/mr_indicator.png"
                                alt="Mr Indicator"
                                style={{ width: '100%', borderRadius: '12px', boxShadow: '0 0 30px rgba(0,0,0,0.5)' }}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default IndicatorsSection;
