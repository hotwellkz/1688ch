import React from 'react';
import ProcessStep from './ProcessStep';
import InsuranceCard from './InsuranceCard';
import { processSteps } from '../../data/processSteps';

const ProcessSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#2C3E50]">
          Как мы помогаем купить товар на 1688
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {processSteps.map((step, index) => (
            <ProcessStep
              key={index}
              number={index + 1}
              title={step.title}
              description={step.description}
            />
          ))}
          <InsuranceCard />
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;