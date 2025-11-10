import React from 'react';
import { TelegramIcon } from './Icons';

const TelegramButton: React.FC = () => {
  const telegramUrl = `https://t.me/allnewteenpatti`;

  return (
    <a
      href={telegramUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-40 sm:bottom-24 right-4 bg-blue-500 text-white rounded-full p-4 shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-transform transform hover:scale-110 z-40"
      aria-label="Join on Telegram"
    >
      <TelegramIcon className="w-8 h-8" />
    </a>
  );
};

export default TelegramButton;