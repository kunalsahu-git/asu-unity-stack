// @ts-check
import React from "react";
import { SectionLoadMore } from "./SectionLoadMore";

const newsStories = [
  {
    imageSrc:
      "https://thesundevils.com/imgproxy/1727AbSq9lVjGwZbYYJnML0zaaNZrO8ffMNSXLmWHks/rs:fit:1980:0:0/g:ce/q:90/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3RoZXN1bmRldmlscy1jb20tcHJvZC8yMDI1LzEwLzAyL3hSUzViVHlkWkZrNlZPZ1lHcGs0V0tKcTM0QUlrdzNqNmpMcjBPdGcuanBn.jpg",
    title: "Super Bowl #SunDevils4Life",
    youtubeVideoUrl: "https://www.youtube.com/watch?v=I07k7P0txjY",
    episodeText: "Episode 13 (8/14/25)",
  },
  {
    imageSrc:
      "https://thesundevils.com/imgproxy/1727AbSq9lVjGwZbYYJnML0zaaNZrO8ffMNSXLmWHks/rs:fit:1980:0:0/g:ce/q:90/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3RoZXN1bmRldmlscy1jb20tcHJvZC8yMDI1LzEwLzAyL3hSUzViVHlkWkZrNlZPZ1lHcGs0V0tKcTM0QUlrdzNqNmpMcjBPdGcuanBn.jpg",
    title: "Big 12 Announces 2024 Football Schedule",
    youtubeVideoUrl: "https://www.youtube.com/watch?v=I07k7P0txjY",
    episodeText: "Episode 13 (8/14/25)",
  },
  {
    imageSrc:
      "https://thesundevils.com/imgproxy/1727AbSq9lVjGwZbYYJnML0zaaNZrO8ffMNSXLmWHks/rs:fit:1980:0:0/g:ce/q:90/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3RoZXN1bmRldmlscy1jb20tcHJvZC8yMDI1LzEwLzAyL3hSUzViVHlkWkZrNlZPZ1lHcGs0V0tKcTM0QUlrdzNqNmpMcjBPdGcuanBn.jpg",
    title: "Inside the Huddle: Coach Insights",
    youtubeVideoUrl: "https://www.youtube.com/watch?v=I07k7P0txjY",
    episodeText: "Episode 13 (8/14/25)",
  },
  {
    imageSrc:
      "https://thesundevils.com/imgproxy/1727AbSq9lVjGwZbYYJnML0zaaNZrO8ffMNSXLmWHks/rs:fit:1980:0:0/g:ce/q:90/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3RoZXN1bmRldmlscy1jb20tcHJvZC8yMDI1LzEwLzAyL3hSUzViVHlkWkZrNlZPZ1lHcGs0V0tKcTM0QUlrdzNqNmpMcjBPdGcuanBn.jpg",
    title: "ASU Football Game Highlights",
    youtubeVideoUrl: "https://www.youtube.com/watch?v=I07k7P0txjY",
    episodeText: "Episode 13 (8/14/25)",
  },
  {
    imageSrc:
      "https://thesundevils.com/imgproxy/1727AbSq9lVjGwZbYYJnML0zaaNZrO8ffMNSXLmWHks/rs:fit:1980:0:0/g:ce/q:90/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3RoZXN1bmRldmlscy1jb20tcHJvZC8yMDI1LzEwLzAyL3hSUzViVHlkWkZrNlZPZ1lHcGs0V0tKcTM0QUlrdzNqNmpMcjBPdGcuanBn.jpg",
    title: "Sun Devils Weekly Recap",
    youtubeVideoUrl: "https://www.youtube.com/watch?v=I07k7P0txjY",
    episodeText: "Episode 13 (8/14/25)",
  },
  {
    imageSrc:
      "https://thesundevils.com/imgproxy/1727AbSq9lVjGwZbYYJnML0zaaNZrO8ffMNSXLmWHks/rs:fit:1980:0:0/g:ce/q:90/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3RoZXN1bmRldmlscy1jb20tcHJvZC8yMDI1LzEwLzAyL3hSUzViVHlkWkZrNlZPZ1lHcGs0V0tKcTM0QUlrdzNqNmpMcjBPdGcuanBn.jpg",
    title: "Sun Devils Weekly Recap",
    youtubeVideoUrl: "https://www.youtube.com/watch?v=I07k7P0txjY",
  },
  {
    imageSrc:
      "https://thesundevils.com/imgproxy/1727AbSq9lVjGwZbYYJnML0zaaNZrO8ffMNSXLmWHks/rs:fit:1980:0:0/g:ce/q:90/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3RoZXN1bmRldmlscy1jb20tcHJvZC8yMDI1LzEwLzAyL3hSUzViVHlkWkZrNlZPZ1lHcGs0V0tKcTM0QUlrdzNqNmpMcjBPdGcuanBn.jpg",
    title: "Sun Devils Weekly Recap",
    youtubeVideoUrl: "https://www.youtube.com/watch?v=I07k7P0txjY",
  },
  {
    imageSrc:
      "https://thesundevils.com/imgproxy/1727AbSq9lVjGwZbYYJnML0zaaNZrO8ffMNSXLmWHks/rs:fit:1980:0:0/g:ce/q:90/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3RoZXN1bmRldmlscy1jb20tcHJvZC8yMDI1LzEwLzAyL3hSUzViVHlkWkZrNlZPZ1lHcGs0V0tKcTM0QUlrdzNqNmpMcjBPdGcuanBn.jpg",
    title: "Sun Devils Weekly Recap",
    youtubeVideoUrl: "https://www.youtube.com/watch?v=I07k7P0txjY",
  },
  {
    imageSrc:
      "https://thesundevils.com/imgproxy/1727AbSq9lVjGwZbYYJnML0zaaNZrO8ffMNSXLmWHks/rs:fit:1980:0:0/g:ce/q:90/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3RoZXN1bmRldmlscy1jb20tcHJvZC8yMDI1LzEwLzAyL3hSUzViVHlkWkZrNlZPZ1lHcGs0V0tKcTM0QUlrdzNqNmpMcjBPdGcuanBn.jpg",
    title: "Sun Devils Weekly Recap",
    youtubeVideoUrl: "https://www.youtube.com/watch?v=I07k7P0txjY",
  },
  {
    imageSrc:
      "https://thesundevils.com/imgproxy/1727AbSq9lVjGwZbYYJnML0zaaNZrO8ffMNSXLmWHks/rs:fit:1980:0:0/g:ce/q:90/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3RoZXN1bmRldmlscy1jb20tcHJvZC8yMDI1LzEwLzAyL3hSUzViVHlkWkZrNlZPZ1lHcGs0V0tKcTM0QUlrdzNqNmpMcjBPdGcuanBn.jpg",
    title: "Sun Devils Weekly Recap",
    youtubeVideoUrl: "https://www.youtube.com/watch?v=I07k7P0txjY",
  },
  {
    imageSrc:
      "https://thesundevils.com/imgproxy/1727AbSq9lVjGwZbYYJnML0zaaNZrO8ffMNSXLmWHks/rs:fit:1980:0:0/g:ce/q:90/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3RoZXN1bmRldmlscy1jb20tcHJvZC8yMDI1LzEwLzAyL3hSUzViVHlkWkZrNlZPZ1lHcGs0V0tKcTM0QUlrdzNqNmpMcjBPdGcuanBn.jpg",
    title: "Sun Devils Weekly Recap",
    youtubeVideoUrl: "https://www.youtube.com/watch?v=I07k7P0txjY",
  },
  {
    imageSrc:
      "https://thesundevils.com/imgproxy/1727AbSq9lVjGwZbYYJnML0zaaNZrO8ffMNSXLmWHks/rs:fit:1980:0:0/g:ce/q:90/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3RoZXN1bmRldmlscy1jb20tcHJvZC8yMDI1LzEwLzAyL3hSUzViVHlkWkZrNlZPZ1lHcGs0V0tKcTM0QUlrdzNqNmpMcjBPdGcuanBn.jpg",
    title: "Sun Devils Weekly Recap",
    youtubeVideoUrl: "https://www.youtube.com/watch?v=I07k7P0txjY",
  },
  {
    imageSrc:
      "https://thesundevils.com/imgproxy/1727AbSq9lVjGwZbYYJnML0zaaNZrO8ffMNSXLmWHks/rs:fit:1980:0:0/g:ce/q:90/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3RoZXN1bmRldmlscy1jb20tcHJvZC8yMDI1LzEwLzAyL3hSUzViVHlkWkZrNlZPZ1lHcGs0V0tKcTM0QUlrdzNqNmpMcjBPdGcuanBn.jpg",
    title: "Sun Devils Weekly Recap",
    youtubeVideoUrl: "https://www.youtube.com/watch?v=I07k7P0txjY",
  },
  {
    imageSrc:
      "https://thesundevils.com/imgproxy/1727AbSq9lVjGwZbYYJnML0zaaNZrO8ffMNSXLmWHks/rs:fit:1980:0:0/g:ce/q:90/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3RoZXN1bmRldmlscy1jb20tcHJvZC8yMDI1LzEwLzAyL3hSUzViVHlkWkZrNlZPZ1lHcGs0V0tKcTM0QUlrdzNqNmpMcjBPdGcuanBn.jpg",
    title: "Sun Devils Weekly Recap",
    youtubeVideoUrl: "https://www.youtube.com/watch?v=I07k7P0txjY",
  },
  {
    imageSrc:
      "https://thesundevils.com/imgproxy/1727AbSq9lVjGwZbYYJnML0zaaNZrO8ffMNSXLmWHks/rs:fit:1980:0:0/g:ce/q:90/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3RoZXN1bmRldmlscy1jb20tcHJvZC8yMDI1LzEwLzAyL3hSUzViVHlkWkZrNlZPZ1lHcGs0V0tKcTM0QUlrdzNqNmpMcjBPdGcuanBn.jpg",
    title: "Sun Devils Weekly Recap",
    youtubeVideoUrl: "https://www.youtube.com/watch?v=I07k7P0txjY",
  },
  {
    imageSrc:
      "https://thesundevils.com/imgproxy/1727AbSq9lVjGwZbYYJnML0zaaNZrO8ffMNSXLmWHks/rs:fit:1980:0:0/g:ce/q:90/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3RoZXN1bmRldmlscy1jb20tcHJvZC8yMDI1LzEwLzAyL3hSUzViVHlkWkZrNlZPZ1lHcGs0V0tKcTM0QUlrdzNqNmpMcjBPdGcuanBn.jpg",
    title: "Highlights: Sun Devils vs Wildcats",
    youtubeVideoUrl: "https://www.youtube.com/watch?v=I07k7P0txjY",
  },
  {
    imageSrc:
      "https://thesundevils.com/imgproxy/1727AbSq9lVjGwZbYYJnML0zaaNZrO8ffMNSXLmWHks/rs:fit:1980:0:0/g:ce/q:90/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3RoZXN1bmRldmlscy1jb20tcHJvZC8yMDI1LzEwLzAyL3hSUzViVHlkWkZrNlZPZ1lHcGs0V0tKcTM0QUlrdzNqNmpMcjBPdGcuanBn.jpg",
    title: "Sun Devils Top 10 Plays of 2024",
    youtubeVideoUrl: "https://www.youtube.com/watch?v=I07k7P0txjY",
  },
];

export default {
  title: "SectionLoadMore",
  component: SectionLoadMore,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = args => <SectionLoadMore {...args} />;

export const Default = Template.bind({});
Default.args = {
  heading: "More episodes",
  description: "of Sparky's Den with Coach Dillingham",
  newsStories,
  itemsPerLoad: 3, // ✅ optional: to test 'Load More' functionality
};
