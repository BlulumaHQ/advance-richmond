/**
 * Content sourced from https://www.advancerichmond.ca/.
 * Team headshots (6 directors) bundled locally; Rod, Willy, and source
 * news/about hero images are referenced via the source CDN URL — browsers
 * resolve them correctly even though server-side fetches are blocked.
 */

import teamKevinLai from "@/assets/team-kevin-lai.jpeg";
import teamSamWang from "@/assets/team-sam-wang.jpeg";
import teamSophiaWoo from "@/assets/team-sophia-woo.jpeg";
import teamPhyllisTang from "@/assets/team-phyllis-tang.jpeg";
import teamDeanBillings from "@/assets/team-dean-billings.jpeg";
import teamDannyChang from "@/assets/team-danny-chang.jpeg";
import teamGaryLaw from "@/assets/team-gary-law.jpeg";
import heroCommunity from "@/assets/hero-community.jpg";
import richmondAerial from "@/assets/richmond-aerial.jpg";
import eventCanvass from "@/assets/event-canvass.jpg";
import eventFestival from "@/assets/event-festival.jpg";
import eventRally from "@/assets/event-rally.jpg";
import eventTownhall from "@/assets/event-townhall.jpg";
import eventVigil from "@/assets/event-vigil.jpg";
import galleryFamily from "@/assets/gallery-family.jpg";
import galleryPark from "@/assets/gallery-park.jpg";

const SRC = {
  rodBelleza:
    "https://lh3.googleusercontent.com/sitesv/AA5AbUCmuX-p31ZoqInh7srjS-4KBUHS_cOtJVsO9dcTjHnDCgPMSNHQI2nJORK9YQ1iYPMmoH2mZ9KB9hK1wT3pAcxxxc8k448TdbgJxKTeeOiELEWZw6yYWr3nDvHXs6f8AsPHgHE-bpvRAkfRzCU-YWz3IBMboID-2X14KxjxIpj-6FljDqRYVVqYkT7k9pEueYDAjHz1dDh9HyNA_jOddB6P2nYkuXZRk0g7QrQxMVw=w1280",
  willySinconegue:
    "https://lh3.googleusercontent.com/sitesv/AA5AbUAKS9duSNWQTRTQgWAJpjGvgScFEYyN7P4k1YTWWmFfLlrRgWn-_3rg5gayoEeZ-8F0woRtj2GVMcOrGOFSNcHh46Cc2AJXpKc2W87cU_TPzeuM5dVSzmZHvKJYqdaAL3ZQaGRMLwltK-tz9tJTqYm8wznCk264rUXePOI64YrMxcX4sw-gaWtiQKSor5UWa-_5RdQU0tzx1shg6s47N11O1XrCOkfSKmzdWrGzFkE=w1280",
  aboutHero:
    "https://lh3.googleusercontent.com/sitesv/AA5AbUCuPXQyAzbSCUfVrKVMWfgYgOxOA3-M9MpNgBLyxrtp2k0rKwGcruSr8aEiQFlN1nlGnevQXBhBteD8PDckIyzLS24h-MlRoM8KWelMj2GSHLQ7586q72mAlIjChO-y3RcJ8GgQoGi2lCdHRfIL3bpgdnXezoN0JVTiotURvhXs4MG8AexUmCSfbpCKy5mRD1SbyfRGvJtBcMP-mooTjcW2rhTKTDCm5bvq90mf=w1280",
  cowichan:
    "https://lh3.googleusercontent.com/sitesv/AA5AbUAaQHAw4YknYvqXtjIAr8Q1gmgQq0stinsg640ewwdalBhNSheCv199z1_95z3bEYjPv7DACQ3iVHMyPA3TLpQDbrDKnteB8tp9u06qGEx4KEUnQ6-y7-1fVtX6xQdYIZRZSzHKiNktR_4-NvqHTSlDou7phsYh2DEG9w5WsgeqYipNYy3R_jxOALvqR-O6K7sm4RSkCWXD_uzxJLF2oRm-6ZOQgpngQDMR5gADGQ8=w1280",
  communityLinks:
    "https://lh3.googleusercontent.com/sitesv/AA5AbUA7R1lNuILJx9VTeKfqTgj5FuRQaXtb3GBTaP8IsmKs0FbVd2ppzxOspq-ENUXxmmhKR7V_DFTvMTaClsfQNOP4J-d8wBYhwcbJzb6rl6eob32jeQ8Y7pz9K6YHV5f5kLXnUZY_2EuZ5lDGHssSOYVhiQzX85_uaLZwIOj_fecpjQUvDELXfiuUrgIu4mgQgH6MTcJQ6HlZOEG_bJ6HM1h9Pmc39N1xb3qZOERb=w1280",
  schoolRenaming:
    "https://lh3.googleusercontent.com/sitesv/AA5AbUB0V-WT7NxXI4ZvDzNVr8JON7zpb-GWgRWM5X2BenKa1kkp4ZIphQezKkU13qE6I8py0R-erd5qj8bUmwdKKmgUsjT987xFm6lAz46IApCIJmRfCBVTmsqujQu8iiCMUg38ps2637JH4uJQELjFoYklL3yKoVJF4fbcTnl64Rm-u_wehLH9nFAR3STdj9NCMIv8iEn9MjK_oj42wSdtI9rM3AqRdrn7DyPsR5qI=w1280",
  lunarNewYear:
    "https://lh3.googleusercontent.com/sitesv/AA5AbUDr79UcnoBm094Ifr0SS2WgBrbY7NwMFt3pIup5OoCZCYp_OUa0fhVBCZxCHiSnXqkHFy-I4JSTppIDEq6QuerjrYfoSfHdoCZI_ikwYBOVfpWggF9BIDjWfEJ0zE4fxnW_7XqND874q6xZwROYmU-xTB8HlDXIootXjR06POYy4Zo2ocIqyhOGab719ZJxKDiPVm0le6DwrGH3XyhsAC1Emx1Ltm3xnTxm-7LhEYM=w1280",
  familyDayRally:
    "https://lh3.googleusercontent.com/sitesv/AA5AbUBBUCvxmRynMuD5wf0tSode3VhZBT4JdVk0XV-e8tsXuva7oTst4GSPXtDJOIXWzalFEP1iyrqlVu3VCD-eRUDYeziZ9bJ-G0T-zddWmduOjp2zrlkzim_n5T7JpT3Wa8lCA8qQZ3Vq7jfgJvC4y2DSj1-vzv2HQCqSXQrowaJziZwMW8L5PfVdJqQgQlDcNIFIJ_Nu7Zl_NrvnRBvTQGAcIBclqrHEyYjFlG1T0jY=w1280",
  newsHero:
    "https://lh3.googleusercontent.com/sitesv/AA5AbUDirKUb-lBtlHJhCWEA1mBX109Qiwfl0yzMccrqwHnzs5qBIAkVY_sMF5mdE0vO5wGo_6JVGtLBAt6ysupkJO96SCj9IT1upsNhUfqY9tbEt7sSx62Zommhq3-n9tmc6Nt7Elj6XzTkNCK3EO9AVdRYCBEHB6I1RM_3cOw3rM6d7sXZoA4EOWR-yNisDVY_5c2F_J5qyd_JzvXaWzxnsuGTEbwLqTy-B1mgzldT=w1280",
};

export const sourceImages = {
  cowichan: SRC.cowichan,
  communityLinks: SRC.communityLinks,
  stopCph: eventTownhall,
  familyDayRally: SRC.familyDayRally,
  aboutHero: SRC.aboutHero,
  newsHero: SRC.newsHero,
  schoolRenaming: SRC.schoolRenaming,
  lunarNewYear: SRC.lunarNewYear,
  arSocial: eventFestival,
  kevinLai: teamKevinLai,
  samWang: teamSamWang,
  sophiaWoo: teamSophiaWoo,
  phyllisTang: teamPhyllisTang,
  deanBillings: teamDeanBillings,
  dannyChang: teamDannyChang,
  garyLaw: teamGaryLaw,
  rodBelleza: SRC.rodBelleza,
  willySinconegue: SRC.willySinconegue,
};

export const images: Record<string, string> = { ...sourceImages };

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
  { to: "/about-arca", label: "About ARCA" },
  { to: "/city-council-team", label: "City Council Team" },
  { to: "/education-team", label: "Education Team" },
  { to: "/latest-news-and-events", label: "News & Events" },
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
  socialRsvp:
    "https://docs.google.com/forms/d/e/1FAIpQLScVV5zLNDWO3mUGLHqUEzietfJAwy8i1e8reM11UoI0iK9Dqg/viewform",
  lnyTickets:
    "https://www.eventbrite.ca/e/arca-2026-chinese-new-year-dinner-2026-tickets-1980158524451",
  donateCouncilEmail: "fund@advancerichmond.ca",
  donateTrusteeEmail: "sd38@advancerichmond.ca",
  contactEmail: "info@advancerichmond.ca",
  contactPortal: "https://tc.advancerichmond.ca/",
};

export type TeamMember = {
  name: string;
  role: string;
  area?: string;
  bio: string;
  initials: string;
  photo?: string;
  slug: string;
  team: "city-council" | "education";
  longBio?: string[];
  socials?: { label: string; url: string }[];
  languages?: string[];
};

export const team: TeamMember[] = [
  {
    name: "Gary Law 羅錦添",
    role: "City Council Candidate",
    slug: "Gary-Law",
    team: "city-council",
    photo: sourceImages.garyLaw,
    bio: "Former senior RCMP officer and Major in the Canadian Army Reserve. Decades of leadership in public safety, road safety with ICBC, and community trust-building.",
    longBio: [
      "Gary Law has dedicated his career to public service, community safety, and building trust between institutions and the people they serve. With extensive experience in law enforcement, military service, and public engagement, he brings a practical, community-first perspective to local issues.",
      "Gary previously served as a senior officer with the Royal Canadian Mounted Police and as a Major in the Canadian Army Reserve. Through these roles, he developed a strong foundation in leadership, discipline, and crisis management, along with a deep commitment to protecting and serving the public.",
      "Following his service, Gary continued his work in public safety as a driving examiner with ICBC, helping ensure road safety and responsible driving standards across the community.",
      "He brings that same community-first lens to Richmond — championing safer neighbourhoods, accountable local government, and meaningful resident consultation.",
    ],
    initials: "GL",
    socials: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/gary-law-53b06310a/" },
      { label: "Instagram", url: "https://www.instagram.com/garylaw22/" },
      { label: "Facebook", url: "https://www.facebook.com/gary.law.146" },
    ],
  },
  {
    name: "Kevin Lai 賴彥宏",
    role: "Founder & City Council Candidate",
    slug: "kevin-lai",
    team: "city-council",
    photo: sourceImages.kevinLai,
    bio: "Founder of ARCA and president of the Richmond Centre Conservative EDA. A business owner and general contractor of 10+ years who helped unite Richmond's communities in the largest resident-led rally in the city's history.",
    longBio: [
      "Kevin Lai (賴彥宏) has lived in Richmond for the past four years, after spending over a decade in Vancouver, as well as time in Surrey and Langley. Since immigrating to Canada in 1993, he has seen firsthand how cities can thrive when governments listen to their people — and how quickly they can decline when they do not.",
      "Kevin is a business owner and general contractor with more than ten years of experience. His work has brought him into constant contact with Richmond's permitting system and local homeowners, giving him direct insight into the struggles residents face with city processes. Having also operated businesses, he understands the challenges of running a small business in Richmond, from high costs to heavy regulations.",
      "As founder of the Advance Richmond Community Association, Kevin helped unite Richmond's diverse communities in the largest resident-led rally in the city's history. He also serves as president of the Richmond Centre Conservative EDA.",
    ],
    initials: "KL",
    languages: ["English", "粵語", "普通话"],
    socials: [
      { label: "Facebook", url: "https://www.facebook.com/profile.php?id=61563850646028" },
      { label: "Instagram", url: "https://www.instagram.com/yenhungkevin/" },
    ],
  },
  {
    name: "Sam Wang 王晟",
    role: "City Council Candidate",
    slug: "sam-wang",
    team: "city-council",
    photo: sourceImages.samWang,
    bio: "30-year Richmond resident and Chartered Professional Accountant. Senior financial executive, corporate director, and former audit committee chair — focused on fiscal accountability and safeguarding taxpayer dollars.",
    longBio: [
      "Sam Wang has been a proud resident of Richmond for over 30 years. As a Chartered Professional Accountant, he has dedicated his career to strengthening business, supporting community initiatives, and serving the public good.",
      "With decades of experience as a senior financial executive, corporate director, and former audit committee chair for publicly listed companies, Sam has the expertise to manage complex issues, safeguard taxpayers' dollars, and ensure fiscal accountability in every decision.",
      "Sam also serves on the board of the Richmond Centre for Disability and contributes to numerous community initiatives across the city.",
    ],
    initials: "SW",
    socials: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/samwangcpa/" },
      { label: "X", url: "https://x.com/SamWangRichmond" },
      { label: "Instagram", url: "https://www.instagram.com/sam.wang.cpa/" },
    ],
  },
  {
    name: "Sophia Woo 胡慧儀",
    role: "City Council Candidate",
    slug: "sophia-woo",
    team: "city-council",
    photo: sourceImages.sophiaWoo,
    bio: "Mental health clinician, former Vancouver School Board Trustee (2011–2014), Outstanding Chinese Women Award recipient (2007), and Paul Harris Fellow.",
    longBio: [
      "Sophia Woo (胡慧儀) is a graduate of Simon Fraser University and holds a Master Degree in Social Work from Hong Kong University. She is a Mental Health Clinician in Vancouver and served as School Trustee on Vancouver Board of Education from 2011–2014.",
      "She is a recipient of the Outstanding Chinese Women Award (2007) and is a Paul Harris Fellow. Sophia has served on the boards of a number of community organizations including Riverview Hospital, community policing centers, and the Rotary Club.",
      "She publishes in professional journals and medical education booklets, and speaks at local, national, and international conferences. She coordinates community workshops and facilitates family support groups across the Lower Mainland.",
    ],
    initials: "SoW",
    socials: [
      { label: "X", url: "https://x.com/woo_sophia" },
      { label: "Instagram", url: "https://www.instagram.com/woosophia2026/" },
    ],
  },
  {
    name: "Phyllis Tang 鄧明惠",
    role: "School Trustee Candidate",
    slug: "phyllis-tang",
    team: "education",
    photo: sourceImages.phyllisTang,
    bio: "Music educator of 24+ years, Community Outreach & PR Specialist, 2018 Vancouver City Council Candidate, and Treasurer of the Rotaract Club of Richmond.",
    longBio: [
      "Phyllis Tang (鄧明惠) is a music educator with over 24 years of experience, a Community Outreach & PR Specialist, and a 2018 Vancouver City Council Candidate.",
      "She serves as Treasurer of the Rotaract Club of Richmond and as a Director of the Advance Richmond Community Association, where she advocates for safer, more transparent schools and stronger family supports.",
      "Phyllis brings a deep understanding of arts education, civic engagement, and bilingual community outreach to the Richmond School Board.",
    ],
    initials: "PT",
    languages: ["English", "普通话", "粵語"],
    socials: [
      { label: "X", url: "https://x.com/Phyllis_MH_Tang" },
      { label: "Instagram", url: "https://www.instagram.com/phyllis.tang.cares/" },
    ],
  },
  {
    name: "Dean Billings",
    role: "School Trustee Candidate",
    slug: "dean-billings",
    team: "education",
    photo: sourceImages.deanBillings,
    bio: "Secretary of the Richmond District PAC, coach with the Richmond Lacrosse Association, and software project manager with 16+ years in public-sector digital transformation.",
    longBio: [
      "Dean Billings is a dedicated community volunteer and experienced project management professional. With deep roots in Richmond, Dean has spent years supporting local families through education advocacy, parent leadership, and sports.",
      "He currently serves as Secretary of the Richmond District Parents Association (District PAC), and as a coach and board member with the Richmond Lacrosse Association.",
      "Professionally, Dean is a software project manager with 16+ years in public-sector digital transformation, focused on accessible, well-governed services that serve real people.",
    ],
    initials: "DB",
    socials: [
      { label: "Instagram", url: "https://www.instagram.com/deanbillingscan/" },
      { label: "Facebook", url: "https://www.facebook.com/profile.php?id=100085781915247" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/deanbillings/" },
      { label: "X", url: "https://x.com/deanbillingscan" },
    ],
  },
  {
    name: "Danny Chang 張博浩",
    role: "School Trustee Candidate",
    slug: "danny-chang",
    team: "education",
    photo: sourceImages.dannyChang,
    bio: "Richmond business director and SFU Business graduate who has volunteered in federal and provincial election campaigns. A parent championing safe, welcoming schools.",
    longBio: [
      "Danny Chang is a Richmond-based business director and owner of an import and wholesale company. With strong roots in the community, he combines professional expertise with a passion for education, youth development, and public service.",
      "Danny graduated from Simon Fraser University (SFU) with a Bachelor's degree in Business Administration, concentrating in Marketing and Management Information Systems.",
      "Beyond business, Danny has actively participated in civic life. He has volunteered in both federal and provincial election campaigns, knocking on doors to connect with residents and hear their concerns directly.",
    ],
    initials: "DC",
    socials: [
      { label: "Instagram", url: "https://www.instagram.com/dannychang0602/" },
    ],
  },
  {
    name: "Rod Belleza",
    role: "School Trustee Candidate",
    slug: "rod-belleza",
    team: "education",
    photo: sourceImages.rodBelleza,
    bio: "Fellow of the Institute of Canadian Bankers, serving his third term as Richmond School Trustee. A long-time community leader in Richmond.",
    longBio: [
      "Rod Belleza is a Fellow of the Institute of Canadian Bankers. He practiced law in the Philippines before immigrating to Canada in 1980.",
      "Rod is serving his third term as Richmond School Trustee. He is a strong advocate for good governance, prudent fiscal management, and more support for teachers and students in need. He promotes Financial Literacy and parents' participation in their children's education, and has raised issues on Substance Use Awareness and Prevention, Child Poverty, and Student Empowerment.",
      "If re-elected, Rod will continue to advocate for adequate funding of public education and mental health, develop students' life skills and competencies, and foster a safe and inclusive learning environment for our students and staff.",
      "As a community leader for almost 40 years, Rod has served in various Richmond Advisory Committees and community organizations. He is a Rotarian, Knight of Columbus and Past President of RMCS, RBS, CIABC, and NABC. Rod has received service awards from BCSTA, Phil-Asian News, FCCBD and Maharlika.",
    ],
    initials: "RB",
  },
  {
    name: "Willy Sinconegue",
    role: "School Trustee Candidate",
    slug: "willy-sinconegue",
    team: "education",
    photo: sourceImages.willySinconegue,
    bio: "47 years in the financing industry, incumbent President of the Richmond Bayanihan Society of BC, and Certified Public Accountant.",
    longBio: [
      "Willy Sinconegue brings 47 years of extensive experience in the financing industry, having served in a wide range of leadership and operational roles. He holds a Bachelor of Science in Business Administration, Major in Accounting, and is a Certified Public Accountant in the Philippines.",
      "His international background includes serving as Managing Director of a financing institution in Milan, Italy, where he strengthened financial operations, client services, and organizational performance.",
      "Willy is a committed community advocate and the incumbent President of the Richmond Bayanihan Society of BC, a non-profit charitable organization he has led for six years. Under his leadership, the society has expanded programs that assist poor students, promote multiculturalism, and build stronger community support networks across Richmond.",
      "An active member of Couples for Christ and the Knights of Columbus, Willy is known for his integrity and collaborative leadership. His priorities include strengthening student well-being programs, promoting a safe and inclusive school culture, and deepening partnerships with community groups and NGOs.",
    ],
    initials: "WS",
  },
];

export const cityCouncilTeam = team.filter((m) => m.team === "city-council");
export const educationTeam = team.filter((m) => m.team === "education");

export type Priority = {
  title: string;
  description: string;
  icon: "shield" | "scale" | "home" | "users" | "heart" | "briefcase" | "vote";
};

export const priorities: Priority[] = [
  { title: "Public Safety", description: "Restore accountability on our streets, in our schools, and across our neighbourhoods — so families feel safe walking, playing, and gathering.", icon: "shield" },
  { title: "Transparent Government", description: "Decisions should be made with residents, not imposed on them. We push for genuine consultation and clear, public reasoning at City Hall.", icon: "scale" },
  { title: "Responsible Housing", description: "We're not against housing — we're against rushed, unsuitable projects. We back well-planned homes that strengthen neighbourhoods.", icon: "home" },
  { title: "Community Unity", description: "Bridge cultures, generations, and neighbourhoods. Richmond's strength is its diversity working together, not pulled apart by politics.", icon: "users" },
  { title: "Families & Youth", description: "Stand firm against toxic drugs and unsafe social experiments. Support parents, schools, and youth with constructive alternatives.", icon: "heart" },
  { title: "Local Economy", description: "Help small businesses and ordinary residents thrive. A healthy local economy is the foundation of a healthy city.", icon: "briefcase" },
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
    excerpt: "Advance Richmond Raises Concerns about the (SD38) Richmond School District's Efforts to Decolonize Public Education.",
    body: [
      "Advance Richmond has formally raised concerns about the Richmond School District's school re-naming and decolonization initiative.",
      "Our submission calls for clearer process, genuine community consultation, and decisions that reflect the views of Richmond parents and students. Read the full submission via the source link.",
    ],
    date: "2025-10-15",
    image: sourceImages.schoolRenaming,
    category: "Education",
    sourceUrl: "https://drive.google.com/file/d/1r9bp6Qf9hOrOKlyGSZau2UmzX6-DZKC0/view?usp=sharing",
  },
  {
    slug: "cowichan-land-title-dispute",
    title: "Cowichan Land Title Dispute",
    excerpt: "ARCA went door-to-door to inform residents about the Cowichan land title dispute and stood with a Richmond homeowner through the follow-up process.",
    body: [
      "Advance Richmond played an active, community-led role during the Cowichan Land Title dispute, which raised serious concerns for property owners across British Columbia — including Richmond. When news emerged of a family nearly losing their land title due to a controversial court ruling, many residents feared similar risks for homeowners in our city.",
      "To ensure Richmond families fully understood their rights, our volunteers organized door-knocking outreach across affected neighbourhoods — explaining what the dispute meant for ordinary homeowners, raising awareness about the potential legal precedent, encouraging residents to stay informed, and connecting concerned families with legal and community resources.",
      "When a Richmond homeowner facing a related concern stepped forward, ARCA stood with them every step of the way — attending follow-up meetings, collecting community feedback, providing language support, and helping ensure local voices were not ignored during the legal review process.",
      "Through these efforts, we demonstrated what Advance Richmond stands for: protecting homeowners, defending property rights, and standing together when families in our community need support.",
    ],
    date: "2025-09-12",
    image: sourceImages.cowichan,
    category: "Advocacy",
    sourceUrl: "https://www.advancerichmond.ca/latest-news-and-events/cowichan-land-title-dispute",
  },
  {
    slug: "community-links",
    title: "Community Links",
    excerpt: "We are deeply rooted in the Richmond community — bringing neighbours together, amplifying local voices, and advocating for a safer, more engaged city.",
    body: [
      "We organize local events such as block parties, community forums, and dialogues with city councillors, bringing neighbours together to share food, ideas, and concerns.",
      "We advocate for Richmond residents by raising awareness on issues like drug policy, housing developments, public safety, and government accountability, preparing detailed articles, analyses, and public letters.",
      "We build political awareness and participation, especially encouraging engagement among immigrant and Asian Canadian residents, through podcasts, informational materials, and election-related outreach.",
      "We launched the Advance Richmond Community Association with the mission of 'Leading Richmond Forward,' creating branding, digital outreach, and member networks to strengthen local voices.",
      "We volunteer and support local campaigns, while preparing community leaders for future runs at Richmond City Council and the Richmond Board of Education.",
      "We promote respectful dialogue and unity — reflection over retaliation, compassion over division.",
    ],
    date: "2025-07-04",
    image: sourceImages.communityLinks,
    category: "Community",
    sourceUrl: "https://www.advancerichmond.ca/latest-news-and-events/community-links",
  },
  {
    slug: "stop-cph",
    title: "Stop CPH (Community Permanent Housing)",
    excerpt: "Stopping the CPH project is about protecting community safety and well-being. We are not against housing — but it must be the right kind of housing.",
    body: [
      "The Stop CPH movement began as a grassroots response in Richmond when residents learned about the proposed Community Permanent Housing project that would bring a supportive housing facility into the community. Many residents expressed concerns — not about housing itself, but about safety, transparency, and accountability.",
      "Community members organized meetings, spoke with city councillors, and mobilized neighbours who felt blindsided by the process. The movement grew stronger and more coordinated, emphasizing that the opposition was not against housing, but against projects that lacked proper planning, oversight, and safeguards.",
      "Public forums and petitions were launched, and volunteers came together to advocate for alternatives — solutions that would address housing needs without repeating past mistakes seen in other neighbourhoods.",
      "In the end, the Stop CPH movement not only stopped one controversial project, but also changed how Richmond approaches its citizens: the City has since become more willing to hold open houses and consultations, giving residents a greater voice in shaping their community.",
    ],
    date: "2025-05-22",
    image: sourceImages.stopCph,
    category: "Policy",
    sourceUrl: "https://www.advancerichmond.ca/latest-news-and-events/stop-cph",
  },
  {
    slug: "2024-family-day-rally",
    title: "2024 Family Day Rally",
    excerpt: "The largest self-organized gathering in Richmond's recent history — families calling for transparency and genuine consultation.",
    body: [
      "On Family Day, February 19, 2024, we, along with many Richmond residents, gathered at City Hall and Minoru Park for the 'No Drugs in Richmond' rally. News had spread that the City and health authorities were considering establishing a supervised consumption site in our community, raising deep concerns among residents.",
      "Many families came with their children, holding signs like 'Keep Richmond Clean', expressing a vision of a safe and clean city for the next generation.",
      "What made this rally truly remarkable was that it had no political party or large organization behind it. It was entirely self-motivated by residents, and yet it became one of the largest rallies in Richmond's history.",
      "People of all backgrounds stood together that day, speaking with one voice. It was a moment of unity, when our community came together to shape its future — demanding transparency, accountability, and genuine consultation.",
      "This Family Day rally became a turning point — demonstrating the determination of Richmond residents and helping change the City's approach to citizen engagement.",
    ],
    date: "2024-02-19",
    image: sourceImages.familyDayRally,
    category: "Events",
    sourceUrl: "https://www.advancerichmond.ca/latest-news-and-events/2024-family-day-rally",
  },
  {
    slug: "lunar-new-year-dinner",
    title: "2026 Lunar New Year Dinner",
    excerpt: "Join ARCA for our 2026 Chinese New Year Dinner — a celebration of community, culture, and the year ahead.",
    body: [
      "ARCA is hosting our 2026 Chinese New Year Dinner — a festive celebration bringing residents, supporters, and community leaders together to mark the new year.",
      "Tickets are available on Eventbrite via the source link.",
    ],
    date: "2026-02-15",
    image: sourceImages.lunarNewYear,
    category: "Events",
    sourceUrl: "https://www.eventbrite.ca/e/arca-2026-chinese-new-year-dinner-2026-tickets-1980158524451",
  },
  {
    slug: "advance-richmond-social",
    title: "Advance Richmond Social — April 18 at 6pm",
    excerpt: "A relaxed evening with residents from across the community — no speeches, no formal program, just a chance to meet, exchange ideas, and build connections.",
    body: [
      "Advance Richmond is hosting Advance Richmond Social — an opportunity to connect with others who care about transparency, accountability, and strong local leadership in Richmond.",
      "Join us for a relaxed evening with residents from across the community, including those involved in local initiatives, small business, and civic engagement.",
      "Host: Advance Richmond (advancerichmond.ca). Where: Legends Pub, 9031 Blundell Rd, Richmond, BC. When: April 18, 2026, 6:00 PM — 8:00 PM.",
      "Please RSVP via the form linked at the source page.",
    ],
    date: "2026-04-18",
    image: sourceImages.arSocial,
    category: "Events",
    sourceUrl: "https://www.advancerichmond.ca/latest-news-and-events/advance-richmond-social",
  },
];

export type FeaturedEvent = { title: string; date: string; location: string; blurb: string; image: string; tag: string };

export const featuredEvents: FeaturedEvent[] = [
  { title: "Neighbourhood Town Hall", date: "Ongoing", location: "Across Richmond", blurb: "Small, bilingual gatherings where residents bring concerns directly to ARCA organizers and elected officials.", image: legacyImageAliases.eventTownhall, tag: "Town Halls" },
  { title: "Door-to-Door Information Visits", date: "Year-round", location: "Steveston · City Centre · Broadmoor", blurb: "Volunteers walking blocks to share clear, fact-based information on issues that affect Richmond families.", image: legacyImageAliases.eventCanvass, tag: "Outreach" },
  { title: "Family Day Rally", date: "Family Day weekend", location: "Richmond City Hall", blurb: "An annual peaceful gathering of families calling for safer streets and genuine consultation.", image: legacyImageAliases.eventRally, tag: "Rally" },
  { title: "Community Festival Booths", date: "Spring – Fall", location: "Steveston Village · Aberdeen Centre", blurb: "Look for our table at Richmond festivals — bilingual materials, friendly conversation, and ways to get involved.", image: legacyImageAliases.eventFestival, tag: "Festivals" },
  { title: "Candlelight Vigils", date: "As needed", location: "Richmond civic spaces", blurb: "Quiet, respectful vigils that bring residents together in moments that call for solidarity.", image: legacyImageAliases.eventVigil, tag: "Vigils" },
];
