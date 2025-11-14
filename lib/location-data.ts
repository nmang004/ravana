/**
 * Hampton Roads Service Area Location Data
 *
 * Centralized data structure for all service area pages including
 * cities, landmarks, services, and SEO metadata.
 */

export interface Landmark {
  name: string;
  description: string;
  image: string;
  category: 'Cultural' | 'Historical' | 'Entertainment' | 'Business' | 'Waterfront';
}

export interface CityStats {
  population: number;
  businesses: number;
  medianIncome: string;
  keyIndustries: string[];
}

export interface WhyCityReason {
  title: string;
  description: string;
  icon: string; // Lucide icon name
}

export interface ServiceAreaCity {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  heroDescription: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  stats: CityStats;
  landmarks: Landmark[];
  whyCity: WhyCityReason[];
  heroImage: string;
  ogImage: string;
  metaKeywords: string[];
}

export interface ServiceDefinition {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  icon: string; // Lucide icon name
  mainServicePath: string; // Link to main service page
}

// Service definitions
export const serviceAreaServices: ServiceDefinition[] = [
  {
    id: 'web-development',
    name: 'Web Development',
    slug: 'web-development',
    shortDescription: 'Custom websites and web applications that drive results',
    icon: 'Code2',
    mainServicePath: '/services/web',
  },
  {
    id: 'seo',
    name: 'SEO Services',
    slug: 'seo',
    shortDescription: 'Dominate local search results and attract more customers',
    icon: 'TrendingUp',
    mainServicePath: '/services/seo',
  },
  {
    id: 'saas-development',
    name: 'SaaS Development',
    slug: 'saas-development',
    shortDescription: 'Scalable software platforms that solve real problems',
    icon: 'Layers',
    mainServicePath: '/services/saas',
  },
  {
    id: 'digital-marketing',
    name: 'Digital Marketing',
    slug: 'digital-marketing',
    shortDescription: 'Data-driven campaigns that generate measurable growth',
    icon: 'Target',
    mainServicePath: '/services/marketing',
  },
];

// Hampton Roads cities
export const hamptonRoadsCities: ServiceAreaCity[] = [
  {
    id: 'norfolk',
    name: 'Norfolk',
    slug: 'norfolk',
    tagline: 'Digital Solutions for Norfolk\'s Growing Business Community',
    description: 'Norfolk stands as the economic and cultural heart of Hampton Roads, home to the world\'s largest naval base and a thriving urban business district. From downtown corporations to waterfront enterprises, Norfolk businesses need cutting-edge digital solutions to compete in today\'s market.',
    heroDescription: 'Partnering with Norfolk businesses to create powerful digital experiences that drive growth, engagement, and measurable results in the heart of Hampton Roads.',
    coordinates: {
      lat: 36.8508,
      lng: -76.2859,
    },
    stats: {
      population: 238000,
      businesses: 12500,
      medianIncome: '$54,000',
      keyIndustries: ['Defense & Military', 'Healthcare', 'Port Operations', 'Tourism', 'Technology'],
    },
    landmarks: [
      {
        name: 'Nauticus & USS Wisconsin',
        description: 'Maritime museum and battleship offering stunning waterfront views and rich naval history.',
        image: '/images/service-areas/landmarks/norfolk-nauticus.webp',
        category: 'Historical',
      },
      {
        name: 'Chrysler Museum of Art',
        description: 'World-class art museum featuring glass art, European paintings, and contemporary works.',
        image: '/images/service-areas/landmarks/norfolk-chrysler.webp',
        category: 'Cultural',
      },
      {
        name: 'Norfolk Waterside District',
        description: 'Vibrant entertainment district with restaurants, bars, and events along the Elizabeth River.',
        image: '/images/service-areas/landmarks/norfolk-waterside.webp',
        category: 'Entertainment',
      },
      {
        name: 'Town Point Park',
        description: 'Scenic waterfront park hosting festivals and offering beautiful harbor views.',
        image: '/images/service-areas/landmarks/norfolk-townpoint.webp',
        category: 'Waterfront',
      },
    ],
    whyCity: [
      {
        title: 'Naval & Defense Expertise',
        description: 'We understand the unique digital needs of Norfolk\'s defense contractors, military support businesses, and government-adjacent companies.',
        icon: 'Shield',
      },
      {
        title: 'Downtown Business District',
        description: 'From corporate headquarters to small businesses, we know the competitive landscape of Norfolk\'s urban core and how to make businesses stand out.',
        icon: 'Building2',
      },
      {
        title: 'Tourism & Hospitality Focus',
        description: 'Norfolk\'s waterfront attractions and hospitality sector require engaging digital experiences—our specialty.',
        icon: 'Compass',
      },
      {
        title: 'Local Market Knowledge',
        description: 'As Hampton Roads natives, we understand Norfolk\'s business culture, customer demographics, and competitive advantages.',
        icon: 'MapPin',
      },
    ],
    heroImage: '/images/service-areas/cities/norfolk-hero.jpg',
    ogImage: '/images/service-areas/og/norfolk-og.jpg',
    metaKeywords: [
      'Norfolk web development',
      'Norfolk SEO services',
      'Norfolk digital marketing',
      'web design Norfolk VA',
      'Norfolk SaaS development',
      'digital agency Norfolk',
    ],
  },
  {
    id: 'virginia-beach',
    name: 'Virginia Beach',
    slug: 'virginia-beach',
    tagline: 'Powering Virginia Beach Businesses with Digital Excellence',
    description: 'As Virginia\'s most populous city, Virginia Beach blends a thriving tourism industry with diverse business sectors from real estate to professional services. The city\'s entrepreneurial spirit and coastal lifestyle create unique opportunities for businesses that embrace digital innovation.',
    heroDescription: 'Helping Virginia Beach businesses capture leads, dominate local search, and create unforgettable digital experiences that convert visitors into customers.',
    coordinates: {
      lat: 36.8529,
      lng: -75.9780,
    },
    stats: {
      population: 459000,
      businesses: 18700,
      medianIncome: '$76,000',
      keyIndustries: ['Tourism & Hospitality', 'Real Estate', 'Defense', 'Professional Services', 'Retail'],
    },
    landmarks: [
      {
        name: 'Virginia Beach Boardwalk',
        description: 'Iconic 3-mile oceanfront boardwalk with restaurants, hotels, and entertainment.',
        image: '/images/service-areas/landmarks/vb-boardwalk.webp',
        category: 'Waterfront',
      },
      {
        name: 'First Landing State Park',
        description: 'Beautiful coastal park with hiking trails, beaches, and natural areas.',
        image: '/images/service-areas/landmarks/vb-firstlanding.webp',
        category: 'Entertainment',
      },
      {
        name: 'Town Center Virginia Beach',
        description: 'Upscale mixed-use development with shopping, dining, and business offices.',
        image: '/images/service-areas/landmarks/vb-towncenter.webp',
        category: 'Business',
      },
      {
        name: 'Virginia Aquarium',
        description: 'World-class aquarium featuring marine life exhibits and wildlife adventures.',
        image: '/images/service-areas/landmarks/vb-aquarium.webp',
        category: 'Entertainment',
      },
    ],
    whyCity: [
      {
        title: 'Tourism Industry Leadership',
        description: 'We specialize in hospitality, restaurant, and attraction websites that capture the attention of Virginia Beach\'s 16+ million annual visitors.',
        icon: 'Palmtree',
      },
      {
        title: 'Real Estate Digital Solutions',
        description: 'Virginia Beach\'s booming real estate market demands sophisticated lead generation and property showcase websites—our forte.',
        icon: 'Home',
      },
      {
        title: 'Service Business Growth',
        description: 'From contractors to professional services, we help Virginia Beach service businesses dominate local search and convert more leads.',
        icon: 'Briefcase',
      },
      {
        title: 'E-commerce Excellence',
        description: 'Serving Virginia Beach retailers with high-converting online stores and digital marketing strategies that drive sales.',
        icon: 'ShoppingCart',
      },
    ],
    heroImage: '/images/service-areas/cities/virginia-beach-hero.jpg',
    ogImage: '/images/service-areas/og/virginia-beach-og.jpg',
    metaKeywords: [
      'Virginia Beach web development',
      'Virginia Beach SEO',
      'web design Virginia Beach',
      'Virginia Beach digital marketing',
      'VB web development',
      'digital agency Virginia Beach',
    ],
  },
  {
    id: 'chesapeake',
    name: 'Chesapeake',
    slug: 'chesapeake',
    tagline: 'Chesapeake\'s Partner for Digital Growth & Innovation',
    description: 'Chesapeake combines suburban growth with strategic business location, offering easy access to the entire Hampton Roads region. From Greenbrier\'s commercial district to emerging tech companies, Chesapeake businesses are positioned for growth with the right digital strategy.',
    heroDescription: 'Empowering Chesapeake businesses with websites, SEO, and digital marketing that deliver real results in the competitive Hampton Roads market.',
    coordinates: {
      lat: 36.7682,
      lng: -76.2875,
    },
    stats: {
      population: 252000,
      businesses: 10800,
      medianIncome: '$80,000',
      keyIndustries: ['Retail', 'Healthcare', 'Construction', 'Professional Services', 'Manufacturing'],
    },
    landmarks: [
      {
        name: 'Greenbrier Mall',
        description: 'Major shopping destination with retail stores, restaurants, and entertainment options.',
        image: '/images/service-areas/landmarks/chesapeake-greenbrier.webp',
        category: 'Business',
      },
      {
        name: 'Great Dismal Swamp',
        description: 'Vast natural preserve offering hiking, kayaking, and wildlife observation.',
        image: '/images/service-areas/landmarks/chesapeake-swamp.webp',
        category: 'Entertainment',
      },
      {
        name: 'Chesapeake City Park',
        description: 'Expansive park with trails, sports facilities, and community events.',
        image: '/images/service-areas/landmarks/chesapeake-citypark.webp',
        category: 'Entertainment',
      },
      {
        name: 'Battlefield Boulevard Corridor',
        description: 'Major commercial corridor serving Chesapeake\'s business community.',
        image: '/images/service-areas/landmarks/chesapeake-battlefield.webp',
        category: 'Business',
      },
    ],
    whyCity: [
      {
        title: 'Suburban Business Focus',
        description: 'We understand Chesapeake\'s unique position as a residential hub and create digital strategies that reach families and homeowners.',
        icon: 'TreePine',
      },
      {
        title: 'Retail & Service Excellence',
        description: 'Chesapeake\'s retail and service sectors thrive on local visibility—we deliver SEO and digital marketing that puts you on the map.',
        icon: 'Store',
      },
      {
        title: 'Healthcare Digital Solutions',
        description: 'Supporting Chesapeake\'s growing healthcare providers with patient-focused websites and HIPAA-compliant digital marketing.',
        icon: 'Heart',
      },
      {
        title: 'Construction & Trades',
        description: 'We help Chesapeake contractors and trade businesses generate quality leads through targeted digital campaigns.',
        icon: 'HardHat',
      },
    ],
    heroImage: '/images/service-areas/cities/chesapeake-hero.jpeg',
    ogImage: '/images/service-areas/og/chesapeake-og.jpg',
    metaKeywords: [
      'Chesapeake web development',
      'Chesapeake SEO services',
      'web design Chesapeake VA',
      'Chesapeake digital marketing',
      'digital agency Chesapeake',
      'Chesapeake website design',
    ],
  },
  {
    id: 'hampton',
    name: 'Hampton',
    slug: 'hampton',
    tagline: 'Digital Solutions for Hampton\'s Historic Business Community',
    description: 'Hampton blends 400 years of American history with modern aerospace innovation and a vibrant waterfront. From NASA Langley to downtown merchants, Hampton businesses benefit from digital strategies that honor tradition while embracing innovation.',
    heroDescription: 'Supporting Hampton businesses with cutting-edge web development, SEO, and digital marketing that connects with customers and drives measurable growth.',
    coordinates: {
      lat: 37.0299,
      lng: -76.3452,
    },
    stats: {
      population: 137000,
      businesses: 7200,
      medianIncome: '$56,000',
      keyIndustries: ['Aerospace', 'Defense', 'Tourism', 'Healthcare', 'Education'],
    },
    landmarks: [
      {
        name: 'NASA Langley Research Center',
        description: 'Historic NASA facility advancing aerospace technology and innovation.',
        image: '/images/service-areas/landmarks/hampton-nasa.webp',
        category: 'Business',
      },
      {
        name: 'Hampton Coliseum',
        description: 'Major entertainment venue hosting concerts, sports, and events.',
        image: '/images/service-areas/landmarks/hampton-coliseum.webp',
        category: 'Entertainment',
      },
      {
        name: 'Virginia Air & Space Center',
        description: 'Interactive museum celebrating aviation and space exploration history.',
        image: '/images/service-areas/landmarks/hampton-airspace.webp',
        category: 'Cultural',
      },
      {
        name: 'Fort Monroe',
        description: 'Historic fort and national monument with waterfront views and rich history.',
        image: '/images/service-areas/landmarks/hampton-fortmonroe.webp',
        category: 'Historical',
      },
    ],
    whyCity: [
      {
        title: 'Aerospace & Technology',
        description: 'We work with Hampton\'s tech-forward businesses and aerospace contractors who demand sophisticated digital solutions.',
        icon: 'Rocket',
      },
      {
        title: 'Historic Tourism Marketing',
        description: 'Hampton\'s rich history attracts visitors—we create digital experiences that capture their attention and drive bookings.',
        icon: 'Landmark',
      },
      {
        title: 'Downtown Revitalization',
        description: 'Supporting Hampton\'s downtown resurgence with websites and marketing that bring customers to local businesses.',
        icon: 'Building',
      },
      {
        title: 'Waterfront Business Strategy',
        description: 'We understand the unique needs of Hampton\'s waterfront businesses, from marinas to restaurants.',
        icon: 'Anchor',
      },
    ],
    heroImage: '/images/service-areas/cities/hampton-hero.jpg',
    ogImage: '/images/service-areas/og/hampton-og.jpg',
    metaKeywords: [
      'Hampton web development',
      'Hampton SEO services',
      'web design Hampton VA',
      'Hampton digital marketing',
      'digital agency Hampton',
      'Hampton website design',
    ],
  },
  {
    id: 'portsmouth',
    name: 'Portsmouth',
    slug: 'portsmouth',
    tagline: 'Elevating Portsmouth Businesses Through Digital Innovation',
    description: 'Portsmouth\'s historic charm and strategic waterfront location create a unique business environment where tradition meets opportunity. From Olde Towne\'s brick streets to the bustling port, Portsmouth businesses thrive with digital strategies that connect them to customers across Hampton Roads.',
    heroDescription: 'Partnering with Portsmouth businesses to build powerful online presences, dominate local search, and generate consistent growth through proven digital strategies.',
    coordinates: {
      lat: 36.8354,
      lng: -76.2983,
    },
    stats: {
      population: 97000,
      businesses: 4500,
      medianIncome: '$51,000',
      keyIndustries: ['Maritime', 'Healthcare', 'Retail', 'Manufacturing', 'Arts & Culture'],
    },
    landmarks: [
      {
        name: 'Olde Towne Portsmouth',
        description: 'Historic district with charming streets, boutiques, galleries, and restaurants.',
        image: '/images/service-areas/landmarks/portsmouth-oldtowne.webp',
        category: 'Historical',
      },
      {
        name: 'Portsmouth Naval Shipyard Museum',
        description: 'Maritime museum celebrating Portsmouth\'s rich naval and shipbuilding heritage.',
        image: '/images/service-areas/landmarks/portsmouth-museum.webp',
        category: 'Cultural',
      },
      {
        name: 'High Street',
        description: 'Vibrant corridor of local shops, restaurants, and artistic venues.',
        image: '/images/service-areas/landmarks/portsmouth-highstreet.webp',
        category: 'Business',
      },
      {
        name: 'Elizabeth River Park',
        description: 'Scenic waterfront park with walking trails and harbor views.',
        image: '/images/service-areas/landmarks/portsmouth-riverpark.webp',
        category: 'Waterfront',
      },
    ],
    whyCity: [
      {
        title: 'Small Business Champions',
        description: 'Portsmouth\'s entrepreneurial community deserves enterprise-level digital solutions—we deliver them at accessible prices.',
        icon: 'Users',
      },
      {
        title: 'Historic District Expertise',
        description: 'We create digital experiences that honor Portsmouth\'s historic character while driving modern business results.',
        icon: 'BookOpen',
      },
      {
        title: 'Arts & Culture Marketing',
        description: 'Supporting Portsmouth\'s galleries, theaters, and cultural venues with engaging digital marketing that fills seats.',
        icon: 'Palette',
      },
      {
        title: 'Maritime Industry Knowledge',
        description: 'Understanding Portsmouth\'s port and maritime businesses, we deliver B2B digital strategies that generate leads.',
        icon: 'Ship',
      },
    ],
    heroImage: '/images/service-areas/cities/portsmouth-hero.jpg',
    ogImage: '/images/service-areas/og/portsmouth-og.jpg',
    metaKeywords: [
      'Portsmouth web development',
      'Portsmouth SEO services',
      'web design Portsmouth VA',
      'Portsmouth digital marketing',
      'digital agency Portsmouth',
      'Portsmouth website design',
    ],
  },
];

// Helper functions

export function getAllCities(): ServiceAreaCity[] {
  return hamptonRoadsCities;
}

export function getCityBySlug(slug: string): ServiceAreaCity | undefined {
  return hamptonRoadsCities.find(city => city.slug === slug);
}

export function getServiceBySlug(slug: string): ServiceDefinition | undefined {
  return serviceAreaServices.find(service => service.slug === slug);
}

export function getAllServices(): ServiceDefinition[] {
  return serviceAreaServices;
}

export function getCityServicePath(citySlug: string, serviceSlug: string): string {
  return `/service-areas/${citySlug}/${serviceSlug}`;
}

export function getCityPath(citySlug: string): string {
  return `/service-areas/${citySlug}`;
}

// Metadata generators

export function generateCityMetaTitle(cityName: string): string {
  return `${cityName} Web Development & SEO | Ravana Solutions`;
}

export function generateCityMetaDescription(cityName: string): string {
  return `Expert web development and SEO services in ${cityName}, VA. Helping Hampton Roads businesses grow with custom websites and proven search optimization. Call (757) 394-0583.`;
}

export function generateCityServiceMetaTitle(cityName: string, serviceName: string): string {
  return `${serviceName} in ${cityName} | Ravana Solutions`;
}

export function generateCityServiceMetaDescription(cityName: string, serviceName: string): string {
  return `Professional ${serviceName.toLowerCase()} services for ${cityName} businesses. Drive growth with expert web development and SEO strategies tailored to Hampton Roads. Call (757) 394-0583.`;
}
