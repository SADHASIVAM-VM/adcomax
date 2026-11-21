import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';
import { SERVICES } from '../../data/content';
import { BoxIcon, DocumentIcon, GroupIcon } from '@astraicons/react/linear';
import { staggerContainer, staggerItem, fadeInUp } from '../../lib/animations';

const serviceIcons: Record<string, React.ReactNode> = {
  'stock-planning': <BoxIcon className="w-6 h-6 text-[var(--green)]" />,
  'technical-info': <DocumentIcon className="w-6 h-6 text-[var(--green)]" />,
  'customer-training': <GroupIcon className="w-6 h-6 text-[var(--green)]" />,
};

export const Services: React.FC = () => {
  return (
    <section className="site-section services" id="services">
      <div className="site-container">
        <SectionHeader
          kicker="How we support"
          title="Support beyond the product."
        />

        <motion.div
          className="service-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.id}
              className="service group cursor-default"
              variants={staggerItem}
              whileHover={{ y: -6, scale: 1.015 }}
              transition={{ duration: 0.2 }}
            >
              <div className="symbol transition-transform duration-300 group-hover:scale-115">
                {serviceIcons[service.id] || service.symbol}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className="services-note"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          The supplied profile also mentions road, rail and courier transportation options. Please
          confirm the exact service model and coverage before publishing detailed logistics
          promises.
        </motion.p>
      </div>
    </section>
  );
};

export default Services;
