import React from 'react';
import { Play } from 'lucide-react';

const DeliveryInfo: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#2C3E50]">
          Доставим ваш груз в товарном виде
        </h2>
        
        <div className="bg-[#FFD7CC] rounded-2xl p-6 md:p-8 mb-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <p className="text-lg mb-4">
                <strong>Мы переупакуем товар так, чтобы ничего не промокло и не побилось.</strong>{' '}
                Тонкие коробки заменим плотным картоном.
              </p>
              <p className="text-lg">
                В пустоты доложим пупырчатую плёнку. Каждую коробку дважды обмотаем водонепроницаемым скотчем. Поставим уголки, чтобы ничего не помялось.
              </p>
            </div>
            
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative rounded-lg overflow-hidden">
                <img 
                  src="https://chinatoday.ru/wp-content/themes/chinatoday/images/h_red_sklad.png" 
                  alt="Коробки от поставщика" 
                  className="w-full h-64 object-cover"
                />
                <span className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-medium">
                  Коробки от поставщика
                </span>
              </div>
              <div className="relative rounded-lg overflow-hidden">
                <img 
                  src="https://chinatoday.ru/wp-content/themes/chinatoday/images/h_red_sklad.png" 
                  alt="Процесс упаковки" 
                  className="w-full h-64 object-cover"
                />
                <span className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-medium">
                  Второй слой скотча клеим сверху
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <a
            href="https://wa.me/79620394784"
            className="inline-block bg-[#FF7B5C] hover:bg-[#FF6B4A] text-white text-lg font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            ОСТАВИТЬ ЗАЯВКУ НА ДОСТАВКУ
          </a>
        </div>
      </div>
    </section>
  );
};

export default DeliveryInfo;