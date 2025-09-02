import React, { useEffect, useState, useRef } from "react";
import "./style.css";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SportIcon } from "../../../../app-sundevil/src/components/SportIcon";
import { stringToClosestSportName } from "../../../../app-sundevil/src/components/SportIcon/sport-name";
import { GameDataTicker } from "./game-data-ticker";

export const TickerSection = ({ tickerAPI }) => {
  const [items, setItems] = useState([]);
  const [position, setPosition] = useState(0);
  const [nextLink, setNextLink] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  const itemWidth = 360;

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // compute max scroll based on number of items and container width
  const maxScroll = Math.min(0, -(itemWidth * items.length - containerWidth));

  const slideLeft = () => setPosition(prev => Math.min(prev + itemWidth, 0));

  const slideRight = () => {
    setPosition(prev => {
      const nextPos = Math.max(prev - itemWidth, maxScroll) - 430;

      if (nextPos === maxScroll && nextLink && !isFetching) {
        fetchData(nextLink);
      }
      return nextPos;
    });
  };

  const winningHighlightStyle = highlight => ({
    background: highlight ? "#FFC627" : "#191919",
    color: highlight ? "#191919" : "#D0D0D0",
    padding: "2px",
  });

  const isGameValid = game => {
    const firstScore = Number(game.firstTeam.score);
    const secondScore = Number(game.secondTeam.score);

    const isFirstValid = !isNaN(firstScore) && game.firstTeam.score !== "";
    const isSecondValid = !isNaN(secondScore) && game.secondTeam.score !== "";

    if (
      (firstScore === 0 || !isFirstValid) &&
      (secondScore === 0 || !isSecondValid)
    ) {
      return false;
    }
    return true;
  };

  const fetchData = async (url = tickerAPI) => {
    if (isFetching) return;
    setIsFetching(true);
    try {
      const dataSource = new GameDataTicker(url);
      const data = await dataSource.findMany();
      const games = data.games
        .sort((a, b) => new Date(b.gameday) - new Date(a.gameday))
        .filter(isGameValid);

      setItems(prev => {
        const merged = [...prev, ...games];
        return merged.slice(0, 20); // just trim, no ghost item
      });

      setNextLink(data.nextLink);
    } catch (e) {
      console.error("Error fetching ticker data:", e);
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="carousel-wrapper">
      <div className="carousel-score">Scores:</div>
      <div className="carousel-view" ref={containerRef}>
        <div
          className="carousel-track"
          style={{ transform: `translateX(${position}px)` }}
        >
          {items.map((item, index) => (
            <div key={index} className="carousel-item">
              <div className="line">
                <div style={{ color: "#fafafa" }}>
                  <SportIcon
                    sportName={stringToClosestSportName(item.sportName)}
                  />
                </div>
                {item.sportName}
              </div>
              <div className="line" style={{ fontWeight: "normal" }}>
                {item.gameday}
              </div>
              <div className="line">
                <div style={winningHighlightStyle(item.firstTeam.won)}>
                  {item.firstTeam.name} {item.firstTeam.score}
                </div>
                <div style={winningHighlightStyle(item.secondTeam.won)}>
                  {item.secondTeam.name} {item.secondTeam.score}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="slider">
        <div className="nav-slider" onClick={slideLeft}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
        <div className="nav-slider" onClick={slideRight}>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
    </div>
  );
};

export default TickerSection;
