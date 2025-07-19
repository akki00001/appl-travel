import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message!');
  };

  return (
    <form className="p-4 border rounded bg-light" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input name="name" type="text" className="form-control" onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input name="email" type="email" className="form-control" onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label className="form-label">Message</label>
        <textarea name="message" className="form-control" rows={4} onChange={handleChange} required />
      </div>
      <button type="submit" className="btn btn-primary">Send Message</button>
    </form>
  );
};

export default ContactForm;
