import React from 'react';
import ItineraryLayout from '../../components/ItineraryLayout';
import BaliTourCards from '../../components/tours/BaliTourCards';
import SEO from '../../components/common/SEO';

const BaliBlissItineraryPage: React.FC = () => {
  const itineraryDetails = {
    title: 'Bali Bliss',
    duration: '5 Days / 4 Nights',
    locations: 'Kuta',
    price: '42,999',
    overview: 'Discover the blissful side of Bali with this package focused on relaxation and fun in Kuta.',
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Kuta',
        details: 'Arrive at Denpasar Airport and transfer to your hotel in Kuta. Enjoy the evening at your leisure.',
        image: '/images/bali/01.jpg',
      },
      {
        day: 2,
        title: 'Kuta Beach and Shopping',
        details: 'Spend the day relaxing on Kuta Beach, swimming, or surfing. In the afternoon, explore the vibrant shopping streets of Kuta.',
        image: '/images/bali/02.jpg',
      },
      {
        day: 3,
        title: 'Waterbom Bali',
        details: 'Have a fun-filled day at Waterbom Bali, one of Asia’s top water parks, with thrilling slides and attractions for all ages.',
        image: '/images/bali/03.jpg',
      },
      {
        day: 4,
        title: 'Leisure and Sunset Dinner',
        details: 'Enjoy a day of leisure. In the evening, experience a beautiful sunset followed by a delicious seafood dinner on the beach.',
        image: '/images/bali/04.jpg',
      },
      {
        day: 5,
        title: 'Departure',
        details: 'After breakfast, transfer to the airport for your flight back home.',
        image: '/images/bali/05.jpg',
      },
    ],
    policies: [
      '100% refund for cancellations made 30+ days before travel.',
      '50% refund for cancellations 15–29 days before travel.',
      'No refund for cancellations within 14 days of travel.',
    ],
    summary: 'This package includes a 4-night stay in Kuta, daily breakfast, airport transfers, and sightseeing as per the itinerary.',
  };

  return (
    <>
      <SEO
        title={`${itineraryDetails.title} | Astir Travel`}
        description={`Discover the detailed itinerary for the ${itineraryDetails.title}.`}
        keywords="Bali, Kuta, Waterbom, Astir Travel"
      />
      <ItineraryLayout itinerary={itineraryDetails}>
        <BaliTourCards />
      </ItineraryLayout>
    </>
  );
};

export default BaliBlissItineraryPage;