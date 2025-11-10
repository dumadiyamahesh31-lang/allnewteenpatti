import React from 'react';

const DisclaimerPage: React.FC = () => {
  return (
    <div className="bg-white p-4 sm:p-6 shadow-md rounded-lg max-w-4xl mx-auto my-4 sm:my-8 font-sans">
      <h1 className="text-3xl font-bold text-[#0f2e5c] mb-6 text-center">Disclaimer</h1>
      
      <div className="space-y-6 text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-red-500 pb-2 mb-3">General Information</h2>
          <p>
            All the information on this website – allnewteenpatti.com – is published in good faith and for general information purpose only. AllNewTeenPatti.com does not make any warranties about the completeness, reliability and accuracy of this information. Any action you take upon the information you find on this website (AllNewTeenPatti.com), is strictly at your own risk. AllNewTeenPatti.com will not be liable for any losses and/or damages in connection with the use of our website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-red-500 pb-2 mb-3">Financial Risk & Addiction</h2>
          <p className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md">
            The games listed on this site involve an element of financial risk and may be addictive. Please play responsibly and at your own risk. We are not responsible for any financial losses you may incur.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-red-500 pb-2 mb-3">Age and Regional Restrictions</h2>
          <p>
            You must be 18 years of age or older to use the services and apps listed on this website. This service is not available for users from the states of <strong>Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, and Telangana</strong>. It is your responsibility to ensure you are complying with your local laws.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-red-500 pb-2 mb-3">External Links</h2>
          <p>
            From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone 'bad'.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-red-500 pb-2 mb-3">Consent</h2>
          <p>
            By using our website, you hereby consent to our disclaimer and agree to its terms.
          </p>
        </section>
      </div>
    </div>
  );
};

export default DisclaimerPage;
