// @ts-check
import React from "react";
import { SectionCardsAndMobileCarousel } from "./SectionCardsAndMobileCarousel";

const cards = [
  {
    cardTitle: "Sun Devil Extra",
    cardImage:
      "https://4week-web-sda.ws.asu.edu/sites/default/files/styles/image/public/2025-07/Screenshot%202025-07-10%20at%2010.02.32%E2%80%AFAM%20%282%29.webp?itok=tFrM51_Z",
    youtubeVideoUrl: "https://youtu.be/9hP0KtPjWbE?si=MHHAh2cy9GvxGPMD",
    imageSrc:
      "https://4week-web-sda.ws.asu.edu/sites/default/files/styles/image/public/2025-07/Screenshot%202025-07-10%20at%2010.02.32%E2%80%AFAM%20%282%29.webp?itok=tFrM51_Z",
  },
  {
    cardTitle: "Sun Extra Devil Extra",
    cardImage:
      "https://4week-web-sda.ws.asu.edu/sites/default/files/styles/image/public/2025-07/Screenshot%202025-07-10%20at%2010.02.32%E2%80%AFAM%20%282%29.webp?itok=tFrM51_Z",
  },
  {
    cardTitle: "ASU All Access",
    cardImage:
      "https://media-web-sda.ws.asu.edu/sites/default/files/styles/image/public/2024-07/video1.png?itok=uNUjujgt",
  },
  {
    cardTitle: "ASU All Access",
    cardImage:
      "https://media-web-sda.ws.asu.edu/sites/default/files/styles/image/public/2024-07/video1.png?itok=uNUjujgt",
  },
];

export default {
  title: "SectionCardsAndMobileCarousel",
  component: SectionCardsAndMobileCarousel,
};

const Template = args => <SectionCardsAndMobileCarousel {...args} />;

export const Default = Template.bind({});
Default.args = {
  heading: "Radio broadcasts",
  description:
    "Catch every moment of Sun Devil action with audio-only game broadcasts available across radio and streaming platforms. Relive past games with the familiar voices of our broadcast team who bring you every snap, hit, goal and basket of Sun Devil Athletics.",
  buttonTitle: "See all broadcasts",
  buttonUrl: "/example",
  cards,
};
