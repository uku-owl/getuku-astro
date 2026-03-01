/**
 * Uku navigation configuration
 */

import { type navItem } from "../types/configDataTypes";

const navConfig: navItem[] = [
  // Product mega menu
  {
    text: "Product",
    megaMenuColumns: [
      {
        title: "Core Features",
        items: [
          {
            text: "Task Management",
            link: "/task-management",
            icon: "tabler/list-check",
          },
          {
            text: "Time Tracking",
            link: "/time-tracking",
            icon: "tabler/clock",
          },
          {
            text: "Automated Billing",
            link: "/automated-billing",
            icon: "tabler/script",
          },
          {
            text: "Client Management",
            link: "/client-management",
            icon: "tabler/user",
          },
        ],
      },
      {
        title: "Collaboration",
        items: [
          {
            text: "Team Collaboration",
            link: "/team-collaboration",
            icon: "tabler/mail",
          },
          {
            text: "Email Management",
            link: "/email-management",
            icon: "tabler/mail",
          },
          {
            text: "Client Portal",
            link: "/client-portal",
            icon: "tabler/lock-square",
          },
          {
            text: "Document Management",
            link: "/document-management",
            icon: "tabler/script",
          },
        ],
      },
      {
        title: "Analytics & Automation",
        items: [
          {
            text: "Business Analytics",
            link: "/business-analytics",
            icon: "tabler/layout-grid",
          },
          {
            text: "Workflow Automation",
            link: "/workflow-automation",
            icon: "tabler/circle-arrow-up",
          },
          {
            text: "Client Budgeting",
            link: "/client-budgeting",
            icon: "tabler/script",
          },
          {
            text: "Project Management",
            link: "/accounting-project-management",
            icon: "tabler/category",
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
            icon: "tabler/layout-grid",
          },
        ],
      },
    ],
  },

  // Pricing
  {
    text: "Pricing",
    link: "/pricing",
  },

  // Case Studies dropdown
  {
    text: "Case Studies",
    dropdown: [
      {
        text: "All Case Studies",
        link: "/case-studies",
      },
      {
        text: "Baltic Assist",
        link: "/case-studies/baltic-assist-analyses-and-manages-accounting-tasks-effortlessly",
      },
      {
        text: "Leinonen Estonia",
        link: "/case-studies/leinonen-estonia-escaped-excel-and-simplified-accounting-tasks",
      },
      {
        text: "Sandgrav Solutions",
        link: "/case-studies/sandgrav-solutions",
      },
    ],
  },

  // Resources dropdown
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

  // About
  {
    text: "About",
    link: "/about-us",
  },

  // Blog
  {
    text: "Blog",
    link: "/blog",
  },
];

export default navConfig;
