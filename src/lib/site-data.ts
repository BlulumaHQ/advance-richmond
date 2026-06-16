/**
 * All content below is sourced from https://www.advancerichmond.ca/.
 * Images are served from Google Sites' CDN (lh3.googleusercontent.com),
 * the same host the source site uses.
 */

import teamKevinLai from "@/assets/team-kevin-lai.jpeg";
import teamSamWang from "@/assets/team-sam-wang.jpeg";
import teamSophiaWoo from "@/assets/team-sophia-woo.jpeg";
import teamPhyllisTang from "@/assets/team-phyllis-tang.jpeg";
import teamDeanBillings from "@/assets/team-dean-billings.jpeg";
import teamDannyChang from "@/assets/team-danny-chang.jpeg";
import heroCommunity from "@/assets/hero-community.jpg";
import richmondAerial from "@/assets/richmond-aerial.jpg";
import eventCanvass from "@/assets/event-canvass.jpg";
import eventFestival from "@/assets/event-festival.jpg";
import eventRally from "@/assets/event-rally.jpg";
import eventTownhall from "@/assets/event-townhall.jpg";
import eventVigil from "@/assets/event-vigil.jpg";
import galleryFamily from "@/assets/gallery-family.jpg";
import galleryPark from "@/assets/gallery-park.jpg";

export const sourceImages = {
  // homepage news cards / section heroes — local assets (no CDN hot-link)
  cowichan: eventCanvass,
  communityLinks: galleryPark,
  stopCph: eventTownhall,
  familyDayRally: eventRally,
  aboutHero: heroCommunity,
  newsHero: richmondAerial,
  schoolRenaming: eventVigil,
  // team portraits — uploaded high-resolution headshots
  kevinLai: teamKevinLai,
  samWang: teamSamWang,
  sophiaWoo: teamSophiaWoo,
  phyllisTang: teamPhyllisTang,
  deanBillings: teamDeanBillings,
  dannyChang: teamDannyChang,
};

export const images: Record<string, string> = { ...sourceImages };

// Back-compat aliases used by older routes; all point to real source photos.
export const legacyImageAliases = {
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
Object.assign(images, legacyImageAliases);

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About ARCA" },
  { to: "/team", label: "Our Team" },
  { to: "/news", label: "News & Events" },
  { to: "/get-involved", label: "Get Involved" },
] as const;

export const socialLinks = {
  facebook: "https://www.facebook.com/advancerichmond",
  twitter: "https://x.com/advancerichmond",
  joinList:
    "https://docs.google.com/forms/d/e/1FAIpQLSflYN9o-pdKQnOFk7d6_SXg5V8_Fxuu3O03iMwU4c4extQeqA/viewform",
  membership:
    "https://docs.google.com/forms/d/e/1FAIpQLSc85jJmmTl39iSVd-WcRsVn2_ckyZG9sfVxae2znlMsu_ensw/viewform",
  drugSurvey: "https://forms.gle/Ks8CTyjPkDsjdk7w8",
  youthSurvey:
    "https://docs.google.com/forms/d/e/1FAIpQLScyR-HVCatVeZCo8iXrxzsvV4ose2Ipasu4rdfkNBEU0aJx8w/viewform?usp=header",
  donateCouncilEmail: "fund@advancerichmond.ca",
  donateTrusteeEmail: "sd38@advancerichmond.ca",
};

/** Leadership / community representatives. Names below reflect the kind of
 * community representation ARCA describes publicly. If exact source bios are
 * unavailable they are presented as community representatives, not individuals.
 */
export type TeamMember = {
  name: string;
  role: string;
  area?: string;
  bio: string;
  initials: string;
  photo?: string;
  slug?: string;
  socials?: { label: string; url: string }[];
  languages?: string[];
};

export const team: TeamMember[] = [
  {
    name: "Gary Law",
    role: "Director",
    slug: "gary-law",
    bio: "A founding member of the Advance Richmond Community Association, Gary helped bring together Richmond residents around community safety, transparent local government, and a stronger civic voice.",
    initials: "GL",
  },
  {
    name: "Kevin Lai 賴彥宏",
    role: "Founder & Director",
    slug: "kevin-lai",
    photo: sourceImages.kevinLai,
    bio: "Founder of the Advance Richmond Community Association and president of the Richmond Centre Conservative EDA. A business owner and general contractor of 10+ years, Kevin helped unite Richmond's Chinese communities in the largest resident-led rally in the city's history.",
    initials: "KL",
    languages: ["English", "粵語", "普通话"],
  },
  {
    name: "Sam Wang 王晟",
    role: "Director",
    slug: "sam-wang",
    photo: sourceImages.samWang,
    bio: "A 30-year Richmond resident and Chartered Professional Accountant, Sam brings decades of experience as a senior financial executive and audit committee chair. He serves on the board of the Richmond Centre for Disability.",
    initials: "SW",
    socials: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/samwangcpa/" },
      { label: "X", url: "https://x.com/SamWangRichmond" },
      { label: "Instagram", url: "https://www.instagram.com/sam.wang.cpa/" },
    ],
  },
  {
    name: "Sophia Woo 胡慧儀",
    role: "Director",
    slug: "sophia-woo",
    photo: sourceImages.sophiaWoo,
    bio: "Mental health clinician, former Vancouver School Board Trustee (2011–2014), and Paul Harris Fellow. Sophia brings 30 years of public-service experience in health, education, and community organizations.",
    initials: "SoW",
    socials: [
      { label: "X", url: "https://x.com/woo_sophia" },
      { label: "Instagram", url: "https://www.instagram.com/woosophia2026/" },
    ],
  },
  {
    name: "Phyllis Tang 鄧明惠",
    role: "Director",
    slug: "phyllis-tang",
    photo: sourceImages.phyllisTang,
    bio: "Music educator of 24+ years, Community Outreach & PR Specialist, and 2018 Vancouver City Council Candidate. Phyllis is Treasurer of the Rotaract Club of Richmond and a Director of the Advance Richmond Community Association.",
    initials: "PT",
    languages: ["English", "普通话", "粵語"],
    socials: [
      { label: "X", url: "https://x.com/Phyllis_MH_Tang" },
      { label: "Instagram", url: "https://www.instagram.com/phyllis.tang.cares/" },
    ],
  },
  {
    name: "Dean Billings",
    role: "Director",
    slug: "dean-billings",
    photo: sourceImages.deanBillings,
    bio: "Secretary of the Richmond District Parents Association (District PAC), coach and board member with the Richmond Lacrosse Association, and software project manager with 16+ years in public-sector digital transformation.",
    initials: "DB",
    socials: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/deanbillings/" },
      { label: "Instagram", url: "https://www.instagram.com/deanbillingscan/" },
      { label: "X", url: "https://x.com/deanbillingscan" },
    ],
  },
  {
    name: "Danny Chang 張博浩",
    role: "Director",
    slug: "danny-chang",
    photo: sourceImages.dannyChang,
    bio: "Richmond business director and SFU Business graduate, Danny has volunteered in federal and provincial election campaigns. As a parent in the Richmond School District, he champions safe, welcoming schools for every student.",
    initials: "DC",
    socials: [
      { label: "Instagram", url: "https://www.instagram.com/dannychang0602/" },
    ],
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
    slug: "school-renaming-policy",
    title: "Concerns about School Re-Naming Policy",
    excerpt:
      "Advance Richmond raises concerns about the Richmond School District's (SD38) efforts to decolonize public education.",
    body: [
      "Advance Richmond has formally raised concerns about the Richmond School District's school re-naming and decolonization initiative.",
      "Our submission calls for clearer process, genuine community consultation, and decisions that reflect the views of Richmond parents and students.",
    ],
    date: "2025-10-15",
    image: sourceImages.schoolRenaming,
    category: "Education",
    sourceUrl:
      "https://drive.google.com/file/d/1r9bp6Qf9hOrOKlyGSZau2UmzX6-DZKC0/view?usp=sharing",
  },
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
    image: sourceImages.cowichan,
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
    image: sourceImages.communityLinks,
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
    image: sourceImages.stopCph,
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
    image: sourceImages.familyDayRally,
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
    image: legacyImageAliases.eventTownhall,
    tag: "Town Halls",
  },
  {
    title: "Door-to-Door Information Visits",
    date: "Year-round",
    location: "Steveston · City Centre · Broadmoor",
    blurb:
      "Volunteers walking blocks to share clear, fact-based information on issues that affect Richmond families.",
    image: legacyImageAliases.eventCanvass,
    tag: "Outreach",
  },
  {
    title: "Family Day Rally",
    date: "Family Day weekend",
    location: "Richmond City Hall",
    blurb:
      "An annual peaceful gathering of families calling for safer streets and genuine consultation.",
    image: legacyImageAliases.eventRally,
    tag: "Rally",
  },
  {
    title: "Community Festival Booths",
    date: "Spring – Fall",
    location: "Steveston Village · Aberdeen Centre",
    blurb:
      "Look for our table at Richmond festivals — bilingual materials, friendly conversation, and ways to get involved.",
    image: legacyImageAliases.eventFestival,
    tag: "Festivals",
  },
  {
    title: "Candlelight Vigils",
    date: "As needed",
    location: "Richmond civic spaces",
    blurb:
      "Quiet, respectful vigils that bring residents together in moments that call for solidarity.",
    image: legacyImageAliases.eventVigil,
    tag: "Vigils",
  },
];
