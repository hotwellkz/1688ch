import React from 'react';
import { DeliveryOptionProps } from '../../types/delivery';

const DeliveryOption: React.FC<DeliveryOptionProps> = ({
  icon: Icon,
  title,
  description,
  duration,
  price,
  recommended
}) => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 bg-white rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex-shrink-0 text-gray-600 mb-2 md:mb-0">
        <Icon className="w-8 h-8" />
      </div>
      <div className="flex-grow w-full">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-3">
          <h3 className="text-xl font-bold text-[#2C3E50]">{title}</h3>
          {recommended && (
            <span className="bg-[#3498DB] text-white text-xs md:text-sm px-2 md:px-3 py-1 rounded-full whitespace-nowrap">
              РЕКОМЕНДУЕМ
            </span>
          )}
        </div>
        <div className="text-gray-600 mt-2 text-sm md:text-base">{description}</div>
        <div className="text-gray-700 mt-1 text-sm md:text-base">{duration}</div>
      </div>
      <div className="flex-shrink-0 text-right mt-2 md:mt-0 w-full md:w-auto">
        <div className="text-lg font-semibold text-[#2C3E50]">{price}</div>
      </div>
    </div>
  );
};

export default DeliveryOption;