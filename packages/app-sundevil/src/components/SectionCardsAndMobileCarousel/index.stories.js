// @ts-check
import React from "react";
import SectionCardsAndMobileCarousel from "./SectionCardsAndMobileCarousel";

const cards = [
  {
    imageSrc:
      "https://thesundevils.com/imgproxy/1727AbSq9lVjGwZbYYJnML0zaaNZrO8ffMNSXLmWHks/rs:fit:1980:0:0/g:ce/q:90/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3RoZXN1bmRldmlscy1jb20tcHJvZC8yMDI1LzEwLzAyL3hSUzViVHlkWkZrNlZPZ1lHcGs0V0tKcTM0QUlrdzNqNmpMcjBPdGcuanBn.jpg",
    title: "Super Bowl #SunDevils4Life",
    youtubeVideoUrl: "https://www.youtube.com/watch?v=I07k7P0txjY",
  },
  {
    imageSrc:
      "https://thesundevils.com/imgproxy/1727AbSq9lVjGwZbYYJnML0zaaNZrO8ffMNSXLmWHks/rs:fit:1980:0:0/g:ce/q:90/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3RoZXN1bmRldmlscy1jb20tcHJvZC8yMDI1LzEwLzAyL3hSUzViVHlkWkZrNlZPZ1lHcGs0V0tKcTM0QUlrdzNqNmpMcjBPdGcuanBn.jpg",
    title: "Super Bowl #SunDevils4Life",
    youtubeVideoUrl: "https://www.youtube.com/watch?v=I07k7P0txjY",
  },
  {
    imageSrc:
      "https://thesundevils.com/imgproxy/1727AbSq9lVjGwZbYYJnML0zaaNZrO8ffMNSXLmWHks/rs:fit:1980:0:0/g:ce/q:90/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3RoZXN1bmRldmlscy1jb20tcHJvZC8yMDI1LzEwLzAyL3hSUzViVHlkWkZrNlZPZ1lHcGs0V0tKcTM0QUlrdzNqNmpMcjBPdGcuanBn.jpg",
    title: "Big 12 Announces 2024 Football Schedule",
    youtubeVideoUrl: "https://www.youtube.com/watch?v=I07k7P0txjY",
  },
  {
    imageSrc:
      "https://thesundevils.com/imgproxy/1727AbSq9lVjGwZbYYJnML0zaaNZrO8ffMNSXLmWHks/rs:fit:1980:0:0/g:ce/q:90/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3RoZXN1bmRldmlscy1jb20tcHJvZC8yMDI1LzEwLzAyL3hSUzViVHlkWkZrNlZPZ1lHcGs0V0tKcTM0QUlrdzNqNmpMcjBPdGcuanBn.jpg",
    title: "Big 12 Announces 2024 Football Schedule",
    youtubeVideoUrl: "https://www.youtube.com/watch?v=I07k7P0txjY",
  },
  {
    imageSrc:
      "https://thesundevils.com/imgproxy/1727AbSq9lVjGwZbYYJnML0zaaNZrO8ffMNSXLmWHks/rs:fit:1980:0:0/g:ce/q:90/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3RoZXN1bmRldmlscy1jb20tcHJvZC8yMDI1LzEwLzAyL3hSUzViVHlkWkZrNlZPZ1lHcGs0V0tKcTM0QUlrdzNqNmpMcjBPdGcuanBn.jpg",
    title: "Big 12 Announces 2024 Football Schedule",
    youtubeVideoUrl: "https://www.youtube.com/watch?v=I07k7P0txjY",
  },
  {
    imageSrc:
      "https://thesundevils.com/imgproxy/1727AbSq9lVjGwZbYYJnML0zaaNZrO8ffMNSXLmWHks/rs:fit:1980:0:0/g:ce/q:90/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3RoZXN1bmRldmlscy1jb20tcHJvZC8yMDI1LzEwLzAyL3hSUzViVHlkWkZrNlZPZ1lHcGs0V0tKcTM0QUlrdzNqNmpMcjBPdGcuanBn.jpg",
    title: "Big 12 Announces 2024 Football Schedule",
    youtubeVideoUrl: "https://www.youtube.com/watch?v=I07k7P0txjY",
  },
];

export default {
  title: "SectionCardsAndMobileCarousel",
  component: SectionCardsAndMobileCarousel,
};

const Template = args => <SectionCardsAndMobileCarousel {...args} />;

export const Default = Template.bind({});
Default.args = {
  headingh2: "Radio broadcasts",
  headingh3: "Featured episodes",
  description:
    "Catch every moment of Sun Devil action with audio-only game broadcasts available across radio and streaming platforms. Relive past games with the familiar voices of our broadcast team who bring you every snap, hit, goal and basket of Sun Devil Athletics.",
  buttonTitle: "See all broadcasts",
  buttonUrl: "/example",
  cards,
};
