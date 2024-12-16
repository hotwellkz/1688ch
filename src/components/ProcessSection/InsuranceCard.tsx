import React from 'react';
import { Shield } from 'lucide-react';

const InsuranceCard: React.FC = () => {
  return (
    <div className="bg-[#3498DB] text-white rounded-lg p-6 shadow-md">
      <div className="flex items-center gap-3 mb-4">
        <Shield className="w-8 h-8" />
        <h3 className="text-xl font-bold">Страхуем ваш товар</h3>
      </div>
      <p>
        Мы вернем деньги за товар, если во время доставки с ним что-либо случится.
      </p>
    </div>
  );
}

export default InsuranceCard;