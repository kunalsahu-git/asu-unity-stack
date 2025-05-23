import React, { useEffect, useState, useRef } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SportIcon } from "../../../../app-sundevil/src/components/SportIcon";
import { stringToClosestSportName } from "../../../../app-sundevil/src/components/SportIcon/sport-name";
import { GameDataTicker } from "./game-data-ticker";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

export const TickerMobile = ({tickerAPI}) => {
  const [items, setItems] = useState([]);
  const winningHighlightStyle = highlight => ({
    background: highlight ? "#FFC627" : "black",
    color: highlight ? "black" : "white",
    padding: "2px",
  });

  useEffect(() => {
    const fetchData = async () => {
      const url = tickerAPI;
      const dataSource = new GameDataTicker(url);
      const games = await dataSource.findMany();
      setItems(games);
    };

    fetchData();
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const toggleDropdown = () => {
    setIsOpen(prev => !prev);
  };

  useEffect(() => {
    const handleClickOutside = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("touchstart", handleClickOutside);
    document.addEventListener("mousedown", handleClickOutside); // Optional: supports desktop

    return () => {
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown-section" ref={dropdownRef}>
      <div
        className="dropdown-score d-flex justify-content-between align-items-center"
        onClick={toggleDropdown}
      >
        Scores <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
      </div>
      <div className="dropdown">
        {isOpen && (
          <div className="dropdown-content">
            {items.map((item, index) => (
              <div key={index} className="game-item">
                {/* Row 1: Sport Name and Gameday */}
                <div
                  className="d-flex justify-content-between align-items-center"
                  style={{ paddingBottom: "24px" }}
                >
                  <div>
                    <SportIcon
                      sportName={stringToClosestSportName(item.sportName)}
                    />{" "}
                    {item.sportName}
                  </div>
                  <div style={{ fontWeight: "normal" }}>{item.gameday}</div>
                </div>

                {/* Row 2: First Team */}
                <div
                  className="d-flex justify-content-between align-items-center"
                  style={{ paddingBottom: "12px" }}
                >
                  <div style={winningHighlightStyle(item.firstTeam.won)}>
                    {item.firstTeam.name}
                  </div>
                  <div>{item.firstTeam.score}</div>
                </div>

                {/* Row 3: Second Team */}
                <div className="d-flex justify-content-between align-items-center">
                  <div style={winningHighlightStyle(item.secondTeam.won)}>
                    {item.secondTeam.name}
                  </div>
                  <div> {item.secondTeam.score} </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TickerMobile;
