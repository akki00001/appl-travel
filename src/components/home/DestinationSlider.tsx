import React from 'react';
import '../../assets/styles/components/_destinationslider.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';

interface Destination {
  image: string;
  name: string;
  tours: number;
  path: string;
}

const destinations: Destination[] = [
  { name: 'Canada', image: '/images/destination-1.jpg', tours: 2, path: '/destination/canada' },
  { name: 'Thailand', image: '/images/destination-2.jpg', tours: 5, path: '/destination/thailand' },
  { name: 'Dubai', image: '/images/dubai.jpg', tours: 4, path: '/destination/dubai' },
  { name: 'Italy', image: '/images/destination-9.jpg', tours: 8, path: '/destination/italy' },
  { name: 'Switzerland', image: '/images/destination-7.jpg', tours: 3, path: '/destination/switzerland' },
  { name: 'Japan', image: '/images/destination-8.jpg', tours: 5, path: '/destination/japan' },
  { name: 'Singapore', image: '/images/destination-2.jpg', tours: 4, path: '/destination/singapore' },
  { name: 'Australia', image: '/images/destination-7.jpg', tours: 5, path: '/destination/australia' },
  { name: 'Greece', image: '/images/destination-10.jpg', tours: 7, path: '#' },
  { name: 'Bali', image: '/images/bali/01.jpg', tours: 6, path: '/destination/bali' },
  // Itinerary entries
  { name: 'Memorable Bali Itinerary', image: '/images/bali/02.jpg', tours: 1, path: '/destination/bali/memorable-bali' },
  { name: 'Bali Bliss Itinerary', image: '/images/bali/03.jpg', tours: 1, path: '/destination/bali/bali-bliss' },
];

const DestinationSlider: React.FC = () => {
  return (
    <section className="destination-slider-section">
      <div className="heading text-center">
        <p className="subtitle">Pacific Provide Places</p>
        <h2 className="title">Select Your Destination</h2>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
{destinations.map((dest, idx) => (
  <SwiperSlide key={idx}>
    <Link
      to={dest.path}
      className="destination-card"
    >
      <img src={dest.image} alt={dest.name} loading="lazy" />
      <div className="top-label">{dest.name}</div>
      <div className="bottom-badge">{dest.tours} Tours</div>
    </Link>
  </SwiperSlide>
))}
      </Swiper>
    </section>
  );
};

export default DestinationSlider;
