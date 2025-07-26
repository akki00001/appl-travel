import React from 'react';
import SEO from '../components/common/SEO';

const CopyrightPolicies = () => {
  return (
    <>
      <SEO
        title="Copyright Policies - Astir Passage"
        description="Understand the copyright and intellectual property policies of Astir Passage."
        keywords="copyright, policies, intellectual property, Astir Passage"
        url="https://astir-travel.netlify.app/copyright-policies"
      />
      <div className="container mt-5">
        <h1 className="text-center text-info">Copyright Policies</h1>
        <p>All content on this website is protected by copyright laws. Unauthorized use or reproduction is prohibited.</p>
        <h2>Intellectual Property</h2>
        <p>Astir Passage owns all intellectual property rights related to the content, design, and trademarks on this site.</p>
        <h2>Use of Content</h2>
        <p>You may not copy, distribute, or modify any content without prior written permission.</p>
        <h2>Reporting Infringement</h2>
        <p>If you believe your copyright has been infringed, please contact us immediately.</p>
      </div>
    </>
  );
};

export default CopyrightPolicies;
