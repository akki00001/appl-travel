import React from 'react';
import ItineraryLayout from '../../components/ItineraryLayout';
import SEO from '../../components/common/SEO';
import KashmirHero from '../../components/tours/maldives';
import Maldives from '../../components/tours/maldives';
const MaldivesItineraryPage: React.FC = () => {
  const itineraryDetails = {
    title: 'Magical Maldives Honeymoon with Water Villa Stay',
    duration: '4 Days / 3 Nights',
    locations: 'Male • Resort Island',
    price: '45,000',
    overview: 'Experience the ultimate romantic getaway with a stay in a luxurious water villa in the Maldives. Enjoy pristine beaches, crystal-clear waters, and unparalleled luxury.',
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Male',
        details: 'Arrive at Male International Airport and transfer to your resort by speedboat. Check into your water villa and enjoy the stunning ocean views.',
        image: '/images/maldives/01.jpg',
      },
      {
        day: 2,
        title: 'Water Sports & Relaxation',
        details: 'Enjoy a day of water sports, including snorkeling, kayaking, and paddleboarding. Or, simply relax on the beach and soak up the sun.',
        image: '/images/maldives/02.jpg',
      },
      {
        day: 3,
        title: 'Spa & Sunset Cruise',
        details: 'Indulge in a rejuvenating spa treatment. In the evening, enjoy a romantic sunset cruise with champagne and canapés.',
        image: '/images/maldives/03.jpg',
      },
      {
        day: 4,
        title: 'Departure',
        details: 'Enjoy a final breakfast in your villa before transferring to the airport for your departure.',
        image: '/images/maldives/04.jpg',
      },
    ],
    policies: [
      '100% refund for cancellations made 30+ days before travel.',
      '50% refund for cancellations 15–29 days before travel.',
      'No refund for cancellations within 14 days of travel.',
    ],
    summary: 'This package includes accommodation in a water villa, daily breakfast, airport transfers by speedboat, and a sunset cruise.',
  };

  return (
    <>
      <SEO
        title={`${itineraryDetails.title} | Astir Travel`}
        description={`Discover the detailed itinerary for the ${itineraryDetails.title}.`}
        keywords="Maldives, Male, water villa, honeymoon, Astir Travel"
      />
       <ItineraryLayout itinerary={itineraryDetails}>
        <Maldives />
      </ItineraryLayout>
    </>
  );
};

export default MaldivesItineraryPage;