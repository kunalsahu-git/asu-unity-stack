import React, { useEffect, useState } from "react";
import "./style.css";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SportIcon } from "../../../../app-sundevil/src/components/SportIcon";
import { stringToClosestSportName } from "../../../../app-sundevil/src/components/SportIcon/sport-name";
import { GameDataTicker } from "./game-data-ticker";

export const TickerCarousel = (props) => {
  const [items, setItems] = useState([]);
  const winningHighlightStyle = (highlight) => ({
    background: highlight ? '#FFC627' : 'black',
    color: highlight ? 'black' : 'white',
    padding: '2px',
  });
  useEffect(() => {
    const fetchData = async () => {
      const url = props.tickerAPI;
      const dataSource = new GameDataTicker(url);
      const games = await dataSource.findMany();
      setItems(games);
    };

    fetchData();
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <>
    <div className="carousel-score" onClick={toggleDropdown}>Scores :</div>
    {/* <div className="carousel-view">
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
            <div style={winningHighlightStyle(item.firstTeam.won)}>{item.firstTeam.name} {item.firstTeam.score}</div>
            <div style={winningHighlightStyle(item.secondTeam.won)}>{item.secondTeam.name} {item.secondTeam.score}</div>
            </div>
          </div>
        ))}
      </div>
    </div> */}

    <div className="dropdown">
      {isOpen && (
        <div className="dropdown-content">
        {items.map((item, index) => (
          <div key={index} className="game-item">
            <div class="row">
                <div class="col-6">
                <SportIcon sportName={stringToClosestSportName(item.sportName)} />  {item.sportName}
                </div>
                <div class="col-6" style={{fontWeight: "normal"}}>
                {item.gameday}
                </div>

            </div>
            <div class="row" style={winningHighlightStyle(item.firstTeam.won)}>{item.firstTeam.name} {item.firstTeam.score}</div>
            <div class="row" style={winningHighlightStyle(item.secondTeam.won)}>{item.secondTeam.name} {item.secondTeam.score}</div>
          </div>
        ))}
        </div>
      )}
    </div>
  </>  
  );
};

export default TickerCarousel;
