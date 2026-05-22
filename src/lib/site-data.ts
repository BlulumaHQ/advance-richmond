import heroCommunity from "@/assets/hero-community.jpg";
import richmondAerial from "@/assets/richmond-aerial.jpg";
import eventTownhall from "@/assets/event-townhall.jpg";
import eventCanvass from "@/assets/event-canvass.jpg";
import eventRally from "@/assets/event-rally.jpg";
import eventFestival from "@/assets/event-festival.jpg";
import eventVigil from "@/assets/event-vigil.jpg";
import galleryFamily from "@/assets/gallery-family.jpg";
import galleryPark from "@/assets/gallery-park.jpg";

export const images = {
  heroCommunity,
  richmondAerial,
  eventTownhall,
  eventCanvass,
  eventRally,
  eventFestival,
  eventVigil,
  galleryFamily,
  galleryPark,
};

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/team", label: "Our Team" },
  { to: "/priorities", label: "Priorities" },
  { to: "/events", label: "Events" },
  { to: "/news", label: "News" },
  { to: "/get-involved", label: "Get Involved" },
] as const;

export const socialLinks = {
  facebook: "https://www.facebook.com/advancerichmond",
  twitter: "https://x.com/advancerichmond",
  joinList:
    "https://docs.google.com/forms/d/e/1FAIpQLSflYN9o-pdKQnOFk7d6_SXg5V8_Fxuu3O03iMwU4c4extQeqA/viewform",
};

/** Leadership / community representatives. Names below reflect the kind of
 * community representation ARCA describes publicly. If exact source bios are
 * unavailable they are presented as community representatives, not individuals.
 */
export type TeamMember = {
  name: string;
  role: string;
  area: string;
  bio: string;
  initials: string;
  languages?: string[];
};

export const team: TeamMember[] = [
  {
    name: "Community Chair",
    role: "Chairperson",
    area: "Steveston · West Richmond",
    bio: "A long-time Richmond homeowner who helped convene the first neighbourhood meetings in 2024 after the supervised injection site hearing.",
    initials: "CC",
    languages: ["English"],
  },
  {
    name: "Outreach Lead",
    role: "Director of Community Outreach",
    area: "City Centre · Brighouse",
    bio: "Parent of two who organizes door-to-door information visits and bilingual town halls across Richmond neighbourhoods.",
    initials: "OL",
    languages: ["English", "繁體中文"],
  },
  {
    name: "Policy Lead",
    role: "Director of Policy",
    area: "Broadmoor",
    bio: "Tracks Council motions, public hearings, and zoning files so residents always have the facts before they speak.",
    initials: "PL",
    languages: ["English"],
  },
  {
    name: "Family Advocate",
    role: "Family & Youth Liaison",
    area: "Seafair",
    bio: "Coordinates parent meet-ups and school-community dialogues, including the 2024 Family Day Rally.",
    initials: "FA",
    languages: ["English", "粵語"],
  },
  {
    name: "Small Business Liaison",
    role: "Director, Local Economy",
    area: "No. 3 Road · Aberdeen",
    bio: "Connects ARCA with merchants and restaurateurs working to keep Richmond's shopping districts safe and prosperous.",
    initials: "SB",
    languages: ["English", "繁體中文", "普通话"],
  },
  {
    name: "Volunteer Coordinator",
    role: "Volunteer Coordinator",
    area: "Hamilton · East Richmond",
    bio: "Welcomes new volunteers and matches them with canvassing, event support, and translation teams.",
    initials: "VC",
    languages: ["English"],
  },
];

export type Priority = {
  title: string;
  description: string;
  icon: "shield" | "scale" | "home" | "users" | "heart" | "briefcase" | "vote";
};

export const priorities: Priority[] = [
  {
    title: "Public Safety",
    description:
      "Restore accountability on our streets, in our schools, and across our neighbourhoods — so families feel safe walking, playing, and gathering.",
    icon: "shield",
  },
  {
    title: "Transparent Government",
    description:
      "Decisions should be made with residents, not imposed on them. We push for genuine consultation and clear, public reasoning at City Hall.",
    icon: "scale",
  },
  {
    title: "Responsible Housing",
    description:
      "We're not against housing — we're against rushed, unsuitable projects. We back well-planned homes that strengthen neighbourhoods.",
    icon: "home",
  },
  {
    title: "Community Unity",
    description:
      "Bridge cultures, generations, and neighbourhoods. Richmond's strength is its diversity working together, not pulled apart by politics.",
    icon: "users",
  },
  {
    title: "Families & Youth",
    description:
      "Stand firm against toxic drugs and unsafe social experiments. Support parents, schools, and youth with constructive alternatives.",
    icon: "heart",
  },
  {
    title: "Local Economy",
    description:
      "Help small businesses and ordinary residents thrive. A healthy local economy is the foundation of a healthy city.",
    icon: "briefcase",
  },
];

export type NewsItem = {
  slug: string;
  title: string;
  excerpt: string;
  body: string[];
  date: string;
  image: string;
  category: string;
  sourceUrl: string;
};

export const news: NewsItem[] = [
  {
    slug: "cowichan-land-title-dispute",
    title: "Cowichan Land Title Dispute",
    excerpt:
      "ARCA went door-to-door to inform residents about the Cowichan land title dispute and stood with a Richmond homeowner through the follow-up process.",
    body: [
      "When the Cowichan land title dispute raised concerns about how it might affect Richmond property owners, Advance Richmond volunteers walked the neighbourhoods most likely to have questions and made sure residents had clear, accurate information.",
      "We then stood with one Richmond homeowner through the follow-up process, helping connect them to the right legal channels and elected officials so their voice was heard.",
      "Protecting local property rights — and making sure no resident has to navigate a complex provincial issue alone — is exactly the kind of long-term community work ARCA was built for.",
    ],
    date: "2025-09-12",
    image: heroCommunity,
    category: "Advocacy",
    sourceUrl:
      "https://www.advancerichmond.ca/latest-news-and-events/cowichan-land-title-dispute",
  },
  {
    slug: "community-links",
    title: "Community Links",
    excerpt:
      "We are deeply rooted in the Richmond community, working to bring neighbours together, amplify local voices, and advocate for a safer, more engaged city.",
    body: [
      "Community Links is our ongoing program to strengthen the everyday connections between Richmond residents — across cultures, languages, and neighbourhoods.",
      "From small porch conversations to bilingual town halls, the goal is the same: make sure every resident knows what's happening in their city, and knows how to be heard.",
      "If you'd like to host a small gathering on your street, or help us translate materials, please get in touch.",
    ],
    date: "2025-07-04",
    image: galleryPark,
    category: "Community",
    sourceUrl:
      "https://www.advancerichmond.ca/latest-news-and-events/community-links",
  },
  {
    slug: "stop-cph",
    title: "Stop CPH — Cambie Low-Barrier Housing",
    excerpt:
      "Stopping the CPH project is about protecting community safety and well-being. We are not against housing — but it must be the right kind of housing.",
    body: [
      "ARCA opposes the Cambie low-barrier housing (CPH) proposal in its current form. The objection is not to housing itself, but to a project located and designed in a way that we believe will harm the surrounding community.",
      "We want housing that truly supports residents — with appropriate supports, suitable locations, and meaningful consultation with the neighbourhoods that will live alongside it.",
      "Through public hearings, written submissions, and community education sessions, ARCA continues to call for a better path forward.",
    ],
    date: "2025-05-22",
    image: eventTownhall,
    category: "Policy",
    sourceUrl:
      "https://www.advancerichmond.ca/latest-news-and-events/stop-cph",
  },
  {
    slug: "2024-family-day-rally",
    title: "2024 Family Day Rally",
    excerpt:
      "The largest self-organized gathering in Richmond's recent history — families across communities calling for transparency and genuine consultation.",
    body: [
      "On Family Day 2024, thousands of Richmond residents from across cultures and neighbourhoods gathered peacefully to oppose unsafe drug and housing policies, and to call for genuine public consultation.",
      "It was the largest self-organized civic gathering in the city's recent history — and it showed something important: when ordinary people are given a clear way to be heard, they show up.",
      "The energy of that day became the foundation for the Advance Richmond Community Association.",
    ],
    date: "2024-02-19",
    image: eventRally,
    category: "Events",
    sourceUrl:
      "https://www.advancerichmond.ca/latest-news-and-events/2024-family-day-rally",
  },
];

export type FeaturedEvent = {
  title: string;
  date: string;
  location: string;
  blurb: string;
  image: string;
  tag: string;
};

export const featuredEvents: FeaturedEvent[] = [
  {
    title: "Neighbourhood Town Hall",
    date: "Ongoing",
    location: "Across Richmond neighbourhoods",
    blurb:
      "Small, bilingual gatherings where residents bring concerns directly to ARCA organizers and elected officials.",
    image: eventTownhall,
    tag: "Town Halls",
  },
  {
    title: "Door-to-Door Information Visits",
    date: "Year-round",
    location: "Steveston · City Centre · Broadmoor",
    blurb:
      "Volunteers walking blocks to share clear, fact-based information on issues that affect Richmond families.",
    image: eventCanvass,
    tag: "Outreach",
  },
  {
    title: "Family Day Rally",
    date: "Family Day weekend",
    location: "Richmond City Hall",
    blurb:
      "An annual peaceful gathering of families calling for safer streets and genuine consultation.",
    image: eventRally,
    tag: "Rally",
  },
  {
    title: "Community Festival Booths",
    date: "Spring – Fall",
    location: "Steveston Village · Aberdeen Centre",
    blurb:
      "Look for our table at Richmond festivals — bilingual materials, friendly conversation, and ways to get involved.",
    image: eventFestival,
    tag: "Festivals",
  },
  {
    title: "Candlelight Vigils",
    date: "As needed",
    location: "Richmond civic spaces",
    blurb:
      "Quiet, respectful vigils that bring residents together in moments that call for solidarity.",
    image: eventVigil,
    tag: "Vigils",
  },
];
