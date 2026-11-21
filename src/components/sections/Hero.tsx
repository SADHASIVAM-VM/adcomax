import React from 'react';
import { motion } from 'framer-motion';
import { COMPANY_INFO } from '../../data/content';
import { ArrowRightIcon, CheckIcon, ArrowUpRightIcon } from '@astraicons/react/linear';
import heroBg from '../../assets/hero-bg.jpg';
import { fadeInUp, staggerContainer } from '../../lib/animations';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-24 md:pt-28 md:pb-36 overflow-hidden bg-[#020a07]" id="home">
      {/* AI Generated Industrial Tech Background with High Visibility Dark Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={heroBg}
          alt="ADCOMAX Industrial Facility"
          className="w-full h-full object-cover object-center filter brightness-[0.78] contrast-125 saturate-[1.2] scale-102"
        />
        {/* Cinematic Dark Vignette & Atmospheric Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020a07]/85 via-[#020a07]/40 to-[#020a07]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(2,10,7,0.75)_90%)]" />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* Radiant ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[380px] rounded-full bg-[var(--green)]/15 filter blur-[140px] pointer-events-none z-0" />

      {/* Centered Single Layout Content */}
      <div className="site-container relative z-10 w-full flex flex-col items-center text-center max-w-4xl mx-auto">
        <motion.div
          className="flex flex-col items-center space-y-6 w-full"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow Badge */}
          <motion.div variants={fadeInUp}>
            <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#021812]/85 border border-emerald-500/40 text-xs font-bold text-[#cbf39d] backdrop-blur-md shadow-lg">
              <span className="w-2 h-2 rounded-full bg-[var(--lime)] shadow-[0_0_8px_var(--lime)]" />
              Industrial Consumables &amp; Technical Distribution
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.08] max-w-3xl drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]"
          >
            Materials that move your{' '}
            <span className="text-[var(--lime)] drop-shadow-[0_0_20px_rgba(114,198,19,0.5)]">
              business forward.
            </span>
          </motion.h1>

          {/* Centered Description */}
          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg text-emerald-100/95 leading-relaxed max-w-2xl font-normal drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]"
          >
            {COMPANY_INFO.name} Enterprises supports automotive, woodworking and retail businesses with
            industrial products, surface preparation solutions and customer-focused distribution
            support.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center justify-center gap-3.5 pt-2"
          >
            <motion.a
              className="btn btn-primary shadow-xl"
              href="#products"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.15 }}
            >
              <span>Explore products</span>
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </motion.a>

            <motion.a
              className="btn btn-light bg-white/10 hover:bg-white/20 text-white border-white/25 backdrop-blur-md shadow-lg"
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.15 }}
            >
              <span>Talk to our team</span>
              <ArrowUpRightIcon className="w-3.5 h-3.5" />
            </motion.a>
          </motion.div>

          {/* Trust points */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-100/90 pt-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
          >
            <span className="w-4 h-4 rounded-full bg-[var(--lime)] text-[var(--forest)] flex items-center justify-center font-bold text-[9px] shadow-sm">
              <CheckIcon className="w-3 h-3" />
            </span>
            <span>Product guidance · Stock planning · Customer support</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;