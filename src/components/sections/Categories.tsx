import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';
import { CATEGORIES } from '../../data/content';
import {
  ArrowUpRightIcon,
  RepairIcon,
  StarIcon,
  ShieldIcon,
  WaterIcon,
  GuardIcon,
  SettingsIcon,
} from '@astraicons/react/linear';
import { staggerContainer, staggerItem } from '../../lib/animations';

interface CategoriesProps {
  onSelectCategory?: (category: string) => void;
}

const categoryIcons: Record<string, React.ReactNode> = {
  'abrasives-sanding': <RepairIcon className="w-6 h-6" />,
  'polishing-detailing': <StarIcon className="w-6 h-6" />,
  'masking-protection': <ShieldIcon className="w-6 h-6" />,
  'surface-preparation': <WaterIcon className="w-6 h-6" />,
  'protective-wear': <GuardIcon className="w-6 h-6" />,
  'industrial-tools': <SettingsIcon className="w-6 h-6" />,
};

const categoryFilterMapping: Record<string, string> = {
  'abrasives-sanding': 'Abrasives',
  'polishing-detailing': 'Polishing',
  'masking-protection': 'Masking & protection',
  'surface-preparation': 'Surface preparation',
  'protective-wear': 'Protective wear',
  'industrial-tools': 'Industrial tools',
};

export const Categories: React.FC<CategoriesProps> = ({ onSelectCategory }) => {
  const handleClick = (catId: string, e: React.MouseEvent) => {
    if (onSelectCategory && categoryFilterMapping[catId]) {
      e.preventDefault();
      onSelectCategory(categoryFilterMapping[catId]);
      const productListElem = document.getElementById('product-list');
      if (productListElem) {
        productListElem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="site-section" id="products">
      <div className="site-container">
        <SectionHeader
          kicker="Explore our catalogue"
          title={
            <>
              Products for every
              <br />
              stage of the process.
            </>
          }
        />

        <motion.div
          className="category-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {CATEGORIES.map((cat) => (
            <motion.a
              key={cat.id}
              className="category group"
              href={cat.href || '#product-list'}
              onClick={(e) => handleClick(cat.id, e)}
              variants={staggerItem}
              whileHover={{ y: -6, scale: 1.015 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <div className="category-icon transition-transform duration-300 group-hover:scale-110">
                {categoryIcons[cat.id] || <SettingsIcon className="w-6 h-6" />}
              </div>
              <span className="arrow transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                <ArrowUpRightIcon className="w-4 h-4" />
              </span>
              <h3>{cat.title}</h3>
              <p>{cat.description}</p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Categories;