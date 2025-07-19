import React, { useState } from 'react';
import '../assets/styles/pages/_faq.scss';

const faqs = [
  "What's the best time to visit Bali?",
  "What are the best places to visit in Bali?",
  "Do Indian citizens require a Visa to visit Bali?",
  "Which Airline flies to Bali from India?",
  "What's the average flight duration between India to Bali?",
  "What kind of activities does Bali offer to travellers?",
  "How many days are enough to explore Bali?"
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
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FAQ;
