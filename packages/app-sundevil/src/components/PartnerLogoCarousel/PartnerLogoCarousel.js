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
  titleH2: PropTypes.string,
  titleH3: PropTypes.string,
  buttonLink: PropTypes.string,
  buttonLabel: PropTypes.string,
  footerLink: PropTypes.string,
  footerLabel: PropTypes.string,
  loop: PropTypes.bool,
  arrowAlignment: PropTypes.string,
  slidesOffsetBefore: PropTypes.number,
  initialSlide: PropTypes.number,
  sectionName: PropTypes.string,
  carouselType: PropTypes.string,
};

const Root = styled.div`
  swiper-container {
    width: 100%;
  }

  swiper-slide {
    width: auto;
    padding: 0 24px 0 0;
    height: auto !important;
    margin-top: auto;
    margin-bottom: auto;
  }

  .swiper-content {
    height: 100% !important;
  }

  @media (max-width: 768px) {
    swiper-slide {
      padding: 0px;
    }
  }
`;

const ArrowButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

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
  titleH2,
  titleH3,
  buttonLink,
  buttonLabel,
  footerLink,
  footerLabel,
  carouselType,
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
        {titleH2 && !titleH3 && (
          <h2 className="carousel-title mt-0 mb-0 text-white">{titleH2}</h2>
        )}
        {titleH3 && !titleH2 && (
          <h2 className="carousel-title h3 mt-0 mb-0 text-white">{titleH3}</h2>
        )}
        {buttonLink && buttonLabel && (
          <div className="my-auto">
            <a href={buttonLink} className="carousel-cta btn btn-lg">
              {buttonLabel}
            </a>
          </div>
        )}
      </div>
      <div className="carousel-mask">
        {!isMobile && carouselType === "featured_partner_carousel" && (
          <Carousel
            slidesPerView="5"
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
            className="featured_partner_carousel"
          >
            {cards.map(card => (
              <CarouselItem>
                <div
                  className="image-card"
                  style={{
                    maxWidth: card.imageWidth,
                    maxHeight: card.imageHeight,
                  }}
                >
                  <img
                    src={card.imageUrl}
                    alt={card.imageAlt || ""}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    className="img-fluid"
                  />
                </div>
              </CarouselItem>
            ))}
          </Carousel>
        )}
        {!isMobile && carouselType === "additional_partner_carousel" && (
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
            className="additional_partner_carousel"
          >
            {cards.map(card => (
              <CarouselItem>
                <div
                  className="image-card"
                  style={{
                    maxWidth: card.imageWidth,
                    maxHeight: card.imageHeight,
                  }}
                >
                  <img
                    src={card.imageUrl}
                    alt={card.imageAlt || ""}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    className="img-fluid"
                  />
                </div>
              </CarouselItem>
            ))}
          </Carousel>
        )}
      </div>
      {isMobile && carouselType === "featured_partner_carousel" && (
        <Carousel
          slidesPerView="1"
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
          className="featured_partner_carousel"
        >
          {cards.map(card => (
            <CarouselItem>
              <div
                className="image-card"
                style={{
                  maxWidth: card.imageWidth,
                  maxHeight: card.imageHeight,
                }}
              >
                <img
                  src={card.imageUrl}
                  alt={card.imageAlt || ""}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  className="img-fluid"
                />
              </div>
            </CarouselItem>
          ))}
        </Carousel>
      )}
      {isMobile && carouselType === "additional_partner_carousel" && (
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
          className="additional_partner_carousel"
        >
          {cards.map(card => (
            <CarouselItem>
              <div
                className="image-card"
                style={{
                  maxWidth: card.imageWidth,
                  maxHeight: card.imageHeight,
                }}
              >
                <img
                  src={card.imageUrl}
                  alt={card.imageAlt || ""}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  className="img-fluid"
                />
              </div>
            </CarouselItem>
          ))}
        </Carousel>
      )}
      {arrowAlignment === "center_separated" && cards.length > 0 && (
        <>
          {!isMobile && (
            <ArrowButtonsWrapper className="center-separated-aligned ">
              <div className={`arrow-buttons mb-4 ${carouselType}`}>
                <ArrowButtons
                  onLeft={() => carouselController.slidePrev()}
                  onRight={() => carouselController.slideNext()}
                  sectionName={titleH2 !== "" ? titleH2 : titleH3}
                />
              </div>
            </ArrowButtonsWrapper>
          )}

          {isMobile && (
            <ArrowButtonsWrapper>
              <div
                className={`arrow-buttons bottom-left-aligned ${carouselType}`}
              >
                <ArrowButtons
                  onLeft={() => carouselController.slidePrev()}
                  onRight={() => carouselController.slideNext()}
                  sectionName={titleH2 !== "" ? titleH2 : titleH3}
                />
              </div>
            </ArrowButtonsWrapper>
          )}
        </>
      )}

      <div className="footer-section container mt-4">
        {arrowAlignment === "bottom_left" && cards.length > 0 && (
          <ArrowButtonsWrapper>
            <div
              className={`arrow-buttons bottom-left-aligned ${carouselType}`}
            >
              <ArrowButtons
                onLeft={() => carouselController.slidePrev()}
                onRight={() => carouselController.slideNext()}
                sectionName={titleH2 !== "" ? titleH2 : titleH3}
              />
            </div>
          </ArrowButtonsWrapper>
        )}
        {buttonLink && buttonLabel && (
          <div className="my-auto">
            <a
              href={buttonLink}
              className="carousel-cta mt-4 mobile-cta btn btn-lg"
            >
              {buttonLabel}
            </a>
          </div>
        )}
        {footerLink && footerLabel && (
          <a
            className="footer-link my-lg-auto my-md-auto mt-4"
            href={footerLink}
          >
            {footerLabel}
          </a>
        )}
      </div>
    </Root>
  );
};

PartnerLogoCarousel.propTypes = propTypes;

export default PartnerLogoCarousel;

