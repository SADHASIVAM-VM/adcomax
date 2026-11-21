import React from 'react';
import { motion } from 'framer-motion';
import { STATS } from '../../data/content';
import { staggerContainer, staggerItem } from '../../lib/animations';

export const Stats: React.FC = () => {
  return (
    <div className="stats">
      <motion.div
        className="site-container stats-grid"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {STATS.map((stat, index) => (
          <motion.div
            key={index}
            variants={staggerItem}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="stat"
          >
            <strong>{stat.title}</strong>
            <span>{stat.description}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Stats;