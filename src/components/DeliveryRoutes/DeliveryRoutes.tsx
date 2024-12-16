import React from 'react';
import { Train, Truck, Plane, Ship } from 'lucide-react';

interface RouteCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  price: string;
  term: string;
  recommended?: boolean;
}

const RouteCard: React.FC<RouteCardProps> = ({
  icon,
  title,
  description,
  price,
  term,
  recommended
}) => (
  <div className="relative bg-[#D4B483] rounded-lg p-6 text-center">
    <div className="flex justify-center mb-4 text-[#2C3E50]">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2 text-[#2C3E50]">{title}</h3>
    <p className="text-[#2C3E50] mb-4">{description}</p>
    <p className="font-bold text-lg mb-2">{price}</p>
    <div className="bg-[#C19B6C] p-3 rounded-b-lg mt-4">
      <p className="font-bold">Срок:</p>
      <p className="italic">{term}</p>
    </div>
    {recommended && (
      <div className="absolute -top-3 right-4 bg-[#FF6B4A] text-white px-3 py-1 rounded-full text-sm">
        РЕКОМЕНДУЕМ
      </div>
    )}
  </div>
);

const DeliveryRoutes: React.FC = () => {
  const routes = [
    {
      icon: <Train className="w-12 h-12" />,
      title: "Железная дорога",
      description: "Дешево возить одежду",
      price: "От 2,2$ за кг",
      term: "от 25 дней*"
    },
    {
      icon: <Truck className="w-12 h-12" />,
      title: "Быстрое авто",
      description: "Средний по скорости и цене",
      price: "От 2$ за кг",
      term: "от 10 дней*",
      recommended: true
    },
    {
      icon: <Truck className="w-12 h-12" />,
      title: "Медленное авто",
      description: "Дешево и медленно",
      price: "От 1$ за кг",
      term: "от 20 дней*"
    },
    {
      icon: <Plane className="w-12 h-12" />,
      title: "Авиатранспорт",
      description: "Максимально быстро и дорого",
      price: "От 18$ за кг",
      term: "от 3-5 дней*"
    },
    {
      icon: <Ship className="w-12 h-12" />,
      title: "Морской транспорт",
      description: "Недорого и официально, но долго",
      price: "От 1$ за кг",
      term: "от 35 дней*"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#2C3E50]">
          МАРШРУТЫ, СРОКИ, ТАРИФЫ ДОСТАВКИ ИЗ КИТАЯ
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {routes.map((route, index) => (
            <RouteCard key={index} {...route} />
          ))}
        </div>
        <p className="text-sm text-gray-600 mt-8 text-center italic">
          *Сроки доставки меняются. Быстрее всего грузы приходят летом, дольше всего — зимой, до и после Китайского Нового года. Точный срок доставки подскажет менеджер.
        </p>
        <div className="text-center mt-8">
          <a
            href="https://wa.me/79620394784"
            className="inline-block bg-[#FF6B4A] hover:bg-[#FF5B3A] text-white px-8 py-4 rounded-lg font-semibold transition-colors"
          >
            ПОДБЕРИТЕ МНЕ ВЫГОДНЫЙ МАРШРУТ
          </a>
        </div>
      </div>
    </section>
  );
};

export default DeliveryRoutes;