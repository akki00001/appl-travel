import React from 'react';
import ItineraryLayout from '../../components/ItineraryLayout';
import SEO from '../../components/common/SEO';
import BaliHero from '../../components/tours/balihero';

const MemorableBaliItineraryPage: React.FC = () => {
  const itineraryDetails = {
    title: 'Memorable Bali Itinerary',
    duration: '6 Days / 5 Nights',
    locations: 'Denpasar • Ubud • Kintamani • Uluwatu',
    price: '15,000',
    overview: 'Explore the beautiful island of Bali with this memorable itinerary that covers stunning landscapes, cultural sites, and relaxing beach days.',
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Bali',
        details: 'Arrive at Denpasar Airport and transfer to your hotel. Spend the rest of the day at your leisure.',
        image: '/images/bali/01.jpg',
      },
      {
        day: 2,
        title: 'Full Day Kintamani Tour',
        details: 'Experience the beauty of Kintamani volcano and Lake Batur. Visit a coffee plantation and the holy spring of Tirta Empul.',
        image: '/images/bali/02.jpg',
      },
      {
        day: 3,
        title: 'Watersports and Uluwatu Temple',
        details: 'Enjoy a variety of water sports at Tanjung Benoa. In the evening, visit the stunning Uluwatu Temple for a magical sunset.',
        image: '/images/bali/03.jpg',
      },
      {
        day: 4,
        title: 'Bedugul and Tanah Lot Tour',
        details: 'Visit the Ulun Danu Beratan Temple on Lake Beratan and the iconic Tanah Lot Temple, a sea temple that offers incredible photo opportunities.',
        image: '/images/bali/04.jpg',
      },
      {
        day: 5,
        title: 'Leisure Day',
        details: 'A day to relax, shop for souvenirs, or explore the local area on your own.',
        image: '/images/bali/05.jpg',
      },
      {
        day: 6,
        title: 'Departure',
        details: 'After breakfast, transfer to the airport for your flight back home.',
        image: '/images/bali/06.jpg',
      },
    ],
    policies: [
      '100% refund for cancellations made 30+ days before travel.',
      '50% refund for cancellations 15–29 days before travel.',
      'No refund for cancellations within 14 days of travel.',
    ],
    summary: 'This package includes a 5-night stay in Bali, daily breakfast, airport transfers, and sightseeing as per the itinerary.',
  };

  return (
    <>
      <SEO
        title={`${itineraryDetails.title} | Astir Travel`}
        description={`Discover the detailed itinerary for the ${itineraryDetails.title}.`}
        keywords="Bali, Kintamani, Uluwatu, Tanah Lot, Astir Travel"
      />
      <ItineraryLayout itinerary={itineraryDetails}>
        <BaliHero />
      </ItineraryLayout>
    </>
  );
};

export default MemorableBaliItineraryPage;
