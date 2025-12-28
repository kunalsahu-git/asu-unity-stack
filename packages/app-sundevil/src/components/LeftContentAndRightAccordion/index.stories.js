// index.stories.js
import React from "react";

import LeftContentAndRightAccordion from "./LeftContentAndRightAccordion";

export default {
  title: "Left Content And Right Accordion",
  component: LeftContentAndRightAccordion,
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
  },
  {
    id: "hockey",
    name: "Hockey x CCM",
    description:
      "Elevating Sun Devil hockey through premier equipment partnerships. CCM's cutting-edge technology combines with ASU's athletic excellence.",
    ctaLabel: "See how we shine together",
    ctaLink: "https://asuapp4dev.prod.acquia-sites.com/brand-partnership",
  },
  {
    id: "jordyn",
    name: "Jordyn Tyson x All State",
    description:
      "Celebrating Jordyn Tyson's excellence in athletics with All State's commitment to protecting what matters.",
    ctaLabel: "See how we shine together",
    ctaLink: "https://asuapp4dev.prod.acquia-sites.com/brand-partnership",
  },
  {
    id: "bailey",
    name: "Bailey Miller x Sidral Mundet",
    description:
      "A refreshing partnership bringing together Bailey Miller's athletic prowess with Sidral Mundet's vibrant brand energy.",
    cta: "Learn more",
  },
  {
    id: "sda",
    name: "SDA x Venezia's Pizzeria",
    description:
      "Supporting Sun Devil Athletics with authentic flavor and local spirit. Venezia's Pizzeria stands with our athletes.",
    cta: "Learn more",
  },
  {
    id: "kenzie",
    name: "Kenzie Brown x Lapis Skin Lounge",
    description:
      "Kenzie Brown partners with Lapis Skin Lounge to champion self-care and wellness for student-athletes.",
    cta: "Learn more",
  },
];

const Template = args => <LeftContentAndRightAccordion {...args} />;

export const Default = Template.bind({});
Default.args = {
  eyebrow: "Proven performance",
  title: "Real brands. Real Sun Devils. Real results.",
  description:
    "From kickoff to goal, explore ways Sun Devil Athletics delivers real, meaningful and measurable impact for global brands.",
  cards: mockCards,
};

export const WithoutLogos = Template.bind({});
WithoutLogos.args = {
  eyebrow: "Strategic partnerships",
  title: "Impact-driven collaborations",
  description: "Highlighting partnerships that fuel Sun Devil success.",
  cards: mockCards.map(({ logo, ...rest }) => rest),
};
