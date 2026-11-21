import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { ProductItem } from '../../types';
import {
  CloseIcon,
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
  CheckIcon,
  DocumentIcon,
} from '@astraicons/react/linear';

interface ProductModalProps {
  product: ProductItem | null;
  isOpen: boolean;
  onClose: () => void;
  onEnquire: (productName: string) => void;
}

const getCategoryIcon = (category: string, id: string) => {
  const cat = category.toLowerCase();
  if (cat.includes('abrasive')) return <ActivityIcon className="w-20 h-20 text-[var(--forest)]" />;
  if (cat.includes('polishing') || cat.includes('detailing')) return <StarIcon className="w-20 h-20 text-[var(--green)]" />;
  if (cat.includes('masking') || cat.includes('protection')) {
    if (id.includes('tape')) return <Shield1Icon className="w-20 h-20 text-[var(--teal)]" />;
    return <ShieldIcon className="w-20 h-20 text-[var(--teal)]" />;
  }
  if (cat.includes('surface prep') || cat.includes('surface care')) return <WaterIcon className="w-20 h-20 text-[var(--blue)]" />;
  if (cat.includes('protective') || cat.includes('wear')) return <GuardIcon className="w-20 h-20 text-[var(--forest)]" />;
  if (cat.includes('power')) return <FlashIcon className="w-20 h-20 text-[var(--lime)]" />;
  if (cat.includes('ceramic') || cat.includes('automotive')) return <DiamondIcon className="w-20 h-20 text-[var(--green)]" />;
  if (cat.includes('tool') || cat.includes('burr')) return <RepairIcon className="w-20 h-20 text-[var(--forest)]" />;
  return <SettingsIcon className="w-20 h-20 text-[var(--forest)]" />;
};

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  isOpen,
  onClose,
  onEnquire,
}) => {
  const [imageError, setImageError] = useState(false);

  // Lock background scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Reset image error state whenever product changes
  useEffect(() => {
    setImageError(false);
  }, [product?.id]);

  const productName = product?.name || product?.title || 'Product';
  const hasImage = Boolean(product?.image && !imageError);

  const handleEnquireClick = () => {
    onEnquire(productName);
  };

  return (
    <AnimatePresence>
      {isOpen && product && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-product-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Modal Card with spring animation */}
          <motion.div
            className="relative bg-white w-full max-w-4xl h-[88vh] md:h-[580px] max-h-[680px] rounded-3xl shadow-2xl border border-[var(--line)] overflow-hidden flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.92, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 18 }}
            transition={{ type: 'spring', damping: 26, stiffness: 320 }}
          >
            {/* Close Button Top Right */}
            <motion.button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.15 }}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-[var(--forest)] shadow-md flex items-center justify-center border border-[var(--line)] cursor-pointer"
            >
              <CloseIcon className="w-5 h-5" />
            </motion.button>

            {/* LEFT COLUMN: Photo / Visual container */}
            <div className="w-full md:w-1/2 h-56 md:h-full bg-gradient-to-br from-[#eff9e9] via-[#e2f5df] to-[#d4eed2] flex flex-col items-center justify-center p-6 relative flex-shrink-0 overflow-hidden select-none">
              <div className="absolute w-72 h-72 rounded-full bg-white/40 filter blur-xl pointer-events-none" />

              <div className="relative z-10 w-full h-full flex items-center justify-center">
                {hasImage ? (
                  <img
                    src={product.image}
                    alt={productName}
                    className="max-h-full max-w-full object-contain drop-shadow-md"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center gap-3 text-center">
                    {getCategoryIcon(product.category, product.id)}
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-[var(--forest)]/70">
                      ADCOMAX Catalogue
                    </span>
                  </div>
                )}
              </div>

              {product.sourcePage && (
                <div className="absolute bottom-3 left-4 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/85 backdrop-blur-xs text-[10px] font-bold text-[var(--forest)] shadow-xs border border-white/60">
                  <DocumentIcon className="w-3.5 h-3.5 text-[var(--green)]" />
                  <span>Catalogue Page {product.sourcePage}</span>
                </div>
              )}
            </div>

            {/* RIGHT COLUMN: Content with fixed height & scrolling body */}
            <div className="w-full md:w-1/2 flex flex-col flex-1 min-h-0 h-full bg-white">
              {/* Scrollable Content Body */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-5 modal-content-scroll">
                <div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-[#eaf4ec] text-[var(--green)] border border-[#d5ead9]">
                    {product.category}
                  </span>
                </div>

                <div>
                  <h2
                    id="modal-product-title"
                    className="text-2xl md:text-3xl font-extrabold text-[var(--forest)] leading-tight tracking-tight"
                  >
                    {productName}
                  </h2>
                  <div className="text-xs text-[var(--muted)] mt-1">
                    Ref ID: <span className="font-mono text-gray-500">{product.id}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
                    Product Description
                  </h4>
                  <p className="text-sm text-[#45645a] leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="bg-[#f8fbf7] rounded-2xl p-4 border border-[var(--line)] space-y-2.5">
                  <h4 className="text-xs font-bold text-[var(--forest)] flex items-center gap-1.5">
                    <CheckIcon className="w-4 h-4 text-[var(--green)]" />
                    Guaranteed Supply &amp; Support
                  </h4>
                  <ul className="text-xs text-[var(--muted)] space-y-1.5 pl-1">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--green)] mt-1.5 flex-shrink-0" />
                      <span>Direct distribution for industrial, automotive &amp; woodworking operations.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--green)] mt-1.5 flex-shrink-0" />
                      <span>Technical information, data sheets and variant guidance upon request.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--green)] mt-1.5 flex-shrink-0" />
                      <span>Flexible stock planning and reliable delivery options.</span>
                    </li>
                  </ul>
                </div>

                <div className="text-[11px] text-[var(--muted)] bg-[#eef8ed]/60 p-3 rounded-xl border border-[#dce9df]">
                  Contact ADCOMAX to verify current stock, bulk packaging units, and customized sizes.
                </div>
              </div>

              {/* Sticky Bottom Action Footer */}
              <div className="p-4 md:p-6 bg-white border-t border-[var(--line)] flex items-center gap-3">
                <motion.button
                  type="button"
                  onClick={handleEnquireClick}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn btn-primary flex-1 justify-center py-3 text-sm font-bold shadow-md hover:shadow-lg"
                >
                  Enquire about this product <ArrowUpRightIcon className="w-4 h-4 inline ml-1" />
                </motion.button>
                <motion.button
                  type="button"
                  onClick={onClose}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn btn-light px-5 py-3 text-sm font-bold"
                >
                  Close
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;