import React from 'react';
import { FaExclamationTriangle, FaShieldAlt, FaUserSecret, FaPhoneAlt } from 'react-icons/fa';

const BewareOfFrauds: React.FC = () => {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <header className="text-center mb-12">
        <FaExclamationTriangle className="mx-auto text-red-600 text-6xl mb-4" />
        <h1 className="text-4xl font-extrabold mb-4 text-red-700 tracking-wide">
          Beware of Fraudulent Activities
        </h1>
        <p className="text-lg max-w-3xl mx-auto text-gray-800 leading-relaxed">
          At Astir Passage, your safety and trust are our top priorities. We want to alert you about fraudulent activities that may target travelers like you. Please be cautious and follow the guidelines below to protect yourself.
        </p>
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-6 border-b-2 border-red-600 pb-2 text-red-600 tracking-wide">
          Common Fraudulent Activities
        </h2>
        <ul className="space-y-4 text-gray-700 text-base max-w-3xl mx-auto list-disc list-inside">
          <li className="flex items-center gap-3">
            <FaUserSecret className="text-red-600" />
            Fake travel agents or websites offering deals that seem too good to be true.
          </li>
          <li className="flex items-center gap-3">
            <FaPhoneAlt className="text-red-600" />
            Unauthorized individuals asking for payments outside our official channels.
          </li>
          <li className="flex items-center gap-3">
            <FaShieldAlt className="text-red-600" />
            Phishing emails or messages pretending to be from Astir Passage.
          </li>
          <li className="flex items-center gap-3">
            <FaExclamationTriangle className="text-red-600" />
            Requests for personal or financial information through insecure means.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-6 border-b-2 border-red-600 pb-2 text-red-600 tracking-wide">
          How to Protect Yourself
        </h2>
        <ul className="space-y-4 text-gray-700 text-base max-w-3xl mx-auto list-disc list-inside">
          <li>Always book your trips through our official website or authorized partners.</li>
          <li>Verify the identity of anyone contacting you regarding your bookings.</li>
          <li>Never share your personal or payment information via email or phone unless you are sure of the recipient.</li>
          <li>Look out for suspicious emails or messages and report them to us immediately.</li>
          <li>Use secure payment methods and avoid cash transactions with unknown parties.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-6 border-b-2 border-red-600 pb-2 text-red-600 tracking-wide">
          What to Do If You Suspect Fraud
        </h2>
        <p className="mb-6 text-gray-700 text-base max-w-3xl mx-auto leading-relaxed">
          If you believe you have been targeted by fraudulent activity, please contact our support team immediately at{' '}
          <a href="mailto:support@astirpassage.com" className="text-red-600 underline font-semibold">
            support@astirpassage.com
          </a>
          . Provide as much detail as possible so we can assist you promptly.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6 border-b-2 border-red-600 pb-2 text-red-600 tracking-wide">
          Stay Safe and Travel Smart
        </h2>
        <p className="text-gray-700 text-base max-w-3xl mx-auto leading-relaxed">
          Your safety is our commitment. Stay informed, stay alert, and enjoy your travel experiences with confidence.
        </p>
      </section>
    </main>
  );
};

export default BewareOfFrauds;
