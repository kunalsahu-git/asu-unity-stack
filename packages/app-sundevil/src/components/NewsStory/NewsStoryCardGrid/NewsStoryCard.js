import PropTypes from "prop-types";
import React, { useState } from "react";
import styled from "styled-components";

import { trackGAEvent } from "../../../track-ga/track-ga-event";
import { ensureNormalNumber } from "../../../utils/ensure-number";
import { Icon } from "../../Icon_";
import { Skeleton } from "../../Skeleton";
import * as NewsStory from "../news-story";
import { useNewsStoryCardConfig } from "./config-card";
import { EmbeddedYoutubeVideo } from "./EmbeddedYoutubeVideo";
import { faTv } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Root = styled.a`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 273px;
  /* height: 273px; */
  text-decoration: none;

  ${({ clickable }) =>
    clickable &&
    `
    cursor: pointer;

    `}
`;

const BackgroundImageSkeletonWrapper = styled(Skeleton)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
`;

const Title = styled.div`
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Number of lines to show */
  -webkit-box-orient: vertical;
  overflow: hidden;
  ${({ configCard }) => {
    const LINE_HEIGHT = `calc(${configCard.titleFontSize} * 1.2)`;
    const maxHeight = `calc(${LINE_HEIGHT} * ${configCard.titleMaxLines})`;
    return `
      font-weight: ${configCard.titleFontWeight};
      font-size: ${configCard.titleFontSize};
      -webkit-line-clamp: ${ensureNormalNumber(configCard.titleMaxLines)};
      line-height: ${LINE_HEIGHT};
      max-height: ${maxHeight};
    `;
  }}
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: between;
  color: black;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
  background: radial-gradient(
    circle,
    transparent 0%,
    transparent 10%,
    rgba(0, 0, 0, 0.8) 100%
  );
  padding: 18px 24px;
`;

const WhiteSpaceFill = styled.div`
  flex: 1;
`;

const SportName = styled.p`
  margin: 0;
  padding: 0;
  font-size: 12px;
  font-weight: bold;
  color: white;
  display: flex;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  gap: 12px;
  align-items: center;
`;

const StyledIcon = styled(Icon)`
  font-size: 12px;
  width: 12px;
  height: 12px;
`;

const Category = styled.p`
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  color: #ffc627;
  margin: 0;
  padding: 0;
  letter-spacing: 3px;
`;

const ContentBottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

function getOverlayImage(sportName) {
  const defaultOverlay = "";
  if (!sportName) return defaultOverlay;

  const name = sportName.toLowerCase();
  if (name.includes("baseball"))
    return "https://4week-web-sda.ws.asu.edu/sites/default/files/2025-08/media-card-overlay_baseball.png";
  if (name.includes("beach volleyball"))
    return "https://4week-web-sda.ws.asu.edu/sites/default/files/2025-08/media-card-overlay_beach-volleyball.png";
  if (name.includes("basketball"))
    return "https://4week-web-sda.ws.asu.edu/sites/default/files/2025-08/media-card-overlay_basketball.png";
  if (name.includes("cross country"))
    return "https://4week-web-sda.ws.asu.edu/sites/default/files/2025-08/media-card-overlay_cross-country.png";
  if (name.includes("football"))
    return "https://4week-web-sda.ws.asu.edu/sites/default/files/2025-08/media-card-overlay_football.png";
  if (name.includes("golf"))
    return "https://4week-web-sda.ws.asu.edu/sites/default/files/2025-08/media-card-overlay_golf.png";
  if (name.includes("gymnastics"))
    return "https://4week-web-sda.ws.asu.edu/sites/default/files/2025-08/media-card-overlay_gymnastics.png";
  if (name.includes("hockey"))
    return "https://4week-web-sda.ws.asu.edu/sites/default/files/2025-08/media-card-overlay_hockey.png";
  if (name.includes("lacrosse"))
    return "https://4week-web-sda.ws.asu.edu/sites/default/files/2025-08/media-card-overlay_lacrosse.png";
  if (name.includes("soccer"))
    return "https://4week-web-sda.ws.asu.edu/sites/default/files/2025-08/media-card-overlay_soccer.png";
  if (name.includes("softball"))
    return "https://4week-web-sda.ws.asu.edu/sites/default/files/2025-08/media-card-overlay_softball.png";
  if (name.includes("swimming and diving"))
    return "https://4week-web-sda.ws.asu.edu/sites/default/files/2025-08/media-card-overlay_swimming-and-diving.png";
  if (name.includes("tennis"))
    return "https://4week-web-sda.ws.asu.edu/sites/default/files/2025-08/media-card-overlay_tennis.png";
  if (name.includes("track and field"))
    return "https://4week-web-sda.ws.asu.edu/sites/default/files/2025-08/media-card-overlay_track-and-field.png";
  if (name.includes("wrestling"))
    return "https://4week-web-sda.ws.asu.edu/sites/default/files/2025-08/media-card-overlay_wrestling.png";
  if (name.includes("water polo"))
    return "https://4week-web-sda.ws.asu.edu/sites/default/files/2025-08/media-card-overlay_water-polo.png";
  if (name.includes("volleyball"))
    return "https://4week-web-sda.ws.asu.edu/sites/default/files/2025-08/media-card-overlay_volleyball.png";
  if (name.includes("triathlon"))
    return "https://4week-web-sda.ws.asu.edu/sites/default/files/2025-08/media-card-overlay_triathlon.png";

  return defaultOverlay;
}

/**
 * @typedef {{newsStory: NewsStory.NewsStory, style: StyleSheet; skeleton?: boolean, size?: "large" | "default"; sectionName: string }} Props
 */

/**
 *
 * @type {React.FC<Props>}
 * @link {https://www.figma.com/design/PwIiWs2qYfAm73B4n5UTgU/ASU-Athletics?node-id=728-26483&t=nNPd77JTpPWPBY9Q-0}
 * @link {https://www.figma.com/design/PwIiWs2qYfAm73B4n5UTgU/ASU-Athletics?node-id=2127-15038&t=q44055rSZX7SMrDl-0}
 *
 */
export const NewsStoryCard = ({
  newsStory,
  style,
  skeleton = false,
  size = "default",
  empty = false,
  sectionName,
  showOverlay,
}) => {
  const configCard = useNewsStoryCardConfig();
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  if (!newsStory) {
    return null;
  }
  const hasFeaturedText = newsStory.featuredText != null;

  const hasHref =
    typeof newsStory.href === "string" && newsStory.href.trim().length > 0;

  const isClickable = Boolean(hasHref);

  return (
    <Skeleton
      skeleton={Boolean(skeleton)}
      aria-hidden={Boolean(skeleton) || Boolean(empty)}
      style={
        empty ? { pointerEvents: "none", opacity: 0, userSelect: "none" } : {}
      }
    >
      <Root
        href={newsStory.href}
        style={style}
        as={hasHref ? "a" : "div"}
        clickable={isClickable}
        onClick={() => {
          if (isClickable) {
            trackGAEvent({
              event: "link",
              action: "click",
              name: "onclick",
              type: "internal link",
              region: "main content",
              section: sectionName ?? "news zone",
              text: newsStory?.title?.toLowerCase() ?? " ",
              component: "card",
            });
          }
        }}
      >
        <BackgroundImageSkeletonWrapper skeleton={!isImageLoaded}>
          <BackgroundImage
            alt={newsStory?.imageAlt ?? " "}
            src={newsStory?.imageSrc}
            onLoad={() => setIsImageLoaded(true)}
          />
          {showOverlay && (
            <img
              src={getOverlayImage(newsStory?.sportName)}
              alt="Background Overlay"
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                zIndex: 1,
                pointerEvents: "none",
                background:
                  "radial-gradient(78.55% 62% at 50% 38%, rgba(0, 0, 0, 0.00) 50%, rgba(0, 0, 0, 0.52) 75%, rgba(0, 0, 0, 0.80) 100%)",
              }}
            />
          )}
        </BackgroundImageSkeletonWrapper>

        {hasFeaturedText && (
          <div
            className="featured-text"
            style={{
              position: "absolute",
              top: "16px",
              right: "16px",
              zIndex: "2",
              padding: "6px",
              background: "rgba(0, 0, 0, 0.60)",
            }}
          >
            <div
              style={{
                fontSize: "9.218px",
                fontStyle: "normal",
                display: "flex",
                fontWeight: "700",
              }}
            >
              <FontAwesomeIcon
                icon={faTv}
                style={{
                  marginRight: "12px",
                  marginTop: "3px",
                }}
                className="text-gold"
              />
              <div>
                <span className="text-gold">FEATURED EPISODE</span> <br />
                <span className="text-white">{newsStory?.featuredText}</span>
              </div>
            </div>
          </div>
        )}
        <Content>
          {/* {newsStory.showSportName && ( */}
          <SportName>
            {newsStory.sportIcon && <StyledIcon icon={newsStory.sportIcon} />}
            {newsStory?.icon && (
              <Icon
                icon={newsStory?.icon?.name}
                style={newsStory?.icon?.style}
              />
            )}
            {newsStory.sportName}
          </SportName>
          {/* )} */}

          <WhiteSpaceFill />

          <ContentBottom>
            {newsStory.showNewsType && newsStory.newsType && (
              <Category>{newsStory.newsType}</Category>
            )}
            <Title
              configCard={configCard}
              size={size}
              dangerouslySetInnerHTML={{ __html: newsStory.title }}
            />
          </ContentBottom>
        </Content>
        <EmbeddedYoutubeVideo
          youtubeVideoUrl={newsStory.youtubeVideoUrl}
          isVideoOpen={isVideoOpen}
          onClickPlay={() => setIsVideoOpen(true)}
          sectionName={newsStory.title}
        />
      </Root>
    </Skeleton>
  );
};
NewsStoryCard.propTypes = {
  newsStory: NewsStory.newsStoryPropTypes,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
  skeleton: PropTypes.bool,
  size: PropTypes.oneOf(["large", "default"]),
  empty: PropTypes.bool,
  sectionName: PropTypes.string,
  showOverlay: PropTypes.bool,
};
