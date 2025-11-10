import React from 'react';
import { WhatsappIcon } from './Icons';

const WhatsAppButton: React.FC = () => {
  // Replace with a real WhatsApp number in international format, e.g., 15551234567
  const phoneNumber = '1234567890';
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 sm:bottom-4 right-4 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-transform transform hover:scale-110 z-40"
      aria-label="Contact on WhatsApp"
    >
      <WhatsappIcon className="w-8 h-8" />
    </a>
  );
};

export default WhatsAppButton;