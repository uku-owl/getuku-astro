/**
 * Uku navigation - exact from live site
 */

import { type navItem } from "../types/configDataTypes";

const navConfig: navItem[] = [
  // Product megamenu (3 columns: Features + Features + Integrations)
  {
    text: "Product",
    megaMenuColumns: [
      {
        title: "Features",
        items: [
          {
            text: "Client management (CRM)",
            link: "/client-management",
            icon: "tabler/user",
          },
          {
            text: "Time-tracking",
            link: "/time-tracking",
            icon: "tabler/clock",
          },
          {
            text: "Team collaboration",
            link: "/team-collaboration",
            icon: "tabler/mail",
          },
          {
            text: "Workflow automation",
            link: "/workflow-automation",
            icon: "tabler/circle-arrow-up",
          },
          {
            text: "Task management",
            link: "/task-management",
            icon: "tabler/list-check",
          },
        ],
      },
      {
        title: " ",
        items: [
          {
            text: "Business analytics",
            link: "/business-analytics",
            icon: "tabler/layout-grid",
          },
          {
            text: "Automated billing",
            link: "/automated-billing",
            icon: "tabler/script",
          },
          {
            text: "Project management",
            link: "/accounting-project-management",
            icon: "tabler/category",
          },
          {
            text: "Client portal",
            link: "/client-portal",
            icon: "tabler/lock-square",
          },
          {
            text: "Email management",
            link: "/email-management",
            icon: "tabler/mail",
          },
          {
            text: "Document management",
            link: "/document-management",
            icon: "tabler/script",
          },
        ],
      },
      {
        title: "Integrations",
        items: [
          {
            text: "QuickBooks Online",
            link: "/quickbooks",
            icon: "tabler/api-app",
          },
          {
            text: "Xero",
            link: "/xero",
            icon: "tabler/api-app",
          },
          {
            text: "e-conomic",
            link: "/e-conomic",
            icon: "tabler/api-app",
          },
          {
            text: "All Integrations",
            link: "/integrations",
            icon: "tabler/api-app",
          },
        ],
      },
    ],
  },
  
  {
    text: "Services",
    link: "/services",
  },
  {
    text: "Pricing",
    link: "/pricing",
  },
  {
    text: "Case Studies",
    link: "/case-studies",
  },
  {
    text: "Resources",
    dropdown: [
      {
        text: "Blog",
        link: "/blog",
      },
      {
        text: "Webinars",
        link: "/webinars",
      },
      {
        text: "Templates",
        link: "/accounting-templates",
      },
      {
        text: "Help Center",
        link: "https://help.getuku.com",
        newTab: true,
      },
    ],
  },
];

export default navConfig;
