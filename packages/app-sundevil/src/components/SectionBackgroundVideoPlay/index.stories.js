import React from "react";
import SectionBackgroundVideoPlay from "./SectionBackgroundVideoPlay";

export default {
  title: "SectionBackgroundVideoPlay",
  component: SectionBackgroundVideoPlay,
};

const Template = args => <SectionBackgroundVideoPlay {...args} />;

export const Default = Template.bind({});
Default.args = {
  videoUrl: "https://www.youtube.com/watch?v=9hP0KtPjWbE",
  logoSrc:
    "https://api.builder.io/api/v1/image/assets/TEMP/161849f8593cc92939caafc00ac4f14d942b505a?width=605",
  title: "Sparky's Den",
  subtitle: "with Coach Dillingham",
  listenLiveLabel: "Listen Live",
  schedule: "Arizona Sports 98.7 FM<br/>Wednesday nights 7 – 8 p.m.",
  youtubeButtonText: "Watch on YouTube",
  youtubeButtonLink: "https://www.youtube.com/watch?v=9hP0KtPjWbE",
};
