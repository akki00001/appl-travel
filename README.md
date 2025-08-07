# 🌍 Astir React Travel

A modern, responsive travel website built with **React**, **TypeScript**, **Vite**, **Tailwind CSS**, and **SCSS**. This project is designed to showcase international tour packages with detailed itineraries, booking forms, SEO optimization, and stunning destination galleries.

---

## 🚀 Features

- 🧭 Dynamic destination pages with sliders and FAQs
- 📅 Detailed tour itineraries (like Bali, Switzerland, Dubai, etc.)
- 📝 Blog and post pages for SEO
- 📦 Optimized build using Vite
- 🎯 Booking and contact forms
- 🧩 Component-based architecture
- 🖼️ Lazy-loaded image assets
- 📱 Fully responsive design (mobile, tablet, desktop)

---

## 🛠️ Tech Stack

- **Frontend**: React + TypeScript
- **Styling**: Tailwind CSS + SCSS
- **Build Tool**: Vite
- **Routing**: React Router
- **State**: useState / props
- **Deployment**: GitHub Pages / Netlify / Vercel (optional)

---

## 📂 Folder Structure

astir-react-travel-skeleton/
├── public/
│   ├── images/                 # Static images accessible from public
│   ├── robots.txt
│   ├── sitemap.xml
│   └── manifest.json
│
├── src/
│   ├── assets/
│   │   ├── images/             # Move local image imports here
│   │   ├── icons/              # SVGs
│   │   └── styles/             # Global SCSS
│   │       ├── base/
│   │       │   ├── _variables.scss
│   │       │   └── _mixins.scss
│   │       ├── components/
│   │       │   └── (component-specific SCSS like _footer.scss, _header.scss)
│   │       ├── pages/
│   │       │   └── (page-level SCSS like _about.scss, _blog.scss)
│   │       └── main.scss
│
│   ├── components/
│   │   ├── common/             # Shared components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── SEO.tsx
│   │   ├── home/               # Homepage sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── DestinationSlider.tsx
│   │   │   ├── TestimonialSection.tsx
│   │   │   └── FeatureSection.tsx
│   │   ├── blog/               # Blog-specific components
│   │   │   ├── RecentPosts.tsx
│   │   ├── booking/            # Booking + contact
│   │   │   ├── BookingForm.tsx
│   │   │   ├── ContactForm.tsx
│   │   └── tours/              # Destination-specific cards
│   │       ├── AustraliaTourCards.tsx
│   │       ├── BaliTourCards.tsx
│   │       ├── MalaysiaTourCards.tsx
│   │       ├── SingaporeTourCards.tsx
│   │       └── SwitzerlandTourCards.tsx
│
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Packages.tsx
│   │   ├── Blog.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Guides.tsx
│   │   ├── itineraries/
│   │   │   ├── AustraliaItineraryPage.tsx
│   │   │   ├── SwitzerlandPage.tsx
│   │   │   ├── BaliPage.tsx
│   │   │   ├── SingaporePage.tsx
│   │   │   └── MalaysiaPage.tsx
│   │   └── destinations/
│   │       ├── Destinations.tsx
│   │       ├── DestinationDetail.tsx
│   │       └── DestinationListPage.tsx
│
│   ├── routes/
│   │   └── AppRoutes.tsx
│
│   ├── types/
│   │   └── index.ts            # Shared TS types
│
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.scss              # import main.scss here
│   ├── declarations.d.ts
│
├── .vscode/
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.cjs
├── package.json
├── package-lock.json
└── index.html