import React from 'react';

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description }) => {
  return (
    <div className="relative flex gap-4 bg-white rounded-lg p-6 shadow-md">
      <div className="flex-shrink-0">
        <div className="w-10 h-10 bg-[#2C3E50] text-white rounded-full flex items-center justify-center font-bold">
          {number}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold text-[#2C3E50] mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default ProcessStep;