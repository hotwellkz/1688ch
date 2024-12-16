import React from 'react';
import { Package, Shield, Clock, TrendingUp } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HowItWorks from '../components/HowItWorks';
import DeliveryRoutes from '../components/DeliveryRoutes';
import BusinessDevelopment from '../components/BusinessDevelopment';
import FAQ from '../components/FAQ';

const DeliveryPage: React.FC = () => {
  const benefits = [
    {
      icon: <Package className="w-16 h-16" />,
      title: "Доставка любых грузов",
      description: "От мелких посылок до крупных партий товара. Работаем с физическими и юридическими лицами."
    },
    {
      icon: <Shield className="w-16 h-16" />,
      title: "Гарантия сохранности",
      description: "Страхуем все грузы. Возмещаем полную стоимость в случае утери или повреждения."
    },
    {
      icon: <Clock className="w-16 h-16" />,
      title: "Оптимальные сроки",
      description: "Подбираем самый быстрый маршрут доставки под ваш бюджет и требования."
    },
    {
      icon: <TrendingUp className="w-16 h-16" />,
      title: "Выгодные тарифы",
      description: "Работаем напрямую с перевозчиками, предлагаем лучшие цены на рынке."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#2C3E50] to-[#3498DB] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Доставка товаров из Китая
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Надежная и быстрая доставка грузов из Китая в Россию. Полное таможенное оформление,
              страховка груза и гарантия сроков доставки.
            </p>
            <a 
              href="https://wa.me/79620394784"
              className="inline-block bg-[#25D366] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#128C7E] transition-colors"
            >
              Рассчитать стоимость доставки
            </a>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#2C3E50]">
              Преимущества доставки с ChinaToday
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="text-[#3498DB] mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#2C3E50] mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <HowItWorks />
        <BusinessDevelopment />
        <DeliveryRoutes />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default DeliveryPage;