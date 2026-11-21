import React from 'react';
import { motion } from 'framer-motion';
import { COMPANY_INFO, ABOUT_FEATURES } from '../../data/content';
import { CheckIcon } from '@astraicons/react/linear';
import { fadeInLeft, fadeInRight, staggerContainer, staggerItem } from '../../lib/animations';

export const About: React.FC = () => {
  return (
    <section className="site-section about" id="about">
      <div className="site-container about-grid">
        <motion.div
          className="about-art"
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          whileHover={{ scale: 1.015 }}
          transition={{ duration: 0.3 }}
        >
          <div className="about-card">
            <small>About {COMPANY_INFO.name}</small>
            <strong>More than products. A supply partner.</strong>
            <span>Understanding requirements. Supporting operations.</span>
          </div>
        </motion.div>

        <motion.div
          className="about-copy"
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          <div className="kicker">Who we are</div>
          <h2 className="section-title">
            Focused on your requirements. Committed to dependable support.
          </h2>
          <p>
            {COMPANY_INFO.legalName} is a distribution business serving automotive industries,
            the woodworking segment and retail. The company profile highlights initiatives such as
            stock planning, customer training, sharing technical information and providing expertise
            to address customer requirements.
          </p>
          <p>
            We aim to build lasting business relationships through responsive communication and
            product-focused support.
          </p>

          <motion.div
            className="feature-list"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {ABOUT_FEATURES.map((feature, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ x: 3 }}
                transition={{ duration: 0.15 }}
                className="feature cursor-default"
              >
                <i>
                  <CheckIcon className="w-3.5 h-3.5" />
                </i>{' '}
                {feature}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
