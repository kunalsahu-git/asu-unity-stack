import React, { useEffect, useState, useRef } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SportIcon } from "../../../../app-sundevil/src/components/SportIcon";
import { stringToClosestSportName } from "../../../../app-sundevil/src/components/SportIcon/sport-name";
import { GameDataTicker } from "./game-data-ticker";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

export const TickerMobile = ({ tickerAPI }) => {
  const [items, setItems] = useState([]);
  const [nextLink, setNextLink] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const contentRef = useRef(null);

  const winningHighlightStyle = highlight => ({
    background: highlight ? "#FFC627" : "#191919",
    color: highlight ? "#191919" : "#D0D0D0",
    padding: "2px",
  });

  const fetchData = async (link = tickerAPI) => {
    if (isFetching || !link) return;
    setIsFetching(true);

    try {
      const dataSource = new GameDataTicker(link);
      const data = await dataSource.findMany();

      const games = Array.isArray(data.games) ? data.games : [];
      const sorted = games.sort(
        (a, b) => new Date(b.gameday) - new Date(a.gameday)
      );

      setItems(prev => [...prev, ...sorted]);
      setNextLink(data.nextLink || null);
    } catch (error) {
      console.error("Failed to fetch ticker data", error);
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const toggleDropdown = () => {
    setIsOpen(prev => !prev);
  };

  // Reattach scroll listener each time dropdown opens
  useEffect(() => {
    const container = contentRef.current;
    if (!isOpen || !container) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const nearBottom = scrollTop + clientHeight >= scrollHeight - 50;

      if (nearBottom && nextLink && !isFetching) {
        console.log("Fetching more via scroll...");
        fetchData(nextLink);
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [isOpen, nextLink, isFetching]);

  useEffect(() => {
    const handleClickOutside = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
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

      {/* {isOpen && (
        <div
          className="dropdown-content"
          ref={contentRef}
          style={{ maxHeight: "300px", overflowY: "auto" }}
        >
          {items.map((item, index) => (
            <div key={index} className="game-item">

              <div
                className="d-flex justify-content-between align-items-center"
                style={{ paddingBottom: "24px" }}
              >
                <div className="d-flex">
                  <div style={{ color: "#fafafa", marginRight: "4px" }}>
                    <SportIcon
                      sportName={stringToClosestSportName(item.sportName)}
                    />
                  </div>
                  <div>{item.sportName}</div>
                </div>
                <div style={{ fontWeight: "normal" }}>{item.gameday}</div>
              </div>


              <div
                className="d-flex justify-content-between align-items-center"
                style={{ paddingBottom: "12px" }}
              >
                <div style={winningHighlightStyle(item.firstTeam.won)}>
                  {item.firstTeam.name}
                </div>
                <div style={{ color: "white" }}>{item.firstTeam.score}</div>
              </div>


              <div className="d-flex justify-content-between align-items-center">
                <div style={winningHighlightStyle(item.secondTeam.won)}>
                  {item.secondTeam.name}
                </div>
                <div style={{ color: "white" }}>{item.secondTeam.score}</div>
              </div>
            </div>
          ))}


          {isFetching && (
            <div
              style={{ textAlign: "center", padding: "10px", color: "#ccc" }}
            >
              Loading more...
            </div>
          )}
        </div>
      )} */}

      {isOpen && (
        <div
          className="dropdown-content"
          ref={contentRef}
          style={{ maxHeight: "300px", overflowY: "auto" }}
        >
          {items
            .filter(item => {
              const firstScore = Number(item.firstTeam.score);
              const secondScore = Number(item.secondTeam.score);

              const isFirstValid =
                !isNaN(firstScore) &&
                item.firstTeam.score !== null &&
                item.firstTeam.score !== "";
              const isSecondValid =
                !isNaN(secondScore) &&
                item.secondTeam.score !== null &&
                item.secondTeam.score !== "";

              // Hide if both invalid or both zero
              if (
                (firstScore === 0 || !isFirstValid) &&
                (secondScore === 0 || !isSecondValid)
              ) {
                return false;
              }

              return true;
            })
            .map((item, index) => (
              <div key={index} className="game-item">
                {/* Row 1 */}
                <div
                  className="d-flex justify-content-between align-items-center"
                  style={{ paddingBottom: "24px" }}
                >
                  <div className="d-flex">
                    <div style={{ color: "#fafafa", marginRight: "4px" }}>
                      <SportIcon
                        sportName={stringToClosestSportName(item.sportName)}
                      />
                    </div>
                    <div>{item.sportName}</div>
                  </div>
                  <div style={{ fontWeight: "normal" }}>{item.gameday}</div>
                </div>

                {/* Row 2 */}
                <div
                  className="d-flex justify-content-between align-items-center"
                  style={{ paddingBottom: "12px" }}
                >
                  <div style={winningHighlightStyle(item.firstTeam.won)}>
                    {item.firstTeam.name}
                  </div>
                  <div style={{ color: "white" }}>{item.firstTeam.score}</div>
                </div>

                {/* Row 3 */}
                <div className="d-flex justify-content-between align-items-center">
                  <div style={winningHighlightStyle(item.secondTeam.won)}>
                    {item.secondTeam.name}
                  </div>
                  <div style={{ color: "white" }}>{item.secondTeam.score}</div>
                </div>
              </div>
            ))}

          {isFetching && (
            <div
              style={{ textAlign: "center", padding: "10px", color: "#ccc" }}
            >
              Loading more...
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TickerMobile;
