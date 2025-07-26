import React, { useState } from 'react';
import SEO from '../components/common/SEO';

const Support = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a server or email service
    console.log('Support request submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <SEO
        title="Support - Astir Passage"
        description="Contact Astir Passage support for assistance and inquiries."
        keywords="support, contact, help, Astir Passage"
        url="https://astir-travel.netlify.app/support"
      />
      <div className="container mt-5">
        <h1 className="text-center text-info">Support</h1>
        <p className="text-muted text-center">If you have any questions or need assistance, please fill out the form below:</p>
        {submitted ? (
          <p className="text-center text-success">Thank you for contacting us! We will get back to you shortly.</p>
        ) : (
          <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        )}
      </div>
    </>
  );
};

export default Support;
