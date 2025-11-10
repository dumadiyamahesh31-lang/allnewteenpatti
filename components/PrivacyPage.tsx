
import React from 'react';

const PrivacyPage: React.FC = () => {
  return (
    <div className="bg-white p-4 sm:p-6 shadow-md rounded-lg max-w-4xl mx-auto my-4 sm:my-8 font-sans">
      <h1 className="text-3xl font-bold text-[#0f2e5c] mb-6 text-center">Privacy Policy</h1>
      
      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p><strong>Effective Date:</strong> October 26, 2023</p>
        
        <p>
          Welcome to AllNewTeenPatti.com. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
        </p>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-red-500 pb-2 mb-3">Information We Collect</h2>
          <p>
            We may collect information about you in a variety of ways. The information we may collect on the Site includes:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-2 pl-4">
            <li>
              <strong>Non-Personal Data:</strong> We automatically collect non-personal information, such as your browser type, operating system, and the pages you view on our site. This information is used to analyze trends and improve our website but does not personally identify you.
            </li>
            <li>
              <strong>Contact Form Data:</strong> If you choose to contact us via our contact form, we will collect your name, email address, and the content of your message. We use this information solely to respond to your inquiries.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-red-500 pb-2 mb-3">Use of Your Information</h2>
          <p>
            Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-2 pl-4">
            <li>Improve our website and offerings.</li>
            <li>Respond to your comments and questions and provide customer service.</li>
            <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-red-500 pb-2 mb-3">Third-Party Links</h2>
          <p>
            Our website lists and provides links to various third-party Teen Patti applications. We are not responsible for the privacy practices or the content of these third-party sites. We encourage you to read the privacy policies of any third-party app or website you visit.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-red-500 pb-2 mb-3">Data Security</h2>
          <p>
            We use administrative, technical, and physical security measures to help protect your information. While we have taken reasonable steps to secure the information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
          </p>
        </section>

        <section>
            <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-red-500 pb-2 mb-3">Policy for Children</h2>
            <p>
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children under 18. If we become aware that a child under 18 has provided us with personal information, we will take steps to delete such information.
            </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-red-500 pb-2 mb-3">Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-red-500 pb-2 mb-3">Contact Us</h2>
          <p>
            If you have questions or comments about this Privacy Policy, please contact us using the details provided on our <a href="#" onClick={(e) => { e.preventDefault(); alert('Please navigate to the Contact page.'); }} className="text-blue-600 hover:underline">Contact Page</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPage;
