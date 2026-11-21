import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { COMPANY_INFO } from '../../data/content';
import type { ContactFormData } from '../../types';
import {
  CallIcon,
  EmailIcon,
  LocationIcon,
  ArrowUpRightIcon,
  CheckCircleIcon,
} from '@astraicons/react/linear';
import { fadeInLeft, fadeInRight, staggerContainer, staggerItem } from '../../lib/animations';

interface ContactProps {
  initialInterest?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialInterest = '' }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialInterest) {
      setFormData((prev) => ({
        ...prev,
        interest: initialInterest,
        message: prev.message || `I am interested in ${initialInterest}. Please share details and pricing.`,
      }));
    }
  }, [initialInterest]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      'Website enquiry - ' + (formData.interest || 'Product enquiry')
    );
    const body = encodeURIComponent(
      'Name: ' +
        formData.name +
        '\nCompany: ' +
        (formData.company || 'Not provided') +
        '\nEmail: ' +
        formData.email +
        '\nPhone: ' +
        formData.phone +
        '\nProduct/category: ' +
        (formData.interest || 'Not specified') +
        '\n\nRequirements:\n' +
        formData.message
    );

    window.location.href = `mailto:${COMPANY_INFO.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section className="site-section contact" id="contact">
      <div className="site-container contact-grid">
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          <div className="kicker">Get in touch</div>
          <h2 className="section-title">Let&apos;s discuss your requirements.</h2>
          <p className="section-intro" style={{ marginTop: '14px' }}>
            Contact {COMPANY_INFO.name} for product information and business enquiries.
          </p>

          <motion.div
            className="contact-details"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={staggerItem}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.15 }}
              className="contact-item"
            >
              <div className="ico" aria-hidden="true">
                <CallIcon className="w-4 h-4 text-[var(--green)]" />
              </div>
              <div>
                <strong>Phone</strong>
                <a href={COMPANY_INFO.phoneHref}>{COMPANY_INFO.phone}</a>
              </div>
            </motion.div>

            <motion.div
              variants={staggerItem}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.15 }}
              className="contact-item"
            >
              <div className="ico" aria-hidden="true">
                <EmailIcon className="w-4 h-4 text-[var(--green)]" />
              </div>
              <div>
                <strong>Email</strong>
                <a href={COMPANY_INFO.emailHref}>{COMPANY_INFO.email}</a>
              </div>
            </motion.div>

            <motion.div
              variants={staggerItem}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.15 }}
              className="contact-item"
            >
              <div className="ico" aria-hidden="true">
                <LocationIcon className="w-4 h-4 text-[var(--green)]" />
              </div>
              <div>
                <strong>Office address</strong>
                <span>
                  {COMPANY_INFO.fullAddress.map((line, idx) => (
                    <React.Fragment key={idx}>
                      {line}
                      {idx < COMPANY_INFO.fullAddress.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.form
          className="form"
          id="enquiryForm"
          onSubmit={handleSubmit}
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          <h3>Send an enquiry</h3>
          <p>Share your contact details and what you&apos;re looking for.</p>

          <AnimatePresence>
            {submitted && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                animate={{ opacity: 1, height: 'auto', marginBottom: 15 }}
                exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                style={{
                  background: '#eaf8e5',
                  border: '1px solid #c8e8d2',
                  color: 'var(--forest)',
                  padding: '10px 14px',
                  borderRadius: '10px',
                  fontSize: '12px',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <CheckCircleIcon className="w-4 h-4 text-[var(--green)]" />
                Opening your mail client with the enquiry details...
              </motion.div>
            )}
          </AnimatePresence>

          <div className="form-grid">
            <div className="field">
              <label htmlFor="name">Your name *</label>
              <input
                id="name"
                name="name"
                required
                placeholder="Full name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="field">
              <label htmlFor="company">Company name</label>
              <input
                id="company"
                name="company"
                placeholder="Company / organisation"
                value={formData.company}
                onChange={handleChange}
              />
            </div>

            <div className="field">
              <label htmlFor="email">Email address *</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@company.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="field">
              <label htmlFor="phone">Phone number *</label>
              <input
                id="phone"
                name="phone"
                required
                type="tel"
                placeholder="+91"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="field full">
              <label htmlFor="interest">Product / category of interest</label>
              <input
                id="interest"
                name="interest"
                placeholder="e.g. Abrasives, masking tape, polishing pads"
                value={formData.interest}
                onChange={handleChange}
              />
            </div>

            <div className="field full">
              <label htmlFor="message">Your requirements *</label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Tell us about the product, quantity or specifications you need..."
                value={formData.message}
                onChange={handleChange}
              />
            </div>
          </div>

          <motion.button
            className="btn btn-primary"
            type="submit"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15 }}
          >
            Prepare email enquiry <ArrowUpRightIcon className="w-3.5 h-3.5 inline ml-1" />
          </motion.button>
          <div className="form-note">
            This demo form opens your email application with the enquiry details. It does not store
            submissions online.
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
