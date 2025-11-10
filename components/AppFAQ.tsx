import React, { useState } from 'react';
import { FAQ } from '../types';

interface AppFAQProps {
    faqs: FAQ[];
}

const FAQItem: React.FC<{ faq: FAQ, isOpen: boolean, onClick: () => void }> = ({ faq, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-200">
            <button
                onClick={onClick}
                className="w-full flex justify-between items-center text-left py-4 px-2 hover:bg-gray-50 focus:outline-none"
                aria-expanded={isOpen}
            >
                <h3 className="font-semibold text-gray-800">{faq.q}</h3>
                <svg
                    className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </button>
            {isOpen && (
                <div className="p-4 pt-0 text-gray-600" dangerouslySetInnerHTML={{ __html: faq.a }}>
                </div>
            )}
        </div>
    )
}

const AppFAQ: React.FC<AppFAQProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-10 border-t pt-6">
      <h2 className="text-2xl font-bold text-center text-[#0f2e5c] mb-4">Frequently Asked Questions</h2>
      <div className="border border-gray-200 rounded-lg">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            faq={faq}
            isOpen={openIndex === index}
            onClick={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default AppFAQ;