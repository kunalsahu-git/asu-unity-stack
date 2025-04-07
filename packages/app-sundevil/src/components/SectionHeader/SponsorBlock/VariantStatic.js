/* eslint-disable react/prop-types */
// @ts-check
import React, { forwardRef, useEffect } from "react";
import styled from "styled-components";

const Root = styled.img`
  max-height: 40px;
`;

const SponsorBlock = ({ sponsorBlock }) => {
  useEffect(() => {
    // @ts-ignore
    if (window.googletag?.cmd) {
      // @ts-ignore
      window.googletag.cmd.push(() => {
        // @ts-ignore
        window.googletag.display("div-gpt-ad-1731610205689-0");
      });
    }
  }, []);

  return (
    <div className="sponsor-block">
      <span>{sponsorBlock.text}</span>{' '}
      <a href={sponsorBlock.url} target="_blank" rel="noopener noreferrer">
        {sponsorBlock.name}
      </a>
      <div
        id="div-gpt-ad-1731610205689-0"
        style={{ minWidth: 135, minHeight: 38 }}
        className="sponsor-logo-placeholder"
      />
    </div>
  );
};

/**
 * @type {React.FC<import("../props").SectionHeaderProps >}
 */
export const VariantStatic = forwardRef(({ sponsorBlock }, ref) => {
  return (
    <SponsorBlock sponsorBlock={{
      text: "Presented by:",
      name: "Desert Financia 0 l",
      url: "https://www.desertfinancial.com/",
      logo: "div-gpt-ad-1731610205689-0",
    }} />
    // <Root src={sponsorBlock?.logo} alt={sponsorBlock?.name ?? " "} ref={ref} />
  );
});
