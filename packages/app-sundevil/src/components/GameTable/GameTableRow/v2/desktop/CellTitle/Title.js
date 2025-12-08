/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-danger */
// @ts-check
import React from "react";
import styled from "styled-components";

import { trackGAEvent } from "../../../../../../track-ga/track-ga-event";
import { decodeHtml } from "../../../../../../utils/decode-html";
import { STYLES_TRUNCATE } from "../shared";

const Root = styled.a`
  font-size: 24px;
  line-height: 24px;
  padding: 0;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Limit to 2 lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  white-space: nowrap;
  font-weight: bold;
  width: fit-content;
  max-width: 100%;
  color: #191919 !important;
  text-decoration: none;
  &.active {
    text-decoration: underline;
  }
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

/**
 * @type {import("../shared").CellComponent}
 */
export const Title = props => {
  const { game } = props;

  // Extract the portion starting from "vs." or "at" (inclusive)
  // const fullTitle = game?.title ?? "";
  // const match = fullTitle.match(/\b(vs\.|at)\s+.*$/i);
  // const displayTitle = match ? match[0].trim() : fullTitle;

  const fullTitle = game?.title ?? "";
  const hideVsAt = game?.hideVsAt ?? "";

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

  let updatedTitle = "";
  // Trim starting 'at ' or 'vs. ' if it exists
  if (hideVsAt === "yes") {
    if (/^(at |vs\. )/i.test(displayTitle)) {
      updatedTitle = displayTitle.replace(/^(at |vs\. )/i, "");
    }
  } else {
    updatedTitle = "";
  }

  return (
    <Root
      style={{
        ...STYLES_TRUNCATE,
        padding: "20px",
        paddingBottom: "0",
        flexShrink: 0,
      }}
      href={game?.titleHref}
      dangerouslySetInnerHTML={{
        __html: decodeHtml(updatedTitle !== "" ? updatedTitle : displayTitle),
      }}
      onClick={() => {
        trackGAEvent({
          event: "link",
          action: "click",
          name: "onclick",
          type: "internal link",
          region: "main content",
          section: props.sectionName,
          text: updatedTitle !== "" ? updatedTitle : displayTitle,
          component: "text",
        });
      }}
    />
  );
};
