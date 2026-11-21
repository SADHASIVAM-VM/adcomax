import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnnouncementBar from '../components/layout/AnnouncementBar';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import Stats from '../components/sections/Stats';
import Categories from '../components/sections/Categories';
import About from '../components/sections/About';
import Products from '../components/sections/Products';
import Industries from '../components/sections/Industries';
import Services from '../components/sections/Services';
import CtaBanner from '../components/sections/CtaBanner';
import Contact from '../components/sections/Contact';
import { WhatsappIcon } from '@astraicons/react/brand';

export const Index: React.FC = () => {
  const [selectedInterest, setSelectedInterest] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const handleRequestDetails = (productTitle: string) => {
    setSelectedInterest(productTitle);
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategory = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--paper)] text-[var(--ink)]">
      <AnnouncementBar />
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <Stats />
        <Categories onSelectCategory={handleSelectCategory} />
        <About />
        <Products
          onRequestDetails={handleRequestDetails}
          activeCategory={activeCategory}
          onCategoryChange={handleSelectCategory}
        />
        <Industries />
        <Services />
        <CtaBanner />
        <Contact initialInterest={selectedInterest} />
      </main>

      {/* Floating Instant Procurement WhatsApp Trigger */}
      <motion.div
        className="fixed right-5 bottom-5 z-50 group"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, type: 'spring', stiffness: 260, damping: 20 }}
      >
        <a
          href="https://wa.me/918248586299?text=Hi I'm interested in your Products."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Direct WhatsApp Procurement Chat"
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-2xl transition-transform hover:scale-108"
        >
          <WhatsappIcon className="w-8 h-8" />
          
          {/* Subtle pulse ring */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping -z-10" />

          {/* Hover Tooltip */}
          <span className="absolute right-16 px-3 py-1.5 rounded-xl bg-gray-900 text-white text-[11px] font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
            Chat on WhatsApp
          </span>
        </a>
      </motion.div>

      <Footer />
    </div>
  );
};

export default Index;
