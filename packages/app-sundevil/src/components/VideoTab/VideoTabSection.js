import React, { useEffect, useState } from "react";
import { VideoSection } from "../VideoSection";

import "./style.css";

export const VideoTabSection = ({ title, subtitle, subtitle2, video1, video2 }) => {
  const [activeTab, setActiveTab] = useState("home");

  const firstVideo = {
    buttons: [],
    newsStories: [
      {
        imageSrc:
          "https://s3-alpha-sig.figma.com/img/8d20/1f72/5ddad920fe6909e26a83a3085dfcbbb6?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hpe-56mMFfnx9xLBrRYuMzRaMgO1uhzRy-ba-rqvr-Z2K3UVdsGBQw2fujcTG1ymEaZnoaZdLz9oL0I3Tu9oCzMvH~68~UOh8X4hdJFT2SQx96N675ZxC4pR2UuZI24JkLNUipHSmJ2gryuKl9QWk-qNtEnFNuUOReUSL76GBL8lDZcnafKubVf0Z6DWjj1DQkFfLsme9Pgsio5ldp0YKTA1r2tH1~hGvQB6Cw2bAedHjVIFV4gVr7Qdb54bgmumbn1CYwReSltv15LIqnuoq2n-DlBq3FbAHpHiXiPTIi6O6sqH-PtkgAuly7bqJFtHOHL26So1h-LfCfzvhRQY~Q__",
        title: "",
        youtubeVideoUrl: "https://www.youtube.com/watch?v=TIH5bbkwK_s",
      },
    ],
  };

  const secondVideo = {
    buttons: [],
    newsStories: [
      {
        imageSrc:
          "https://s3-alpha-sig.figma.com/img/8d20/1f72/5ddad920fe6909e26a83a3085dfcbbb6?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hpe-56mMFfnx9xLBrRYuMzRaMgO1uhzRy-ba-rqvr-Z2K3UVdsGBQw2fujcTG1ymEaZnoaZdLz9oL0I3Tu9oCzMvH~68~UOh8X4hdJFT2SQx96N675ZxC4pR2UuZI24JkLNUipHSmJ2gryuKl9QWk-qNtEnFNuUOReUSL76GBL8lDZcnafKubVf0Z6DWjj1DQkFfLsme9Pgsio5ldp0YKTA1r2tH1~hGvQB6Cw2bAedHjVIFV4gVr7Qdb54bgmumbn1CYwReSltv15LIqnuoq2n-DlBq3FbAHpHiXiPTIi6O6sqH-PtkgAuly7bqJFtHOHL26So1h-LfCfzvhRQY~Q__",
        title: "",
        youtubeVideoUrl: "https://www.youtube.com/watch?v=TIH5bbkwK_s",
      },
    ],
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
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
        <div className="tab-container">
          <ul className="nav-tabs">
            <li
              className={activeTab === "home" ? "active" : ""}
              onClick={() => setActiveTab("home")}
            >
              Onward to Victory (fight song)
            </li>
            <li
              className={activeTab === "profile" ? "active" : ""}
              onClick={() => setActiveTab("profile")}
            >
              Alma Mater
            </li>
          </ul>

          <div className="tab-content">
            {activeTab === "home" && (
              <div className="content">
                <div className="row">
                  <div className="video-section">
                    {/* <VideoSection {...firstVideo} /> */}
                  </div>
                  <div className="lyric-section">
                    <p>Lyrics</p>
                  </div>
                </div>
              </div>
            )}
            {activeTab === "profile" && (
              <div className="content">
                <div className="row">
                  <div className="video-section">
                    {/* <VideoSection {...secondVideo} /> */}
                  </div>
                  <div className="lyric-section">
                    <p>Lyrics</p>
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
