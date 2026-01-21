import React from "react";
import SectionAnimatedAccordions from "./SectionAnimatedAccordions";

export default {
  title: "Section Animated Accordions",
  component: SectionAnimatedAccordions,
};

const Template = args => <SectionAnimatedAccordions {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Our partnership tiers",
  bottomImage:
    "https://asuapp4dev.prod.acquia-sites.com/sites/default/files/2025-12/partnership-tiers-text-lockup.png",
  tiers: [
    {
      id: "7211",
      label: "Premium tier",
      isPremium: true,
      showIcon: true,
      color: "#747474",
      activeColor: "#FFC627",
      svgPath: "M443.15 0H0V103.28H372.81L443.15 2.06V0Z",
      description:
        "Lorem ipsum dolor sit amet consectetur. In sed porttitor at sapien ac cum. Ligula volutpat in scelerisque convallis aliquam elementum enim. Amet augue ac non orci sit. Ut venenatis aliquam facilisi euismod elit. A in dapibus nulla ut quam facilisis. Sed suspendisse vel enim nec lorem. Enim arcu consectetur tortor sed. Lectus curabitur faucibus eu porta. Nulla sed urna urna euismod netus. Cras mauris facilisi amet scelerisque ut nec adipiscing pharetra.",
      tags: "Naming rights,Premier hospitality,Top access",
      rightImage:
        "https://asuapp4dev.prod.acquia-sites.com/sites/default/files/styles/image/public/2025-12/corporate-hospitality_1.webp?itok=RZwBX7R3",
    },
    {
      id: "7216",
      label: "Tier 1",
      color: "#747474",
      activeColor: "#747474",
      description: "Top-level partnerships with maximum exposure.",
      rightImage:
        "https://asuapp4dev.prod.acquia-sites.com/sites/default/files/styles/image/public/2025-12/corporate-hospitality_1.webp?itok=RZwBX7R3",
    },
    {
      id: "7221",
      label: "Tier 2",
      color: "#747474",
      description: "Top-level partnerships with maximum exposure.",
      rightImage:
        "https://asuapp4dev.prod.acquia-sites.com/sites/default/files/styles/image/public/2025-12/corporate-hospitality_1.webp?itok=RZwBX7R3",
    },
    {
      id: "7226",
      label: "Tier 3",
      color: "#747474",
      description: "Top-level partnerships with maximum exposure.",
      rightImage:
        "https://asuapp4dev.prod.acquia-sites.com/sites/default/files/styles/image/public/2025-12/corporate-hospitality_1.webp?itok=RZwBX7R3",
    },
    {
      id: "7231",
      label: "Tier 4",
      color: "#747474",
      description: "Top-level partnerships with maximum exposure.",
      rightImage:
        "https://asuapp4dev.prod.acquia-sites.com/sites/default/files/styles/image/public/2025-12/corporate-hospitality_1.webp?itok=RZwBX7R3",
    },
  ],
};

