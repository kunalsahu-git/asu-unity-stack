import "./sectionCard.css";
import PropTypes from "prop-types";
import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { APP_CONFIG } from "../../config";
import { useBreakpoint } from "../../utils/use-breakpoint";
import { ArrowButtons } from "../ArrowButtons";
import { Carousel, CarouselController, CarouselItem } from "../Carousel";
import { EmbeddedYoutubeVideo } from "../NewsStory/NewsStoryCardGrid/EmbeddedYoutubeVideo";

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

const Root = styled.div`
  margin-top: 24px;
  /* Ensure swiper-container and swiper-slide have full width */
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

export const SectionCardsAndMobileCarousel = ({
  cards = [],
  heading,
  description,
  buttonTitle,
  buttonUrl,
  slidesOffsetBefore,
  cardWidth,
  skeleton,
  sectionName,
}) => {
  const isMobile = useBreakpoint(APP_CONFIG.breakpointMobile);
  const [carouselController] = useState(() => new CarouselController());
  const [index, setIndex] = useState(0);
  const carouselRef = useRef(null);

  return (
    <section className="radio-broadcasts-section">
      <div className="container">
        <h2 className="section-title text-white mb-3 mt-0">{heading}</h2>
        <p className="section-description text-white mb-3">{description}</p>
        <a href={buttonUrl}>
          <button type="button" className="btn btn-md btn-gold">
            {buttonTitle}
          </button>
        </a>
        {!isMobile && (
          <div className="media-grid mt-3 row row-col-3">
            {cards.map((card, index) => (
              <div className="card-wrapper mb-3 col-4" key={index}>
                <a
                  href={card.cardLink}
                  className="card-link"
                  style={{ textDecoration: "none" }}
                >
                  {/* Card Image Wrapper */}
                  <div
                    className="card-image-wrapper"
                    style={{ position: "relative", borderRadius: 0 }}
                    aria-hidden="false"
                  >
                    <img
                      src={card.cardImage}
                      alt={card.cardTitle || "card image"}
                      className="card-main-image"
                      style={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                      }}
                    />
                    {/* Background overlay */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        zIndex: 1,
                        pointerEvents: "none",
                        background:
                          "radial-gradient(78.55% 62% at 50% 38%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.52) 75%, rgba(0,0,0,0.8) 100%)",
                      }}
                    />
                    {/* Card content overlay */}
                    <div
                      className="card-content"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        padding: "12px",
                        zIndex: 2,
                        color: "#fff",
                      }}
                    >
                      {card.category && (
                        <p className="card-category" style={{ margin: 0 }}>
                          <span
                            className="card-icon"
                            style={{
                              display: "inline-block",
                              width: "12px",
                              height: "12px",
                              backgroundImage: `url(${card.categoryIcon})`,
                              backgroundSize: "contain",
                              backgroundRepeat: "no-repeat",
                              backgroundPosition: "center",
                              marginRight: "6px",
                            }}
                          />
                          <span>{card.category}</span>
                        </p>
                      )}
                      <div className="card-title">{card.cardTitle}</div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        )}

        {isMobile && (
          <Root className="cards-carousel-section">
            <Carousel
              slidesPerView="auto"
              loop={false}
              slidesOffsetBefore={isMobile ? 0 : slidesOffsetBefore}
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
                      <div className="card-wrapper-mobile" key={index}>
                        <a
                          href={card.cardLink}
                          className="card-link"
                          style={{ textDecoration: "none" }}
                        >
                          {/* Card Image Wrapper */}
                          <div
                            className="card-image-wrapper"
                            style={{ position: "relative", borderRadius: 0 }}
                            aria-hidden="false"
                          >
                            <img
                              src={card.cardImage}
                              alt={card.cardTitle || "card image"}
                              className="card-main-image"
                              style={{
                                width: "100%",
                                objectFit: "cover",
                                height: "auto",
                                display: "block",
                              }}
                            />
                            {/* Background overlay */}
                            <div
                              style={{
                                position: "absolute",
                                inset: 0,
                                width: "100%",
                                height: "100%",
                                zIndex: 1,
                                pointerEvents: "none",
                                background:
                                  "radial-gradient(78.55% 62% at 50% 38%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.52) 75%, rgba(0,0,0,0.8) 100%)",
                              }}
                            />
                            {/* Card content overlay */}
                            <div
                              className="card-content"
                              style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "flex-end",
                                padding: "12px",
                                zIndex: 2,
                                color: "#fff",
                              }}
                            >
                              {card.category && (
                                <p
                                  className="card-category"
                                  style={{ margin: 0 }}
                                >
                                  <span
                                    className="card-icon"
                                    style={{
                                      display: "inline-block",
                                      width: "12px",
                                      height: "12px",
                                      backgroundImage: `url(${card.categoryIcon})`,
                                      backgroundSize: "contain",
                                      backgroundRepeat: "no-repeat",
                                      backgroundPosition: "center",
                                      marginRight: "6px",
                                    }}
                                  />
                                  <span>{card.category}</span>
                                </p>
                              )}
                              <div className="card-title">{card.cardTitle}</div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </CarouselItem>
                  ))}
                </>
              )}

              {skeleton && (
                <>
                  {cards.map(card => (
                    <CarouselItem key={card.id}>
                      <div className="card-wrapper" key={index}>
                        <a
                          href={card.cardLink}
                          className="card-link"
                          style={{ textDecoration: "none" }}
                        >
                          {/* Card Image Wrapper */}
                          <div
                            className="card-image-wrapper"
                            style={{ position: "relative", borderRadius: 0 }}
                            aria-hidden="false"
                          >
                            <img
                              src={card.cardImage}
                              alt={card.cardTitle || "card image"}
                              className="card-main-image"
                              style={{
                                width: "100%",
                                height: "auto",
                                display: "block",
                              }}
                            />
                            {/* Background overlay */}
                            <div
                              style={{
                                position: "absolute",
                                inset: 0,
                                width: "100%",
                                height: "100%",
                                zIndex: 1,
                                pointerEvents: "none",
                                background:
                                  "radial-gradient(78.55% 62% at 50% 38%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.52) 75%, rgba(0,0,0,0.8) 100%)",
                              }}
                            />
                            {/* Card content overlay */}
                            <div
                              className="card-content"
                              style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "flex-end",
                                padding: "12px",
                                zIndex: 2,
                                color: "#fff",
                              }}
                            >
                              {card.category && (
                                <p
                                  className="card-category"
                                  style={{ margin: 0 }}
                                >
                                  <span
                                    className="card-icon"
                                    style={{
                                      display: "inline-block",
                                      width: "12px",
                                      height: "12px",
                                      backgroundImage: `url(${card.categoryIcon})`,
                                      backgroundSize: "contain",
                                      backgroundRepeat: "no-repeat",
                                      backgroundPosition: "center",
                                      marginRight: "6px",
                                    }}
                                  />
                                  <span>{card.category}</span>
                                </p>
                              )}
                              <div className="card-title">{card.cardTitle}</div>
                            </div>
                          </div>
                        </a>
                      </div>
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
        )}
      </div>
    </section>
  );
};

SectionCardsAndMobileCarousel.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
  buttonTitle: PropTypes.string,
  buttonUrl: PropTypes.string,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      cardTitle: PropTypes.string,
      cardImage: PropTypes.string,
      cardLink: PropTypes.string,
    })
  ),
  slidesOffsetBefore: PropTypes.number,
  cardWidth: PropTypes.number,
  skeleton: PropTypes.bool,
  sectionName: PropTypes.string,
};

export default SectionCardsAndMobileCarousel;
