import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Packages from '../pages/Packages';
import About from '../pages/About';
import Contact from '../pages/Contact';
import BaliPage from '../pages/destinations/BaliPage';
import SingaporePage from '../pages/destinations/Singapore';
import MalaysiaPage from '../pages/itineraries/MalaysiaPage';
import AustraliaPage from '../pages/destinations/AustraliaPage';
import AustraliaItineraryPage from '../pages/itineraries/AustraliaItineraryPage';
import LadakhItineraryPage from '../pages/itineraries/LadakhItineraryPage';
import BaliItineraryPage from '../pages/itineraries/BaliItineraryPage';
import MemorableBaliItineraryPage from '../pages/itineraries/MemorableBaliItineraryPage';
import BaliBlissItineraryPage from '../pages/itineraries/BaliBlissItineraryPage';
import SwitzerlandItineraryPage from '../pages/itineraries/SwitzerlandItineraryPage';
import ThailandItineraryPage from '../pages/itineraries/ThailandItineraryPage';
import KashmirItineraryPage from '../pages/itineraries/KashmirItineraryPage';
import MaldivesItineraryPage from '../pages/itineraries/MaldivesItineraryPage';
import Maldives from '../pages/destinations/maldives';
import HimachalItineraryPage from '../pages/itineraries/HimachalItineraryPage';
import HimachalPage from '../pages/destinations/himachal';
import DubaiItineraryPage from '../pages/itineraries/DubaiItineraryPage';
import CanadaPage from '../pages/destinations/CanadaPage';
import ThailandPage from '../pages/destinations/ThailandThailand';
import DubaiPage from '../pages/destinations/Dubai';
import ItalyPage from '../pages/destinations/Italy';
import SwitzerlandPage from '../pages/destinations/Switzerland';
import JapanPage from '../pages/destinations/Japan';
import Dashboard from '../pages/Dashboard';

import KeralaPage from '../pages/destinations/kerala';
import Goa from '../pages/destinations/goa';
import VietnamPage from '../pages/destinations/vietnam';
import JammuPage from '../pages/destinations/jammu';
import SriLanka from '../pages/destinations/SriLanka';
import Bhutan from '../pages/destinations/Bhutan';
import Europe from '../pages/destinations/Europe';

import WeAreHiring from '../pages/WeAreHiring';
import Reviews from '../pages/Reviews';
import TermsAndConditions from '../pages/TermsAndConditions';
import PrivacyPolicies from '../pages/PrivacyPolicies';
import CopyrightPolicies from '../pages/CopyrightPolicies';
import Support from '../pages/Support';

interface AppRoutesProps {
  searchTerm: string;
}

const AppRoutes: React.FC<AppRoutesProps> = ({ searchTerm }) => {
  return (
    <Routes>
      <Route path="/" element={<Home searchTerm={searchTerm} />} />
      <Route path="/packages" element={<Packages />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/we-are-hiring" element={<WeAreHiring />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="/privacy-policies" element={<PrivacyPolicies />} />
      <Route path="/copyright-policies" element={<CopyrightPolicies />} />
      <Route path="/support" element={<Support />} />
      <Route path="/destination/bali" element={<BaliItineraryPage />} />
      <Route path="/destination/bali/itinerary" element={<BaliItineraryPage />} />
      <Route path="/destination/bali/memorable-bali" element={<MemorableBaliItineraryPage />} />
      <Route path="/destination/bali/bali-bliss" element={<BaliBlissItineraryPage />} />
      <Route path="/destination/singapore" element={<SingaporePage />} />
      <Route path="/destination/malaysia" element={<MalaysiaPage />} />
      <Route path="/destination/switzerland" element={<SwitzerlandPage />} />
      <Route path="/destination/switzerland-itinerary" element={<SwitzerlandItineraryPage />} />
      <Route path="/destination/australia" element={<AustraliaPage />} />
      <Route path="/destination/australia/itinerary" element={<AustraliaItineraryPage />} />
      <Route path="/destination/australia/sydney" element={<AustraliaPage />} />
      <Route path="/destination/ladakh" element={<LadakhItineraryPage />} />
      <Route path="/destination/thailand" element={<ThailandPage />} />
      <Route path="/destination/thailand-itinerary" element={<ThailandItineraryPage />} />
      <Route path="/destination/kashmir" element={<KashmirItineraryPage />} />
      <Route path="/destination/maldives" element={<Maldives />} />
      <Route path="/destination/himachal" element={<HimachalPage />} />
      <Route path="/destination/dubai" element={<DubaiPage />} />
      <Route path="/destination/dubai/itinerary" element={<DubaiItineraryPage />} />
      <Route path="/destination/canada" element={<CanadaPage />} />
      <Route path="/destination/italy" element={<ItalyPage />} />
      <Route path="/destination/japan" element={<JapanPage />} />
      <Route path="/destination/kerala" element={<KeralaPage />} />
      <Route path="/destination/goa" element={<Goa />} />
      <Route path="/destination/vietnam" element={<VietnamPage />} />
      <Route path="/destination/jammu-and-kashmir" element={<JammuPage />} />
      <Route path="/destination/bhutan" element={<Bhutan />} />
      <Route path="/destination/europe" element={<Europe />} />
      <Route path="/destination/srilanka" element={<SriLanka />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default AppRoutes;
