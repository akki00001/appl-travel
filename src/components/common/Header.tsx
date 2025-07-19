import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../../assets/styles/components/_header.scss";

const categories = [
  { name: "Vietnam", icon: "/src/assets/icons/vietnam.svg" },
  { name: "Goa", icon: "/src/assets/icons/goa.svg" },
  { name: "Kerala", icon: "/src/assets/icons/kerala.svg" },
  { name: "Himachal", icon: "/src/assets/icons/himachal.svg" },
  { name: "Europe", icon: "/src/assets/icons/europe.svg" },
  { name: "Bhutan", icon: "/src/assets/icons/bhutan.svg" },
  { name: "J&K", icon: "/src/assets/icons/jammu-and-kashmir.svg" },
   { name: "malaysia", icon: "/src/assets/icons/malaysia.svg" },
  { name: "maldives", icon: "/src/assets/icons/maldives.svg" },
  { name: "thailand", icon: "/src/assets/icons/thailand.svg" },
  { name: "sri lanka", icon: "/src/assets/icons/srilanka.svg" },
  { name: "Dubai", icon: "/src/assets/icons/dubai.svg" },
];

const Header: React.FC = () => {
  return (
    <div className="header-container">
      {/* Top Bar */}
      <div className="top-bar">
        <img src="/images/logo.webp" alt="Logo" className="logo" />
        <input className="search-input" type="text" placeholder="Search ..." />
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
