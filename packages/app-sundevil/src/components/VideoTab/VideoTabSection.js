import React, { useEffect, useState } from "react";
import { VideoSection } from "../VideoSection";

import "./style.css";

export const VideoTabSection = ({ title, subtitle, subtitle2, video1, video2 }) => {
  const [activeTab, setActiveTab] = useState("fight song");

  const firstVideo = {
    bottomButtons: [],
    newsStories: [video1],
  };

  const secondVideo = {
    bottomButtons: [],
    newsStories: [video2],
  };

  return (
    <section
      style={{
        backgroundImage: `url('https://websecurity-web-sda.ws.asu.edu/sites/default/files/2024-08/thrive.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <div className="body-section">
        <div className="header-section">
          <p className="header-1">{title}</p>
          <p className="header-2">{subtitle}</p>
          <p className="header-3">{subtitle2}</p>
        </div>
        <div className="tab-container">
          <ul className="nav-tabs">
            <li
              className={activeTab === "fight song" ? "active" : ""}
              onClick={() => setActiveTab("fight song")}
            >
              Onward to Victory (fight song)
            </li>
            <li
              className={activeTab === "alma mater" ? "active" : ""}
              onClick={() => setActiveTab("alma mater")}
            >
              Alma Mater
            </li>
          </ul>

          <div className="tab-content">
            {activeTab === "fight song" && (
              <div className="content">
                <div className="row">
                  <div className="video-section">
                    <VideoSection {...firstVideo} />
                  </div>
                  <div className="lyric-section">
                    <p className="lyric-header">Lyrics</p>
                    <div className="lyrics">
                      {video1.lyric.split('\n').map((line, idx) => (
                        <p key={idx}>{line}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === "alma mater" && (
              <div className="content">
                <div className="row">
                  <div className="video-section">
                    <VideoSection {...secondVideo} />
                  </div>
                  <div className="lyric-section">
                    <p className="lyric-header">Lyrics</p>
                    <p className="lyrics">{video2.lyric}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoTabSection;
