import "./style.css";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { EmbeddedYoutubeVideo } from "../NewsStory/NewsStoryCardGrid/EmbeddedYoutubeVideo";
import { APP_CONFIG } from "../../config";
import { useBreakpoint } from "../../utils/use-breakpoint";

export const SectionFeaturedVideo = ({ shows = [], heading }) => {
  const list = Array.isArray(shows) ? shows : shows ? Object.values(shows) : [];

  const [openVideos, setOpenVideos] = useState({});

  const handlePlay = videoKey => {
    setOpenVideos(prev => ({
      ...prev,
      [videoKey]: true,
    }));
    67;
  };

  const showCards = list.map((show, index) => {
    const videoKey = show.youtubeVideoUrl || show.title; // fallback if url missing
    let featuredImageValue = null;

    const isMobile = useBreakpoint(APP_CONFIG.breakpointMobile);
    if (isMobile) {
      featuredImageValue = show.featuredImageMobile;
    } else {
      featuredImageValue = show.featuredImage;
    }

    return (
      <div>
        {!isMobile && (
          <div className="desktop-section row g-4">
            <div className="col-12" key={index}>
              <article
                className="featured-card bg-transparent text-white border-0 h-100"
                aria-label={`Featured show card for ${show.title}`}
              >
                <div
                  className="card-background"
                  style={{ backgroundImage: `url(${show.backgroundImage})` }}
                >
                  <div className="card-content d-flex flex-column flex-md-row justify-content-between">
                    {/* Left content */}
                    <div className="content-left">
                      {featuredImageValue && (
                        <div className="mb-3">
                          <img
                            src={featuredImageValue}
                            alt={`${show.title} logo`}
                            className="show-logo"
                            width="200"
                            height="auto"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                      )}

                      <div className="show-info mb-4">
                        <h2 className="show-title">{show.title}</h2>
                        {show.coach && (
                          <h3 className="show-subtitle">{show.coach}</h3>
                        )}
                        {show.description && (
                          <p className="show-description">{show.description}</p>
                        )}
                      </div>

                      {show.videoCtaLinks && show.videoCtaLinks.length > 0 && (
                        <div className="d-flex gap-3 flex-wrap">
                          {show.videoCtaLinks.map((link, idx) => {
                            const isYoutube = link.buttonTitle
                              .toLowerCase()
                              .includes("watch on youtube");
                            return (
                              <a
                                key={idx}
                                href={link.buttonLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: "none" }}
                              >
                                {isYoutube ? (
                                  <button
                                    type="button"
                                    className="btn btn-outline-light rounded-pill fw-bold d-flex align-items-center gap-1"
                                    onClick={() => handlePlay(videoKey)}
                                  >
                                    <svg
                                      width="14"
                                      height="14"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                    <span>{link.buttonTitle}</span>
                                  </button>
                                ) : (
                                  <button
                                    type="button"
                                    className="btn btn-gold btn-md"
                                  >
                                    <span>{link.buttonTitle}</span>
                                  </button>
                                )}
                              </a>
                            );
                          })}
                        </div>
                      )}
                    </div>

                    {/* Right content (Embedded YouTube Video) */}
                    <div className="content-right">
                      <p className="latest-label">Lastest episode</p>
                      <div className="content-right-video position-relative">
                        {/* Preview Image */}
                        <img
                          src={show.imageSrc}
                          alt={`${show.title} preview`}
                          className="preview-image w-100 h-100"
                          loading="lazy"
                          decoding="async"
                          style={{
                            objectFit: "cover",
                          }}
                        />

                        {/* YouTube Embed (overlayed) */}
                        <EmbeddedYoutubeVideo
                          youtubeVideoUrl={show.youtubeVideoUrl}
                          isVideoOpen={!!openVideos[videoKey]}
                          onClickPlay={() => handlePlay(videoKey)}
                          sectionName={show.title}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        )}
        {isMobile && (
          <section className="featured-shows pb-6 mobile-section">
            <div className="container px-0">
              <div className="featured-card-mobile">
                {/* Hero section with background image and logo */}
                <div
                  className="hero-section"
                  style={{ backgroundImage: `url(${show.backgroundImage})` }}
                >
                  {featuredImageValue && (
                    <img
                      src={featuredImageValue}
                      alt={`${show.title} logo`}
                      className="hero-logo"
                    />
                  )}
                </div>

                {/* Content section */}
                <div className="content-section">
                  <div className="show-info">
                    <h2 className="show-title">{show.title}</h2>
                    {show.coach && (
                      <h3 className="show-subtitle">{show.coach}</h3>
                    )}
                    <p className="show-description">{show.description}</p>
                  </div>

                  {/* Latest episode section */}
                  <div className="content-right">
                    <p className="latest-label">Lastest episode</p>
                    <div className="content-right-video position-relative">
                      {/* Preview Image */}
                      <img
                        src={show.imageSrc}
                        alt={`${show.title} preview`}
                        className="preview-image w-100 h-100"
                        loading="lazy"
                        decoding="async"
                        style={{
                          objectFit: "cover",
                        }}
                      />

                      {/* YouTube Embed (overlayed) */}
                      <EmbeddedYoutubeVideo
                        youtubeVideoUrl={show.youtubeVideoUrl}
                        isVideoOpen={!!openVideos[videoKey]}
                        onClickPlay={() => handlePlay(videoKey)}
                        sectionName={show.title}
                      />
                    </div>
                  </div>

                  {/* Action buttons */}
                  {/* {show.videoCtaLinks && (
                    <div className="action-buttons">
                      <button type="button" className="btn btn-gold btn-md">
                        See all episodes
                      </button>
                      {show.youtubeVideoUrl && (
                        <button
                          type="button"
                          className="btn btn-outline-light rounded-pill fw-bold d-flex align-items-center gap-2"
                          onClick={() => handlePlay(videoKey)}
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                              fill="currentColor"
                            />
                          </svg>
                          Watch on YouTube
                        </button>
                      )}
                    </div>
                  )} */}
                  {show.videoCtaLinks && show.videoCtaLinks.length > 0 && (
                    <div className="action-buttons d-flex gap-3 flex-wrap">
                      {show.videoCtaLinks.map((link, idx) => {
                        const isYoutube = link.buttonTitle
                          .toLowerCase()
                          .includes("watch on youtube");
                        return (
                          <a
                            key={idx}
                            href={link.buttonLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {isYoutube ? (
                              <button
                                type="button"
                                className="btn btn-outline-light rounded-pill fw-bold d-flex align-items-center gap-1"
                                onClick={() => handlePlay(videoKey)}
                              >
                                <svg
                                  width="14"
                                  height="14"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                                    fill="currentColor"
                                  />
                                </svg>
                                <span>{link.buttonTitle}</span>
                              </button>
                            ) : (
                              <button
                                type="button"
                                className="btn btn-gold btn-md"
                              >
                                <span>{link.buttonTitle}</span>
                              </button>
                            )}
                          </a>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    );
  });

  return (
    <section className="featured-shows text-white">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-8">
            <h2 className="text-bold text-white mb-lg-12 mb-6">{heading}</h2>
          </div>
        </div>
        <div>{showCards}</div>
      </div>
    </section>
  );
};

SectionFeaturedVideo.propTypes = {
  heading: PropTypes.string,
  shows: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        featuredImage: PropTypes.string,
        featuredImageMobile: PropTypes.string,
        title: PropTypes.string.isRequired,
        coach: PropTypes.string,
        description: PropTypes.string,
        imageSrc: PropTypes.string,
        backgroundImage: PropTypes.string,
        youtubeVideoUrl: PropTypes.string,
        videoCtaLinks: PropTypes.arrayOf(
          PropTypes.shape({
            buttonLink: PropTypes.string,
            buttonTitle: PropTypes.string,
          })
        ),
      })
    ),
    PropTypes.object,
  ]),
};

export default SectionFeaturedVideo;
