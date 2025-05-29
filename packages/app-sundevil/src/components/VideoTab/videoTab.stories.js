// @ts-check
import React from "react";
import VideoTabSection from "./VideoTabSection";

const props = {
  title: "Give ‘em hell, Devils",
  subtitle: "Learn the anthems of Sun Devil Nation",
  subtitle2: "The ASU Sun Devil Marching Band has many traditions within the band program that continue to be honored today.",
  video1: {
    youtubeVideoUrl: "https://www.youtube.com/watch?v=TIH5bbkwK_s",
    imageSrc: "",
    lyric: "Fight, Devils Down The Field Fight With Your Might and Don't Ever Yield Long May Our Colors Outshine All Others Echo From The Buttes, Give 'Em Hell Devils! Cheer, Cheer For A-S-U Fight For The Old Maroon For it's Hail, Hail, The Gang's All Here And It's Onward to Victory!"
  },
  video2: {
    youtubeVideoUrl: "https://www.youtube.com/watch?v=TIH5bbkwK_s",
    imageSrc: "",
    lyric: "Fight, Devils Down The Field Fight With Your Might and Don't Ever Yield Long May Our Colors Outshine All Others Echo From The Buttes, Give 'Em Hell Devils! Cheer, Cheer For A-S-U Fight For The Old Maroon For it's Hail, Hail, The Gang's All Here And It's Onward to Victory!"
  },
}

export default {
  title: "Video Tab Section",
  component: <VideoTabSection {...props}/>,
};

const Template = () => {
  return <VideoTabSection {...props} />;
};

export const Default = Template.bind({});
Default.args = props;
