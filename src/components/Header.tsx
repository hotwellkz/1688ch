import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-[#2C3E50] text-white py-4 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-0">
          Посредник 1688
        </h1>
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <a 
            href="tel:+78007758879"
            className="flex items-center gap-2 hover:text-[#3498DB] transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span>8 (800) 775-88-79</span>
          </a>
          <a 
            href="https://wa.me/79620394784"
            className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-lg hover:bg-[#128C7E] transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}