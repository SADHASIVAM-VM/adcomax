import React, { useState } from 'react';
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
    <div className="min-h-screen flex flex-col">
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

      <div className=" fixed right-4 bottom-4 bg-primary rounded-full p-2 z-50 cursor-pointer hover:scale-110 transition-all">
        <a href="https://wa.me/918248586299?text=Hi I'm interested in your Products." target="_blank" rel="noopener">
          <WhatsappIcon className='w-12 h-12' />
        </a>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
