import React from 'react';
import { ClipboardCheck, Headphones, Monitor } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center">
    <div className="w-24 h-24 mb-6 text-[#3498DB]">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-4 text-[#2C3E50]">{title}</h3>
    <div className="text-gray-600">{description}</div>
  </div>
);

const BusinessDevelopment: React.FC = () => {
  const features = [
    {
      icon: <ClipboardCheck className="w-full h-full" />,
      title: "ВЭД под ключ",
      description: (
        <>
          <p className="mb-4">
            В штате работают переводчики и специалисты по ВЭД с опытом{' '}
            <strong>от 5 лет</strong>.
          </p>
          <p>
            Помогут общаться с китайскими поставщиками, найдут фабрику для производства и защитят бренд в Китае.
          </p>
        </>
      )
    },
    {
      icon: <Headphones className="w-full h-full" />,
      title: "Личный ассистент",
      description: (
        <ul className="text-left space-y-3">
          <li>• ответит на все вопросы в течение часа</li>
          <li>• на связи по почте и в Телеграме</li>
          <li>• подберет выгодную логистику под каждый товар</li>
          <li>• проконтролирует, чтобы вы получили нужный товар</li>
        </ul>
      )
    },
    {
      icon: <Monitor className="w-full h-full" />,
      title: "Решение задачи в оговоренный срок",
      description: (
        <>
          <p className="mb-4">
            Уже на первой консультации мы оценим задачу и назовем сроки для ее решения.
          </p>
          <p className="mb-4">
            Гарантируем договором, что вы получите товар в оговоренный срок.
          </p>
          <p>
            Есть чат клиентов, который регулярно мониторит руководство. Срочные вопросы решаются даже в выходные.
          </p>
        </>
      )
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#2C3E50]">
          С CHINATODAY ВЫ ЗАНИМАЕТЕСЬ РАЗВИТИЕМ БИЗНЕСА, А НЕ РУТИНОЙ
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessDevelopment;