import PropTypes from "prop-types";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import "./style.css";

import { APP_CONFIG } from "../../config";
import { useBreakpoint } from "../../utils/use-breakpoint";
import { ArrowButtons } from "../ArrowButtons";
import { Carousel, CarouselController, CarouselItem } from "../Carousel";

const propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      imageUrl: PropTypes.string,
      imageAlt: PropTypes.string,
    })
  ),
  slidesOffsetBefore: PropTypes.number,
  cardWidth: PropTypes.number,
  skeleton: PropTypes.bool,
  sectionName: PropTypes.string,
  title: PropTypes.string,
  buttonLink: PropTypes.string,
  buttonLabel: PropTypes.string,
  footerLink: PropTypes.string,
  footerLabel: PropTypes.string,
  imageWidth: PropTypes.string,
  imageHeight: PropTypes.string,
};

/**
 * @typedef {Object} Props
 * @property {import('../carousel-tall-card').SpecialEvent[]} cards
 * @property {number} [cardWidth]
 * @property {boolean} [skeleton]
 * @property {number} [slidesOffsetBefore]
 * @property {string} sectionName
 */

const Root = styled.div`
  /* Ensure swiper-container and swiper-slide have full width */
  swiper-container {
    width: 100%;
  }

  swiper-slide {
    width: auto;
    padding-right: 24px;
    height: auto !important;
  }

  .swiper-content {
    height: 100% !important;
  }

  @media (max-width: 768px) {
    swiper-slide {
      width: auto;
      padding: 0 12px 0 0;
      height: auto !important;
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
    background-color: transparent !important;
    color: black !important;
    border-color: white !important;
  }

  .arrow-buttons button:hover svg {
    fill: black !important;
    color: black !important;
  }
`;

/**
 * @type {React.FC<Props>}
 */
export const PartnerLogoCarousel = ({
  cards,
  slidesOffsetBefore,
  cardWidth,
  skeleton,
  sectionName,
  title,
  buttonLink,
  buttonLabel,
  footerLink,
  footerLabel,
  imageWidth,
  imageHeight,
}) => {
  const [carouselController] = useState(() => new CarouselController());
  const [index, setIndex] = useState(0);
  const isMobile = useBreakpoint(APP_CONFIG.breakpointMobile);
  const carouselRef = useRef(null);

  return (
    <Root>
      <div id="partner-logo-carousel">
        <div className="carousel-header container mb-4">
          {title && <h2 className="carousel-title mb-0 text-white">{title}</h2>}

          {buttonLink && buttonLabel && (
            <div className="my-auto">
              <a href={buttonLink} className="carousel-cta btn">
                {buttonLabel}
              </a>
            </div>
          )}
        </div>
        <Carousel
          slidesPerView="auto"
          slidesOffsetBefore={isMobile ? 32 : slidesOffsetBefore}
          slidesOffsetAfter={isMobile ? 0 : cardWidth}
          centeredSlides={false}
          initialSlide={0}
          controller={carouselController}
          index={index}
          onIndexChanged={setIndex}
          ref={carouselRef}
          disabled={skeleton}
        >
          {!skeleton && (
            <>
              {cards.map(card => (
                <CarouselItem key={card.id}>
                  <div className="partner-logo-card">
                    <img
                      src={card.imageUrl}
                      alt={card.imageAlt || ""}
                      loading="lazy"
                      width="auto"
                      height="auto"
                      style={{
                        maxWidth: { imageWidth },
                        maxHeight: { imageHeight },
                      }}
                    />
                  </div>
                </CarouselItem>
              ))}
            </>
          )}

          {skeleton && (
            <>
              {cards.map(card => (
                <CarouselItem key={card.id}>
                  <div className="partner-logo-card">
                    <img
                      src={card.imageUrl}
                      alt={card.imageAlt || ""}
                      loading="lazy"
                      width="auto"
                      height="auto"
                      style={{
                        maxWidth: { imageWidth },
                        maxHeight: { imageHeight },
                      }}
                    />
                  </div>
                </CarouselItem>
              ))}
            </>
          )}
        </Carousel>
        <div className="footer-section container mt-4">
          {(cards.length > 0 || skeleton) && (
            <ArrowButtonsWrapper>
              <div className="arrow-buttons">
                <ArrowButtons
                  skeleton={skeleton}
                  onLeft={() => carouselController.slidePrev()}
                  onRight={() => carouselController.slideNext()}
                  sectionName={sectionName}
                />
              </div>
            </ArrowButtonsWrapper>
          )}
          <a className="text-gold" href={footerLink}>
            {footerLabel}
          </a>
        </div>
      </div>
    </Root>
  );
};
PartnerLogoCarousel.propTypes = propTypes;

export default PartnerLogoCarousel;
