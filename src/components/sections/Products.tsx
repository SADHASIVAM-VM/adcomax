import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';
import ProductCard from '../common/ProductCard';
import ProductModal from '../common/ProductModal';
import { catalogueProducts } from '../../data/products';
import type { ProductItem } from '../../types';

interface ProductsProps {
  onRequestDetails?: (productTitle: string) => void;
  activeCategory?: string;
  onCategoryChange?: (category: string) => void;
}

export const Products: React.FC<ProductsProps> = ({
  onRequestDetails,
  activeCategory: controlledCategory,
  onCategoryChange,
}) => {
  const [internalCategory, setInternalCategory] = useState<string>('All');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  const selectedCategory = controlledCategory !== undefined ? controlledCategory : internalCategory;

  const handleSelectCategory = (category: string) => {
    if (onCategoryChange) {
      onCategoryChange(category);
    } else {
      setInternalCategory(category);
    }
  };

  const handleOpenModal = (product: ProductItem) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const handleModalEnquire = (productName: string) => {
    setSelectedProduct(null);
    if (onRequestDetails) {
      onRequestDetails(productName);
    }
  };

  // Compute category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: catalogueProducts.length };
    catalogueProducts.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Distinct category list
  const categories = useMemo(() => {
    const unique = Array.from(new Set(catalogueProducts.map((p) => p.category)));
    return ['All', ...unique];
  }, []);

  // Filter products
  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'All') {
      return catalogueProducts;
    }
    return catalogueProducts.filter(
      (p) => p.category.toLowerCase() === selectedCategory.toLowerCase()
    );
  }, [selectedCategory]);

  return (
    <section className="site-section products-section" id="product-list">
      <div className="site-container">
        <SectionHeader
          kicker="Product highlights"
          title="Explore selected products."
          intro="A selection from the supplied ADCOMAX catalogue. Click any product to view full details or filter by category below."
        />

        {/* Category Filter Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
              Filter by category:
            </span>
            <div className="text-xs text-[var(--muted)]">
              Showing <strong className="text-[var(--forest)]">{filteredProducts.length}</strong> of{' '}
              {catalogueProducts.length} products
            </div>
          </div>

          <div
            className="flex items-center gap-2 overflow-x-auto overflow-y-hidden no-scrollbar py-1.5 px-0.5"
            role="tablist"
            aria-label="Product categories"
          >
            {categories.map((category) => {
              const isSelected = selectedCategory.toLowerCase() === category.toLowerCase();
              const count = categoryCounts[category] || 0;

              return (
                <motion.button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => handleSelectCategory(category)}
                  whileHover={{ y: -1, scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer border shrink-0 whitespace-nowrap ${
                    isSelected
                      ? 'bg-[var(--forest)] text-white border-[var(--forest)] shadow-sm'
                      : 'bg-white text-[var(--ink)] border-[var(--line)] hover:border-[var(--green)] hover:bg-[#f6faf6]'
                  }`}
                >
                  <span className="whitespace-nowrap text-xs">{category}</span>
                  <span
                    className={`inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 text-[10px] font-extrabold rounded-full transition-colors shrink-0 ${
                      isSelected
                        ? 'bg-[var(--lime)] text-[var(--teal)]'
                        : 'bg-[#eaf4ec] text-[var(--forest)]'
                    }`}
                  >
                    {count}
                  </span>
                </motion.button>
              );
            })}
          </div>

          {selectedCategory !== 'All' && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 mt-2 pt-2 border-t border-dashed border-[var(--line)]"
            >
              <span className="text-xs text-[var(--muted)]">
                Active filter: <strong className="text-[var(--forest)]">{selectedCategory}</strong>
              </span>
              <motion.button
                type="button"
                onClick={() => handleSelectCategory('All')}
                whileTap={{ scale: 0.94 }}
                className="text-xs font-bold text-[var(--green)] hover:underline ml-2 cursor-pointer"
              >
                Reset to all
              </motion.button>
            </motion.div>
          )}
        </div>

        {/* Products Grid with Layout Animation */}
        {filteredProducts.length > 0 ? (
          <motion.div layout className="product-grid">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((prod) => (
                <ProductCard
                  key={prod.id}
                  product={prod}
                  onRequestDetails={onRequestDetails}
                  onOpenModal={handleOpenModal}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16 px-4 bg-[#f8fbf7] rounded-2xl border border-[var(--line)]"
          >
            <p className="text-sm text-[var(--muted)] mb-3">
              No products found in this category.
            </p>
            <motion.button
              type="button"
              className="btn btn-primary text-xs"
              onClick={() => handleSelectCategory('All')}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
            >
              View all products
            </motion.button>
          </motion.div>
        )}

        {/* Product Details Pop-up Modal */}
        <ProductModal
          product={selectedProduct}
          isOpen={Boolean(selectedProduct)}
          onClose={handleCloseModal}
          onEnquire={handleModalEnquire}
        />
      </div>
    </section>
  );
};

export default Products;
