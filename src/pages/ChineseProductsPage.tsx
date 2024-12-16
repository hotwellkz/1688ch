import React from 'react';
import { ShoppingBag, Package, Shield, Truck, Search, Tags, Smartphone, Gift } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HowItWorks from '../components/HowItWorks';
import DeliveryRoutes from '../components/DeliveryRoutes';
import BusinessDevelopment from '../components/BusinessDevelopment';
import FAQ from '../components/FAQ';

const ChineseProductsPage: React.FC = () => {
  const marketplaces = [
    {
      icon: <ShoppingBag className="w-16 h-16" />,
      title: "1688.com",
      description: "Оптовые закупки напрямую от производителей"
    },
    {
      icon: <Package className="w-16 h-16" />,
      title: "Taobao",
      description: "Огромный выбор товаров для розничных покупок"
    },
    {
      icon: <Gift className="w-16 h-16" />,
      title: "Temu",
      description: "Популярные товары по выгодным ценам"
    }
  ];

  const categories = [
    {
      image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=800&q=80",
      title: "Одежда и обувь",
      items: ["Женская одежда", "Мужская одежда", "Детская одежда", "Обувь"]
    },
    {
      image: "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=800&q=80",
      title: "Электроника",
      items: ["Смартфоны", "Аксессуары", "Компьютеры", "Бытовая техника"]
    },
    {
      image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80",
      title: "Товары для дома",
      items: ["Мебель", "Декор", "Текстиль", "Освещение"]
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
              Товары из Китая на русском языке
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Поможем найти, купить и доставить любые товары из Китая. Работаем с популярными 
              площадками, предоставляем полный спектр услуг по доставке и оформлению.
            </p>
            <a 
              href="https://wa.me/79620394784"
              className="inline-block bg-[#25D366] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#128C7E] transition-colors"
            >
              Заказать товары из Китая
            </a>
          </div>
        </section>

        {/* Marketplaces */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#2C3E50]">
              Популярные торговые площадки
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {marketplaces.map((marketplace, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-md text-center">
                  <div className="text-[#3498DB] mb-4 flex justify-center">
                    {marketplace.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#2C3E50] mb-3">
                    {marketplace.title}
                  </h3>
                  <p className="text-gray-600">{marketplace.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#2C3E50]">
              Категории товаров
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#2C3E50] mb-4">
                      {category.title}
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      {category.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-[#3498DB] rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
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

export default ChineseProductsPage;