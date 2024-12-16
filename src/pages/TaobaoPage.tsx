import React from 'react';
import { ShoppingBag, Globe, CreditCard, Truck, Shield } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HowItWorks from '../components/HowItWorks';
import DeliveryRoutes from '../components/DeliveryRoutes';
import BusinessDevelopment from '../components/BusinessDevelopment';
import FAQ from '../components/FAQ';

const TaobaoPage: React.FC = () => {
  const features = [
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Русский интерфейс",
      description: "Удобный перевод всех разделов сайта и описаний товаров"
    },
    {
      icon: <ShoppingBag className="w-12 h-12" />,
      title: "Огромный выбор товаров",
      description: "Миллионы товаров от надежных китайских продавцов"
    },
    {
      icon: <CreditCard className="w-12 h-12" />,
      title: "Безопасные платежи",
      description: "Оплата в рублях с защитой покупателя"
    },
    {
      icon: <Truck className="w-12 h-12" />,
      title: "Быстрая доставка",
      description: "Доставка из Китая за 2-3 недели"
    }
  ];

  const taobaoFaqs = [
    {
      question: "Как покупать на Taobao с помощью ChinaToday?",
      answer: "Просто отправьте нам ссылку на товар, мы поможем с оформлением заказа и доставкой."
    },
    {
      question: "Какие гарантии вы предоставляете?",
      answer: "Мы проверяем товары перед отправкой и предоставляем гарантию возврата средств."
    },
    {
      question: "Сколько стоит доставка с Taobao?",
      answer: "Стоимость доставки рассчитывается индивидуально в зависимости от веса и габаритов товара."
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
              Taobao на русском языке
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Покупайте товары с Taobao через надежного посредника. Мы поможем с переводом, 
              оформлением заказа и доставкой в Россию.
            </p>
            <a 
              href="https://wa.me/79620394784"
              className="inline-block bg-[#25D366] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#128C7E] transition-colors"
            >
              Начать покупки на Taobao
            </a>
          </div>
        </section>

        <HowItWorks />
        <BusinessDevelopment />
        <DeliveryRoutes />

        {/* Benefits */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1512418490979-92798cec1380?auto=format&fit=crop&w=800&q=80"
                  alt="Закупка товаров"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-[#2C3E50] mb-3">
                  Закупайте товары на Таобао по выгодной цене
                </h3>
                <p className="text-gray-600">
                  Проверим надежность поставщиков, у которых вы хотите купить товар. Или найдем предложения лучше.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&w=800&q=80"
                  alt="Оплата"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-[#2C3E50] mb-3">
                  Оплачивайте рублями
                </h3>
                <p className="text-gray-600">
                  Вам не придется искать серые схемы по переводу денег в Китай. Оплачивайте товар рублями на р/с российской компании, в офисе или представителю.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=800&q=80"
                  alt="Доставка"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-[#2C3E50] mb-3">
                  Гарантированно получайте груз в товарном виде
                </h3>
                <p className="text-gray-600">
                  Проверим товар перед отправкой в РФ на своем складе в Китае и надежно упакуем. Заключим договор, по которому мы гарантируем: вы получите ровно тот товар, что заказали.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#2C3E50]">
              Преимущества покупок на Taobao с нами
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

        {/* FAQ Section */}
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default TaobaoPage;