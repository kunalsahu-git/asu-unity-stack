import { IGameDataSource } from "../../../../app-sundevil/src/components/Game/game-data-source";

const itemToGame = item => {
  // console.log("item.att", item.attributes);
  const sportName = item.attributes?.field_sport_name ?? "Unknown";
  const result = item.attributes?.field_result;
  const winningScore = item.attributes?.field_winning_score;
  const losingScore = item.attributes?.field_loosing_score;
  const homeTeamName = "Sun Devils";
  const opponentName = item.attributes?.field_opponent_name;
  const venueType = item.attributes?.field_venue_type;
  const firstTeam = {
    name: "",
    score: "",
    won: false,
  };
  const secondTeam = {
    name: "",
    score: "",
    won: false,
  };

  if (venueType === "home") {
    firstTeam.name = opponentName;
    secondTeam.name = homeTeamName;
    if (result === "win") {
      firstTeam.score = Math.trunc(losingScore ?? 0);
      secondTeam.score = Math.trunc(winningScore ?? 0);
      secondTeam.won = true;
    } else {
      firstTeam.score = Math.trunc(winningScore ?? 0);
      secondTeam.score = Math.trunc(losingScore ?? 0);
      firstTeam.won = true;
    }
  } else if (venueType === "away") {
    firstTeam.name = homeTeamName;
    secondTeam.name = opponentName;
    if (result === "win") {
      secondTeam.score = Math.trunc(losingScore ?? 0);
      firstTeam.score = Math.trunc(winningScore ?? 0);
      firstTeam.won = true;
    } else  if (result === "lose"){
      secondTeam.score = Math.trunc(winningScore ?? 0);
      firstTeam.score = Math.trunc(losingScore ?? 0);
      secondTeam.won = true;
    }
  } else {
    firstTeam.name = homeTeamName;
    secondTeam.name = opponentName;
  }

  const options = { month: "short", day: "numeric", year: "numeric" };
  const gameday = item.attributes.field_date_time
    ? new Date(item.attributes.field_date_time).toLocaleDateString("en-US", {
        ...options,
        timeZone: "America/Phoenix",
      })
    : "Invalid Date";

  return {
    // id,
    sportName,
    gameday,
    firstTeam,
    secondTeam,
  };
};

export class GameDataTicker extends IGameDataSource {
  constructor(url) {
    super();
    this.url = url;
  }

  async findMany() {
    try {
      const response = await fetch(this.url);
      const dataRes = await response.json();
      const data = dataRes.data ?? [];
      const nextLink = dataRes.links.next.href;
      const items = Array.isArray(data) ? data : [data];
      // console.log("items", items)
      const games = items.map(itemToGame);
      return {
        games,
        nextLink
      };
    } catch (error) {
      console.error("Error fetching game data:", error);
      return [];
    }
  }
}