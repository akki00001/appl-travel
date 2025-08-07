import React from 'react';
import SEO from '../components/common/SEO';
import ContactForm from '../components/booking/ContactForm';

const Contact = () => {
  return (
    <>
      <SEO
        title="Contact Us - Astir Travel"
        description="Get in touch with Astir Travel for inquiries, bookings, and travel assistance."
        keywords="contact, Astir Travel, travel inquiries, bookings"
      />
      <div className="container mt-5">
        <h2 className="text-center mb-4">Contact Us</h2>
        <ContactForm />
      </div>
    </>
  );
};

export default Contact;
