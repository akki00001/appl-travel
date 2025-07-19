import React from 'react';
import ItineraryLayout from '../../components/ItineraryLayout';
import SEO from '../../components/common/SEO';

const DubaiItineraryPage: React.FC = () => {
  const itineraryDetails = {
    title: 'Dubai Dream Tour with Desert Safari & Burj Khalifa',
    duration: '5 Days / 4 Nights',
    locations: 'Dubai City • Desert Safari • Dubai Marina',
    price: '41,000',
    overview: 'Experience the glitz and glamour of Dubai with this dream tour. From the towering Burj Khalifa to the thrilling desert safari, this tour has it all.',
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Dubai',
        details: 'Arrive at Dubai International Airport and transfer to your hotel. Spend the evening exploring the Dubai Mall and watching the Dubai Fountain show.',
        image: '/images/dubai/01.jpg',
      },
      {
        day: 2,
        title: 'Dubai City Tour & Burj Khalifa',
        details: 'Explore the highlights of Dubai, including the Jumeirah Mosque, Burj Al Arab, and the Palm Jumeirah. Visit the top of the Burj Khalifa for stunning views.',
        image: '/images/dubai/02.jpg',
      },
      {
        day: 3,
        title: 'Desert Safari',
        details: 'Embark on a thrilling desert safari. Enjoy dune bashing, camel riding, and a traditional Bedouin dinner with live entertainment.',
        image: '/images/dubai/03.jpg',
      },
      {
        day: 4,
        title: 'Dubai Marina & Dhow Cruise',
        details: 'Explore the modern Dubai Marina. In the evening, enjoy a traditional dhow cruise with dinner and entertainment.',
        image: '/images/dubai/04.jpg',
      },
      {
        day: 5,
        title: 'Departure',
        details: 'Transfer to Dubai International Airport for your departure.',
        image: '/images/dubai/05.jpg',
      },
    ],
    policies: [
      '100% refund for cancellations made 30+ days before travel.',
      '50% refund for cancellations 15–29 days before travel.',
      'No refund for cancellations within 14 days of travel.',
    ],
    summary: 'This package includes accommodation, daily breakfast, airport transfers, and sightseeing as per the itinerary.',
  };

  return (
    <>
      <SEO
        title={`${itineraryDetails.title} | Astir Travel`}
        description={`Discover the detailed itinerary for the ${itineraryDetails.title}.`}
        keywords="Dubai, Burj Khalifa, desert safari, Dubai Marina, Astir Travel"
      />
      <ItineraryLayout itinerary={itineraryDetails}>
        <></>
      </ItineraryLayout>
    </>
  );
};

export default DubaiItineraryPage;