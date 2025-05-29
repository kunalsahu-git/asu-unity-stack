import React, { useEffect, useState } from "react";
import "./style.css";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SportIcon } from "../../../../app-sundevil/src/components/SportIcon";
import { stringToClosestSportName } from "../../../../app-sundevil/src/components/SportIcon/sport-name";
import { GameDataTicker } from "./game-data-ticker";

export const TickerCarousel = ({ tickerAPI }) => {
  const [items, setItems] = useState([]);
  const [position, setPosition] = useState(0);
  const itemWidth = 360; // Width of each carousel item
  const visibleCount = 4; // Number of items visible at a time
  const maxScroll = -(itemWidth * (items.length - visibleCount)); 
  const slideLeft = () => setPosition(prev => Math.min(prev + itemWidth, 0)); // Don't scroll past the first item
  const slideRight = () => setPosition(prev => Math.max(prev - itemWidth, maxScroll)); // Don't scroll past the last item
  const winningHighlightStyle = (highlight) => ({
    background: highlight ? '#FFC627' : '#191919',
    color: highlight ? '#191919' : '#D0D0D0',
    padding: '2px',
  });
  useEffect(() => {
    const fetchData = async () => {
      const dataSource = new GameDataTicker(tickerAPI);
      let games = await dataSource.findMany();
      games.sort((a, b) => {
        const dateA = new Date(a.gameday);
        const dateB = new Date(b.gameday);
        return dateB.getTime() - dateA.getTime();
      });
      setItems(games);
    };

    fetchData();
  }, []);

  return (
    <div className="carousel-wrapper">
    <div className="carousel-score">Scores :</div>
    <div className="carousel-view">
      <div
        className="carousel-track"
        style={{ transform: `translateX(${position}px)` }}
      >
        {items.map((item, index) => (
          <div key={index} className="carousel-item">
            <div className="line">
              <div style={{color: '#fafafa'}}>
              <SportIcon sportName={stringToClosestSportName(item.sportName)} />
              </div>
              {item.sportName}
            </div>
            <div className="line" style={{fontWeight: "normal"}}>{item.gameday}</div>
            <div className="line">
            <div style={winningHighlightStyle(item.firstTeam.won)}>{item.firstTeam.name} {item.firstTeam.score}</div>
            <div style={winningHighlightStyle(item.secondTeam.won)}>{item.secondTeam.name} {item.secondTeam.score}</div>
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

export default TickerCarousel;
