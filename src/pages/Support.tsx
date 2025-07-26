import React, { useState } from 'react';

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
    <div style={{ padding: '2rem' }}>
      <h1>Support</h1>
      <p>If you have any questions or need assistance, please fill out the form below:</p>
      {submitted ? (
        <p>Thank you for contacting us! We will get back to you shortly.</p>
      ) : (
        <form onSubmit={handleSubmit} style={{ maxWidth: '400px' }}>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="name">Name:</label><br />
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '0.5rem' }}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="email">Email:</label><br />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '0.5rem' }}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="message">Message:</label><br />
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              style={{ width: '100%', padding: '0.5rem' }}
            />
          </div>
          <button type="submit" style={{ padding: '0.5rem 1rem' }}>Submit</button>
        </form>
      )}
    </div>
  );
};

export default Support;
