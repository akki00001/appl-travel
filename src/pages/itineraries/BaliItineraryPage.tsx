import React from 'react';
import ItineraryLayout from '../../components/ItineraryLayout';
import BaliTourCards from '../../components/tours/BaliTourCards';
import SEO from '../../components/common/SEO';

const BaliItineraryPage: React.FC = () => {
  const itineraryDetails = {
    title: 'Romantic Escape to Bali with Private Pool Villa',
    duration: '6 Days / 5 Nights',
    locations: 'Kuta • Seminyak',
    price: '62,999',
    overview: 'Experience the romantic charm of Bali with a luxurious stay in a private pool villa. This itinerary is perfect for couples looking for a blend of relaxation, culture, and adventure in Kuta and Seminyak.',
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Kuta',
        details: 'Arrive at Denpasar Airport and transfer to your hotel in Kuta. Spend the day exploring the local area and vibrant beachfront.',
        image: '/images/bali/01.jpg',
      },
      {
        day: 2,
        title: 'Kuta - Water Sports and Beach Time',
        details: 'Enjoy thrilling water sports at Tanjung Benoa, including parasailing and jet-skiing. Spend the afternoon relaxing on Kuta Beach.',
        image: '/images/bali/02.jpg',
      },
      {
        day: 3,
        title: 'Kuta - Cultural Sights & Sunset',
        details: 'Visit the iconic Uluwatu Temple, perched on a cliff with breathtaking ocean views. Witness a traditional Kecak dance performance at sunset.',
        image: '/images/bali/03.jpg',
      },
      {
        day: 4,
        title: 'Transfer to Seminyak & Villa Check-in',
        details: 'Check out from your Kuta hotel and transfer to your luxurious private pool villa in Seminyak. Enjoy the privacy and amenities of your villa.',
        image: '/images/bali/04.jpg',
      },
      {
        day: 5,
        title: 'Seminyak - Relaxation & Fine Dining',
        details: 'Spend the day at your leisure, relaxing by your private pool. In the evening, explore Seminyak’s upscale boutiques and enjoy a romantic dinner at a world-class restaurant.',
        image: '/images/bali/05.jpg',
      },
      {
        day: 6,
        title: 'Departure',
        details: 'Enjoy a final Balinese breakfast before transferring to the airport for your departure, filled with romantic memories.',
        image: '/images/bali/06.jpg',
      },
    ],
    policies: [
      '100% refund for cancellations made 30+ days before travel.',
      '50% refund for cancellations 15–29 days before travel.',
      'No refund for cancellations within 14 days of travel.',
    ],
    summary: 'This package includes a 3-night stay in Kuta and a 2-night stay in a private pool villa in Seminyak, daily breakfast, airport transfers, and sightseeing as per the itinerary.',
  };

  return (
    <>
      <SEO
        title={`${itineraryDetails.title} | Astir Travel`}
        description={`Discover the detailed itinerary for the ${itineraryDetails.title}.`}
        keywords="Bali, Ubud, Seminyak, Kuta, private pool villa, Astir Travel"
      />
      <ItineraryLayout itinerary={itineraryDetails}>
        <BaliTourCards />
      </ItineraryLayout>
    </>
  );
};

export default BaliItineraryPage;
