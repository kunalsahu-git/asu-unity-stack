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
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  gap: 4px;
  display: flex;
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
    return "/sites/default/files/2025-08/Media%20Card.png";
  if (name.includes("beach volleyball"))
    return "/sites/default/files/2025-08/Media%20Card-16.png";
  if (name.includes("basketball"))
    return "/sites/default/files/2025-08/Media%20Card-1.png";
  if (name.includes("cross country"))
    return "/sites/default/files/2025-08/Media%20Card-17.png";
  if (name.includes("football"))
    return "/sites/default/files/2025-08/Media%20Card-2.png";
  if (name.includes("golf"))
    return "/sites/default/files/2025-08/Media%20Card-3.png";
  if (name.includes("gymnastics"))
    return "/sites/default/files/2025-08/Media%20Card-4.png";
  if (name.includes("hockey"))
    return "/sites/default/files/2025-08/Media%20Card-5.png";
  if (name.includes("lacrosse"))
    return "/sites/default/files/2025-08/Media%20Card-15.png";
  if (name.includes("soccer"))
    return "/sites/default/files/2025-08/Media%20Card-6.png";
  if (name.includes("softball"))
    return "/sites/default/files/2025-08/Media%20Card-7.png";
  if (name.includes("swimming and diving"))
    return "/sites/default/files/2025-08/Media%20Card-8.png";
  if (name.includes("tennis"))
    return "/sites/default/files/2025-08/Media%20Card-9.png";
  if (name.includes("track and field"))
    return "/sites/default/files/2025-08/Media%20Card-13.png";
  if (name.includes("wrestling"))
    return "/sites/default/files/2025-08/Media%20Card-12.png";
  if (name.includes("water polo"))
    return "/sites/default/files/2025-08/Media%20Card-11.png";
  if (name.includes("volleyball"))
    return "/sites/default/files/2025-08/Media%20Card-10.png";
  if (name.includes("triathlon"))
    return "/sites/default/files/2025-08/Media%20Card-14.png";

  return defaultOverlay;
}

function getSportIcon(sportName) {
  const defaultIcon = "";
  if (!sportName) return defaultIcon;

  const baseSiteUrl = window.location.href;

  const name = sportName.toLowerCase();
  if (name.includes("baseball"))
    return {
      icon_name: "baseball-bat-ball",
      settings:
        'a:2:{s:7:"masking";a:2:{s:4:"mask";s:0:"";s:5:"style";s:6:"fa-fas";}s:16:"power_transforms";a:3:{s:5:"scale";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_y";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_x";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}}}',
      style: "fa-fas",
    };
  if (name.includes("beach volleyball"))
    return {
      svg_icon: "/sites/default/files/2024-07/beach-volleyball_1.svg",
      svg_icon_name: "beach-volleyball_1.svg",
    };
  if (name.includes("basketball"))
    return {
      svg_icon: "/sites/default/files/2024-07/basketball_7.svg",
      svg_icon_name: "basketball_7.svg",
    };
  if (name.includes("cross country"))
    return {
      svg_icon: "/sites/default/files/2024-08/cross-country_0.svg",
      svg_icon_name: "cross-country_0.svg",
    };
  if (name.includes("football"))
    return {
      icon_name: "football",
      settings:
        'a:2:{s:7:"masking";a:2:{s:4:"mask";s:0:"";s:5:"style";s:6:"fa-fas";}s:16:"power_transforms";a:3:{s:5:"scale";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_y";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_x";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}}}',
      style: "fa-fas",
    };
  if (name.includes("golf"))
    return {
      svg_icon: "/sites/default/files/2024-07/golf_2.svg",
      svg_icon_name: "golf_2.svg",
    };
  if (name.includes("gymnastics"))
    return {
      svg_icon: "/sites/default/files/2024-08/gymnastics.svg",
      svg_icon_name: "gymnastics.svg",
    };
  if (name.includes("hockey"))
    return {
      svg_icon: "/sites/default/files/2024-08/ice-hockey.svg",
      svg_icon_name: "ice-hockey.svg",
    };
  if (name.includes("lacrosse"))
    return {
      svg_icon: "/sites/default/files/2024-08/lacrosse.svg",
      svg_icon_name: "lacrosse.svg",
    };
  if (name.includes("soccer"))
    return {
      svg_icon: "/sites/default/files/2024-08/soccer.svg",
      svg_icon_name: "soccer.svg",
    };
  if (name.includes("softball"))
    return {
      icon_name: "baseball",
      settings:
        'a:2:{s:7:"masking";a:2:{s:4:"mask";s:0:"";s:5:"style";s:6:"fa-fas";}s:16:"power_transforms";a:3:{s:5:"scale";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_y";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_x";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}}}',
      style: "fa-fas",
    };
  if (name.includes("swimming and diving"))
    return {
      svg_icon: "/sites/default/files/2024-07/swimming-and-diving_0.svg",
      svg_icon_name: "swimming-and-diving_0.svg",
    };
  if (name.includes("tennis"))
    return {
      svg_icon: "/sites/default/files/2024-07/tennis_3.svg",
      svg_icon_name: "tennis_3.svg",
    };
  if (name.includes("track and field"))
    return {
      svg_icon: "/sites/default/files/2024-08/track-and-field_0.svg",
      svg_icon_name: "track-and-field_0.svg",
    };
  if (name.includes("wrestling"))
    return {
      svg_icon: "/sites/default/files/2024-08/wrestling.svg",
      svg_icon_name: "wrestling.svg",
    };
  if (name.includes("water polo"))
    return {
      svg_icon: "/sites/default/files/2024-08/water-polo_1.svg",
      svg_icon_name: "water-polo_1.svg",
    };
  if (name.includes("volleyball"))
    return {
      svg_icon: "/sites/default/files/2024-08/volleyball.svg",
      svg_icon_name: "volleyball.svg",
    };
  if (name.includes("triathlon"))
    return {
      svg_icon: "/sites/default/files/2024-07/triathalon_0.svg",
      svg_icon_name: "triathalon_0.svg",
    };

  return defaultIcon;
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
  const hasFeaturedImage = newsStory.featuredImage != null;

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
                objectFit: "contain",
                objectPosition: "bottom",
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

        {hasFeaturedImage && (
          <div
            className="featured-image"
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
              <div>
                <img
                  alt="featured logo"
                  src={newsStory?.featuredImage}
                  width={newsStory?.imageWidth}
                  height={newsStory?.imageHeight}
                  className="text-white"
                />
              </div>
            </div>
          </div>
        )}
        <Content>
          {/* {newsStory.showSportName && ( */}
          <SportName>
            {newsStory?.sportName && (
              <StyledIcon
                className="icons"
                icon={getSportIcon(newsStory?.sportName)}
              />
            )}
            <span>{newsStory.sportName}</span>
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
