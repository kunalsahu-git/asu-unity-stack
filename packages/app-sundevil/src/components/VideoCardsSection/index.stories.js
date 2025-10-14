// @ts-check
import React from "react";
import { VideoCardsSection } from "./VideoCardsSection";

const shows = [
  {
    title: "Sparky's Den",
    coach: "with Coach Dillingham",
    description:
      "with Coach with Coach Dillingham  with Coach Dillingham  with Coach Dillingham  Dillingham",
    youtubeVideoUrl: "https://youtu.be/9hP0KtPjWbE?si=MHHAh2cy9GvxGPMD",
    imageSrc:
      "https://4week-web-sda.ws.asu.edu/sites/default/files/styles/image/public/2025-07/Screenshot%202025-07-10%20at%2010.02.32%E2%80%AFAM%20%282%29.webp?itok=tFrM51_Z",
    featuredImage:
      "https://4week-web-sda.ws.asu.edu/sites/default/files/2025-09/sun-devil-extra_0.png",
    featuredImageMobile:
      "https://4week-web-sda.ws.asu.edu/sites/default/files/2025-09/sun-devil-extra.png",
    episodeText: "Episode 14 (8/21/25)",
  },
  {
    title: "Hell Frozen Over",
    coach: "with Greg Powers",
    description:
      "with Coach with Coach Dillingham  with Coach Dillingham  with Coach Dillingham  Dillingham",
    youtubeVideoUrl: "https://www.youtube.com/watch?v=TIH5bbkwK_s",
    imageSrc:
      "https://thesundevils.com/imgproxy/1727AbSq9lVjGwZbYYJnML0zaaNZrO8ffMNSXLmWHks/rs:fit:1980:0:0/g:ce/q:90/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3RoZXN1bmRldmlscy1jb20tcHJvZC8yMDI1LzEwLzAyL3hSUzViVHlkWkZrNlZPZ1lHcGs0V0tKcTM0QUlrdzNqNmpMcjBPdGcuanBn.jpg",
    featuredImage: "",
    episodeText: "Episode 14 (8/21/25)",
  },
  {
    title: "Dugout Chatter",
    coach: "with Willie Bloomquist",
    description:
      "with Coach with Coach Dillingham  with Coach Dillingham  with Coach Dillingham  Dillingham",
    youtubeVideoUrl: "https://www.youtube.com/watch?v=SVz4CI-bmA8",
    imageSrc:
      "https://media-web-sda.ws.asu.edu/sites/default/files/styles/image/public/2024-07/video1.png?itok=uNUjujgt",
    featuredImage: "",
    episodeText: "Episode 14 (8/21/25)",
  },
  {
    title: "Title TBD",
    coach: "with Molly Miller",
    description:
      "with Coach with Coach Dillingham  with Coach Dillingham  with Coach Dillingham  Dillingham",
    youtubeVideoUrl: "https://www.youtube.com/watch?v=TrCDmwta2Z4",
    imageSrc:
      "https://4week-web-sda.ws.asu.edu/sites/default/files/styles/image/public/2025-07/Screenshot%202025-07-10%20at%2010.02.32%E2%80%AFAM%20%282%29.webp?itok=tFrM51_Z",
    featuredImage: "",
    episodeText: "Episode 14 (8/21/25)",
  },
];

export default {
  title: "Video Card Section",
  component: VideoCardsSection,
};

const Template = args => <VideoCardsSection {...args} />;

export const Default = Template.bind({});
Default.args = {
  heading: "Coaches shows",
  description:
    "<p>Get an inside look at Sun Devil Athletics through our lineup of coaches' shows, featuring conversations with ASU head coaches, players, and special guests.</p>",
  shows,
};
