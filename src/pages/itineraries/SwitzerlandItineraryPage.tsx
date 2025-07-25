import React from 'react';
import ItineraryLayout from '../../components/ItineraryLayout';
import Switzerlandhero from '../../components/tours/Switzerlandhero';
import SEO from '../../components/common/SEO';

const SwitzerlandItineraryPage: React.FC = () => {
  const itineraryDetails = {
    title: 'Scenic Switzerland Tour with Mt. Titlis & Jungfraujoch',
    duration: '8 Days / 7 Nights',
    locations: 'Zurich • Lucerne • Interlaken',
    price: '74,000',
    overview: 'Experience the breathtaking beauty of the Swiss Alps with this scenic tour. Visit the charming cities of Zurich and Lucerne, and ascend the iconic peaks of Mt. Titlis and Jungfraujoch.',
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Zurich',
        details: 'Arrive at Zurich Airport and transfer to your hotel. Spend the day exploring the city\'s vibrant culture and beautiful lake.',
        image: '/images/Switzerland/01.jpg',
      },
      {
        day: 2,
        title: 'Zurich City Tour & Rhine Falls',
        details: 'Discover Zurich\'s highlights, including the Old Town and Lake Zurich. In the afternoon, visit the spectacular Rhine Falls.',
        image: '/images/Switzerland/02.jpg',
      },
      {
        day: 3,
        title: 'Transfer to Lucerne',
        details: 'Travel to Lucerne, a picturesque city nestled among mountains and a crystal-clear lake. Visit the Chapel Bridge and the Lion Monument.',
        image: '/images/Switzerland/03.jpg',
      },
      {
        day: 4,
        title: 'Excursion to Mt. Titlis',
        details: 'Ascend Mt. Titlis in a revolving cable car. Enjoy stunning panoramic views and explore the Glacier Cave.',
        image: '/images/Switzerland/04.jpg',
      },
      {
        day: 5,
        title: 'Transfer to Interlaken',
        details: 'Travel to Interlaken, the adventure capital of Switzerland. Enjoy the stunning scenery between two lakes.',
        image: '/images/Switzerland/05.jpg',
      },
      {
        day: 6,
        title: 'Excursion to Jungfraujoch',
        details: 'Take a train to Jungfraujoch, the "Top of Europe." Visit the Ice Palace and enjoy breathtaking views of the Aletsch Glacier.',
        image: '/images/Switzerland/01.jpg',
      },
      {
        day: 7,
        title: 'Day at Leisure in Interlaken',
        details: 'Enjoy a free day in Interlaken. You can opt for adventure sports like paragliding or simply relax and enjoy the views.',
        image: '/images/Switzerland/02.jpg',
      },
      {
        day: 8,
        title: 'Departure',
        details: 'Transfer to Zurich Airport for your departure.',
        image: '/images/Switzerland/03.jpg',
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
        keywords="Switzerland, Zurich, Lucerne, Interlaken, Mt. Titlis, Jungfraujoch, Astir Travel"
      />
      <ItineraryLayout itinerary={itineraryDetails}>
      <Switzerlandhero />
      </ItineraryLayout>
    </>
  );
};

export default SwitzerlandItineraryPage;