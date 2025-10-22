import PropTypes from "prop-types";
import React, { useState } from "react";
import "./SectionVideosAtlas.css";
// Make sure EmbeddedYoutubeVideo is default exported
import { EmbeddedYoutubeVideo } from "../NewsStory/NewsStoryCardGrid/EmbeddedYoutubeVideo";
import { APP_CONFIG } from "../../config";
import { useBreakpoint } from "../../utils/use-breakpoint";

const propTypes = {
  title: PropTypes.string,
  episodeTitle: PropTypes.string,
  date: PropTypes.string,
  duration: PropTypes.string,
  description: PropTypes.string,
  youtubeVideoUrl: PropTypes.string,
  imageSrc: PropTypes.string,
  alignVideo: PropTypes.string,
};

export const SectionVideosAtlas = ({
  title,
  episodeTitle,
  date,
  duration,
  description,
  youtubeVideoUrl,
  imageSrc,
  alignVideo,
}) => {
  const [openVideos, setOpenVideos] = useState({});
  const videoKey = youtubeVideoUrl || title || "video";

  const isMobile = useBreakpoint(APP_CONFIG.breakpointMobile);
  const videoAlign = alignVideo || "right";

  const handlePlay = () => {
    setOpenVideos(prev => ({ ...prev, [videoKey]: true }));
  };

  return (
    <div className="container section-atlas-video">
      {title && <h3 className="text-white mb-3 font-bold">{title}</h3>}
      <div
        className={`row ${
          videoAlign === "left" ? "flex-row" : "flex-row-reverse"
        } ${!isMobile ? "flex-row" : "flex-column"}`}
      >
        <div className="col-lg-6 mb-lg-0 mb-3">
          <div className="ratio ratio-16x9 overflow-hidden">
            <img
              src={imageSrc || "https://via.placeholder.com/640x360"}
              alt={`${title} preview`}
              className="card-img-top object-fit-cover w-100 h-100"
              width={640}
              height={360}
              loading="lazy"
              decoding="async"
              style={{ objectFit: "cover" }}
            />
            <div className="video-overlay-gradient" />
            <EmbeddedYoutubeVideo
              youtubeVideoUrl={youtubeVideoUrl || ""}
              isVideoOpen={!!openVideos[videoKey]}
              onClickPlay={handlePlay}
              sectionName={title || "Video"}
            />
          </div>
        </div>

        <div className="col-lg-6 my-auto">
          <div className="flex flex-col gap-2">
            <h2 className="text-white mt-0 mb-1">{episodeTitle}</h2>
            <div className="flex mb-2 gap-1">
              <span className="text-white">{date}</span>
              <span className="text-white">●</span>
              <span className="text-white">{duration}</span>
            </div>
          </div>
          <p
            className="text-white text-base"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      </div>
    </div>
  );
};

SectionVideosAtlas.propTypes = propTypes;

export default SectionVideosAtlas;
