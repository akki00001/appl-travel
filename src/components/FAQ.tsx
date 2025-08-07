import React, { useState } from 'react';
import '../assets/styles/pages/_faq.scss';

const faqs = [
  "What types of travel packages does Astir Passage offer?",
  "Can I customize my travel itinerary with Astir Passage?",
  "Is flight booking included in your travel packages?",
  "How do I book a tour with Astir Passage?",
  "Do you provide visa assistance for international tours?",
  "Are your travel packages suitable for family trips?",
  "What happens if my trip gets canceled or rescheduled?"
];

const answers = [
  "We offer a wide range of travel packages including domestic tours, international getaways, honeymoon packages, group tours, customized holidays, adventure trips, and weekend getaways.",
  "Yes, you can customize your travel itinerary according to your preferences and interests. Our travel experts will work with you to create a personalized plan.",
  "Flight booking is not included in all packages, but we do offer options to include flights upon request. Please check the package details or contact us for more information.",
  "You can book a tour by contacting us through our website, phone, or email. Our team will assist you with the booking process and provide all necessary information.",
  "Yes, we provide visa assistance for international tours to help you with the application process and documentation.",
  "Our travel packages are designed to be family-friendly, with options suitable for travelers of all ages. Please specify your requirements when booking.",
  "In case of trip cancellation or rescheduling, we will notify you promptly and offer alternative dates or refunds as per our policy."
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className="faq-section">
      <h3>Frequently Asked Questions</h3>
      <ul>
        {faqs.map((question, idx) => (
          <li key={idx} onClick={() => toggle(idx)} className={activeIndex === idx ? 'active' : ''} tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter') toggle(idx); }}>
            <div className="question">
              <span>Q. {question}</span>
              <span className="icon">{activeIndex === idx ? '-' : '+'}</span>
            </div>
            <div className="answer" style={{ maxHeight: activeIndex === idx ? '500px' : '0' }}>
              <p>{answers[idx]}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FAQ;
