import React from 'react';
import { ShoppingBag, Globe, CreditCard, Truck, Shield } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HowItWorks from '../components/HowItWorks';
import DeliveryRoutes from '../components/DeliveryRoutes';
import BusinessDevelopment from '../components/BusinessDevelopment';
import FAQ from '../components/FAQ';

const Site1688Page: React.FC = () => {
  const features = [
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Русский интерфейс",
      description: "Помогаем с переводом и поиском товаров на 1688.com"
    },
    {
      icon: <ShoppingBag className="w-12 h-12" />,
      title: "Оптовые цены",
      description: "Прямые поставки от производителей по оптовым ценам"
    },
    {
      icon: <CreditCard className="w-12 h-12" />,
      title: "Безопасные платежи",
      description: "Оплата в рублях с полным документальным оформлением"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Гарантия качества",
      description: "Проверка товара перед отправкой и страховка груза"
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
              1688.com на русском языке
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Ваш надежный посредник для оптовых закупок на 1688.com. Поможем найти поставщиков,
              проверим качество товара и организуем доставку в Россию.
            </p>
            <a 
              href="https://wa.me/79620394784"
              className="inline-block bg-[#25D366] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#128C7E] transition-colors"
            >
              Начать работу с 1688
            </a>
          </div>
        </section>

        {/* Features */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#2C3E50]">
              Преимущества работы с 1688.com через нас
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="text-[#3498DB] mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#2C3E50] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
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

export default Site1688Page;