import React, { useState } from 'react';
import '../assets/styles/pages/_faq.scss';

const faqs = [
  "What types of travel packages does Astir Passage offer?",
  "Can I customize my travel itinerary with Astir Passage",
  "Is flight booking included in your travel packages? ",
  "How do I book a tour with Astir Passage? ",
  "Do you provide visa assistance for international tours? ",
  "Are your travel packages suitable for family trips? ",
  "What happens if my trip gets canceled or rescheduled? "
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
          <li key={idx} onClick={() => toggle(idx)} className={activeIndex === idx ? 'active' : ''}>
            <span>Q. {question}</span>
            <div className="answer">
              <p>We offer a wide range of travel packages including domestic tours, international getaways, honeymoon packages, group tours, customized holidays, adventure trips, and weekend getaways.</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FAQ;
