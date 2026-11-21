import React from 'react';
import { motion } from 'framer-motion';
import { COMPANY_INFO } from '../../data/content';
import { ArrowRightIcon, CheckIcon } from '@astraicons/react/linear';
import hero from '../../assets/shero.png';
import { fadeInUp, staggerContainer } from '../../lib/animations';

export const Hero: React.FC = () => {
  return (
    <section className="hero" id="home">
      <div className="site-container hero-grid">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={fadeInUp} className="hero-title">
            Materials that move your <span>business forward.</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="hero-copy">
            {COMPANY_INFO.name} Enterprises supports automotive, woodworking and retail businesses with
            industrial products, surface preparation solutions and customer-focused distribution
            support.
          </motion.p>
          <motion.div variants={fadeInUp} className="hero-buttons">
            <motion.a
              className="btn btn-primary"
              href="#products"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.15 }}
            >
              Explore products <ArrowRightIcon className="w-3.5 h-3.5" />
            </motion.a>
            <motion.a
              className="btn btn-light"
              href="#contact"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.15 }}
            >
              Talk to our team
            </motion.a>
          </motion.div>
          <motion.div variants={fadeInUp} className="hero-note">
            <span className="check">
              <CheckIcon className="w-3.5 h-3.5" />
            </span>{' '}
            Product guidance · Stock planning · Customer support
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="flex items-center justify-center"
        >
          <motion.img
            src={hero}
            alt="ADCOMAX Industrial & Automotive Solutions"
            className="w-full max-w-lg object-contain drop-shadow-xl"
            animate={{ y: [0, -7, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
