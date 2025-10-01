// @ts-check
import React from "react";
import { SectionFeaturedVideo } from "./SectionFeaturedVideo";

const shows = [
  {
    featuredImage:
      "https://4week-web-sda.ws.asu.edu/sites/default/files/2025-09/sun-devil-extra_0.png",
    featuredImageMobile:
      "https://4week-web-sda.ws.asu.edu/sites/default/files/2025-09/sun-devil-extra.png",
    title: "Sun Devil Extra",
    subtitle: "with Graham Rossini",
    description:
      "A weekly conversation about Sun Devil Athletics with Athletic Director Graham Rossini and special Sun Devil guests.",
    backgroundImage:
      "https://api.builder.io/api/v1/image/assets/TEMP/35d484d32f9bba3c4954e34d98cddbbccbb18a7d?width=2400",
    youtubeVideoUrl: "https://youtu.be/9hP0KtPjWbE?si=MHHAh2cy9GvxGPMD",
    imageSrc:
      "https://4week-web-sda.ws.asu.edu/sites/default/files/styles/image/public/2025-07/Screenshot%202025-07-10%20at%2010.02.32%E2%80%AFAM%20%282%29.webp?itok=tFrM51_Z",
    videoCtaLinks: [
      { buttonLink: "https://example.com", buttonTitle: "See all episodes" },
      { buttonLink: "https://example1.com", buttonTitle: "Watch on YouTube" },
    ],
  },
  {
    featuredImage:
      "https://api.builder.io/api/v1/image/assets/TEMP/f51523fc1f5f325da3b89415c048ff97269ba224?width=560",
    featuredImageMobile:
      "https://api.builder.io/api/v1/image/assets/TEMP/f51523fc1f5f325da3b89415c048ff97269ba224?width=560",
    title: "ASU All Access",
    subtitle: "",
    description:
      "FOX 10's ASU All Access is your insider look at Sun Devil Athletics and all things ASU. This FOX 10-produced program features ASU student-athletes, coaches, staff, alumni and all who support ASU and Sun Devil Athletics.",
    backgroundImage:
      "https://api.builder.io/api/v1/image/assets/TEMP/757b6a4f58538c4786051af30751328d7206bcbe?width=2400",
    youtubeVideoUrl: "https://www.youtube.com/watch?v=TIH5bbkwK_s",
    imageSrc:
      "https://media-web-sda.ws.asu.edu/sites/default/files/styles/image/public/2024-07/video1.png?itok=uNUjujgt",
    videoCtaLinks: [
      { buttonLink: "https://example.com", buttonTitle: "See all episodes" },
      { buttonLink: "https://example1.com", buttonTitle: "Watch on YouTube" },
    ],
  },
];

export default {
  title: "SectionFeaturedVideo",
  component: SectionFeaturedVideo,
};

const Template = args => <SectionFeaturedVideo {...args} />;

export const Default = Template.bind({});
Default.args = {
  heading: "Featured shows",
  shows,
};
