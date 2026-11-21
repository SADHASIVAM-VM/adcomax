import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';
import { INDUSTRIES } from '../../data/content';
import { TruckIcon, TreeIcon, ShopIcon } from '@astraicons/react/linear';
import { staggerContainer, staggerItem } from '../../lib/animations';

const industryIcons: Record<string, React.ReactNode> = {
  automotive: <TruckIcon className="w-5 h-5 text-[var(--pale)] mb-3" />,
  woodworking: <TreeIcon className="w-5 h-5 text-[var(--pale)] mb-3" />,
  retail: <ShopIcon className="w-5 h-5 text-[var(--pale)] mb-3" />,
};

export const Industries: React.FC = () => {
  return (
    <section className="site-section industry" id="industries">
      <div className="site-container">
        <SectionHeader
          kicker="Industries we serve"
          kickerColor="var(--pale)"
          title={
            <>
              Supporting different
              <br />
              working environments.
            </>
          }
          titleColor="white"
          introColor="#b9d2ca"
        />

        <motion.div
          className="industry-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {INDUSTRIES.map((industry) => (
            <motion.div
              key={industry.id}
              className="industry-card group cursor-default"
              variants={staggerItem}
              whileHover={{ y: -6, scale: 1.015 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center justify-between">
                <div className="num">{industry.num}</div>
                <div className="transition-transform duration-300 group-hover:scale-115">
                  {industryIcons[industry.id]}
                </div>
              </div>
              <h3>{industry.title}</h3>
              <p>{industry.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Industries;
