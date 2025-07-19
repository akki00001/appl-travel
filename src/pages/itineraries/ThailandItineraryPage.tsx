import React from 'react';
import ItineraryLayout from '../../components/ItineraryLayout';
import SEO from '../../components/common/SEO';

const ThailandItineraryPage: React.FC = () => {
  const itineraryDetails = {
    title: 'Thailand Trio: Bangkok, Phuket & Krabi',
    duration: '7 Days / 6 Nights',
    locations: 'Bangkok • Phuket • Krabi',
    price: '36,000',
    overview: 'Discover the best of Thailand with this exciting tour covering the bustling city of Bangkok and the stunning beaches of Phuket and Krabi.',
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Bangkok',
        details: 'Arrive at Bangkok Airport and transfer to your hotel. Spend the evening exploring the vibrant street life and local markets.',
        image: '/images/Thailand/01.jpg',
      },
      {
        day: 2,
        title: 'Bangkok City Tour',
        details: 'Explore the famous temples of Bangkok, including the Grand Palace, Wat Pho, and Wat Arun. Enjoy a traditional Thai massage in the evening.',
        image: '/images/Thailand/02.jpg',
      },
      {
        day: 3,
        title: 'Fly to Phuket',
        details: 'Take a flight to Phuket, Thailand\'s largest island. Check into your hotel and enjoy the beautiful beaches.',
        image: '/images/Thailand/03.jpg',
      },
      {
        day: 4,
        title: 'Phi Phi Islands Tour',
        details: 'Take a speedboat tour to the stunning Phi Phi Islands. Enjoy snorkeling, swimming, and exploring the beautiful lagoons.',
        image: '/images/Thailand/04.jpg',
      },
      {
        day: 5,
        title: 'Transfer to Krabi',
        details: 'Travel to Krabi by ferry. Check into your hotel and relax on the pristine beaches.',
        image: '/images/Thailand/05.jpg',
      },
      {
        day: 6,
        title: 'Four Islands Tour',
        details: 'Explore the Four Islands of Krabi by longtail boat. Visit Tup Island, Chicken Island, Poda Island, and the Phra Nang Cave Beach.',
        image: '/images/Thailand/01.jpg',
      },
      {
        day: 7,
        title: 'Departure',
        details: 'Transfer to Krabi Airport for your departure.',
        image: '/images/Thailand/02.jpg',
      },
    ],
    policies: [
      '100% refund for cancellations made 30+ days before travel.',
      '50% refund for cancellations 15–29 days before travel.',
      'No refund for cancellations within 14 days of travel.',
    ],
    summary: 'This package includes accommodation, daily breakfast, flights between Bangkok and Phuket, and sightseeing as per the itinerary.',
  };

  return (
    <>
      <SEO
        title={`${itineraryDetails.title} | Astir Travel`}
        description={`Discover the detailed itinerary for the ${itineraryDetails.title}.`}
        keywords="Thailand, Bangkok, Phuket, Krabi, Phi Phi Islands, Astir Travel"
      />
      <ItineraryLayout itinerary={itineraryDetails}>
        <></>
      </ItineraryLayout>
    </>
  );
};

export default ThailandItineraryPage;