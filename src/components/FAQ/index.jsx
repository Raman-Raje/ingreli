import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onToggle }) => (
  <div className="border-b border-teal-100">
    <button
      onClick={onToggle}
      className="w-full py-6 flex justify-between items-center text-left"
    >
      <h3 className="text-lg font-medium text-teal-800">{question}</h3>
      <ChevronDown 
        className={`text-teal-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        size={20}
      />
    </button>
    <div 
      className={`overflow-hidden transition-all duration-300 ${
        isOpen ? 'max-h-96 pb-6' : 'max-h-0'
      }`}
    >
      <p className="text-gray-600">{answer}</p>
    </div>
  </div>
);

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set());

  const faqData = [
    {
      id: 1,
      question: "How accurate is the ingredient scanning?",
      answer: "Our OCR technology provides industry-leading accuracy in ingredient detection and analysis."
    },
    {
      id: 2,
      question: "Can I use Ingreli for multiple family members?",
      answer: "Yes! You can create unique profiles for each family member with their specific dietary needs and preferences."
    },
    {
      id: 3,
      question: "Is my data safe with Ingreli?",
      answer: "We use bank-level encryption to protect your data and never share your personal information with third parties."
    },
    {
      id: 4,
      question: "What if I don't like the app? Can I cancel anytime?",
      answer: "Yes, you can cancel your subscription at any time with no questions asked."
    },
  ];

  const toggleItem = (id) => {
    setOpenItems(prev => {
      const newItems = new Set(prev);
      newItems.has(id) ? newItems.delete(id) : newItems.add(id);
      return newItems;
    });
  };

  return (
    <section className="bg-green-50 py-20">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-teal-800 text-center mb-12">
          Frequently asked questions
        </h2>
        <div className="space-y-2">
          {faqData.map(({ id, question, answer }) => (
            <FAQItem
              key={id}
              question={question}
              answer={answer}
              isOpen={openItems.has(id)}
              onToggle={() => toggleItem(id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
