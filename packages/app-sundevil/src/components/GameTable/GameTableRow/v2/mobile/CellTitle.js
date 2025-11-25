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

  // Extract the portion starting from "vs." or "at" (inclusive)
  const fullTitle = game?.title ?? "";
  // Step 1: Remove everything before the colon (including the colon)
  const cleanedTitle = fullTitle.replace(/^[^:]*:\s*/, "");
  // Step 2: Apply the original match logic on the cleaned title
  const match = cleanedTitle.match(/\b(vs\.|at)\s+.*$/i);
  // Final title
  const displayTitle = match ? match[0].trim() : cleanedTitle;

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
