import React from 'react';
import { motion } from 'framer-motion';

const IndicatorCard = ({ title, description, image }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            className="electric-border"
            style={{ padding: '2px', height: '100%' }}
        >
            <div className="card-inner">
                <div className="card-image">
                    <img src={image} alt={title} />
                </div>
                <div className="card-content">
                    <h3 className="card-title">{title}</h3>
                    <p className="card-text">{description}</p>
                    <button className="card-btn">
                        Learn More
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default IndicatorCard;
