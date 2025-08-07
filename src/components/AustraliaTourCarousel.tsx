import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FaClock, FaPlaneDeparture, FaTag } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';

interface TourCardProps {
  image: string;
  title: string;
  location: string;
  duration: string;
  price: string;
  itinerary: string[];
  limitedOffer?: boolean;
  flightIncluded?: boolean;
}

const tourData: TourCardProps[] = [
  {
    image: '/images/australia1.jpg',
    title: 'Australia Highlights – 10 Days',
    location: 'Sydney • Gold Coast • Melbourne',
    duration: '10 Days / 9 Nights',
    price: '₹1,89,000',
    itinerary: [
      'Arrival in Sydney & City Tour',
      'Blue Mountains Day Trip',
      'Fly to Gold Coast & Beaches',
      'DreamWorld/SeaWorld Visit',
      'Flight to Melbourne',
      'Great Ocean Road Drive',
      'Phillip Island Penguin Parade',
      'Shopping + Leisure Day',
      'Return Flight to India',
    ],
    limitedOffer: true,
    flightIncluded: true,
  },
  {
    image: '/images/australia2.jpg',
    title: 'Romantic Escape – 7 Days',
    location: 'Sydney • Cairns',
    duration: '7 Days / 6 Nights',
    price: '₹1,49,000',
    itinerary: [
      'Arrive Sydney • Opera House Tour',
      'Private Cruise Dinner',
      'Fly to Cairns • Free Day',
      'Great Barrier Reef Snorkeling',
      'Skyrail Rainforest Cableway',
      'Shopping & Markets',
      'Departure',
    ],
    flightIncluded: true,
  },
  {
    image: '/images/australia3.jpg',
    title: 'Luxury Retreat – 12 Days',
    location: 'Melbourne • Tasmania',
    duration: '12 Days / 11 Nights',
    price: '₹2,49,000',
    itinerary: [
      'Arrival in Melbourne & City Tour',
      'Yarra Valley Wine Tour',
      'Fly to Tasmania',
      'Cradle Mountain Hike',
      'Wildlife Safari',
      'Luxury Spa Day',
      'Leisure + Beach Day',
      'Return to Melbourne',
      'Great Ocean Road',
      'Shopping & Departure',
    ],
    limitedOffer: true,
  },
];

const AustraliaTourCarousel: React.FC = () => {
  return (
    <section className="py-10 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">🇦🇺 Australia Tour Itineraries</h2>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {tourData.map((tour, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
              <div className="relative">
                <img src={tour.image} alt={tour.title} className="w-full h-64 object-cover" />
                <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                  {tour.location}
                </div>
                {tour.limitedOffer && (
                  <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded font-semibold flex items-center gap-1">
                    <FaTag /> Limited Offer
                  </div>
                )}
              </div>
              <div className="p-4 space-y-2">
                <h3 className="text-lg font-semibold text-gray-800">{tour.title}</h3>
                <p className="text-sm text-gray-500 flex items-center gap-1">
                  <FaClock className="text-blue-500" /> {tour.duration}
                </p>

                {tour.flightIncluded && (
                  <p className="text-sm text-green-600 flex items-center gap-2 font-medium">
                    <FaPlaneDeparture /> Starting from Delhi (Flight Included)
                  </p>
                )}

                <ul className="text-xs text-gray-600 list-disc ml-4 mt-2 max-h-32 overflow-auto">
                  {tour.itinerary.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <div className="flex items-center justify-between mt-3">
                  <span className="text-primary font-bold text-lg">From {tour.price}</span>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-md">
                    Explore
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default AustraliaTourCarousel;
