import React from 'react';

const TermsPage: React.FC = () => {
  return (
    <div className="bg-white p-4 sm:p-6 shadow-md rounded-lg max-w-4xl mx-auto my-4 sm:my-8 font-sans">
      <h1 className="text-3xl font-bold text-[#0f2e5c] mb-6 text-center">Terms & Conditions</h1>
      
      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p><strong>Last Updated:</strong> October 26, 2023</p>
        
        <p>
          Please read these terms and conditions carefully before using Our Service.
        </p>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-red-500 pb-2 mb-3">1. Acknowledgment</h2>
          <p>
            These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
          </p>
          <p>
            Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-red-500 pb-2 mb-3">2. User Eligibility</h2>
          <p>
            The Service is intended solely for users who are 18 years of age or older. Any access to or use of the Service by anyone under 18 is expressly prohibited. By accessing or using the Service you represent and warrant that you are 18 or older.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-red-500 pb-2 mb-3">3. Links to Other Websites</h2>
          <p>
            Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company. The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-red-500 pb-2 mb-3">4. Disclaimer</h2>
          <p>
            The information provided on AllNewTeenPatti.com is for general informational purposes only. All information on the site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability or completeness of any information on the site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-red-500 pb-2 mb-3">5. Changes to These Terms</h2>
          <p>
            We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-red-500 pb-2 mb-3">Contact Us</h2>
          <p>
            If you have any questions about these Terms and Conditions, You can contact us.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsPage;
