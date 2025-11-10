
import React from 'react';

const ContactPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    alert('Thank you for your message! We will get back to you soon.');
    form.reset();
  };

  return (
    <div className="bg-white p-4 sm:p-6 shadow-md rounded-lg max-w-4xl mx-auto my-4 sm:my-8 font-sans">
      <h1 className="text-3xl font-bold text-[#0f2e5c] mb-6 text-center">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-red-500 pb-2">Get in Touch</h2>
          <p className="text-gray-600 leading-relaxed">
            Have questions, feedback, or need support? We'd love to hear from you. Reach out to us through any of the methods below, or use the form to send us a message directly.
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-gray-700">Email Address</h3>
              <a href="mailto:contact@allnewteenpatti.com" className="text-blue-600 hover:underline">contact@allnewteenpatti.com</a>
            </div>
            <div>
              <h3 className="font-bold text-gray-700">Phone Number</h3>
              <p className="text-gray-600">+91 123 456 7890</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-700">Mailing Address</h3>
              <p className="text-gray-600">123 Teen Patti Lane, Card City, India</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
              <input type="text" id="name" name="name" required placeholder="John Doe" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
              <input type="email" id="email" name="email" required placeholder="you@example.com" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
              <textarea id="message" name="message" rows={4} required placeholder="Your message here..." className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"></textarea>
            </div>
            <div>
              <button type="submit" className="w-full bg-red-600 text-white font-bold py-2.5 px-4 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
