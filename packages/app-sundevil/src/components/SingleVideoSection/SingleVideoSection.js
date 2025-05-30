import React, { useEffect, useState } from "react";
import { VideoSection } from "../VideoSection";

import "./style.css";
import { repeat } from "../../utils/repeat";

export const SingleVideoSection = ({
  title,
  body,
  bgdesktopImage,
  bgmobileImage,
  videoData,
}) => {
  return (
    <section>
      <div
        className="pt-8 d-lg-block d-md-block d-none pb-12 sda-single-video-section desktop-image"
        style={{
          backgroundImage: `url(${bgdesktopImage})`,
          backgroundSize: "cover",
        }}
      >
        <div className="text-center mx-auto section-content">
          <div className="container">
            <h2 className="mb-4 text-center">{title}</h2>
            <p className="mb-lg-10 mb-md-10 mb-6">{body}</p>
          </div>
          <VideoSection {...videoData} className="video-section" />
        </div>
      </div>
      <div className="pt-8 d-lg-none d-md-none d-block pb-12 sda-single-video-section">
        <div className="text-center mx-auto section-content">
          <div className="container">
            <h2 className="mb-4 text-center">{title}</h2>
            <p className="mb-lg-10 mb-md-10 mb-6">{body}</p>
          </div>
          <div
            className="pt-6 pb-8 mobile-image"
            style={{
              backgroundImage: `url(${bgmobileImage})`,
              backgroundSize: "cover",
            }}
          >
            <VideoSection {...videoData} className="video-section" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleVideoSection;
