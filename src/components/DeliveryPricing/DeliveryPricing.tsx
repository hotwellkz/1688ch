import React from 'react';
import { Train, Truck, Plane, Ship } from 'lucide-react';
import DeliveryOption from './DeliveryOption';
import { deliveryOptions } from '../../data/deliveryOptions';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const DeliveryPricing: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#2C3E50]">
          Сколько стоит доставка
        </h2>
        <div className="space-y-4 overflow-x-hidden">
          {deliveryOptions.map((option, index) => {
            const IconComponent = {
              train: Train,
              truck: Truck,
              plane: Plane,
              ship: Ship
            }[option.iconType];

            return (
              <DeliveryOption
                key={index}
                icon={IconComponent}
                {...option}
              />
            );
          })}
        </div>
        <p className="text-gray-600 mt-8 text-center">
          Тарифы и сроки доставки примерные и зависят от ситуации на таможне. 
          Точную цену назовет менеджер, когда узнает, какой груз вы хотите привезти из Китая
        </p>
      </div>
    </section>
  );
};

export default DeliveryPricing;