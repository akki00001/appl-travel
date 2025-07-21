
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/pages/_destinationlistpage.scss';

type Destination = {
  path: string;
  title: string;
  images: string[];
  duration: string;
  rating: number;
  reviews: number;
  locations: { label: string; name: string }[];
  overflow: string;
  originalPrice: string;
  discount: string;
  finalPrice: string;
  unit: string;
};

const destinations: Destination[] = [
  {
    path: "/destination/ladakh",
    title: "Ladakh Adventure Expedition With Turtuk Village",
    images: ["/images/ladakh/01.jpg", "/images/ladakh/02.jpg", "/images/ladakh/03.jpg"],
    duration: "7 days & 6 nights",
    rating: 4.5,
    reviews: 25,
    locations: [
      { label: "2D", name: "Leh" },
      { label: "2D", name: "Nubra Valley" },
      { label: "1D", name: "Pangong Tso" },
      { label: "2D", name: "Leh" }
    ],
    overflow: "+1",
    originalPrice: "INR 29,900",
    discount: "SAVE INR 8,100",
    finalPrice: "INR 21,800",
    unit: "/Adult"
  },
  {
    path: "/destination/bali",
    title: "Memorable Bali",
    images: ["/images/bali/01.jpg", "/images/bali/02.jpg", "/images/bali/03.jpg"],
    duration: "5 days & 6 nights",
    rating: 4.7,
    reviews: 48,
    locations: [
      { label: "2D", name: "Ubud" },
      { label: "2D", name: "Seminyak" },
      { label: "2D", name: "Kuta" }
    ],
    overflow: "+2",
    originalPrice: "INR 39,500",
    discount: "SAVE INR 10,000",
    finalPrice: "INR 29,500",
    unit: "/Adult"
  },
  {
    path: "/destination/switzerland",
    title: "Scenic Switzerland Tour with Mt. Titlis & Jungfraujoch",
    images: ["/images/Switzerland/01.jpg", "/images/Switzerland/02.jpg", "/images/Switzerland/03.jpg"],
    duration: "8 days & 7 nights",
    rating: 4.8,
    reviews: 60,
    locations: [
      { label: "2D", name: "Zurich" },
      { label: "2D", name: "Lucerne" },
      { label: "2D", name: "Interlaken" }
    ],
    overflow: "+3",
    originalPrice: "INR 89,000",
    discount: "SAVE INR 15,000",
    finalPrice: "INR 74,000",
    unit: "/Adult"
  },
  {
    path: "/destination/thailand",
    title: "Thailand Trio: Bangkok, Phuket & Krabi",
    images: ["/images/Thailand/01.jpg", "/images/Thailand/02.jpg", "/images/Thailand/03.jpg"],
    duration: "7 days & 6 nights",
    rating: 4.4,
    reviews: 38,
    locations: [
      { label: "2D", name: "Bangkok" },
      { label: "2D", name: "Phuket" },
      { label: "2D", name: "Krabi" }
    ],
    overflow: "+1",
    originalPrice: "INR 44,500",
    discount: "SAVE INR 8,500",
    finalPrice: "INR 36,000",
    unit: "/Adult"
  },
  {
    path: "/destination/australia/itinerary",
    title: "Australia Explorer: Sydney to Gold Coast",
    images: ["/images/Australia/01.jpg", "/images/Australia/02.jpg", "/images/Australia/03.jpg"],
    duration: "9 days & 8 nights",
    rating: 4.6,
    reviews: 52,
    locations: [
      { label: "3D", name: "Sydney" },
      { label: "2D", name: "Melbourne" },
      { label: "2D", name: "Gold Coast" }
    ],
    overflow: "+2",
    originalPrice: "INR 1,29,000",
    discount: "SAVE INR 20,000",
    finalPrice: "INR 1,09,000",
    unit: "/Adult"
  },
  {
    path: "/destination/kashmir",
    title: "Kashmir Paradise Tour with Gulmarg & Pahalgam",
    images: ["/images/kashmir/01.jpg", "/images/kashmir/02.jpg", "/images/kashmir/03.jpg"],
    duration: "5 days & 4 nights",
    rating: 4.3,
    reviews: 29,
    locations: [
      { label: "2D", name: "Srinagar" },
      { label: "1D", name: "Gulmarg" },
      { label: "1D", name: "Pahalgam" }
    ],
    overflow: "+1",
    originalPrice: "INR 21,000",
    discount: "SAVE INR 3,000",
    finalPrice: "INR 18,000",
    unit: "/Adult"
  },
  {
    path: "/destination/maldives",
    title: "Magical Maldives Honeymoon with Water Villa Stay",
    images: ["/images/maldives/01.jpg", "/images/maldives/02.jpg", "/images/maldives/03.jpg"],
    duration: "4 days & 3 nights",
    rating: 4.9,
    reviews: 80,
    locations: [
      { label: "3D", name: "Male" },
      { label: "1D", name: "Resort Island" }
    ],
    overflow: "+1",
    originalPrice: "INR 55,000",
    discount: "SAVE INR 10,000",
    finalPrice: "INR 45,000",
    unit: "/Couple"
  },
  {
    path: "/destination/himachal",
    title: "Himachal Delights: Shimla, Manali & Kasol",
    images: ["/images/himachal/01.jpg", "/images/himachal/02.jpg", "/images/himachal/03.jpg"],
    duration: "6 days & 5 nights",
    rating: 4.2,
    reviews: 34,
    locations: [
      { label: "2D", name: "Shimla" },
      { label: "2D", name: "Manali" },
      { label: "1D", name: "Kasol" }
    ],
    overflow: "+1",
    originalPrice: "INR 25,000",
    discount: "SAVE INR 5,000",
    finalPrice: "INR 20,000",
    unit: "/Adult"
  },
  {
    path: "/destination/dubai",
    title: "Dubai Dream Tour with Desert Safari & Burj Khalifa",
    images: ["/images/dubai/01.jpg", "/images/dubai/02.jpg", "/images/dubai/03.jpg"],
    duration: "5 days & 4 nights",
    rating: 4.7,
    reviews: 42,
    locations: [
      { label: "2D", name: "Dubai City" },
      { label: "1D", name: "Desert Safari" },
      { label: "1D", name: "Dubai Marina" }
    ],
    overflow: "+1",
    originalPrice: "INR 48,000",
    discount: "SAVE INR 7,000",
    finalPrice: "INR 41,000",
    unit: "/Adult"
  },
  // {
  //   title: "European Gems: Paris, Amsterdam & Brussels",
  //   images: ["/images/destination-10a.jpg", "/images/destination-10b.jpg", "/images/destination-10c.jpg"],
  //   duration: "10 days & 9 nights",
  //   rating: 4.8,
  //   reviews: 66,
  //   locations: [
  //     { label: "3D", name: "Paris" },
  //     { label: "3D", name: "Amsterdam" },
  //     { label: "3D", name: "Brussels" }
  //   ],
  //   overflow: "+2",
  //   originalPrice: "INR 1,49,000",
  //   discount: "SAVE INR 22,000",
  //   finalPrice: "INR 1,27,000",
  //   unit: "/Adult"
  // }
];

// Code continues...

const DestinationListPage: React.FC = () => {
  const [imageIndices, setImageIndices] = useState<number[]>(
    Array(destinations.length).fill(0)
  );

  const handleDotClick = (e: React.MouseEvent, cardIndex: number, dotIndex: number) => {
    e.preventDefault();
    e.stopPropagation();
    const updated = [...imageIndices];
    updated[cardIndex] = dotIndex;
    setImageIndices(updated);
  };

  return (
    <section className="destination-list">
      <div className="card-grid">
        {destinations.map((item, index) => (
          <div className="destination-card" key={index}>
            <div className="image-wrapper">
              <img
                src={item.images[imageIndices[index]]}
                alt={item.title}
                loading="lazy"
              />
              <div className="save-badge">{item.discount}</div>
              <div className="dot-nav">
                {item.images.map((_, dotIndex) => (
                  <span
                    key={dotIndex}
                    className={`dot ${
                      dotIndex === imageIndices[index] ? 'active' : ''
                    }`}
                    onClick={(e) => handleDotClick(e, index, dotIndex)}
                  />
                ))}
              </div>
            </div>

              <div className="content">
                <div className="content-main">
                  <div className="top-row">
                    <span>{item.duration}</span>
                    <span className="rating">
                      <i className="fa fa-star" /> {item.rating}
                      <span className="count">({item.reviews})</span>
                    </span>
                  </div>

                  <Link to={item.path}>
                    <h3>{item.title}</h3>
                  </Link>

                  <div className="locations">
                    {item.locations.map((loc, i) => (
                      <span key={i}>
                        <b>{loc.label}</b> {loc.name}
                        {i < item.locations.length - 1 && (
                          <span className="sep">•</span>
                        )}
                      </span>
                    ))}
                    <span className="overflow">{item.overflow}</span>
                  </div>

                  <div className="monsoon-badge">MONSOON SALE!</div>

                  <div className="pricing">
                    <span className="strike">{item.originalPrice}</span>
                    <span className="discount">{item.discount}</span>
                  </div>

                  <div className="final-price">
                    {item.finalPrice} <span>{item.unit}</span>
                  </div>
                </div>

                <button className="callback-btn">
                  <i className="fa fa-phone" />
                  Request Callback
                </button>
              </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DestinationListPage;
