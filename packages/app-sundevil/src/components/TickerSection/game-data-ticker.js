import { IGameDataSource } from "../../../../app-sundevil/src/components/Game/game-data-source";

const itemToGame = item => {
  const sportName = updateSportName(item.attributes?.field_sport_name);
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

function updateSportName(sportName) {
  if (sportName != null) {
    if (sportName == "Baseball") {
      sportName = "Baseball";
    } else if (sportName == "Beach Volleyball") {
      sportName = "Beach Volleyball";
    } else if (sportName == "Cross Country") {
      sportName = "Cross Country";
    } else if (sportName == "Football") {
      sportName = "Football";
    } else if (sportName == "Gymnastic") {
      sportName = "Gymnastics";
    } else if (sportName == "Ice Hockey") {
      sportName = "Ice Hockey";
    } else if (sportName == "Lacrosse") {
      sportName = "Lacrosse";
    } else if (sportName == "Men's Basketball") {
      sportName = "M. Basketball";
    } else if (sportName == "Men's Golf") {
      sportName = "M. Golf";
    } else if (
      sportName == "M. Swim and Dive" ||
      sportName == "Men's Swimming and Diving"
    ) {
      sportName = "M. Swimming and Diving";
    } else if (sportName == "Men's Tennis") {
      sportName = "M. Tennis";
    } else if (sportName == "Soccer") {
      sportName = "Soccer";
    } else if (sportName == "Softball") {
      sportName = "Softball";
    } else if (sportName == "Track and Field") {
      sportName = "Track & Field";
    } else if (sportName == "Triathlon") {
      sportName = "Triathlon";
    } else if (sportName == "Volleyball") {
      sportName = "Volleyball";
    } else if (sportName == "Women's Basketball") {
      sportName = "W. Basketball";
    } else if (sportName == "Women's Golf") {
      sportName = "W. Golf";
    } else if (sportName == "Women's Swimming and Diving") {
      sportName = "W. Swimming and Diving";
    } else if (sportName == "Women's Tennis") {
      sportName = "W. Tennis";
    } else if (sportName == "Water Polo") {
      sportName = "Water Polo";
    } else if (sportName == "Wrestling") {
      sportName = "Wrestling";
    } else {
      sportName;
    }
    return sportName;
  }
}