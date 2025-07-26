import React from 'react';
import SEO from '../components/common/SEO';

const Reviews = () => {
  const testimonials = [
    {
      name: 'John Doe',
      rating: 5,
      comment: 'Amazing experience! Highly recommend Astir Passage.',
    },
    {
      name: 'Jane Smith',
      rating: 4,
      comment: 'Great service and beautiful destinations.',
    },
    {
      name: 'Michael Johnson',
      rating: 5,
      comment: 'Professional and friendly staff. Will book again!',
    },
  ];

  return (
    <>
      <SEO
        title="astirpassage Reviews - Astir Passage"
        description="Read customer testimonials and reviews about Astir Passage."
        keywords="reviews, testimonials, customer feedback, Astir Passage"
      />
      <div className="container mt-5">
        <h1 className="text-center text-info">astirpassage Reviews</h1>
        <p className="text-muted text-center">Read what our customers have to say about us.</p>
        <ul>
          {testimonials.map((testi, index) => (
            <li key={index} style={{ marginBottom: '1.5rem' }}>
              <h2>{testi.name}</h2>
              <p>Rating: {'⭐'.repeat(testi.rating)}</p>
              <p>{testi.comment}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Reviews;
