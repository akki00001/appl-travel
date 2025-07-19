import React from 'react';
import ItineraryLayout from '../../components/ItineraryLayout';
import AustraliaHeader from '../../components/tours/AustraliaHeader';
import SEO from '../../components/common/SEO';

const AustraliaItineraryPage: React.FC = () => {
  const itineraryDetails = {
    title: 'Australia Explorer: Sydney to Gold Coast',
    duration: '9 Days / 8 Nights',
    locations: 'Sydney • Melbourne • Gold Coast',
    price: '1,09,000',
    overview: 'Explore the vibrant cities and stunning landscapes of Australia. From the iconic Sydney Opera House to the beautiful beaches of the Gold Coast, this tour has it all.',
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Sydney',
        details: 'Arrive at Sydney Airport and transfer to your hotel. Spend the day exploring the city at your own pace.',
        image: '/images/Australia/01.jpg',
      },
      {
        day: 2,
        title: 'Sydney City Tour',
        details: 'Discover the highlights of Sydney, including the Opera House, Harbour Bridge, and Bondi Beach.',
        image: '/images/Australia/02.jpg',
      },
      {
        day: 3,
        title: 'Blue Mountains Day Trip',
        details: 'Take a day trip to the stunning Blue Mountains. Enjoy breathtaking views, visit Scenic World, and see the Three Sisters rock formation.',
        image: '/images/Australia/03.jpg',
      },
      {
        day: 4,
        title: 'Fly to Melbourne',
        details: 'Take a flight to Melbourne, the cultural capital of Australia. Check into your hotel and explore the city\'s famous laneways.',
        image: '/images/Australia/04.jpg',
      },
      {
        day: 5,
        title: 'Great Ocean Road Tour',
        details: 'Embark on a full-day tour of the Great Ocean Road. See the Twelve Apostles, Loch Ard Gorge, and enjoy the stunning coastal scenery.',
        image: '/images/Australia/05.jpg',
      },
      {
        day: 6,
        title: 'Fly to Gold Coast',
        details: 'Take a flight to the Gold Coast, famous for its long sandy beaches and theme parks. Check into your hotel and relax.',
        image: '/images/Australia/06.jpg',
      },
      {
        day: 7,
        title: 'Theme Park Fun',
        details: 'Enjoy a full day of fun at one of the Gold Coast\'s famous theme parks, such as Warner Bros. Movie World or Sea World.',
        image: '/images/Australia/01.jpg',
      },
      {
        day: 8,
        title: 'Day at Leisure',
        details: 'Enjoy a free day on the Gold Coast. Relax on the beach, go shopping, or explore the vibrant nightlife.',
        image: '/images/Australia/02.jpg',
      },
      {
        day: 9,
        title: 'Departure',
        details: 'Transfer to Gold Coast Airport for your departure.',
        image: '/images/Australia/03.jpg',
      },
    ],
    policies: [
      '100% refund for cancellations made 30+ days before travel.',
      '50% refund for cancellations 15–29 days before travel.',
      'No refund for cancellations within 14 days of travel.',
    ],
    summary: 'This package includes accommodation, daily breakfast, flights between cities, and sightseeing as per the itinerary.',
  };

  return (
    <>
      <SEO
        title={`${itineraryDetails.title} | Astir Travel`}
        description={`Discover the detailed itinerary for the ${itineraryDetails.title}.`}
        keywords="Australia, Sydney, Melbourne, Gold Coast, Blue Mountains, Great Ocean Road, Astir Travel"
      />
      <ItineraryLayout itinerary={itineraryDetails} children={undefined}>
      </ItineraryLayout>
    </>
  );
};

export default AustraliaItineraryPage;
