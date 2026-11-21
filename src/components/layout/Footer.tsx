import React from 'react';
import { motion } from 'framer-motion';
import { COMPANY_INFO, NAV_LINKS } from '../../data/content';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="site-container">
        <div className="footer-top">
          <div>
            <motion.a
              className="brand"
              href="#home"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="brand-mark">A</span>
              <span>
                {COMPANY_INFO.name}
                <small>ENTERPRISES PRIVATE LIMITED</small>
              </span>
            </motion.a>
            <p className="footer-copy">
              Industrial, automotive and woodworking product distribution with a focus on customer
              requirements and support.
            </p>
          </div>

          <div className="footer-links">
            {NAV_LINKS.filter((item) => item.href !== '#home').map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                whileHover={{ y: -2, color: 'var(--mint)' }}
                transition={{ duration: 0.15 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {currentYear} {COMPANY_INFO.legalName}. All rights reserved.
          </span>
          <span>Thiruvallur, Tamil Nadu, India</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
