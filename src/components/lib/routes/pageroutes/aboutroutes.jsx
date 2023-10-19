import AboutMain from "../../../pages/about/sections/AboutMain";
import AboutUs from "../../../pages/about/sections/AboutUs";
import BlogAndResource from "../../../pages/about/sections/BlogAndResource";
import ContactUs from "../../../pages/about/sections/ContactUs";
import CostumerReviews from "../../../pages/about/sections/CostumerReviews";
import NewsletterandCommunity from "../../../pages/about/sections/NewsletterandCommunity";

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
    name: "COSTUMER REVIEWS",
    path: "costumer-reviews",
    element: <CostumerReviews />,
  },
  {
    name: "NEWSLETTER AND COMMUNITY",
    path: "newsletter-and-community",
    element: <NewsletterandCommunity />,
  },
];

export default aboutroutes;
