import React from 'react';
import SEO from '../components/common/SEO';

const PrivacyPolicies = () => {
  return (
    <>
      <SEO
        title="Privacy Policies - Astir Passage"
        description="Learn about how Astir Passage collects and uses your personal information."
        keywords="privacy, policies, data protection, Astir Passage"
      />
      <div className="container mt-5">
        <h1 className="text-center text-info">Privacy Policies</h1>
        <p>At Astir Passage, we are committed to protecting your privacy. This policy explains how we collect, use, and safeguard your information.</p>
        <h2>Information Collection</h2>
        <p>We collect personal information when you use our services, such as your name, email, and payment details.</p>
        <h2>Use of Information</h2>
        <p>Your information is used to provide and improve our services, process payments, and communicate with you.</p>
        <h2>Data Security</h2>
        <p>We implement security measures to protect your data from unauthorized access.</p>
        <h2>Cookies</h2>
        <p>Our website uses cookies to enhance user experience. You can disable cookies in your browser settings.</p>
        <h2>Third-Party Sharing</h2>
        <p>We do not sell your personal information to third parties.</p>
        <h2>Contact Us</h2>
        <p>If you have any questions about our privacy policies, please contact us.</p>
      </div>
    </>
  );
};

export default PrivacyPolicies;
