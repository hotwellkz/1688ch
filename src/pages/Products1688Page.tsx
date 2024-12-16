import React from 'react';
import { Package, ShieldCheck, Truck, Search, Tags, Clock } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HowItWorks from '../components/HowItWorks';
import DeliveryRoutes from '../components/DeliveryRoutes';
import BusinessDevelopment from '../components/BusinessDevelopment';
import FAQ from '../components/FAQ';

const Products1688Page: React.FC = () => {
  const categories = [
    {
      icon: <Package className="w-12 h-12" />,
      title: "Одежда и текстиль",
      description: "Оптовые поставки одежды, тканей и текстильных изделий"
    },
    {
      icon: <Tags className="w-12 h-12" />,
      title: "Электроника",
      description: "Гаджеты, комплектующие и электронные компоненты"
    },
    {
      icon: <Search className="w-12 h-12" />,
      title: "Товары для дома",
      description: "Мебель, декор, хозяйственные товары"
    }
  ];

  const benefits = [
    {
      icon: <ShieldCheck className="w-16 h-16" />,
      title: "Проверка качества",
      description: "Тщательный контроль каждой партии товара перед отправкой"
    },
    {
      icon: <Truck className="w-16 h-16" />,
      title: "Быстрая доставка",
      description: "Оптимальные маршруты доставки с учетом специфики товара"
    },
    {
      icon: <Clock className="w-16 h-16" />,
      title: "Актуальные цены",
      description: "Постоянный мониторинг цен и выбор лучших предложений"
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
              Товары с 1688.com по оптовым ценам
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Поможем найти и привезти любые товары с площадки 1688. Гарантия качества,
              проверка товара, надежная доставка.
            </p>
            <a 
              href="https://wa.me/79620394784"
              className="inline-block bg-[#25D366] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#128C7E] transition-colors"
            >
              Заказать товары с 1688
            </a>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#2C3E50]">
              Популярные категории товаров
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-md">
                  <div className="text-[#3498DB] mb-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#2C3E50] mb-3">
                    {category.title}
                  </h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#2C3E50]">
              Преимущества заказа товаров с нами
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center">
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

export default Products1688Page;