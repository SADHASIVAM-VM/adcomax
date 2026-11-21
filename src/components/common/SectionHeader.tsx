import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInRight } from '../../lib/animations';

interface SectionHeaderProps {
  kicker: string;
  title: string | React.ReactNode;
  intro?: string;
  kickerColor?: string;
  titleColor?: string;
  introColor?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  kicker,
  title,
  intro,
  kickerColor,
  titleColor,
  introColor,
}) => {
  return (
    <div className="section-head">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        <div className="kicker" style={kickerColor ? { color: kickerColor } : undefined}>
          {kicker}
        </div>
        <h2 className="section-title" style={titleColor ? { color: titleColor } : undefined}>
          {title}
        </h2>
      </motion.div>
      {intro && (
        <motion.p
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="section-intro"
          style={introColor ? { color: introColor } : undefined}
        >
          {intro}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeader;