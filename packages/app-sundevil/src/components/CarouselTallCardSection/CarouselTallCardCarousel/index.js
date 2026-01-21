import PropTypes from "prop-types";
import React, { useRef, useState } from "react";
import styled from "styled-components";

import { APP_CONFIG } from "../../../config";
import { useBreakpoint } from "../../../utils/use-breakpoint";
import { ArrowButtons } from "../../ArrowButtons";
import { Carousel, CarouselController, CarouselItem } from "../../Carousel";
import { specialEventPropTypes } from "../carousel-tall-card";
import { specialEventsSkeletonData } from "./carousel-tall-cards-skeleton-data";
import { CarouselTallCard } from "./CarouselTallCard";

const propTypes = {
  cards: PropTypes.arrayOf(specialEventPropTypes),
  slidesOffsetBefore: PropTypes.number,
  cardWidth: PropTypes.number,
  skeleton: PropTypes.bool,
  sectionName: PropTypes.string,
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
    background-color: white !important;
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
export const CarouselTallCardCarousel = ({
  cards,
  slidesOffsetBefore,
  cardWidth,
  skeleton,
  sectionName,
}) => {
  const [carouselController] = useState(() => new CarouselController());
  const [index, setIndex] = useState(0);
  const isMobile = useBreakpoint(APP_CONFIG.breakpointMobile);
  const carouselRef = useRef(null);

  return (
    <Root>
      <Carousel
        slidesPerView="auto"
        loop={false}
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
                <CarouselTallCard
                  skeleton={skeleton}
                  specialEventCard={card}
                  cardWidth={cardWidth}
                />
              </CarouselItem>
            ))}
          </>
        )}

        {skeleton && (
          <>
            {specialEventsSkeletonData.map(card => (
              <CarouselItem key={card.id}>
                <CarouselTallCard
                  skeleton={skeleton}
                  specialEventCard={card}
                  cardWidth={cardWidth}
                />
              </CarouselItem>
            ))}
          </>
        )}
      </Carousel>
      {(cards.length > 0 || skeleton) && (
        <ArrowButtonsWrapper className="container">
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
    </Root>
  );
};
CarouselTallCardCarousel.propTypes = propTypes;
