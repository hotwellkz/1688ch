import React from 'react';
import { ComparisonSideProps } from './types';

const ComparisonSide: React.FC<ComparisonSideProps> = ({ icon: Icon, title, text, variant }) => {
  const bgColor = variant === 'self' ? 'bg-[#E74C3C]' : 'bg-[#27AE60]';
  
  return (
    <div className={`${bgColor} text-white p-4 rounded-lg`}>
      <div className="flex items-center gap-2 mb-2">
        <Icon className="w-5 h-5" />
        <span className="font-semibold">{title}</span>
      </div>
      <p>{text}</p>
    </div>
  );
};

export default ComparisonSide;