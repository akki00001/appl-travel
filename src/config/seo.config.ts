interface SEOData {
  title: string;
  description: string;
  keywords: string;
  url: string;
  type: string;
}

interface SEOConfig {
  home: SEOData;
  destinations: {
    [key: string]: SEOData;
  };
  pages: {
    [key: string]: SEOData;
  };
}

export const SEO_CONFIG: SEOConfig = {
  home: {
    title: 'Astir Passage - Best Travel Packages & Tour Deals | International & Domestic',
    description: 'Book amazing travel packages with Astir Passage. Get best deals on international and domestic tour packages including Bali, Singapore, Maldives, Thailand, Dubai & more. Customized itineraries available.',
    keywords: 'travel packages, tour packages, holiday packages, international tour packages, domestic tour packages, best travel deals, customized travel packages, family holiday packages, luxury travel packages',
    url: '/',
    type: 'website'
  },
  
  destinations: {
    bali: {
      title: 'Bali Tour Packages - Best Deals on Bali Holiday Packages | Astir Passage',
      description: 'Explore amazing Bali tour packages with Astir Passage. Get best deals on 5-7 days Bali holiday packages including flights, hotels, sightseeing & more. Customizable itineraries available.',
      keywords: 'bali tour packages, bali holiday packages, bali travel packages, bali trip packages, bali vacation packages, bali honeymoon packages, bali family packages',
      url: '/destinations/bali',
      type: 'website'
    },
    
    singapore: {
      title: 'Singapore Tour Packages - Best Deals on Singapore Holiday Packages | Astir Passage',
      description: 'Book exciting Singapore tour packages with Astir Passage. Get best deals on Singapore holiday packages including Universal Studios, Gardens by the Bay, Sentosa Island & more.',
      keywords: 'singapore tour packages, singapore holiday packages, singapore travel packages, singapore trip packages, singapore vacation packages, singapore family packages',
      url: '/destinations/singapore',
      type: 'website'
    },
    
    maldives: {
      title: 'Maldives Tour Packages - Luxury Maldives Holiday Packages | Astir Passage',
      description: 'Experience paradise with Maldives tour packages from Astir Passage. Get best deals on luxury Maldives holiday packages including water villas, all-inclusive resorts & more.',
      keywords: 'maldives tour packages, maldives holiday packages, maldives travel packages, maldives honeymoon packages, maldives luxury packages, maldives resort packages',
      url: '/destinations/maldives',
      type: 'website'
    },
    
    thailand: {
      title: 'Thailand Tour Packages - Bangkok Pattaya Phuket Packages | Astir Passage',
      description: 'Discover amazing Thailand tour packages with Astir Passage. Get best deals on Bangkok, Pattaya, Phuket holiday packages including flights, hotels, sightseeing & more.',
      keywords: 'thailand tour packages, thailand holiday packages, bangkok pattaya packages, phuket tour packages, thailand travel packages, thailand trip packages',
      url: '/destinations/thailand',
      type: 'website'
    },
    
    dubai: {
      title: 'Dubai Tour Packages - Best Dubai Holiday Packages from India | Astir Passage',
      description: 'Explore Dubai with amazing tour packages from Astir Passage. Get best deals on Dubai holiday packages including Burj Khalifa, Desert Safari, Dubai Mall & more attractions.',
      keywords: 'dubai tour packages, dubai holiday packages, dubai travel packages, dubai trip packages, dubai vacation packages, dubai family packages, dubai luxury packages',
      url: '/destinations/dubai',
      type: 'website'
    },
    
    europe: {
      title: 'Europe Tour Packages - Best Europe Holiday Packages | Astir Passage',
      description: 'Explore Europe with amazing tour packages from Astir Passage. Get best deals on Europe holiday packages covering Switzerland, France, Italy, UK & more countries.',
      keywords: 'europe tour packages, europe holiday packages, europe travel packages, switzerland tour packages, italy tour packages, france tour packages, europe trip packages',
      url: '/destinations/europe',
      type: 'website'
    },
    
    switzerland: {
      title: 'Switzerland Tour Packages - Swiss Alps Holiday Packages | Astir Passage',
      description: 'Experience Switzerland with amazing tour packages from Astir Passage. Get best deals on Swiss Alps holiday packages including Zurich, Geneva, Interlaken & more.',
      keywords: 'switzerland tour packages, swiss alps packages, switzerland holiday packages, zurich tour packages, geneva tour packages, interlaken packages, switzerland travel packages',
      url: '/destinations/switzerland',
      type: 'website'
    },
    
    kerala: {
      title: 'Kerala Tour Packages - Best Kerala Holiday Packages | Astir Passage',
      description: 'Explore God\'s Own Country with Kerala tour packages from Astir Passage. Get best deals on Kerala holiday packages including Munnar, Alleppey, Kochi & more.',
      keywords: 'kerala tour packages, kerala holiday packages, kerala travel packages, munnar tour packages, alleppey packages, kerala backwaters, kerala trip packages',
      url: '/destinations/kerala',
      type: 'website'
    },
    
    kashmir: {
      title: 'Kashmir Tour Packages - Best Kashmir Holiday Packages | Astir Passage',
      description: 'Discover paradise on earth with Kashmir tour packages from Astir Passage. Get best deals on Kashmir holiday packages including Srinagar, Gulmarg, Pahalgam & more.',
      keywords: 'kashmir tour packages, kashmir holiday packages, kashmir travel packages, srinagar tour packages, gulmarg packages, kashmir trip packages, kashmir family packages',
      url: '/destinations/kashmir',
      type: 'website'
    },
    
    ladakh: {
      title: 'Ladakh Tour Packages - Best Leh Ladakh Holiday Packages | Astir Passage',
      description: 'Explore the land of high passes with Ladakh tour packages from Astir Passage. Get best deals on Leh Ladakh holiday packages including Pangong Lake, Nubra Valley & more.',
      keywords: 'ladakh tour packages, leh ladakh packages, ladakh holiday packages, ladakh travel packages, pangong lake packages, nubra valley packages, ladakh bike trip',
      url: '/destinations/ladakh',
      type: 'website'
    }
  },
  
  pages: {
    about: {
      title: 'About Us - Astir Passage | Leading Travel Agency',
      description: 'Learn about Astir Passage, your trusted travel partner. We offer best travel packages for international and domestic destinations with customized itineraries.',
      keywords: 'about astir passage, travel agency, best travel company, travel packages india, international travel agency',
      url: '/about',
      type: 'website'
    },
    
    contact: {
      title: 'Contact Us - Astir Passage Travel Agency',
      description: 'Get in touch with Astir Passage for best travel packages and tour deals. Contact our travel experts for customized holiday packages.',
      keywords: 'contact astir passage, travel agency contact, travel packages enquiry, tour packages booking',
      url: '/contact',
      type: 'website'
    },
    
    blog: {
      title: 'Travel Blog - Travel Tips, Guides & Destination Info | Astir Passage',
      description: 'Explore our travel blog for expert travel tips, destination guides, travel itineraries and latest travel news. Plan your perfect trip with Astir Passage.',
      keywords: 'travel blog, travel tips, destination guides, travel itineraries, travel news, travel advice',
      url: '/blog',
      type: 'website'
    },
    
    faq: {
      title: 'Travel FAQ - Frequently Asked Questions | Astir Passage',
      description: 'Find answers to common travel questions. Get expert advice on travel packages, visa requirements, travel insurance and more from Astir Passage.',
      keywords: 'travel faq, travel questions, travel advice, travel tips, travel help',
      url: '/faq',
      type: 'website'
    }
  }
};

export const getDestinationSEO = (destination: string) => {
  const normalizedDestination = destination.toLowerCase();
  return SEO_CONFIG.destinations[normalizedDestination] || SEO_CONFIG.home;
};

export const getPageSEO = (page: string) => {
  return SEO_CONFIG.pages[page] || SEO_CONFIG.home;
};
