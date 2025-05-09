import React, { useEffect, useState } from "react";
import "./style.css";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SportIcon } from "../SportIcon";
import { stringToClosestSportName } from "../SportIcon/sport-name";
import { GameDataSourceSpecialEvents } from "./game-data-imp-ticker";

export const TickerCarousel = (props) => {
  const [items, setItems] = useState([]);
  const [position, setPosition] = useState(0);
  const itemWidth = 360; // Width of each carousel item
  const visibleCount = 4; // Number of items visible at a time
  const maxScroll = -(itemWidth * (items.length - visibleCount)); 
  const slideLeft = () => setPosition(prev => Math.min(prev + itemWidth, 0)); // Don't scroll past the first item
  const slideRight = () => setPosition(prev => Math.max(prev - itemWidth, maxScroll)); // Don't scroll past the last item
  const winningHighlightStyle = (highlight) => ({
    background: highlight ? '#FFC627' : 'black',
    color: highlight ? 'black' : 'white',
    padding: '2px',
  });
  useEffect(() => {
    const fetchData = async () => {
      console.log("Props", props)
      const url = 
      // props.tickerAPI;
        "https://hokiesports.com/website-api/schedule-events?filter%5Bpast%5D=true&sort%5B0%5D=datetime&include%5B0%5D=conference.image&include%5B1%5D=opponent.customLogo&include%5B2%5D=opponent.officialLogo&include%5B3%5D=opponentLogo&include%5B4%5D=postEventArticle.image&include%5B5%5D=preEventArticle.image&include%5B6%5D=presentedBy&include%5B7%5D=schedule.sport&include%5B8%5D=scheduleEventLinks.icon&include%5B9%5D=scheduleEventResult&include%5B10%5D=secondOpponent.customLogo&include%5B11%5D=secondOpponent.officialLogo&include%5B12%5D=secondOpponentLogo&include%5B13%5D=tournament&per_page=100&page=1";
      // "https://thesundevils-com.wmt-dev-test-2.c.wmt.dev/website-api/schedule-events?filter%5Bpast%5D=true&sort%5B0%5D=datetime&include%5B0%5D=conference.image&include%5B1%5D=opponent.customLogo&include%5B2%5D=opponent.officialLogo&include%5B3%5D=opponentLogo&include%5B4%5D=postEventArticle.image&include%5B5%5D=preEventArticle.image&include%5B6%5D=presentedBy&include%5B7%5D=schedule.sport&include%5B8%5D=scheduleEventLinks.icon&include%5B9%5D=scheduleEventResult&include%5B10%5D=secondOpponent.customLogo&include%5B11%5D=secondOpponent.officialLogo&include%5B12%5D=secondOpponentLogo&include%5B13%5D=tournament&per_page=100&page=1"
      const dataSource = new GameDataSourceSpecialEvents(url);
      const games = await dataSource.findMany();
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
              <SportIcon sportName={stringToClosestSportName(item.sportName)} />
              {item.sportName}
            </div>
            <div className="line" style={{fontWeight: "normal"}}>{item.gameday}</div>
            <div className="line">
            {/* <div style={winningHighlightStyle(item.sunDevilsWon)}>{item.homeTeamName} {item.sunDevilsScore}</div>
            <div style={winningHighlightStyle(!item.sunDevilsWon)}>{item.opponentName} {item.opponentScore}</div> */}
            {/* <div>{item.result} {item.venueType}</div> */}
            <div style={winningHighlightStyle(item.firstTeam.won)}>{item.firstTeam.name} {item.firstTeam.score}</div>
            <div style={winningHighlightStyle(item.secondTeam.won)}>{item.secondTeam.name} {item.secondTeam.score}</div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="slider">
      <button className="nav-slider" onClick={slideLeft}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <button className="nav-slider" onClick={slideRight}>
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  </div>  
  );
};

export default TickerCarousel;
