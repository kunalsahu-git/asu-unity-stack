import React from "react";
import SectionLogoCarousel from "./SectionLogoCarousel";

export default {
  title: "Section Logo Carousel",
  component: SectionLogoCarousel,
};

const Template = args => <SectionLogoCarousel {...args} />;

export const Default = Template.bind({});
Default.args = {
  sectionHeader: {
    title: "Video Section / Video Section",
    darkMode: true,
  },
  images: [
    {
      backgroundUrl:
        "https://asuapp4dev.prod.acquia-sites.com//sites/default/files/2025-12/adidas.webp",
      url: "https://asuapp4ode1.prod.acquia-sites.com/sites/default/files/2025-10/sun-devil-extra_1.png",
      pageUrl: "/test",
      episodeText: "1",
    },
    {
      backgroundUrl:
        "https://asuapp4dev.prod.acquia-sites.com//sites/default/files/2025-12/gorjana_0.webp",
      url: "https://asuapp4ode1.prod.acquia-sites.com/sites/default/files/2025-10/sun-devil-extra_1.png",
      pageUrl: "/test",
      episodeText: "2",
    },
    {
      backgroundUrl:
        "https://asuapp4dev.prod.acquia-sites.com//sites/default/files/2025-12/invisalign.webp",
      url: "https://asuapp4ode1.prod.acquia-sites.com/sites/default/files/2025-10/sun-devil-extra_1.png",
      pageUrl: "/test",
      episodeText: "3",
    },
    {
      backgroundUrl:
        "https://asuapp4ode1.prod.acquia-sites.com/sites/default/files/Sparky%2520at%2520CBCB%2520%25281%2529.webp",
      url: "https://asuapp4ode1.prod.acquia-sites.com/sites/default/files/2025-10/sun-devil-extra_1.png",
      pageUrl: "/test",
      episodeText: "4",
    },
    {
      backgroundUrl:
        "https://asuapp4ode1.prod.acquia-sites.com/sites/default/files/Sparky%2520at%2520CBCB%2520%25281%2529.webp",
      url: "https://asuapp4ode1.prod.acquia-sites.com/sites/default/files/2025-10/sun-devil-extra_1.png",
      pageUrl: "/test",
      episodeText: "5",
    },
    {
      backgroundUrl:
        "https://asuapp4ode1.prod.acquia-sites.com/sites/default/files/Sparky%2520at%2520CBCB%2520%25281%2529.webp",
      url: "https://asuapp4ode1.prod.acquia-sites.com/sites/default/files/2025-10/hell-frozen-over%20%281%29.png",
      pageUrl: "/test",
      episodeText: "6",
    },
    {
      backgroundUrl:
        "https://asuapp4ode1.prod.acquia-sites.com/sites/default/files/Sparky%2520at%2520CBCB%2520%25281%2529.webp",
      url: "https://asuapp4ode1.prod.acquia-sites.com/sites/default/files/2025-10/dugout-chatter%20%281%29.png",
      pageUrl: "/test",
      episodeText: "7",
    },
    {
      backgroundUrl:
        "https://asuapp4ode1.prod.acquia-sites.com/sites/default/files/Sparky%2520at%2520CBCB%2520%25281%2529.webp",
      url: "https://asuapp4ode1.prod.acquia-sites.com/sites/default/files/2025-10/sparkys-den%20%281%29.png",
      pageUrl: "/test",
      episodeText: "8",
    },
  ],
};
