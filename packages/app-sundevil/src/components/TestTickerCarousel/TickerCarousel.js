import React, { useState } from "react";
import "./style.css";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const TickerCarousel = () => {
  const items = [
    "React", "Vue", "Angular", "Svelte",
    "Next.js", "Nuxt", "SolidJS", "Qwik"
  ];

  const itemWidth = 160; // 140px width + 20px margin
  const visibleCount = 4;
  const maxScroll = -(itemWidth * (items.length - visibleCount));

  const [position, setPosition] = useState(0);

  const slideLeft = () => {
    setPosition(prev => Math.min(prev + itemWidth, 0));
  };

  const slideRight = () => {
    setPosition(prev => Math.max(prev - itemWidth, maxScroll));
  };

  return (
    <>
    <div className="carousel-wrapper">
      <div className="carousel-view">
        <div
          className="carousel-track"
          style={{ transform: `translateX(${position}px)` }}
        >
          {items.map((item, index) => (
            <div key={index} className="carousel-item">
              {item}
            </div>
          ))}
        </div>
      </div>

    </div>
      <button className="nav-button left" onClick={slideLeft}><FontAwesomeIcon icon={faArrowLeft}/></button>
      <button className="nav-button right" onClick={slideRight}><FontAwesomeIcon icon={faArrowRight}/></button>
      </>
  );
};

export default TickerCarousel;
