import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { ProductItem } from '../../types';
import {
  ArrowUpRightIcon,
  ActivityIcon,
  StarIcon,
  ShieldIcon,
  WaterIcon,
  Shield1Icon,
  RepairIcon,
  FlashIcon,
  DiamondIcon,
  GuardIcon,
  SettingsIcon,
} from '@astraicons/react/linear';

interface ProductCardProps {
  product: ProductItem;
  onRequestDetails?: (productName: string) => void;
  onOpenModal?: (product: ProductItem) => void;
}

const getCategoryIcon = (category: string, id: string) => {
  const cat = category.toLowerCase();
  if (cat.includes('abrasive')) return <ActivityIcon className="w-10 h-10 text-[var(--forest)]" />;
  if (cat.includes('polishing') || cat.includes('detailing')) return <StarIcon className="w-10 h-10 text-[var(--green)]" />;
  if (cat.includes('masking') || cat.includes('protection')) {
    if (id.includes('tape')) return <Shield1Icon className="w-10 h-10 text-[var(--teal)]" />;
    return <ShieldIcon className="w-10 h-10 text-[var(--teal)]" />;
  }
  if (cat.includes('surface prep') || cat.includes('surface care')) return <WaterIcon className="w-10 h-10 text-[var(--blue)]" />;
  if (cat.includes('protective') || cat.includes('wear')) return <GuardIcon className="w-10 h-10 text-[var(--forest)]" />;
  if (cat.includes('power')) return <FlashIcon className="w-10 h-10 text-[var(--lime)]" />;
  if (cat.includes('ceramic') || cat.includes('automotive')) return <DiamondIcon className="w-10 h-10 text-[var(--green)]" />;
  if (cat.includes('tool') || cat.includes('burr')) return <RepairIcon className="w-10 h-10 text-[var(--forest)]" />;
  return <SettingsIcon className="w-10 h-10 text-[var(--forest)]" />;
};

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onRequestDetails,
  onOpenModal,
}) => {
  const [imageError, setImageError] = useState(false);
  const productName = product.name || product.title || 'Product';

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onOpenModal) {
      onOpenModal(product);
    } else if (onRequestDetails) {
      onRequestDetails(productName);
    }
  };

  const hasImage = Boolean(product.image && !imageError);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -6, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      className="product-card group cursor-pointer"
      onClick={handleClick}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${productName}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick(e as any);
        }
      }}
    >
      <div className="border-b border-[var(--line)] relative overflow-hidden">
        <img
          src={
            hasImage
              ? product.image
              : 'https://images.openai.com/static-rsc-4/8DFsdU8nBWzpMmkukiXyTHCM28waaChPFTc8p5o7icp_m6xl4nHgAeDF1vR5xVu3j7fimna2F6YWhtDOFYo4Jhdd4XmMferqBcjHoqQVIc4fLYFfgDPaYx6Xxfs_bgrOWN_HkfOga9Ac_ACN4fwAraCT07gyKGfOvlAPMlxQkGltSRqp3FF8g8C4JHxE0wz8?purpose=fullsize'
          }
          alt={productName}
          className="w-full h-[200px] object-contain p-3 transition-transform duration-300 group-hover:scale-108"
          onError={() => setImageError(true)}
          loading="lazy"
        />

        {product.sourcePage && (
          <span className="absolute top-2 right-2 bg-white/90 backdrop-blur-xs text-[10px] font-bold text-gray-500 px-1.5 py-0.5 rounded shadow-xs">
            p. {product.sourcePage}
          </span>
        )}
      </div>

      <div className="product-info flex flex-col justify-between flex-grow">
        <div>
          <div className="flex items-center justify-between gap-2">
            <small className="text-[10px] font-extrabold uppercase tracking-wider text-[var(--green)]">
              {product.category}
            </small>
          </div>
          <h3 className="text-[14px] font-bold text-[var(--forest)] mt-1 mb-1.5 line-clamp-1 group-hover:text-[var(--green)] transition-colors">
            {productName}
          </h3>
          <p className="text-[12px] text-[var(--muted)] line-clamp-3 leading-relaxed">
            {product.description}
          </p>
        </div>

        <div className="product-foot mt-3 pt-2.5 border-t border-[var(--line)] flex items-center justify-between">
          <span className="text-[11px] font-bold text-[var(--forest)]">View details</span>
          <span className="text-[var(--green)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            <ArrowUpRightIcon className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </motion.article>
  );
};

export default ProductCard;
