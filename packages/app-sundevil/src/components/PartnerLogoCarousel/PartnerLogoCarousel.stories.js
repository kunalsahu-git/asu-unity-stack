// @ts-check
import React from "react";
import { PartnerLogoCarousel } from "./PartnerLogoCarousel";

const props = {
  title: "Featured partners",
  sectionName: "Featured partners",
  buttonLink: "https://example.com",
  buttonLabel: "Partner with us",
  footerLink: "https://example.com",
  footerLabel: "Learn more about our partnerships",
  length: "3",
  imageWidth: "228px",
  imageHeight: "139px",
  cards: [
    {
      id: "1",
      imageUrl:
        "https://asuapp4dev.prod.acquia-sites.com//sites/default/files/2025-12/adidas.webp",
      imageAlt: "From The Buttes, Give 'Em Hell Devils! Cheer",
    },
    {
      id: "2",
      imageUrl:
        "https://asuapp4dev.prod.acquia-sites.com//sites/default/files/2025-12/gorjana_0.webp",
      imageAlt: "From The Buttes, Give 'Em Hell Devils! Cheer",
    },
    {
      id: "3",
      imageUrl:
        "https://asuapp4dev.prod.acquia-sites.com//sites/default/files/2025-12/invisalign.webp",
      imageAlt: "From The Buttes, Give 'Em Hell Devils! Cheer",
    },
    {
      id: "4",
      imageUrl:
        "https://asuapp4dev.prod.acquia-sites.com//sites/default/files/2025-12/mayo-clinic.webp",
      imageAlt: "From The Buttes, Give 'Em Hell Devils! Cheer",
    },
    {
      id: "5",
      imageUrl:
        "https://asuapp4dev.prod.acquia-sites.com//sites/default/files/2025-12/mayo-clinic.webp",
      imageAlt: "From The Buttes, Give 'Em Hell Devils! Cheer",
    },
    {
      id: "6",
      imageUrl:
        "https://asuapp4dev.prod.acquia-sites.com/sites/default/files/2025-12/mountain-america-stadium.webp",
      imageAlt: "From The Buttes, Give 'Em Hell Devils! Cheer",
    },
    {
      id: "7",
      imageUrl:
        "https://asuapp4dev.prod.acquia-sites.com/sites/default/files/2025-12/mountain-america-stadium.webp",
      imageAlt: "From The Buttes, Give 'Em Hell Devils! Cheer",
    },
    {
      id: "8",
      imageUrl:
        "https://asuapp4dev.prod.acquia-sites.com/sites/default/files/2025-12/mountain-america-stadium.webp",
      imageAlt: "From The Buttes, Give 'Em Hell Devils! Cheer",
    },
    {
      id: "9",
      imageUrl:
        "https://asuapp4dev.prod.acquia-sites.com/sites/default/files/2025-12/mountain-america-stadium.webp",
      imageAlt: "From The Buttes, Give 'Em Hell Devils! Cheer",
    },
  ],
};

export default {
  title: "Partner Logo Carousel",
  component: <PartnerLogoCarousel {...props} />,
};

const Template = () => {
  return <PartnerLogoCarousel {...props} />;
};

export const Default = Template.bind({});
Default.args = props;
