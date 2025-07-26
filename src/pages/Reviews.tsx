import React from 'react';

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
    <div style={{ padding: '2rem' }}>
      <h1>astirpassage Reviews</h1>
      <p>Read what our customers have to say about us.</p>
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
  );
};

export default Reviews;
