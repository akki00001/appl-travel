import React from "react";
import "../../assets/styles/components/_testimonialsection.scss";

const testimonials = [
  {
    image: "/images/testimonial-1.jpg",
    name: "Kanika Bhatia",
    role: "Traveler",
    text: "We recently booked a trip to Vietnam with Astir passage and it exceeded our expectations! The planning was meticulous, the drivers were professional and knowledgeable, and the itinerary was perfectly tailored to our interests. We felt like we were in safe hands throughout our journey. Highly recommend!",
  },
  {
    image: "/images/testimonial-2.jpg",
    name: "Vivek Pathak",
    role: "Traveler",
    text: "I just wanted to say a big thank you to Astir Passage for organizing such a fantastic Goa trip.Everything was well-planned and seamless from the flights and accommodations to the tours and local experiences. Looking forward to booking my next trip with you!",
  },
  {
    image: "/images/testimonial-3.jpg",
    name: "vishal sharma",
    role: "Traveler",
    text: "I recently booked a tour package through Astir Passage , and I couldn’t be happier with the entire experience. From the very beginning, the team was professional, friendly, and super helpful in tailoring the trip to our needs.",
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
