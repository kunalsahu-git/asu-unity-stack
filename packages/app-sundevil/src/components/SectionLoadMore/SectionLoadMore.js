import "./sectionloadmore.css";
import PropTypes from "prop-types";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import { APP_CONFIG } from "../../config";
import { useBreakpoint } from "../../utils/use-breakpoint";
import { ArrowButtons } from "../ArrowButtons";
import { EmbeddedYoutubeVideo } from "../NewsStory/NewsStoryCardGrid/EmbeddedYoutubeVideo";
import { useElementContentXPosition } from "../../utils/use-element-content-x-position";
import { Carousel, CarouselController, CarouselItem } from "../Carousel";

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

export const SectionLoadMore = ({
  newsStories = [],
  heading,
  description,
  skeleton,
  sectionName,
  itemsPerRow = 3, // ✅ cards per row
  initialRows = 4, // ✅ rows to show initially
}) => {
  const isMobile = useBreakpoint(APP_CONFIG.breakpointMobile);
  const [openVideos, setOpenVideos] = useState({});
  const [visibleRows, setVisibleRows] = useState(initialRows);

  const handlePlay = videoKey => {
    setOpenVideos(prev => ({
      ...prev,
      [videoKey]: true,
    }));
  };

  const handleLoadMore = () => {
    setVisibleRows(prev => prev + 1); // ✅ load one more row each time
  };

  const visibleCount = visibleRows * itemsPerRow;
  const visibleStories = newsStories.slice(0, visibleCount);
  const hasMore = visibleCount < newsStories.length;
  const carouselController = new CarouselController();
  const carouselRef = useRef(null);
  const [index, setIndex] = React.useState(0);
  const hasSectionHeader =
    Boolean(skeleton) && Object.keys(skeleton).length > 0;
  const sectionHeaderRef = useRef();
  const sectionHeaderPosition = useElementContentXPosition(sectionHeaderRef);
  const cardWidth = Math.abs(
    sectionHeaderPosition.left - sectionHeaderPosition.right
  );

  return (
    <Root
      hasSectionHeader={hasSectionHeader}
      className="radio-broadcasts-section"
    >
      <div className="container">
        <h3 className="section-title text-white mb-1 mt-0">{heading}</h3>
        <p
          className="section-description text-white mb-3"
          dangerouslySetInnerHTML={{ __html: description }}
        />

        {/* ---------- DESKTOP GRID ---------- */}
        {!isMobile && (
          <>
            <div className="media-grid mt-3 row row-col-3">
              {visibleStories.map(card => {
                const videoKey = card.youtubeVideoUrl || card.title;

                return (
                  <div className="card-wrapper mb-3 col-4" key={videoKey}>
                    <div className="ratio ratio-16x9 overflow-hidden">
                      {card.episodeText && (
                        <span className="episode-text-badge">
                          {card.episodeText}
                        </span>
                      )}
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
                  </div>
                );
              })}
            </div>

            {/* ---------- LOAD MORE BUTTON ---------- */}
            {hasMore && (
              <div className="text-center mt-4">
                <button
                  type="button"
                  className="btn text-white load-more btn-md"
                  onClick={handleLoadMore}
                >
                  Load More
                  <svg
                    className="icon"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M6 9l6 6 6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            )}
          </>
        )}

        {/* ---------- MOBILE CAROUSEL ---------- */}
        {isMobile && (
          <Root className="cards-carousel-section">
            <Carousel
              slidesPerView="auto"
              loop={false}
              slidesOffsetBefore={isMobile ?? 0}
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
                  {visibleStories.map(card => {
                    const videoKey = card.youtubeVideoUrl || card.title;
                    return (
                      <CarouselItem key={card.id || videoKey}>
                        <div className="card-wrapper">
                          <div className="ratio ratio-16x9 overflow-hidden">
                            {card.episodeText && (
                              <span className="episode-text-badge">
                                {card.episodeText}
                              </span>
                            )}
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
                        </div>
                      </CarouselItem>
                    );
                  })}
                </>
              )}

              {skeleton && (
                <>
                  {visibleStories.map(card => {
                    const videoKey = card.youtubeVideoUrl || card.title;
                    return (
                      <CarouselItem key={card.id || videoKey}>
                        <div className="card-wrapper">
                          <div className="ratio ratio-16x9 overflow-hidden">
                            {card.episodeText && (
                              <span className="episode-text-badge">
                                {card.episodeText}
                              </span>
                            )}
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
                        </div>
                      </CarouselItem>
                    );
                  })}
                </>
              )}
            </Carousel>
            {(newsStories.length > 0 || skeleton) && (
              <ArrowButtonsWrapper className="container px-0 pt-3">
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
    </Root>
  );
};

SectionLoadMore.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
  newsStories: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      imageSrc: PropTypes.string,
      youtubeVideoUrl: PropTypes.string,
      episodeText: PropTypes.string,
    })
  ),
  skeleton: PropTypes.bool,
  sectionName: PropTypes.string,
  itemsPerRow: PropTypes.number,
  initialRows: PropTypes.number,
};

export default SectionLoadMore;
