import AboutMain from "../../../pages/about/sections/AboutMain";
import AboutUs from "../../../pages/about/sections/AboutUs";
import BlogAndResource from "../../../pages/about/sections/BlogAndResource";
import ContactUs from "../../../pages/about/sections/ContactUs";
import NewsletterandCommunity from "../../../pages/about/sections/NewsletterandCommunity";
import OurStory from "../../../pages/about/sections/OurStory";
import WhatSetsUsApart from "../../../pages/about/sections/WhatSetsUsApart";

const aboutroutes = [
  {
    name: "ABOUT",
    path: "*",
    element: <AboutMain />,
  },
  {
    name: "ABOUT US",
    path: "about-us",
    element: <AboutUs />,
  },
  {
    name: "OUR STORY",
    path: "our-story",
    element: <OurStory />,
  },
  {
    name: "WHAT SETS US APART",
    path: "what-sets-us-apart",
    element: <WhatSetsUsApart />,
  },
  {
    name: "BLOGS AND RESOURCES",
    path: "blogs-and-resources",
    element: <BlogAndResource />,
  },
  {
    name: "CONTACT US",
    path: "contact-us",
    element: <ContactUs />,
  },

  {
    name: "NEWSLETTER AND COMMUNITY",
    path: "newsletter-and-community",
    element: <NewsletterandCommunity />,
  },
];

export default aboutroutes;
