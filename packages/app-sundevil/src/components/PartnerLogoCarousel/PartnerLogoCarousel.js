import PropTypes from "prop-types";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import "./PartnerLogoCarousel.css";

import { APP_CONFIG } from "../../config"; // adjust if needed
import { useBreakpoint } from "../../utils/use-breakpoint"; // adjust path
import { ArrowButtons } from "../ArrowButtons";
import { Carousel, CarouselController, CarouselItem } from "../Carousel";
import { useElementContentXPosition } from "../../utils/use-element-content-x-position";
import { mapSectionHeaderProps, SectionHeader } from "../SectionHeader";

const propTypes = {
  sectionHeader: SectionHeader.propTypes,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      imageUrl: PropTypes.string,
      imageAlt: PropTypes.string,
      imageWidth: PropTypes.string,
      imageHeight: PropTypes.string,
    })
  ),
  title: PropTypes.string,
  buttonLink: PropTypes.string,
  buttonLabel: PropTypes.string,
  footerLink: PropTypes.string,
  footerLabel: PropTypes.string,
  loop: PropTypes.bool,
  arrowAlignment: PropTypes.string,
  slidesOffsetBefore: PropTypes.number,
  initialSlide: PropTypes.number,
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
    border: 2px solid white !important;
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
    fill: white !important;
    color: white !important;
    transition: fill 0.3s ease, color 0.3s ease;
  }

  .arrow-buttons button:hover {
    background-color: white !important;
    color: black !important;
    border-color: white !important;
  }

  .arrow-buttons button:hover svg {
    fill: black !important;
    color: black !important;
  }
`;

export const PartnerLogoCarousel = ({
  sectionHeader,
  cards = [],
  loop = true,
  title,
  buttonLink,
  buttonLabel,
  footerLink,
  footerLabel,
  arrowAlignment,
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
    <Root className="partner-logo-carousel">
      <SectionHeader
        className="d-none"
        {...sectionHeaderProps}
        ref={sectionHeaderRef}
      />
      <div className="carousel-header container mb-4">
        {title && (
          <h2 className="carousel-title mt-0 mb-0 text-white">{title}</h2>
        )}
        {buttonLink && buttonLabel && (
          <div className="my-auto">
            <a href={buttonLink} className="carousel-cta btn">
              {buttonLabel}
            </a>
          </div>
        )}
      </div>
      <div className="carousel-mask">
        <Carousel
          slidesPerView="auto"
          loop={loop}
          slidesOffsetBefore={0}
          slidesOffsetAfter={window.innerWidth - sectionHeaderPosition.right}
          centeredSlides={false}
          cardWidth={cardWidth}
          initialSlide={initialSlide}
          controller={carouselController}
          index={index}
          onIndexChanged={setIndex}
          ref={carouselRef}
        >
          {cards.map(card => (
            <CarouselItem>
              <div className="image-card">
                <img
                  src={card.imageUrl}
                  alt={card.imageAlt || ""}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  style={{
                    maxWidth: card.imageWidth,
                    maxHeight: card.imageHeight,
                  }}
                />
              </div>
            </CarouselItem>
          ))}
        </Carousel>
      </div>
      {arrowAlignment === "center_separated" && cards.length > 0 && (
        <>
          {!isMobile && (
            <ArrowButtonsWrapper className="center-separated-aligned">
              <div className="arrow-buttons mb-4">
                <ArrowButtons
                  onLeft={() => carouselController.slidePrev()}
                  onRight={() => carouselController.slideNext()}
                  sectionName={sectionName}
                />
              </div>
            </ArrowButtonsWrapper>
          )}

          {isMobile && (
            <ArrowButtonsWrapper>
              <div className="arrow-buttons bottom-left-aligned">
                <ArrowButtons
                  onLeft={() => carouselController.slidePrev()}
                  onRight={() => carouselController.slideNext()}
                  sectionName={sectionName}
                />
              </div>
            </ArrowButtonsWrapper>
          )}
        </>
      )}

      <div className="footer-section container mt-4">
        {arrowAlignment === "bottom_left" && cards.length > 0 && (
          <ArrowButtonsWrapper>
            <div className="arrow-buttons bottom-left-aligned">
              <ArrowButtons
                onLeft={() => carouselController.slidePrev()}
                onRight={() => carouselController.slideNext()}
                sectionName={sectionName}
              />
            </div>
          </ArrowButtonsWrapper>
        )}

        {footerLink && footerLabel && (
          <a className="footer-link mt-4" href={footerLink}>
            {footerLabel}
          </a>
        )}
      </div>
    </Root>
  );
};

PartnerLogoCarousel.propTypes = propTypes;

export default PartnerLogoCarousel;
