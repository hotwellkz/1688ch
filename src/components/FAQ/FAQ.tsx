import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-gray-200 last:border-0">
    <button
      className="w-full py-6 flex justify-between items-center text-left"
      onClick={onClick}
    >
      <span className="text-lg font-semibold text-[#2C3E50]">{question}</span>
      {isOpen ? (
        <ChevronUp className="w-6 h-6 text-[#3498DB]" />
      ) : (
        <ChevronDown className="w-6 h-6 text-[#3498DB]" />
      )}
    </button>
    {isOpen && (
      <div className="pb-6">
        <p className="text-gray-600">{answer}</p>
      </div>
    )}
  </div>
);

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number>(0);

  const faqs = [
    {
      question: "Как начать работу с ChinaToday?",
      answer: "Отправьте нам ссылку на товар с 1688.com через WhatsApp или позвоните нам. Мы рассчитаем стоимость с учетом доставки и поможем оформить заказ."
    },
    {
      question: "Какие способы оплаты вы принимаете?",
      answer: "Мы принимаем оплату по безналичному расчету от юридических лиц с предоставлением всех необходимых документов."
    },
    {
      question: "Сколько времени занимает доставка?",
      answer: "Сроки доставки зависят от выбранного способа: авто 10-20 дней, авиа 3-5 дней, ж/д 60 дней, морем 35 дней."
    },
    {
      question: "Как проверяется качество товара?",
      answer: "Мы проводим фото и видео проверку товара на нашем складе в Китае перед отправкой в Россию."
    },
    {
      question: "Предоставляете ли вы документы для бухгалтерии?",
      answer: "Да, мы предоставляем полный пакет документов, включая торг-12 и счет-фактуру."
    },
    {
      question: "Что делать, если товар придет с браком?",
      answer: "Мы страхуем все грузы и возмещаем стоимость товара в случае брака по нашей вине."
    },
    {
      question: "Работаете ли вы с маленькими заказами?",
      answer: "Да, мы работаем с заказами любого объема, но рекомендуем оптовые закупки для большей выгоды."
    },
    {
      question: "Как отслеживать статус заказа?",
      answer: "Вы можете узнать статус заказа у вашего персонального менеджера по номеру заказа."
    },
    {
      question: "Помогаете ли вы с растаможкой груза?",
      answer: "Да, мы берем на себя все вопросы с таможенным оформлением груза."
    },
    {
      question: "Есть ли у вас минимальная сумма заказа?",
      answer: "Минимальная сумма заказа зависит от условий поставщика на 1688.com."
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#2C3E50]">
          Топ-10 вопросов о работе с нами
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={index === openIndex}
              onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;