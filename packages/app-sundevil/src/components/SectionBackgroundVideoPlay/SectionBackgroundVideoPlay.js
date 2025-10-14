import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { APP_CONFIG } from "../../config";
import { useBreakpoint } from "../../utils/use-breakpoint";
import "./style.css";

const YouTubeIcon = () => (
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
);

const PlayIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3 2.5L13 8L3 13.5V2.5Z" fill="currentColor" />
  </svg>
);

export const SectionBackgroundVideoPlay = ({
  videoUrl,
  logoSrc,
  title,
  subtitle,
  listenLiveLabel,
  schedule,
  youtubeButtonText,
  youtubeButtonLink,
}) => {
  const isMp4 = videoUrl?.toLowerCase().endsWith(".mp4");
  const isYouTube =
    videoUrl?.includes("youtube.com") || videoUrl?.includes("youtu.be");
  const isMobile = useBreakpoint(APP_CONFIG.breakpointMobile);
  const [isPlaying, setIsPlaying] = useState(false);
  // Extract YouTube video ID
  let youTubeId = "";
  if (isYouTube) {
    const match = videoUrl.match(
      /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    );
    youTubeId = match ? match[1] : "";
  }

  // Proper YouTube embed URL for autoplay + no branding
  const youTubeEmbedUrl = youTubeId
    ? `https://www.youtube.com/embed/${youTubeId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${youTubeId}&rel=0&modestbranding=1&showinfo=0&iv_load_policy=3&fs=0&playsinline=1`
    : "";

  return (
    <section className="sparkys-den container">
      {!isMobile && (
        <div>
          {/* Video Background */}
          <div className="video-background">
            {isMp4 ? (
              <video
                src={videoUrl}
                autoPlay
                muted
                loop
                playsInline
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            ) : isYouTube && youTubeId ? (
              <iframe
                title="background-video"
                src={youTubeEmbedUrl}
                frameBorder="0"
                allow="autoplay; encrypted-media; picture-in-picture"
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
              />
            ) : null}
          </div>

          {/* Gradient Overlay */}
          <div className="video-overlay"></div>

          {/* Content */}
          <div className="container">
            <div className="content-wrapper">
              <div className="content">
                <img
                  src={logoSrc}
                  alt={`${title} Logo`}
                  className="show-logo"
                />

                <div className="show-details">
                  <div className="show-titles">
                    <h1 className="show-title">{title}</h1>
                    <h2 className="show-subtitle">{subtitle}</h2>
                  </div>
                </div>

                <div className="listen-live-label">{listenLiveLabel}</div>

                <div
                  className="schedule-info"
                  dangerouslySetInnerHTML={{ __html: schedule }}
                />

                {youtubeButtonLink && (
                  <div className="action-buttons">
                    <a
                      href={youtubeButtonLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button type="button" className="btn btn-gold">
                        <YouTubeIcon />
                        <span>{youtubeButtonText}</span>
                      </button>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      {isMobile && (
        <div>
          {/* Background Pattern */}
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/e36e33e36d3dcdc02f7ed200702af21b870f71b3?width=5664"
            alt=""
            className="background-pattern"
            aria-hidden="true"
          />

          {/* Content */}
          <div className="sparkys-content">
            <div className="content-sections">
              {/* Video Thumbnail / Player */}
              <div className="video-thumbnail-card">
                {!isPlaying ? (
                  <>
                    <img
                      src="https://img.youtube.com/vi/9hP0KtPjWbE/maxresdefault.jpg"
                      alt="Sparky's Den video thumbnail"
                      className="thumbnail-image"
                    />
                    <button
                      type="button"
                      className="play-button"
                      aria-label="Play video"
                      onClick={() => setIsPlaying(true)}
                    >
                      <PlayIcon />
                    </button>
                  </>
                ) : (
                  <iframe
                    src="https://www.youtube.com/embed/9hP0KtPjWbE?autoplay=1&mute=0&controls=1&rel=0&modestbranding=1&showinfo=0&iv_load_policy=3&playsinline=1"
                    title="Sparky's Den Video"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                    frameBorder="0"
                    className="video-iframe"
                    style={{
                      width: "100%",
                      height: "100%",
                      border: "none",
                      borderRadius: "12px",
                    }}
                  />
                )}
              </div>

              {/* Logo */}
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/c220a53b2e591c29f5678508038be8954059709d?width=605"
                alt="Sparky's Den Logo"
                className="show-logo"
              />

              {/* Show Info */}
              <div className="show-info-section">
                <div className="show-titles">
                  <h1 className="show-title">Sparky's Den</h1>
                  <h2 className="show-subtitle">with Coach Dillingham</h2>
                </div>
              </div>

              {/* Listen Live Label */}
              <div className="listen-live-label">Listen Live</div>

              {/* Schedule Info */}
              <p className="schedule-info">
                Arizona Sports 98.7 FM Wednesday nights 7 – 8 p.m.
              </p>

              {/* Watch Button */}
              <div className="action-buttons">
                <button
                  type="button"
                  className="btn btn-gold"
                  onClick={() =>
                    window.open(
                      "https://www.youtube.com/watch?v=9hP0KtPjWbE",
                      "_blank"
                    )
                  }
                >
                  <YouTubeIcon />
                  <span>Watch on YouTube</span>
                </button>
              </div>
            </div>

            {/* Description */}
            <div className="show-description">
              <p>
                Join Head Coach Kenny Dillingham, Sun Devil Football players,
                and special guests for a one-hour look inside Sun Devil
                Football.{" "}
                <a href="#schedule" className="schedule-link">
                  See full schedule
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

SectionBackgroundVideoPlay.propTypes = {
  videoUrl: PropTypes.string.isRequired,
  logoSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  listenLiveLabel: PropTypes.string,
  schedule: PropTypes.string,
  youtubeButtonText: PropTypes.string,
  youtubeButtonLink: PropTypes.string,
};

SectionBackgroundVideoPlay.defaultProps = {
  subtitle: "",
  listenLiveLabel: "Listen Live",
  schedule: "",
  youtubeButtonText: "Watch on YouTube",
  youtubeButtonLink: "",
};

export default SectionBackgroundVideoPlay;
