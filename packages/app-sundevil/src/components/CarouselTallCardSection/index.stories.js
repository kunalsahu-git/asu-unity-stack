import React from "react";

import { CarouselTallCardSection } from "./CarouselTallCardSection";

// Sample reusable card data
const cardBase = {
  imageSrc:
    "https://dev-web-sda.ws.asu.edu/sites/default/files/2025-05/test.jpg",
  sportName: "Football",
  sportIcon: "fas fa-football-ball",
  title: "Maroon and Gold Spring Game",
  subtitles: ["April 26, 2024", "Free Admission"],
  body: "Join us at the Spring Game celebration. Free admission and more surprises!",
  buttons: [
    {
      color: "maroon",
      href: "#",
      label: "Learn More",
    },
  ],
};

// Generate list of cards
const specialEvents = Array.from({ length: 6 }).map((_, i) => ({
  ...cardBase,
  id: `${i + 1}`,
  title: `Event #${i + 1}`,
}));

// Shared props
const commonProps = {
  sectionHeader: {
    title: "The Inferno",
    subtitle:
      "Sun Devil Athletics events that bring fans together to celebrate community, competition, and culture.",
  },
  cards: specialEvents,
  backgroundImageUrl: "https://sundevils.com/sites/default/files/SPARY_0.webp",
};

export default {
  title: "Special Events / Carousel Tall Card Section",
  component: CarouselTallCardSection,
};

const Template = args => <CarouselTallCardSection {...commonProps} {...args} />;

export const Default = Template.bind({});
Default.args = {};
