import PropTypes from "prop-types";
import React, { useRef } from "react";
import styled from "styled-components";

import { APP_CONFIG } from "../../config";
import { useBreakpoint } from "../../utils/use-breakpoint";
import { useElementContentDimensions } from "../../utils/use-element-content-dimensions";
import { useElementContentXPosition } from "../../utils/use-element-content-x-position";
import { mapSectionHeaderProps, SectionHeader } from "../SectionHeader";
import { CarouselTallCardCarousel } from "./CarouselTallCardCarousel";

const DEFAULT_CARD_WIDTH = 384;
const DEFAULT_CARD_HEIGHT = 520;

const Root = styled.section`
  visibility: ${({ $visible }) => ($visible ? "visible" : "hidden")};
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  height: ${({ $visible }) => ($visible ? "auto" : 0)};
  transition: opacity 0.3s ease;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  color: white;

  background: ${({ backgroundImageUrl }) => `
    radial-gradient(128.06% 100% at 50% 100%, rgba(255,198,39,0.85) 0%, rgba(140,29,64,0.65) 25%, rgba(25,25,25,0.3) 50%, rgba(25,25,25,0) 100%),
    linear-gradient(180deg, #191919 37.88%, rgba(25,25,25,0.25) 75.23%),
    url(${backgroundImageUrl}) center / cover no-repeat,
    var(--Neutral-Primary, #191919);
  `};
  background-blend-mode: multiply, normal, normal, normal;
`;

const SectionHeaderWrapper = styled.div`
  * {
    color: white !important;
  }
`;

export const CarouselTallCardSection = ({
  sectionHeader,
  cards = [],
  skeleton = false,
  backgroundImageUrl,
  cardWidth = DEFAULT_CARD_WIDTH,
  cardHeight = DEFAULT_CARD_HEIGHT,
}) => {
  const sectionHeaderRef = useRef();
  const sectionHeaderPosition = useElementContentXPosition(sectionHeaderRef);
  const sectionHeaderDimensions = useElementContentDimensions(sectionHeaderRef);
  const isMobile = useBreakpoint(APP_CONFIG.breakpointMobile);

  const resolvedCardWidth = isMobile
    ? sectionHeaderDimensions.width
    : cardWidth;

  const sectionHeaderProps = mapSectionHeaderProps(sectionHeader);
  const sectionName = sectionHeaderProps?.sectionName ?? "";

  return (
    <Root
      $visible={!skeleton && cards.length > 0}
      backgroundImageUrl={backgroundImageUrl}
      className="section-carousel"
    >
      <div className="heading-section" style={{ padding: "24px" }}>
        <SectionHeaderWrapper>
          <SectionHeader {...sectionHeaderProps} ref={sectionHeaderRef} />
        </SectionHeaderWrapper>
      </div>
      {sectionHeaderPosition.left > 0 && (
        <div style={{ padding: "24px" }}>
          <CarouselTallCardCarousel
            cards={cards}
            skeleton={skeleton}
            cardWidth={resolvedCardWidth}
            cardHeight={cardHeight}
            slidesOffsetBefore={sectionHeaderPosition.left}
            sectionName={sectionName}
          />
        </div>
      )}
    </Root>
  );
};

CarouselTallCardSection.propTypes = {
  sectionHeader: PropTypes.shape(SectionHeader.propTypes).isRequired,
  cards: PropTypes.array.isRequired,
  skeleton: PropTypes.bool,
  backgroundImageUrl: PropTypes.string.isRequired,
  cardWidth: PropTypes.number,
  cardHeight: PropTypes.number,
};

