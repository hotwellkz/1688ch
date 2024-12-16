import React from 'react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-[#2C3E50] to-[#3498DB] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Надежный посредник для покупок на 1688.com
          </h1>
          <p className="text-xl mb-8">
            Профессиональная помощь в закупках товаров из Китая с гарантией качества и безопасной оплатой
          </p>
          <a 
            href="https://wa.me/79620394784"
            className="inline-block bg-[#25D366] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#128C7E] transition-colors"
          >
            Получить консультацию
          </a>
        </div>
      </div>
    </section>
  );
}