/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
import React from "react";
import styled from "styled-components";

import { trackGAEvent } from "../../../../../track-ga/track-ga-event";
import { decodeHtml } from "../../../../../utils/decode-html";

const Title = styled.a`
  color: #191919 !important;
  text-decoration: none !important;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Limit to 2 lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.2;
  &:active,
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

/**
 * @type {import("./shared").CellComponent}
 */
export const CellTitle = props => {
  const { game, configLayout, sectionName } = props;

  const hasContent = game?.title;

  // Extract text starting from "vs." or "at" (keep them included)
  // const fullTitle = game?.title ?? "";
  // const match = fullTitle.match(/\b(vs\.|at)\s+.*$/i);
  // const displayTitle = match ? match[0].trim() : fullTitle;

  const fullTitle = game?.title ?? "";

  // Count occurrences
  const vsMatches = fullTitle.match(/\bvs\./gi) || [];
  const atMatches = fullTitle.match(/\bat\b/gi) || [];

  let displayTitle = "";

  // --- CASE 1: Multiple "vs."
  if (vsMatches.length > 1) {
    // Remove everything up to the first "vs."
    const firstVsIndex = fullTitle.toLowerCase().indexOf("vs.");
    const temp = fullTitle.substring(firstVsIndex).trim();

    // Remove the first "vs." only (keep the rest)
    displayTitle = temp.replace(/^vs\.\s*/i, "").trim();
  }

  // ============================
  // CASE 2: Multiple "at"
  // ============================
  else if (atMatches.length > 1) {
    const firstAtIndex = fullTitle.toLowerCase().indexOf("at");
    const temp = fullTitle.substring(firstAtIndex).trim();

    // Remove only the first "at"
    displayTitle = temp.replace(/^at\s*/i, "").trim();
  }

  // --- CASE 2: Single vs. or at
  else if (vsMatches.length === 1 || atMatches.length === 1) {
    const match = fullTitle.match(/\b(vs\.|at)\s+.*$/i);
    displayTitle = match ? match[0].trim() : fullTitle;
  }

  // --- CASE 3: No vs. or at → use part after :
  else if (fullTitle.includes(":")) {
    displayTitle = fullTitle.split(":")[1].trim();
  } else {
    displayTitle = fullTitle.trim();
  }

  return configLayout.includeCellTitle && hasContent ? (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        overflow: "hidden",
        flex: 1,
        height: "100%",
        minWidth: 0,
        padding: "0 1rem",
      }}
    >
      {displayTitle && (
        <Title
          href={game?.titleHref}
          style={{
            padding: 0,
            margin: 0,
            fontSize: "16px",
            fontWeight: "bold",
            width: "fit-content",
          }}
          dangerouslySetInnerHTML={{ __html: decodeHtml(displayTitle) }}
          onClick={() => {
            trackGAEvent({
              event: "link",
              action: "click",
              name: "onclick",
              type: "internal link",
              region: "main content",
              section: sectionName,
              text: displayTitle,
              component: "text",
            });
          }}
        />
      )}
    </div>
  ) : null;
};
