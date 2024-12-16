import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ComparisonBlock from './components/ComparisonBlock';
import ProcessSection from './components/ProcessSection';
import Benefits from './components/Benefits';
import FAQ from './components/FAQ';
import DeliveryPricing from './components/DeliveryPricing';
import DeliveryInfo from './components/DeliveryInfo';
import Footer from './components/Footer';
import { comparisons } from './data/comparisons';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const App: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <main>
        <Benefits />
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#2C3E50]">
            Почему выгодно работать с нами
          </h2>
          <div className="space-y-8">
            {comparisons.map((comparison, index) => (
              <ComparisonBlock key={index} {...comparison} />
            ))}
          </div>
        </section>
        <ProcessSection />
        <DeliveryPricing />
        <FAQ />
        <DeliveryInfo />
      </main>
      <Footer />
    </div>
  );
};

export default App;