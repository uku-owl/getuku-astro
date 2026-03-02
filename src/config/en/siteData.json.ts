import { type SiteDataProps } from "../types/configDataTypes";

// Update this file with your site specific information
const siteData: SiteDataProps = {
  name: "Uku",
  // Your website's title and description (meta fields)
  title: "Uku - Accounting Practice Management Software",
  description:
    "With Uku, accounting firms save over 12 hours per team member weekly and raise profit 23.5% with powerful billing. Get work done on time, billed & paid.",

  // Your information for blog post purposes
  author: {
    name: "Uku Team",
    email: "hello@getuku.com",
    twitter: "GetUku",
  },

  // default image for meta tags if the page doesn't have an image already
  defaultImage: {
    src: "/images/uku-logo.svg",
    alt: "Uku - Accounting Practice Management Software",
  },
};

export default siteData;
