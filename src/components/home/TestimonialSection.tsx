import React from "react";
import "../../assets/styles/components/_testimonialsection.scss";

const testimonials = [
  {
    image: "/images/testimonial-1.jpg",
    name: "Roger Scott",
    role: "Marketing Manager",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    image: "/images/testimonial-2.jpg",
    name: "Roger Scott",
    role: "Marketing Manager",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    image: "/images/testimonial-3.jpg",
    name: "Roger Scott",
    role: "Marketing Manager",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
];

const TestimonialSection: React.FC = () => {
  return (
    <section className="testimonial-section">
      <div className="overlay" />
      <div className="container">
        <p className="section-subtitle">Testimonial</p>
        <h2 className="section-title">Tourist Feedback</h2>
        <div className="testimonial-cards">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <div className="stars">★★★★★</div>
              <p className="text">{testimonial.text}</p>
              <div className="profile">
                <img src={testimonial.image} alt={testimonial.name} />
                <div>
                  <h5>{testimonial.name}</h5>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
