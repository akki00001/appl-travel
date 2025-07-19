import React from "react";
import SEO from "../components/common/SEO";
import { FaPlay } from "react-icons/fa";
import BookingForm from "../components/booking/BookingForm";
import HeroSection from "../components/home/HeroSection";
import DestinationSlider from '../components/home/DestinationSlider';
import DestinationListPage from "./destinations/DestinationListPage";
// import HeroHighlightSection from "../components/home/HeroHighlightSection";
import TestimonialSection from "../components/home/TestimonialSection";
import RecentPost from "../components/blog/RecentPosts";
import AboutSection from "../components/home/AboutSection";
import FAQ from '../components/FAQ';


const Home: React.FC = () => {
  return (
    <>
      <SEO
        title="Home - Astir Travel"
        description="Discover amazing travel destinations and experiences with Astir Travel. Your adventure starts here."
        keywords="travel, home, Astir Travel, destinations, tours"
      />
      <HeroSection />
      {/* <BookingForm /> */}
      <DestinationSlider />
      <DestinationListPage />
      {/* <HeroHighlightSection /> */}
      <AboutSection />
       <TestimonialSection />
       <RecentPost />
       <FAQ />

    </>
  );
};

export default Home;
