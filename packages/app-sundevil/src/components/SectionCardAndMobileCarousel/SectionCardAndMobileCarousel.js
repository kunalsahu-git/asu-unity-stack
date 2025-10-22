import React, { useRef, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { APP_CONFIG } from "../../config";
import { useBreakpoint } from "../../utils/use-breakpoint";
import "./SectionCardAndMobileCarousel.css";
import { EmbeddedYoutubeVideo } from "../NewsStory/NewsStoryCardGrid/EmbeddedYoutubeVideo";
import { Carousel, CarouselController, CarouselItem } from "../Carousel";
import { ArrowButtons } from "../ArrowButtons";
import { useElementContentXPosition } from "../../utils/use-element-content-x-position";

const propTypes = {
  headingh2: PropTypes.string,
  headingh3: PropTypes.string,
  description: PropTypes.string,
  buttonTitle: PropTypes.string,
  buttonUrl: PropTypes.string,
  skeleton: PropTypes.bool,
  sectionName: PropTypes.string,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      imageSrc: PropTypes.string,
      youtubeVideoUrl: PropTypes.string,
    })
  ),
};

const Root = styled.section`
  margin-top: 24px;
  gap: ${({ hasSectionHeader }) => (hasSectionHeader ? "48px" : "0")};

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

export const SectionCardAndMobileCarousel = ({
  headingh2,
  headingh3,
  description,
  sectionName,
  skeleton,
  buttonTitle,
  buttonUrl,
  cards = [],
}) => {
  const [openVideos, setOpenVideos] = useState({});
  const isMobile = useBreakpoint(APP_CONFIG.breakpointMobile);
  const handlePlay = videoKey =>
    setOpenVideos(prev => ({ ...prev, [videoKey]: true }));

  const carouselController = new CarouselController();
  const carouselRef = useRef(null);
  const [index, setIndex] = useState(0);
  const sectionHeaderRef = useRef();
  const sectionHeaderPosition = useElementContentXPosition(sectionHeaderRef);
  const cardWidth = Math.abs(
    sectionHeaderPosition.left - sectionHeaderPosition.right
  );

  return (
    <Root className="section-card-videos" hasSectionHeader={!!skeleton}>
      <div className="container flex flex-col gap-6">
        {/* Headings */}
        {headingh2 && <h2 className="text-white">{headingh2}</h2>}
        {headingh3 && <h3 className="text-white">{headingh3}</h3>}

        {/* Description */}
        {description && <p className="text-white description">{description}</p>}

        {/* CTA Button */}
        {buttonUrl && buttonTitle && (
          <a href={buttonUrl}>
            <button type="button" className="rounded-full btn-sm btn btn-gold">
              {buttonTitle}
            </button>
          </a>
        )}

        {/* Desktop Grid */}
        {!isMobile && (
          <div className="row mt-3">
            {cards.map((card, idx) => {
              const videoKey = card.youtubeVideoUrl || card.title || idx;
              const featuredImageValue = isMobile
                ? card.featuredImageMobile
                : card.featuredImage;
              return (
                <div className="col-12 mt-0 mb-3 col-lg-4" key={videoKey}>
                  <article
                    className="card bg-transparent text-white border-0 h-100"
                    aria-label={`Video card for ${card.title}`}
                  >
                    {/* Featured image logo (optimized with width/height for CLS) */}
                    {featuredImageValue && (
                      <div className="featured-logo-wrapper">
                        <img
                          alt="featured logo"
                          src={featuredImageValue}
                          width="auto"
                          height="auto"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    )}

                    <div className="ratio cards-preview overflow-hidden">
                      <img
                        src={card.imageSrc}
                        alt={`${card.title} preview`}
                        className="card-img-top object-fit-cover w-100 h-100"
                        width={640}
                        height={360}
                        loading="lazy"
                        decoding="async"
                        style={{ objectFit: "cover" }}
                      />

                      <div className="video-overlay-gradient" />

                      <EmbeddedYoutubeVideo
                        youtubeVideoUrl={card.youtubeVideoUrl}
                        isVideoOpen={!!openVideos[videoKey]}
                        onClickPlay={() => handlePlay(videoKey)}
                        sectionName={card.title}
                      />
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        )}

        {/* Mobile / Tablet Carousel */}
        {isMobile && (
          <div className="cards-carousel-section mt-3 overflow-x-visible">
            <Carousel
              slidesPerView="auto"
              loop={false}
              slidesOffsetBefore={0} // small left margin
              slidesOffsetAfter={24} // small right margin
              centeredSlides={false}
              controller={carouselController}
              index={index}
              onIndexChanged={setIndex}
              ref={carouselRef}
              disabled={skeleton}
            >
              {cards.map((card, idx) => {
                const videoKey = card.youtubeVideoUrl || card.title || idx;
                const featuredImageValue = isMobile
                  ? card.featuredImageMobile
                  : card.featuredImage;
                return (
                  <CarouselItem
                    key={videoKey}
                    style={{ flex: "0 0 100%", maxWidth: "100%" }}
                  >
                    <article className="card bg-transparent text-white border-0 h-100">
                      {/* Featured image logo (optimized with width/height for CLS) */}
                      {featuredImageValue && (
                        <div className="featured-logo-wrapper">
                          <img
                            alt="featured logo"
                            src={featuredImageValue}
                            width="auto"
                            height="auto"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                      )}
                      <div className="ratio cards-preview overflow-hidden">
                        <img
                          src={card.imageSrc}
                          alt={`${card.title} preview`}
                          className="card-img-top object-fit-cover w-100 h-100"
                          width={640}
                          height={360}
                          loading="lazy"
                          decoding="async"
                          style={{ objectFit: "cover" }}
                        />
                        <div className="video-overlay-gradient" />
                        <EmbeddedYoutubeVideo
                          youtubeVideoUrl={card.youtubeVideoUrl}
                          isVideoOpen={!!openVideos[videoKey]}
                          onClickPlay={() => handlePlay(videoKey)}
                          sectionName={card.title}
                        />
                      </div>
                    </article>
                  </CarouselItem>
                );
              })}
            </Carousel>

            {cards.length > 0 && (
              <ArrowButtonsWrapper>
                <div className="arrow-buttons">
                  <ArrowButtons
                    onLeft={() => carouselController.slidePrev()}
                    onRight={() => carouselController.slideNext()}
                    sectionName={sectionName}
                  />
                </div>
              </ArrowButtonsWrapper>
            )}
          </div>
        )}
      </div>
    </Root>
  );
};

SectionCardAndMobileCarousel.propTypes = propTypes;

export default SectionCardAndMobileCarousel;
