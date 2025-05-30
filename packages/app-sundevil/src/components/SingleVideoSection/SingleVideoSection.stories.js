import React from "react";
import SingleVideoSection from "./SingleVideoSection";

export default {
  title: "Single Video Section",
  component: <SingleVideoSection />,
};

const props = {
  video: {},
  title: "Sparky’s spirit",
  body: "Sparky the Sun Devil doesn’t just show up to games. He brings the heat! From the moment he bursts on the scene with his iconic trident in hand, whether he’s stomping the bus, doing pushups, or playing the drums behind the “Curtain of Distraction,” Sparky's always ready to spark some excitement.",
  bgdesktopImage:
    "https://dev-web-sda.ws.asu.edu/sites/default/files/2025-05/sparkys-spirit-bg-desktop.webp",
  bgmobileImage:
    "https://dev-web-sda.ws.asu.edu/sites/default/files/2025-05/sparkys-spirit-bg-mobile.webp",
  videoData: {
    bottomButtons: [],
    newsStories: [
      {
        imageSrc:
          "https://dev-web-sda.ws.asu.edu/sites/default/files/2025-05/3c03829479fe4fcd9499b48b5ddcbd60f1d9c33c.webp",
        title: "",
        youtubeVideoUrl: "https://www.youtube.com/watch?v=vVEA0wnmRtg",
      },
    ],
  },
};
const Template = () => {
  return <SingleVideoSection {...props} />;
};

export const Default = Template.bind({});
Default.args = props;
