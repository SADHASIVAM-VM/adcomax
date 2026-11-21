import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { COMPANY_INFO, NAV_LINKS } from '../../data/content';
import { MenuIcon, CloseIcon, CallOutgoingIcon } from '@astraicons/react/linear';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="nav-wrap">
      <nav className="site-container nav-container" aria-label="Main Navigation">
        <motion.a
          className="brand"
          href="#home"
          onClick={handleLinkClick}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="brand-mark">A</span>
          <span>
            {COMPANY_INFO.name}
            <small>ENTERPRISES PRIVATE LIMITED</small>
          </span>
        </motion.a>

        <div className="nav-links hidden md:flex" id="navLinks">
          {NAV_LINKS.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              whileHover={{ y: -2, color: 'var(--green)' }}
              transition={{ duration: 0.15 }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        <div className="flex gap-2 items-center">
          <motion.a
            className="btn btn-primary"
            href="tel:+918010661213"
            onClick={handleLinkClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Call ADCOMAX"
          >
            <CallOutgoingIcon className="w-5 h-5" />
          </motion.a>

          <div className="nav-actions">
            <motion.button
              className="menu-btn"
              id="menuBtn"
              aria-label="Toggle navigation"
              aria-expanded={mobileMenuOpen}
              onClick={toggleMobileMenu}
              type="button"
              whileTap={{ scale: 0.9 }}
            >
              {mobileMenuOpen ? (
                <CloseIcon className="w-5 h-5" />
              ) : (
                <MenuIcon className="w-5 h-5" />
              )}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Animated Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-[var(--paper)] border-b border-[var(--line)] shadow-lg px-6 py-4 flex flex-col gap-3 overflow-hidden"
          >
            {NAV_LINKS.map((link, idx) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.04 }}
                className="text-sm font-semibold text-[#45645a] hover:text-[var(--green)] py-1.5 border-b border-gray-100 last:border-0"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;