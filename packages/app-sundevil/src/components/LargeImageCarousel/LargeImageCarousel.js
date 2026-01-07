import PropTypes from "prop-types";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import "./LargeImageCarousel.css";

import { APP_CONFIG } from "../../config"; // adjust if needed
import { useBreakpoint } from "../../utils/use-breakpoint"; // adjust path
import { ArrowButtons } from "../ArrowButtons";
import { Carousel, CarouselController, CarouselItem } from "../Carousel";
import { useElementContentXPosition } from "../../utils/use-element-content-x-position";
import { mapSectionHeaderProps, SectionHeader } from "../SectionHeader";

const propTypes = {
  sectionHeader: SectionHeader.propTypes,
  title: PropTypes.string,
  titleColor: PropTypes.string,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      backgroundUrl: PropTypes.string,
      pageUrl: PropTypes.string,
      badge: PropTypes.string,
      body: PropTypes.string,
      title: PropTypes.string,
    })
  ),
  loop: PropTypes.bool,
  slidesOffsetBefore: PropTypes.number,
  initialSlide: PropTypes.number,
  pageUrl: PropTypes.string,
  sectionName: PropTypes.string,
};

const Root = styled.div`
  swiper-container {
    width: 100%;
  }

  swiper-slide {
    width: auto;
    padding: 0 24px 0 0;
    height: auto !important;
  }

  .swiper-content {
    height: 100% !important;
  }

  @media (max-width: 768px) {
    swiper-slide {
      padding: 0 12px 0 0;
    }
  }
`;

const ArrowButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 52px;

  .arrow-buttons button {
    border: 2px solid black !important;
    background-color: transparent !important;
    color: white !important;
    border-radius: 50%;
    padding: 8px;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .arrow-buttons button svg {
    fill: black !important;
    color: black !important;
    transition: fill 0.3s ease, color 0.3s ease;
  }

  .arrow-buttons button:hover {
    background-color: white !important;
    color: black !important;
    border-color: black !important;
  }

  .arrow-buttons button:hover svg {
    fill: black !important;
    color: black !important;
  }
`;

export const LargeImageCarousel = ({
  sectionHeader,
  title,
  images = [],
  titleColor,
  loop = false,
  pageUrl,
  slidesOffsetBefore = 0,
  initialSlide = 0,
  sectionName,
}) => {
  const [carouselController] = useState(() => new CarouselController());
  const [index, setIndex] = useState(initialSlide);
  const isMobile = useBreakpoint(APP_CONFIG.breakpointMobile);
  const carouselRef = useRef(null);
  const sectionHeaderRef = React.useRef();
  const sectionHeaderPosition = useElementContentXPosition(sectionHeaderRef);
  const sectionHeaderProps = mapSectionHeaderProps(sectionHeader);
  const cardWidth = Math.abs(
    sectionHeaderPosition.left - sectionHeaderPosition.right
  );

  return (
    <Root className="large-image-carousel container">
      {/* <SectionHeader {...sectionHeaderProps} ref={sectionHeaderRef} /> */}
      <h2 className={titleColor ? `text-${titleColor}` : "text-white"}>
        {title}
      </h2>
      <Carousel
        slidesPerView="auto"
        loop={loop}
        slidesOffsetBefore={sectionHeaderPosition.left}
        slidesOffsetAfter={window.innerWidth - sectionHeaderPosition.right}
        centeredSlides={false}
        cardWidth={cardWidth}
        initialSlide={initialSlide}
        controller={carouselController}
        index={index}
        onIndexChanged={setIndex}
        ref={carouselRef}
        className="mt-3"
      >
        {images.map(post => (
          <CarouselItem>
            <a className="text-decoration-none" href={post.pageUrl}>
              <div
                className="image-card"
                style={{
                  background: `linear-gradient(0deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.2) 100%),
                 url(${post.backgroundUrl}) center center / cover no-repeat`,
                }}
              >
                <div className="badge">{post.badge}</div>
                {post.title && <h3 className="text-white h2">{post.title}</h3>}
                {post.body && (
                  <p
                    className="text-white"
                    dangerouslySetInnerHTML={{ __html: post.body }}
                  />
                )}

                <div className="video-overlay-gradient" />
              </div>
            </a>
          </CarouselItem>
        ))}
      </Carousel>

      {images.length > 0 && (
        <ArrowButtonsWrapper className="container px-0">
          <div className="arrow-buttons">
            <ArrowButtons
              onLeft={() => carouselController.slidePrev()}
              onRight={() => carouselController.slideNext()}
              sectionName={sectionName}
            />
          </div>
        </ArrowButtonsWrapper>
      )}
    </Root>
  );
};

LargeImageCarousel.propTypes = propTypes;

export default LargeImageCarousel;
