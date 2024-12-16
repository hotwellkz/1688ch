import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Footer: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <footer className="bg-[#2C3E50] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Контакты */}
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <div className="space-y-3">
              <a href="tel:+78007758879" className="flex items-center gap-2 hover:text-[#3498DB]">
                <Phone className="w-5 h-5" />
                <span>8 (800) 775-88-79</span>
              </a>
              <a href="https://wa.me/79620394784" className="flex items-center gap-2 hover:text-[#25D366]">
                <Mail className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Услуги */}
          <div>
            <h3 className="text-xl font-bold mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-[#3498DB]">
                  Посредник 1688
                </Link>
              </li>
              <li>
                <Link to="/taobao" className="hover:text-[#3498DB]">
                  Taobao на русском
                </Link>
              </li>
              <li>
                <Link to="/1688" className="hover:text-[#3498DB]">
                  1688 на русском
                </Link>
              </li>
              <li>
                <Link to="/temu" className="hover:text-[#3498DB]">
                  Temu на русском
                </Link>
              </li>
              <li>
                <Link to="/delivery" className="hover:text-[#3498DB]">
                  Доставка из Китая
                </Link>
              </li>
              <li>
                <Link to="/pinduoduo" className="hover:text-[#3498DB]">
                  Пиндуодуо на русском
                </Link>
              </li>
              <li>
                <Link to="/products-1688" className="hover:text-[#3498DB]">
                  Товары 1688
                </Link>
              </li>
              <li>
                <Link to="/chinese-products" className="hover:text-[#3498DB]">
                  Товары с китая на русском
                </Link>
              </li>
            </ul>
          </div>

          {/* О компании */}
          <div>
            <h3 className="text-xl font-bold mb-4">О компании</h3>
            <p className="text-gray-300 mb-4">
              ChinaToday - ваш надежный посредник для покупок в Китае с 2014 года. 
              Мы помогаем клиентам покупать товары на площадках 1688 и Taobao.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} ChinaToday. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;