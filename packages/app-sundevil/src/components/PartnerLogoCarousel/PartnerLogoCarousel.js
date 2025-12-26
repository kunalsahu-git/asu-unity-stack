import PropTypes from "prop-types";
import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import "./style.css";

import { APP_CONFIG } from "../../config"; // adjust if needed
import { useBreakpoint } from "../../utils/use-breakpoint"; // adjust path
import { ArrowButtons } from "../ArrowButtons";
import { Carousel, CarouselController, CarouselItem } from "../Carousel";
import { useElementContentXPosition } from "../../utils/use-element-content-x-position";

const propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      imageUrl: PropTypes.string,
      imageAlt: PropTypes.string,
      imageWidth: PropTypes.string,
      imageHeight: PropTypes.string,
    })
  ),
  cardWidth: PropTypes.number,
  sectionName: PropTypes.string,
  title: PropTypes.string,
  arrowAlignment: PropTypes.string,
  buttonLink: PropTypes.string,
  buttonLabel: PropTypes.string,
  footerLink: PropTypes.string,
  footerLabel: PropTypes.string,
  initialSlide: PropTypes.number,
};

const Root = styled.div`
  swiper-container {
    width: 100%;
  }

  swiper-slide {
    width: auto;
    height: auto !important;
    margin-top: auto;
    margin-bottom: auto;
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
  cards,
  cardWidth,
  sectionName,
  title,
  buttonLink,
  buttonLabel,
  footerLink,
  arrowAlignment,
  footerLabel,
  initialSlide = 0,
}) => {
  const [carouselController] = useState(() => new CarouselController());
  const [index, setIndex] = useState(initialSlide);
  const isMobile = useBreakpoint(APP_CONFIG.breakpointMobile);
  const carouselRef = useRef(null);
  const sectionHeaderRef = React.useRef();
  const sectionHeaderPosition = useElementContentXPosition(sectionHeaderRef);
  const SLIDES_PER_VIEW = 6;

  return (
    <Root id="partner-logo-carousel">
      {!isMobile && (
        <div>
          <div className="carousel-header container mb-4">
            {title && (
              <h2 className="carousel-title mb-0 text-white">{title}</h2>
            )}
            {buttonLink && buttonLabel && (
              <div className="my-auto">
                <a href={buttonLink} className="carousel-cta btn">
                  {buttonLabel}
                </a>
              </div>
            )}
          </div>
          <div className="section-carousel">
            <Carousel
              loop="true"
              slidesPerView="6"
              slidesOffsetBefore={sectionHeaderPosition.left}
              slidesOffsetAfter={
                window.innerWidth - sectionHeaderPosition.right
              }
              centeredSlides={false}
              cardWidth={cardWidth}
              initialSlide={initialSlide}
              controller={carouselController}
              index={index}
              onIndexChanged={setIndex}
              ref={carouselRef}
            >
              {cards.map((card, i) => (
                <CarouselItem key={card.id ?? i}>
                  <div className="partner-logo-card">
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
            {arrowAlignment === "center_separated" && cards.length > 0 && (
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
          </div>
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
        </div>
      )}
      {isMobile && (
        <div>
          <div className="carousel-header container mb-4">
            {title && (
              <h2 className="carousel-title mb-0 text-white">{title}</h2>
            )}
          </div>
          <div className="section-carousel">
            <Carousel
              loop="true"
              slidesPerView="1"
              slidesOffsetBefore={sectionHeaderPosition.left}
              slidesOffsetAfter={
                window.innerWidth - sectionHeaderPosition.right
              }
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
                  <div className="partner-logo-card">
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
            {arrowAlignment === "center_separated" && cards.length > 0 && (
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
          </div>
          <div className="footer-section container mt-4">
            {arrowAlignment === "bottom_left" && cards.length > 0 && (
              <ArrowButtonsWrapper>
                <div className="arrow-buttons mb-4 bottom-left-aligned">
                  <ArrowButtons
                    onLeft={() => carouselController.slidePrev()}
                    onRight={() => carouselController.slideNext()}
                    sectionName={sectionName}
                  />
                </div>
              </ArrowButtonsWrapper>
            )}
            {buttonLink && buttonLabel && (
              <div className="my-auto">
                <a href={buttonLink} className="carousel-cta btn">
                  {buttonLabel}
                </a>
              </div>
            )}
            {footerLink && footerLabel && (
              <a className="footer-link mt-4" href={footerLink}>
                {footerLabel}
              </a>
            )}
          </div>
        </div>
      )}
    </Root>
  );
};

PartnerLogoCarousel.propTypes = propTypes;

export default PartnerLogoCarousel;
