import React from "react";
import LargeImageCarousel from "./LargeImageCarousel";

export default {
  title: "Large Image Carousel",
  component: LargeImageCarousel,
};

const Template = args => <LargeImageCarousel {...args} />;

export const Default = Template.bind({});
Default.args = {
  sectionHeader: {
    title: "NIL partnerships highlights",
    darkMode: false,
  },
  images: [
    {
      backgroundUrl:
        "https://asuapp4dev.prod.acquia-sites.com/sites/default/files/2025-12/06%20connect-with-us-bg.png",
      pageUrl: "/test",
      title: "title",
      body: "body",
      badge: "New Partnership",
    },
    {
      backgroundUrl:
        "https://asuapp4dev.prod.acquia-sites.com/sites/default/files/2025-12/06%20connect-with-us-bg.png",
      pageUrl: "/test",
      title: "title",
      body: "body",
      badge: "New Partnership",
    },
    {
      backgroundUrl:
        "https://asuapp4dev.prod.acquia-sites.com/sites/default/files/2025-12/06%20connect-with-us-bg.png",
      pageUrl: "/test",
      title: "title",
      body: "body",
      badge: "New Partnership",
    },
    {
      backgroundUrl:
        "https://asuapp4dev.prod.acquia-sites.com/sites/default/files/2025-12/06%20connect-with-us-bg.png",
      pageUrl: "/test",
      title: "title",
      body: "body",
      badge: "New Partnership",
    },
    {
      backgroundUrl:
        "https://asuapp4dev.prod.acquia-sites.com/sites/default/files/2025-12/06%20connect-with-us-bg.png",
      pageUrl: "/test",
      title: "title",
      body: "body",
      badge: "New Partnership",
    },
    {
      backgroundUrl:
        "https://asuapp4dev.prod.acquia-sites.com/sites/default/files/2025-12/06%20connect-with-us-bg.png",
      pageUrl: "/test",
      title: "title",
      body: "body",
      badge: "New Partnership",
    },
    {
      backgroundUrl:
        "https://asuapp4dev.prod.acquia-sites.com/sites/default/files/2025-12/06%20connect-with-us-bg.png",
      pageUrl: "/test",
      title: "title",
      body: "body",
      badge: "New Partnership",
    },
    {
      backgroundUrl:
        "https://asuapp4dev.prod.acquia-sites.com/sites/default/files/2025-12/06%20connect-with-us-bg.png",
      pageUrl: "/test",
      title: "title",
      body: "body",
      badge: "New Partnership",
    },
  ],
};
