import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="faq-item">
            <button
                className="faq-question"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{question}</span>
                <span className={`faq-icon ${isOpen ? 'rotate' : ''}`}>+</span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        style={{ overflow: 'hidden' }}
                    >
                        <p className="faq-answer">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = () => {
    const faqs = [
        {
            question: "How do VFX Signals work?",
            answer: "Our signals use advanced algorithmic analysis to identify high-probability trading setups across various markets. We combine volume profile, price action, and proprietary indicators."
        },
        {
            question: "Can I use this for crypto and stocks?",
            answer: "Yes, our indicators are designed to be universal and work effectively on Crypto, Forex, Stocks, and Commodities markets."
        },
        {
            question: "Do I need a paid TradingView account?",
            answer: "No, our indicators work on the free plan of TradingView. You don't need a Pro subscription to use VFX Signals."
        },
        {
            question: "How do I get access after purchase?",
            answer: "Access is automated. Once you connect your wallet and complete the transaction, you will receive instant access to the indicators on TradingView."
        }
    ];

    return (
        <div className="container">
            <h2 className="section-title">Frequently Asked <span style={{ color: 'var(--color-primary)' }}>Questions</span></h2>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                {faqs.map((faq, index) => (
                    <FAQItem key={index} question={faq.question} answer={faq.answer} />
                ))}
            </div>
        </div>
    );
};

export default FAQ;
