import React from 'react';
import Hero from './components/Hero';
import IndicatorsSection from './components/IndicatorsSection';
import TransparentSection from './components/TransparentSection';
import PricingSection from './components/PricingSection';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { Web3Provider } from './Web3Provider';
import { useWeb3Modal } from '@web3modal/wagmi/react';
import { useAccount } from 'wagmi';

function Navbar() {
  const { open } = useWeb3Modal();
  const { address, isConnected } = useAccount();

  return (
    <nav className="navbar">
      <div className="container nav-content">
        <div className="logo">
          VFX<span style={{ color: 'var(--color-primary)' }}>SIGNALS</span>
        </div>
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#indicators">Indicators</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </div>
        <button
          onClick={() => open()}
          className="btn"
          style={{ padding: '8px 20px', fontSize: '0.9rem' }}
        >
          {isConnected ? `${address.substring(0, 6)}...${address.substring(address.length - 4)}` : 'Connect Wallet'}
        </button>
      </div>
    </nav>
  );
}

function App() {
  return (
    <Web3Provider>
      <div className="app">
        <Navbar />

        <Hero />

        <IndicatorsSection />

        <TransparentSection />

        <div id="pricing">
          <PricingSection />
        </div>

        <section id="faq" className="section">
          <FAQ />
        </section>

        <Footer />
      </div>
    </Web3Provider>
  );
}

export default App;
