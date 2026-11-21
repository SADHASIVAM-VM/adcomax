import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRightIcon } from '@astraicons/react/linear';
import { fadeInUp } from '../../lib/animations';

export const CtaBanner: React.FC = () => {
  return (
    <div className="cta">
      <div className="site-container">
        <motion.div
          className="cta-panel"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          <div>
            <h2>Looking for the right product for your operation?</h2>
            <p>Tell us what you need. Our team can help you make an enquiry.</p>
          </div>
          <motion.a
            className="btn"
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.15 }}
          >
            Send an enquiry <ArrowUpRightIcon className="w-3.5 h-3.5 inline ml-1" />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default CtaBanner;