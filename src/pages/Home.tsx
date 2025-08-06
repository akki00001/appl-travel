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
import RatingSummary from '../components/common/RatingSummary';

const structuredData = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "name": "Astir Travel",
  "url": "https://www.astirtravel.com/",
  "logo": "https://www.astirtravel.com/images/logo.webp",
  "sameAs": [
    "https://www.facebook.com/astirtravel",
    "https://twitter.com/astirtravel",
    "https://www.instagram.com/astirtravel"
  ],
  "description": "Discover amazing travel destinations and experiences with Astir Travel. Your adventure starts here.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Travel St",
    "addressLocality": "City",
    "addressRegion": "State",
    "postalCode": "12345",
    "addressCountry": "Country"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-800-555-5555",
    "contactType": "Customer Service"
  }
};

interface HomeProps {
  searchTerm: string;
}

const Home: React.FC<HomeProps> = ({ searchTerm }) => {
  return (
    <>
      <SEO
        title="Home - Astir Travel"
        description="Discover amazing travel destinations and experiences with Astir Travel. Your adventure starts here."
        keywords="travel, home, Astir Travel, destinations, tours, best tours, top travel destinations, adventure tours, holiday packages, travel deals, guided tours, vacation packages, tour operators"
        url="https://www.astirtravel.com/"
        image="https://www.astirtravel.com/images/logo.webp"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <HeroSection />
      {/* <BookingForm /> */}
      <DestinationSlider searchTerm={searchTerm} />
      <DestinationListPage />
      {/* <HeroHighlightSection /> */}
      <AboutSection />
      <TestimonialSection />
      <RecentPost />
        <RatingSummary
        title="APPL Travels Tour Reviews"
        totalReviews={50}
        averageRating={5.0}
        countriesCount={65}
        ratingsCount={{ '5': 29, '4': 19, '3': 2, '2': 0, '1': 0 }}
      />
      <hr />
      <FAQ />
    </>
  );
};

export default Home;
