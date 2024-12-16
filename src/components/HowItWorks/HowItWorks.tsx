import React from 'react';
import { MessageSquare, Warehouse, Package, Truck } from 'lucide-react';

interface StepProps {
  icon: React.ReactNode;
  title: string;
  isLast?: boolean;
}

const Step: React.FC<StepProps> = ({ icon, title, isLast }) => (
  <div className="flex flex-col items-center text-center relative flex-1">
    <div className="w-16 h-16 flex items-center justify-center text-[#3498DB] mb-4">
      {icon}
    </div>
    <p className="text-[#2C3E50] font-medium max-w-[200px]">{title}</p>
    {!isLast && (
      <div className="hidden md:block absolute top-8 left-[60%] w-full h-[2px] bg-[#FFB800]">
        <div className="absolute right-0 top-1/2 -mt-1.5 w-3 h-3 transform rotate-45 border-t-2 border-r-2 border-[#FFB800]" />
      </div>
    )}
  </div>
);

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <MessageSquare className="w-12 h-12" />,
      title: "Найдём поставщиков и закупим у них товар"
    },
    {
      icon: <Warehouse className="w-12 h-12" />,
      title: "Получим товар на своем складе в Иу. Проверим качество"
    },
    {
      icon: <Package className="w-12 h-12" />,
      title: "Переупакуем, чтобы груз доехал в товарном виде"
    },
    {
      icon: <Truck className="w-12 h-12" />,
      title: "Доставим груз в любой город России"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#2C3E50]">
          КАК ЭТО РАБОТАЕТ
        </h2>
        <div className="flex flex-col md:flex-row gap-8 md:gap-4">
          {steps.map((step, index) => (
            <Step
              key={index}
              icon={step.icon}
              title={step.title}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;