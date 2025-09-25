import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { APP_CONFIG } from "../../config";
import { useBreakpoint } from "../../utils/use-breakpoint";
import { useElementContentXPosition } from "../../utils/use-element-content-x-position";
import { ButtonProp } from "../Button";
import { BottomButtons } from "../Button/BottomButtons";
import * as NewsStory from "../NewsStory/news-story";
import { NewsStoryCardCarousel } from "../NewsStory/NewsStoryCardGrid/NewsStoryCardCarousel";
import { NewsStoryCardGridFeatured } from "../NewsStory/NewsStoryCardGrid/NewsStoryCardGrid";
import { mapSectionHeaderProps, SectionHeader } from "../SectionHeader";

const Root = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ hasSectionHeader }) => (hasSectionHeader ? "48px" : "0")};
`;

const BottomButtonsRoot = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 3rem;
`;

const Subtitle = styled.div`
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  margin-bottom: -58px;
  line-height: normal;
  letter-spacing: 3.2px;

  @media (max-width: 1024px) {
    font-size: 12px;
  }
`;

const SubtitleWhite = styled.div`
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 3.2px;
  margin-bottom: 24px;
  padding-top: 48px;
  margin-top: -72px;

  @media (max-width: 1024px) {
    font-size: 12px;
  }
`;

const DEFAULT_MAX_CARDS = 4;

export const VideoSection = ({
  newsStories,
  sectionHeader,
  bottomButtons,
  skeleton,
  subtitle,
  subtitleWhite,
  maxCards = DEFAULT_MAX_CARDS,
}) => {
  const sectionHeaderRef = React.useRef();
  const sectionHeaderPosition = useElementContentXPosition(sectionHeaderRef);
  const cardWidth = Math.abs(
    sectionHeaderPosition.left - sectionHeaderPosition.right
  );

  const isMobile = useBreakpoint(APP_CONFIG.breakpointMobile);
  const isDesktop = !isMobile;
  const isSubtitle = subtitle != null;
  const isSubtitleWhite = subtitleWhite != null;

  const newsStoriesSliced = newsStories.slice(0, maxCards);

  const hasSectionHeader =
    Boolean(sectionHeader) && Object.keys(sectionHeader).length > 0;

  const sectionHeaderProps = mapSectionHeaderProps(sectionHeader);
  const sectionName = sectionHeaderProps?.title ?? "";

  return (
    <Root hasSectionHeader={hasSectionHeader}>
      {isSubtitle && (
        <Subtitle className="container text-gold">{subtitle}</Subtitle>
      )}
      <div className="section-title">
        <SectionHeader {...sectionHeaderProps} ref={sectionHeaderRef} />
      </div>
      {isSubtitleWhite && (
        <SubtitleWhite className="container text-white">
          {subtitleWhite}
        </SubtitleWhite>
      )}

      {isMobile && (
        <NewsStoryCardCarousel
          skeleton={Boolean(skeleton)}
          newsStories={newsStoriesSliced}
          slidesOffsetBefore={sectionHeaderPosition.left}
          slidesOffsetAfter={window.innerWidth - sectionHeaderPosition.right}
          cardWidth={cardWidth}
          renderBottomRightContent={() => (
            <BottomButtons
              sectionName={sectionName}
              buttons={bottomButtons}
              skeleton={skeleton}
              className="text-white"
            />
          )}
          sectionName={sectionName}
        />
      )}
      {isDesktop && (
        <div className="container">
          <NewsStoryCardGridFeatured
            layout="fullWidth"
            newsStories={newsStoriesSliced}
            skeleton={Boolean(skeleton)}
            maxCards={maxCards}
            sectionName={sectionName}
          />
          <BottomButtonsRoot>
            <BottomButtons
              sectionName={sectionName}
              buttons={bottomButtons}
              skeleton={skeleton}
            />
          </BottomButtonsRoot>
        </div>
      )}
    </Root>
  );
};

VideoSection.propTypes = {
  sectionHeader: SectionHeader.propTypes,
  newsStories: PropTypes.arrayOf(NewsStory.newsStoryPropTypes),
  bottomButtons: PropTypes.arrayOf(ButtonProp.buttonPropTypes),
  skeleton: PropTypes.bool,
  maxCards: PropTypes.number,
  subtitle: PropTypes.string,
  subtitleWhite: PropTypes.string,
};
