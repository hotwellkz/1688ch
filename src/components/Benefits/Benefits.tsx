import React from 'react';
import { Package, HandshakeIcon, Clock, Shield } from 'lucide-react';

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Benefit: React.FC<BenefitProps> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
    <div className="text-[#FFB800] mb-4 w-16 h-16">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-[#2C3E50] mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <Package className="w-16 h-16" />,
      title: "Берем на себя хлопоты по поставке груза",
      description: "Поиск товара и поставщика, переговоры, выкуп, проверку, документацию и доставку — карго и «в белую»"
    },
    {
      icon: <HandshakeIcon className="w-16 h-16" />,
      title: "Умеем договариваться с китайскими производителями",
      description: "Знаем, как вам сэкономить, закупаясь в Китае"
    },
    {
      icon: <Clock className="w-16 h-16" />,
      title: "Возим с 1688 с 2014 года",
      description: "80% клиентов становятся постоянными"
    },
    {
      icon: <Shield className="w-16 h-16" />,
      title: "Страхуем ваш товар из собственного резервного фонда",
      description: "Если по нашей вине что-то пойдет не так, то возвращаем деньги"
    }
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#2C3E50]">
          Почему покупать на 1688 выгодно с ChinaToday
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Benefit key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;