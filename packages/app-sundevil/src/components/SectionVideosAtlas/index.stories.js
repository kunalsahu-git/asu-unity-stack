import React from "react";
import SectionVideosAtlas from "./SectionVideosAtlas";

export default {
  title: "Section Videos Atlas",
  component: SectionVideosAtlas,
};

const Template = args => <SectionVideosAtlas {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Newest Episode",
  episodeTitle: "Episode 14",
  date: "Aug 21, 2025",
  duration: "14m",
  description:
    "In this week's conversation with Graham Rossini, we sit down and talk about the giant win from the Sun Devils this past weekend.",
  youtubeVideoUrl: "https://youtu.be/9hP0KtPjWbE?si=MHHAh2cy9GvxGPMD",
  imageSrc:
    "https://asuapp4ode1.prod.acquia-sites.com/sites/default/files/Sparky%2520at%2520CBCB%2520%25281%2529.webp",
  alignVideo: "right",
};
