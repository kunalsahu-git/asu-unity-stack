// index.stories.js
import React from "react";

import SidebarAccordion from "./SidebarAccordion";

export default {
  title: "Sidebar Accordion",
  component: SidebarAccordion,
};

const mockCards = [
  {
    id: "gorjana",
    name: "ASU x gorjana",
    logo: "https://api.builder.io/api/v1/image/assets/TEMP/cfa04ab778a96a91569a869e0e8e35c4b6a14a3e?width=681",
    badge: "National partnership",
    description:
      "Contemporary luxury jewelry brand, gorjana teams up with ASU to celebrate, amplify and empower women in sport. This first-of-its-kind partnership aims to shine a spotlight on women's sports.",
    ctaLabel: "See how we shine together",
    ctaLink: "https://asuapp4dev.prod.acquia-sites.com/brand-partnership",
    logoTitle: "gorjana",
    backgroundImage:
      "https://asuapp4dev.prod.acquia-sites.com/sites/default/files/2025-12/06%20connect-with-us-bg.png",
    icon: "fas fa-youtube",
  },
  {
    id: "hockey",
    name: "Hockey x CCM",
    description:
      "Elevating Sun Devil hockey through premier equipment partnerships. CCM's cutting-edge technology combines with ASU's athletic excellence.",
    ctaLabel: "See how we shine together",
    ctaLink: "https://asuapp4dev.prod.acquia-sites.com/brand-partnership",
    backgroundImage:
      "https://thesundevils.com/imgproxy/xiRGf_QtswtagsndqDja2AROu42uSSFYwipPLt_MlTQ/rs:fit:1980:0:0:0/g:ce:0:0/q:90/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3RoZXN1bmRldmlscy1jb20tcHJvZC8yMDI1LzA3LzE4L3g4VjZOclc5bTc4c29BMnJoTWhpQWNGSXlDODBpYjJMZW9BeXAxNXIuanBn.jpg",
    icon: "fas fa-volleyball",
  },
  {
    id: "jordyn",
    name: "Jordyn Tyson x All State",
    description:
      "Celebrating Jordyn Tyson's excellence in athletics with All State's commitment to protecting what matters.",
    ctaLabel: "See how we shine together",
    ctaLink: "https://asuapp4dev.prod.acquia-sites.com/brand-partnership",
    backgroundImage:
      "https://asuapp4dev.prod.acquia-sites.com/sites/default/files/2025-12/06%20connect-with-us-bg.png",
    icon: "fas fa-baseball",
  },
  {
    id: "bailey",
    name: "Bailey Miller x Sidral Mundet",
    description:
      "A refreshing partnership bringing together Bailey Miller's athletic prowess with Sidral Mundet's vibrant brand energy.",
    ctaLabel: "See how we shine together",
    ctaLink: "https://asuapp4dev.prod.acquia-sites.com/brand-partnership",
    backgroundImage:
      "https://asuapp4dev.prod.acquia-sites.com/sites/default/files/2025-12/06%20connect-with-us-bg.png",
    icon: "fas fa-sync-alt",
  },
  {
    id: "sda",
    name: "SDA x Venezia's Pizzeria",
    description:
      "Supporting Sun Devil Athletics with authentic flavor and local spirit. Venezia's Pizzeria stands with our athletes.",
    ctaLabel: "See how we shine together",
    ctaLink: "https://asuapp4dev.prod.acquia-sites.com/brand-partnership",
    backgroundImage:
      "https://asuapp4dev.prod.acquia-sites.com/sites/default/files/2025-12/06%20connect-with-us-bg.png",
    icon: "fas fa-youtube",
  },
  {
    id: "kenzie",
    name: "Kenzie Brown x Lapis Skin Lounge",
    description:
      "Kenzie Brown partners with Lapis Skin Lounge to champion self-care and wellness for student-athletes.",
    ctaLabel: "See how we shine together",
    ctaLink: "https://asuapp4dev.prod.acquia-sites.com/brand-partnership",
    backgroundImage:
      "https://thesundevils.com/imgproxy/xiRGf_QtswtagsndqDja2AROu42uSSFYwipPLt_MlTQ/rs:fit:1980:0:0:0/g:ce:0:0/q:90/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3RoZXN1bmRldmlscy1jb20tcHJvZC8yMDI1LzA3LzE4L3g4VjZOclc5bTc4c29BMnJoTWhpQWNGSXlDODBpYjJMZW9BeXAxNXIuanBn.jpg",
    icon: "fas fa-sync-alt",
  },
];

const Template = args => <SidebarAccordion {...args} />;

export const Default = Template.bind({});
Default.args = {
  eyebrow: "Proven performance",
  title: "Real brands. Real Sun Devils. Real results.",
  description:
    "From kickoff to goal, explore ways Sun Devil Athletics delivers real, meaningful and measurable impact for global brands.",
  cards: mockCards,
};
