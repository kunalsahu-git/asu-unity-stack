import "./style.css";
import PropTypes from "prop-types";
import React, { useState } from "react";

import { EmbeddedYoutubeVideo } from "../NewsStory/NewsStoryCardGrid/EmbeddedYoutubeVideo";

export const VideoCardsSection = ({ shows = [], heading, description }) => {
  const list = Array.isArray(shows) ? shows : shows ? Object.values(shows) : [];

  // track video state per show (using youtubeVideoUrl as unique key)
  const [openVideos, setOpenVideos] = useState({});

  const handlePlay = videoKey => {
    setOpenVideos(prev => ({
      ...prev,
      [videoKey]: true,
    }));
  };

  const showCards = list.map(show => {
    const videoKey = show.youtubeVideoUrl || show.title; // fallback if url missing

    return (
      <div className="col-12 mt-0 col-lg-6" key={videoKey}>
        <article
          className="card bg-transparent text-white border-0 h-100"
          aria-label={`Video card for ${show.title}`}
        >
          {/* Featured image logo (optimized with width/height for CLS) */}
          {show.featuredImage && (
            <div className="featured-logo-wrapper">
              <img
                alt="featured logo"
                src={show.featuredImage}
                width="auto"
                height="auto"
                loading="lazy"
                decoding="async"
              />
            </div>
          )}

          {/* Episode Text (positioned absolutely, accessible) */}
          {show.episodeText && (
            <div className="episode-text-badge">{show.episodeText}</div>
          )}

          {/* Video Preview (use responsive ratio + lazy load) */}
          <div className="ratio ratio-16x9 overflow-hidden">
            <img
              src={show.imageSrc}
              alt={`${show.title} preview`}
              className="card-img-top object-fit-cover w-100 h-100"
              width={640}
              height={360}
              loading="lazy"
              decoding="async"
              style={{
                objectFit: "cover",
              }}
            />

            {/* Overlay gradient handled via CSS */}
            <div className="video-overlay-gradient" />

            {/* Defer YouTube iframe until play */}
            <EmbeddedYoutubeVideo
              youtubeVideoUrl={show.youtubeVideoUrl}
              isVideoOpen={!!openVideos[videoKey]}
              onClickPlay={() => handlePlay(videoKey)}
              sectionName={show.title}
            />
          </div>

          {/* Content */}
          <div className="card-body pb-0 d-flex px-0 flex-column">
            <h2 className="card-body-title mt-0 mb-1">{show.title}</h2>
            {show.coach && (
              <h3 className="card-body-description mt-0 text-white mb-2">
                {show.coach}
              </h3>
            )}

            {show.description && (
              <p className="card-text text-white mb-3">{show.description}</p>
            )}

            <div className="mt-auto">
              <button
                type="button"
                className="btn btn-sm rounded-pill"
                style={{ backgroundColor: "#FFC627", color: "#191919" }}
              >
                See all episodes
              </button>
            </div>
          </div>
        </article>
      </div>
    );
  });

  return (
    <section className="bg-black text-white py-5">
      <div className="container">
        <div className="row mb-4">
          <div className="col-12 col-lg-8">
            <h2 className="section-title mt-0">{heading}</h2>
            <p className="section-description mb-4 text-white">{description}</p>
          </div>
        </div>

        <div className="row g-4">{showCards}</div>
      </div>
    </section>
  );
};

VideoCardsSection.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
  shows: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        coach: PropTypes.string,
        description: PropTypes.string,
        imageSrc: PropTypes.string,
        featuredImage: PropTypes.string,
        youtubeVideoUrl: PropTypes.string.isRequired,
        episodeText: PropTypes.string,
      })
    ),
    PropTypes.object,
  ]),
};

export default VideoCardsSection;
