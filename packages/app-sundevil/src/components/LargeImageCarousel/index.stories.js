import React from "react";
import LargeImageCarousel from "./LargeImageCarousel";

export default {
  title: "Large Image Carousel",
  component: LargeImageCarousel,
};

const Template = args => <LargeImageCarousel {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Featured partners",
  sectionName: "Featured partners",
  length: "3",
  cards: [
    {
      id: "1",
      imageUrl:
        "https://asuapp4dev.prod.acquia-sites.com/sites/default/files/2025-12/gorjana_1.webp",
      imageAlt: "From The Buttes, Give 'Em Hell Devils! Cheer",
    },
    {
      id: "2",
      imageUrl:
        "https://asuapp4dev.prod.acquia-sites.com/sites/default/files/2025-12/gorjana_1.webp",
      imageAlt: "From The Buttes, Give 'Em Hell Devils! Cheer",
    },
    {
      id: "3",
      imageUrl:
        "https://asuapp4dev.prod.acquia-sites.com/sites/default/files/2025-12/gorjana_1.webp",
      imageAlt: "From The Buttes, Give 'Em Hell Devils! Cheer",
    },
    {
      id: "4",
      imageUrl:
        "https://asuapp4dev.prod.acquia-sites.com/sites/default/files/2025-12/gorjana_1.webp",
      imageAlt: "From The Buttes, Give 'Em Hell Devils! Cheer",
    },
    {
      id: "5",
      imageUrl:
        "https://asuapp4dev.prod.acquia-sites.com/sites/default/files/2025-12/gorjana_1.webp",
      imageAlt: "From The Buttes, Give 'Em Hell Devils! Cheer",
    },
    {
      id: "6",
      imageUrl:
        "https://asuapp4dev.prod.acquia-sites.com/sites/default/files/2025-12/gorjana_1.webp",
      imageAlt: "From The Buttes, Give 'Em Hell Devils! Cheer",
    },
    {
      id: "7",
      imageUrl:
        "https://asuapp4dev.prod.acquia-sites.com/sites/default/files/2025-12/gorjana_1.webp",
      imageAlt: "From The Buttes, Give 'Em Hell Devils! Cheer",
    },
    {
      id: "8",
      imageUrl:
        "https://asuapp4dev.prod.acquia-sites.com/sites/default/files/2025-12/gorjana_1.webp",
      imageAlt: "From The Buttes, Give 'Em Hell Devils! Cheer",
    },
    {
      id: "9",
      imageUrl:
        "https://asuapp4dev.prod.acquia-sites.com/sites/default/files/2025-12/gorjana_1.webp",
      imageAlt: "From The Buttes, Give 'Em Hell Devils! Cheer",
    },
  ],
};
