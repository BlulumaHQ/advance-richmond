/**
 * All content below is sourced from https://www.advancerichmond.ca/.
 * Images are served from Google Sites' CDN (lh3.googleusercontent.com),
 * the same host the source site uses.
 */

// Real images from the source site (Google Sites CDN). These are stable URLs
// also referenced from advancerichmond.ca itself.
const G = (id: string) => `https://lh3.googleusercontent.com/sitesv/${id}=w1600`;

export const sourceImages = {
  // homepage news cards
  cowichan: G(
    "AA5AbUAqW8t-CjOUV1rQiNWbv8YT_oul8i0MNCHPfxnlcozjhR58pq-0cP4fZ6opEppgT3BwXZHACh-t-kUH_6V2k_k_Bjd92q26moime2OPOD3_lmUrKhPyc8WmIyyhALRVdLRPhp8fcU5XXq6_uc6t8mLDdVvNQ7BoH5YX258DionLB2OzpOieZYhERbZvi-mj2tbvKuJ6dcu3VNiNxEu2-5674_c7oeugcy8SC_k",
  ),
  communityLinks: G(
    "AA5AbUBPV6gv8FfgX3fG7h6als04rzr-1yS5K-mDsrimkKBKS2nYUK72kZOMb7bPtRIrllw-SuW2ua_OlSXJve9iS2kmpsC2Rh88PpnRdLAeqNGq0kJ-H2ozLgMSvSyJaOnHoGJ56WGInSaWhlmEPgGX3GUV65r1Bb3-3EaIa1M35Uh4GnQMJrmBbdupcsutNoMSW-Sw5jgMxuGBJtn-6zEOvjibe6Mk4iWLlHKk",
  ),
  stopCph: G(
    "AA5AbUDn4qIRQ6Akj7vqE-A94cTmGzDLzNOuBNuBD7aDts4lr7OX-oTAOMARWO0DQCV09Q2S9mFroqIMk9EX9WWkwQhGQdZWxcazdYRYw-Y7csLMPpAcoLpVqPZnTng0fFxP7xYO-LUTXn_mNPKPgOg9c6-w7SgsYXOwveDym4A4PnQ9s2dt5KV4M5DIUKCIF2ysqb19VuhxR8XZlUgg_rDIVAFpLGM_QQMJt4PKvDM",
  ),
  familyDayRally: G(
    "AA5AbUBs-9Om8kxdyC4HdjstCBpNkO2MfPo4Yc71uFCA_5AUeUTRJ4B4l7rEOS2JwUkewz0G1anfN4XFjOqFqThDyasjOzvJGzfuKB7_p2XHhY6iz0NjSSn73wImcVHkUQ1G0cUONS6KHGgnX9sMNPTb2zxJ2onIn0zvSyl07i5n55Ghpwv40IhtE-99-rGLFph3DgHkow0d7p-R5WbJqL1dd7vLhpqE2yCFcXq3",
  ),
  // section heroes
  aboutHero: G(
    "AA5AbUC80xYDP5jnPCjtP0jTLSeuYLYYWvhtRWutruX7GC5rSkMLEUuTKMFsOwZKmA8oj0-At35h8v3EYjGx8kTBcqosRn8D_a0YRerX_87CCjW4_0pPzK1DMerqPi2VTWs567SOMb-gT46ipe1QmMXjf3F7T9yY-d3pSMUV0E1SBiwTQuPBdp9wzOohMkRXHfQ8L-GQhIJOqA2O9R029I_ZTxrJNvpXTrRzAd_n",
  ),
  newsHero: G(
    "AA5AbUB7tsy31nqZ1UYrzYZ-S9mxz5gkovTc-24EPuy5ObydJK1VTuEu2aGm6d9UT9JTG9qw-tQkBt_rEMjVC8siIy89g4J0OrqH2cmj2bBi5Y9Q8RT9L0zAZvxjuKwPQ-gNy7yvZkJAQWNLO07gyY8pW6HLkIHCK1A5pSi4mawleRWk1UV0YCF1G5YZDa3rouIZq7Cle2-3QGiQalr_wPt-9yH2fUB_Rx0bXb0Q",
  ),
  schoolRenaming: G(
    "AA5AbUBe0W3LabJbF06M5psDD0lLtiDYsu48pM1QdBqWMIh40jvxtiPGXEZHvK20AiHGuHMr6NAYHjyllheo_n_DQbgYYpnxp4t8G8mIDMOghd7Qm3D04nmlHHN5yKBHI_xLZQAgKzOhN2DrJcum2Nk6qg3fM0Pnos-LFEpYynJd8QsRDfxQvg2Np8taXrbtu8h6oRf0lR7SjcIz1nEhp4lJ4oTffWAUOyk33Nxf",
  ),
  // team portraits
  kevinLai: G(
    "AA5AbUAWg1C8xbmhLC4sUT-HIas5lCih4C2caaydCiw5sX1jzhXzGkNKj5_UIdN4ZVBWUajGBDEiAAWVgZd9CiCwYKyCydU0WTg8aD8F_LYTpQ0vr9yAuac49E8mxnCKbCMZxMAx6o5Q6EVbCvG5aoYvjBwS3YNzcPeovPJH4ahue-7nUeol924shuEvATqlmapJzqTFt4-ZmFkr_KsFXrovbdl3uZ1M0EmHkNISofM",
  ),
  samWang: G(
    "AA5AbUBTnsDonxRDNP4gLRPXBYyhs5FUkY5DyOT0W1d14wyzn0kWmK6p3KfLo2ns--BT9d0qF-YhZ0COYCJOCt97_xzlAxvWMpKT_TUpxhFdxpnpWxYV_WVVqpiEaKcmFSfzmxxRgnN0QkIRyyxo4q8sEveh0MFiNQtLgrFcGf_pFwUp75Pz8QwrAZZyI1c91qsSclSd8Vvl9VPtxSSCVxnNb-KbN3u0hnhctPc35yo",
  ),
  sophiaWoo: G(
    "AA5AbUBAK9XLDSbcAKURvTSyoaYuZcrTcem6KEHszgRpLIeAunnnVv1BuO3-78HWU_X0t2faVRwfs0NVjzrSoWJfNVjBI2q-uAsMasZRk1Qq9iuWcKku_6pM8mlbPaml3dgwIXGEzT3AAEQ364-pyCs_SMBLHep9efJtZrtmm2aj80hkDARrFlWTAOGzkFX9pGBCn8ERM-Qt5SSw7JF6xmMDfL7vcVspNksd_eFK9ro",
  ),
  phyllisTang: G(
    "AA5AbUCUhGVAfwmNd2n62cj92ttY8W8s2EZU23eP1Es2W93q2EPfbBzLkHfQ_M-S1PKaQ6h9SREJ5xhhOPtLIJ-M--dABxNnbIhh05XXLk8ADNayf9GeP7il14YGrfmFUKtqne3ap0csF5-_ccIq_v295h0g5tHyQcgWpbgjx6qCm1tSbAnqVCtYjwsVDmP8KCJB0opIHud70e0j-efLKwAPDPnZU9jeJKQe8RxeLJk",
  ),
  deanBillings: G(
    "AA5AbUBQGa2ijzigvTxnlxPVk05gHMufpFlU2ny6Ss9VwMMl1Fp06i-8VgeydrD11yOmfC9zwBQFubAv_9YuglnldHM_LeQ3H9zNmdV5FLroU-SPzY7l7Jq1Vjw5xLlOTMVIzcSqyrTx-JLmfRypdf5F_vb_LH_eINMrFjNoCinflG3BXHY2skhPg4sWpxKIZYYxOlMcLZqXiAAtGkapNTYni5IuxO8841gV-BcSVd0",
  ),
  dannyChang: G(
    "AA5AbUD6poNcq9T-1IdaXwwqWMZXf4LwVVGqdDGFOv7af14xoEfYVaP4NPmNkYbqVTS4ZLmUW_snIijmX3XZnq7FgCfQXlmWP22dxf8qkexxTP5NbcFHG7QDo5QMqn17BmVjeLGKdCQGYhrxjTlDLJ9m_DdUS5XI2L7pL0tm_ba7GTg46sT1K7ZDYMDO44C2uLnW9CPByccJ3A0gQ6Q0ncjIBL2znDpHcNukU7iN1ps",
  ),
};

export const images: Record<string, string> = { ...sourceImages };

// Back-compat aliases used by older routes; all point to real source photos.
export const legacyImageAliases = {
  heroCommunity: sourceImages.aboutHero,
  richmondAerial: sourceImages.familyDayRally,
  eventTownhall: sourceImages.stopCph,
  eventCanvass: sourceImages.cowichan,
  eventRally: sourceImages.familyDayRally,
  eventFestival: sourceImages.communityLinks,
  eventVigil: sourceImages.schoolRenaming,
  galleryFamily: sourceImages.familyDayRally,
  galleryPark: sourceImages.communityLinks,
};
Object.assign(images, legacyImageAliases);
const heroCommunity = legacyImageAliases.heroCommunity;
const galleryPark = legacyImageAliases.galleryPark;
const eventTownhall = legacyImageAliases.eventTownhall;
const eventCanvass = legacyImageAliases.eventCanvass;
const eventRally = legacyImageAliases.eventRally;
const eventFestival = legacyImageAliases.eventFestival;
const eventVigil = legacyImageAliases.eventVigil;

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
