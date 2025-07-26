import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "../../assets/styles/components/_header.scss";

const categories = [
  { name: "Vietnam", icon: "/icons/vietnam.svg" },
  { name: "Goa", icon: "/icons/goa.svg" },
  { name: "Kerala", icon: "/icons/kerala.svg" },
  { name: "Himachal", icon: "/icons/himachal.svg" },
  { name: "Europe", icon: "/icons/europe.svg" },
  { name: "Bhutan", icon: "/icons/bhutan.svg" },
  { name: "J&K", icon: "/icons/jammu-and-kashmir.svg" },
  { name: "Malaysia", icon: "/icons/malaysia.svg" },
  { name: "Maldives", icon: "/icons/maldives.svg" },
  { name: "Thailand", icon: "/icons/thailand.svg" },
  { name: "Sri Lanka", icon: "/icons/srilanka.svg" },
  { name: "Dubai", icon: "/icons/dubai.svg" },
];

const destinations = [
  { name: 'Canada', path: '/destination/canada' },
  { name: 'Thailand', path: '/destination/thailand' },
  { name: 'Dubai', path: '/destination/dubai' },
  { name: 'Italy', path: '/destination/italy' },
  { name: 'Switzerland', path: '/destination/switzerland' },
  { name: 'Japan', path: '/destination/japan' },
  { name: 'Singapore', path: '/destination/singapore' },
  { name: 'Australia', path: '/destination/australia' },
  { name: 'Greece', path: '#' },
  { name: 'Bali', path: '/destination/bali' },
  { name: 'Memorable Bali Itinerary', path: '/destination/bali' },
  { name: 'Bali Bliss Itinerary', path: '/destination/bali' },
];

interface HeaderProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const Header: React.FC<HeaderProps> = ({ searchTerm, setSearchTerm }) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<typeof destinations>([]);
  const navigate = useNavigate();
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value.trim() === '') {
      setShowSuggestions(false);
      setFilteredSuggestions([]);
    } else {
      const filtered = destinations.filter(dest =>
        dest.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setShowSuggestions(true);
    }
  };

  const handleSuggestionClick = (path: string) => {
    setSearchTerm('');
    setShowSuggestions(false);
    navigate(path);
  };

  // Close suggestions dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <div className="header-container" ref={wrapperRef}>
      {/* Top Bar */}
      <div className="top-bar">
        <a href="/">
          <img src="/images/logo.webp" alt="Logo" className="logo" />
        </a>
        <div className="search-wrapper" style={{ position: 'relative' }}>
          <input
            className="search-input"
            type="text"
            placeholder="Search ..."
            value={searchTerm}
            onChange={handleInputChange}
            autoComplete="off"
          />
          {showSuggestions && filteredSuggestions.length > 0 && (
            <ul className="suggestions-list" style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              backgroundColor: 'white',
              border: '1px solid #ccc',
              zIndex: 1000,
              maxHeight: '200px',
              overflowY: 'auto',
              listStyle: 'none',
              margin: 0,
              padding: 0,
            }}>
              {filteredSuggestions.map((suggestion, index) => (
                <li
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion.path)}
                  style={{ padding: '8px', cursor: 'pointer' }}
                  onMouseDown={e => e.preventDefault()} // Prevent input blur on click
                >
                  {suggestion.name}
                </li>
              ))}
            </ul>
          )}
        </div>
        <button className="connect-btn">Let's Connect</button>
      </div>

      {/* Icon Slider */}
      <div className="slider-wrapper">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={10}
          slidesPerView={7}
          loop={true}
          autoplay={{ delay: 2500 }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          {categories.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="icon-card">
                <img src={item.icon} alt={item.name} />
                <p>{item.name}</p>
              </div>
            </SwiperSlide>
          ))}

          <div className="swiper-button-prev custom-nav"></div>
          <div className="swiper-button-next custom-nav"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default Header;
