import React from 'react';
import ItineraryLayout from '../../components/ItineraryLayout';
import SEO from '../../components/common/SEO';

const HimachalItineraryPage: React.FC = () => {
  const itineraryDetails = {
    title: 'Himachal Delights: Shimla, Manali & Kasol',
    duration: '6 Days / 5 Nights',
    locations: 'Shimla • Manali • Kasol',
    price: '20,000',
    overview: 'Explore the scenic beauty of Himachal Pradesh with this tour covering the popular destinations of Shimla, Manali, and Kasol.',
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Shimla',
        details: 'Arrive in Shimla and transfer to your hotel. Spend the evening on the Mall Road, enjoying the colonial architecture and beautiful views.',
        image: '/images/himachal/01.jpg',
      },
      {
        day: 2,
        title: 'Shimla & Kufri',
        details: 'Explore the highlights of Shimla, including the Viceregal Lodge and Jakhoo Temple. Visit the Himalayan Nature Park in Kufri.',
        image: '/images/himachal/02.jpg',
      },
      {
        day: 3,
        title: 'Transfer to Manali',
        details: 'Travel to Manali, a popular hill station nestled in the mountains. Enjoy the scenic drive and check into your hotel.',
        image: '/images/himachal/03.jpg',
      },
      {
        day: 4,
        title: 'Manali & Solang Valley',
        details: 'Visit the Hadimba Temple and Manu Temple in Manali. Explore the beautiful Solang Valley and enjoy adventure activities.',
        image: '/images/himachal/04.jpg',
      },
      {
        day: 5,
        title: 'Day Trip to Kasol',
        details: 'Take a day trip to the charming village of Kasol, located on the banks of the Parvati River. Enjoy the serene atmosphere and beautiful scenery.',
        image: '/images/himachal/05.jpg',
      },
      {
        day: 6,
        title: 'Departure',
        details: 'Transfer to Bhuntar Airport for your departure.',
        image: '/images/himachal/06.jpg',
      },
    ],
    policies: [
      '100% refund for cancellations made 30+ days before travel.',
      '50% refund for cancellations 15–29 days before travel.',
      'No refund for cancellations within 14 days of travel.',
    ],
    summary: 'This package includes accommodation, daily breakfast, transfers, and sightseeing as per the itinerary.',
  };

  return (
    <>
      <SEO
        title={`${itineraryDetails.title} | Astir Travel`}
        description={`Discover the detailed itinerary for the ${itineraryDetails.title}.`}
        keywords="Himachal, Shimla, Manali, Kasol, Solang Valley, Astir Travel"
      />
      <ItineraryLayout itinerary={itineraryDetails}>
        <></>
      </ItineraryLayout>
    </>
  );
};

export default HimachalItineraryPage;