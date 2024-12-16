import React from 'react';
import { User, Users } from 'lucide-react';
import ComparisonSide from './ComparisonSide';
import { ComparisonBlockProps } from './types';

const ComparisonBlock: React.FC<ComparisonBlockProps> = ({ title, selfText, assistedText }) => {
  return (
    <div className="bg-[#ECF0F1] rounded-lg p-6 mb-6">
      <h3 className="text-2xl font-bold mb-4 text-[#2C3E50]">{title}</h3>
      <div className="grid md:grid-cols-2 gap-4">
        <ComparisonSide
          icon={User}
          title="ПОКУПАЕТЕ САМИ"
          text={selfText}
          variant="self"
        />
        <ComparisonSide
          icon={Users}
          title="С ПОМОЩЬЮ CHINATODAY"
          text={assistedText}
          variant="assisted"
        />
      </div>
    </div>
  );
};

export default ComparisonBlock;