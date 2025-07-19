import React from 'react';
import ItineraryLayout from '../../components/ItineraryLayout';
import SEO from '../../components/common/SEO';

const KashmirItineraryPage: React.FC = () => {
  const itineraryDetails = {
    title: 'Kashmir Paradise Tour with Gulmarg & Pahalgam',
    duration: '5 Days / 4 Nights',
    locations: 'Srinagar • Gulmarg • Pahalgam',
    price: '18,000',
    overview: 'Experience the paradise on Earth with this tour of Kashmir. Visit the beautiful city of Srinagar, the meadows of Gulmarg, and the valleys of Pahalgam.',
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Srinagar',
        details: 'Arrive at Srinagar Airport and transfer to your houseboat on Dal Lake. Enjoy a relaxing shikara ride in the evening.',
        image: '/images/kashmir/01.jpg',
      },
      {
        day: 2,
        title: 'Srinagar City Tour',
        details: 'Visit the Mughal Gardens, including Shalimar Bagh, Nishat Bagh, and Chashme Shahi. Explore the old city and the Shankaracharya Temple.',
        image: '/images/kashmir/02.jpg',
      },
      {
        day: 3,
        title: 'Day Trip to Gulmarg',
        details: 'Take a day trip to Gulmarg, the "Meadow of Flowers." Enjoy a gondola ride to Apharwat Peak for stunning views of the Himalayas.',
        image: '/images/kashmir/03.jpg',
      },
      {
        day: 4,
        title: 'Day Trip to Pahalgam',
        details: 'Explore the beautiful valleys of Pahalgam. Visit Betaab Valley, Chandanwari, and Aru Valley.',
        image: '/images/kashmir/04.jpg',
      },
      {
        day: 5,
        title: 'Departure',
        details: 'Transfer to Srinagar Airport for your departure.',
        image: '/images/kashmir/05.jpg',
      },
    ],
    policies: [
      '100% refund for cancellations made 30+ days before travel.',
      '50% refund for cancellations 15–29 days before travel.',
      'No refund for cancellations within 14 days of travel.',
    ],
    summary: 'This package includes accommodation in a houseboat and hotel, daily breakfast, airport transfers, and sightseeing as per the itinerary.',
  };

  return (
    <>
      <SEO
        title={`${itineraryDetails.title} | Astir Travel`}
        description={`Discover the detailed itinerary for the ${itineraryDetails.title}.`}
        keywords="Kashmir, Srinagar, Gulmarg, Pahalgam, Dal Lake, Astir Travel"
      />
      <ItineraryLayout itinerary={itineraryDetails}>
        <></>
      </ItineraryLayout>
    </>
  );
};

export default KashmirItineraryPage;