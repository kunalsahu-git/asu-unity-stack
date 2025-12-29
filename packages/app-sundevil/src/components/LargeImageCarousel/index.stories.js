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
    },
    {
      backgroundUrl:
        "https://asuapp4dev.prod.acquia-sites.com/sites/default/files/2025-12/06%20connect-with-us-bg.png",
      url: "https://asuapp4dev.prod.acquia-sites.com/sites/default/files/2025-12/Vector%20%281%29.webp",
      pageUrl: "/test",
    },
    {
      backgroundUrl:
        "https://asuapp4ode1.prod.acquia-sites.com/sites/default/files/Sparky%2520at%2520CBCB%2520%25281%2529.webp",
      url: "https://asuapp4ode1.prod.acquia-sites.com/sites/default/files/2025-10/sun-devil-extra_1.png",
      pageUrl: "/test",
    },
    {
      backgroundUrl:
        "https://asuapp4ode1.prod.acquia-sites.com/sites/default/files/Sparky%2520at%2520CBCB%2520%25281%2529.webp",
      url: "https://asuapp4ode1.prod.acquia-sites.com/sites/default/files/2025-10/sun-devil-extra_1.png",
      pageUrl: "/test",
    },
    {
      backgroundUrl:
        "https://asuapp4ode1.prod.acquia-sites.com/sites/default/files/Sparky%2520at%2520CBCB%2520%25281%2529.webp",
      url: "https://asuapp4ode1.prod.acquia-sites.com/sites/default/files/2025-10/sun-devil-extra_1.png",
      pageUrl: "/test",
    },
    {
      backgroundUrl:
        "https://asuapp4ode1.prod.acquia-sites.com/sites/default/files/Sparky%2520at%2520CBCB%2520%25281%2529.webp",
      url: "https://asuapp4ode1.prod.acquia-sites.com/sites/default/files/2025-10/hell-frozen-over%20%281%29.png",
      pageUrl: "/test",
    },
    {
      backgroundUrl:
        "https://asuapp4ode1.prod.acquia-sites.com/sites/default/files/Sparky%2520at%2520CBCB%2520%25281%2529.webp",
      url: "https://asuapp4ode1.prod.acquia-sites.com/sites/default/files/2025-10/dugout-chatter%20%281%29.png",
      pageUrl: "/test",
    },
    {
      backgroundUrl:
        "https://asuapp4ode1.prod.acquia-sites.com/sites/default/files/Sparky%2520at%2520CBCB%2520%25281%2529.webp",
      url: "https://asuapp4ode1.prod.acquia-sites.com/sites/default/files/2025-10/sparkys-den%20%281%29.png",
      pageUrl: "/test",
    },
  ],
};
