import React from 'react';

const Footer = () => {
    return (
        <footer style={{ background: '#000', padding: '4rem 0', borderTop: '1px solid #222' }}>
            <div className="container">
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '2rem' }}>
                    <div style={{ flex: 1, minWidth: '200px' }}>
                        <div className="logo" style={{ marginBottom: '1.5rem' }}>
                            VFX<span style={{ color: 'var(--color-primary)' }}>SIGNALS</span>
                        </div>
                        <p style={{ color: '#666', lineHeight: '1.6' }}>
                            Empowering traders with next-generation tools and real-time data analysis.
                        </p>
                    </div>

                    <div style={{ flex: 1, minWidth: '150px' }}>
                        <h4 style={{ color: '#fff', marginBottom: '1.5rem', fontWeight: 'bold' }}>Product</h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '0.8rem' }}><a href="#" style={{ color: '#888', textDecoration: 'none' }}>Indicators</a></li>
                            <li style={{ marginBottom: '0.8rem' }}><a href="#" style={{ color: '#888', textDecoration: 'none' }}>Strategies</a></li>
                            <li style={{ marginBottom: '0.8rem' }}><a href="#" style={{ color: '#888', textDecoration: 'none' }}>Pricing</a></li>
                        </ul>
                    </div>

                    <div style={{ flex: 1, minWidth: '150px' }}>
                        <h4 style={{ color: '#fff', marginBottom: '1.5rem', fontWeight: 'bold' }}>Company</h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '0.8rem' }}><a href="#" style={{ color: '#888', textDecoration: 'none' }}>About Us</a></li>
                            <li style={{ marginBottom: '0.8rem' }}><a href="#" style={{ color: '#888', textDecoration: 'none' }}>Contact</a></li>
                            <li style={{ marginBottom: '0.8rem' }}><a href="#" style={{ color: '#888', textDecoration: 'none' }}>Terms of Service</a></li>
                        </ul>
                    </div>
                </div>

                <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid #111', textAlign: 'center', color: '#444' }}>
                    &copy; 2024 VFX Signals. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
