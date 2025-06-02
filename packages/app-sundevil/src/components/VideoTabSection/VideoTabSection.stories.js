// @ts-check
import React from "react";
import { VideoTabSection } from "./VideoTabSection";

const props = {
  title: "Give ‘em hell, Devils",
  subtitle: "Learn the anthems of Sun Devil Nation",
  subtitle2:
    "The ASU Sun Devil Marching Band has many traditions within the band program that continue to be honored today.",
  heroImage:
    "https://websecurity-web-sda.ws.asu.edu/sites/default/files/2024-08/thrive.webp",
  video1: {
    youtubeVideoUrl: "https://www.youtube.com/watch?v=TIH5bbkwK_s",
    imageSrc:
      "https://dev-web-sda.ws.asu.edu/sites/default/files/2025-05/3c03829479fe4fcd9499b48b5ddcbd60f1d9c33c.webp",
    lyric:
      "<p>Fight, Devils Down The Field</p> <p>Fight With Your Might and Don't</p> Ever Yield Long May Our Colors Outshine All Others Echo From The Buttes, Give 'Em Hell Devils! Cheer, Cheer For A-S-U Fight For The Old Maroon For it's Hail, Hail, The Gang's All Here And It's Onward to Victory!",
  },
  video2: {
    youtubeVideoUrl: "https://www.youtube.com/watch?v=E09vEyj-gp0",
    imageSrc:
      "https://dev-web-sda.ws.asu.edu/sites/default/files/2025-05/3c03829479fe4fcd9499b48b5ddcbd60f1d9c33c.webp",
    lyric:
      "<p>Alma Mater Where the bold saguaros '/n' <p>Raise their arms on high Praying strength</p> <br>for brave tomorrows From the western sky Where eternal mountains kneel at sunset's gate Here we hail thee, Alma Mater Arizona State</p>",
  },
};

export default {
  title: "Video Tab Section",
  component: <VideoTabSection {...props} />,
};

const Template = () => {
  return <VideoTabSection {...props} />;
};

export const Default = Template.bind({});
Default.args = props;
