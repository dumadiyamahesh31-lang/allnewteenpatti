
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white p-4 sm:p-6 shadow-md rounded-lg max-w-4xl mx-auto my-4 sm:my-8 font-sans">
      <h1 className="text-3xl font-bold text-[#0f2e5c] mb-6 text-center">About Us</h1>

      <div className="space-y-6 text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-red-500 pb-2 mb-3">Our Mission</h2>
          <p>
            Welcome to AllNewTeenPatti.com, your number one source for discovering the best Teen Patti applications. We're dedicated to giving you the very best of Teen Patti apps, with a focus on reliability, user ratings, and security. Our mission is to create a safe and centralized platform where players can easily find and compare the latest and greatest Teen Patti games available.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-red-500 pb-2 mb-3">What We Do</h2>
          <p>
            AllNewTeenPatti.com was founded by a team of passionate card game enthusiasts who saw a need for a trustworthy resource in the online Teen Patti community. We carefully review and list various Teen Patti apps, providing you with essential information like bonuses, withdrawal minimums, and security ratings. Whether you're a seasoned pro or a newcomer to the game, our goal is to help you make informed decisions and find the perfect app to suit your style.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-red-500 pb-2 mb-3">Why Choose Us?</h2>
           <ul className="list-disc list-inside space-y-2 mt-2 pl-4">
            <li><strong>Curated Lists:</strong> We feature top-trending, new, and popular apps so you can always find what you're looking for.</li>
            <li><strong>Honest Information:</strong> We provide clear, concise details about each app to help you choose wisely.</li>
            <li><strong>User-Focused:</strong> Our platform is designed with the player in mind, making it easy to search, filter, and discover.</li>
          </ul>
        </section>

        <section>
          <p className="text-center mt-8 font-semibold">
            We hope you enjoy our listings as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
