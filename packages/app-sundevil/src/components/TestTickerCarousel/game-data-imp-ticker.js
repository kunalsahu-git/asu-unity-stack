import { IGameDataSource } from "../Game/game-data-source";

const itemToGame = item => {
    console.log("date time, ", typeof(item.datetime))
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    return {
      id: item.id,
      sportName: item.schedule?.sport?.name ?? "Unknown",
      homeTeamName: "Sun Devils",
      opponentName: item.opponent_name,
      winningScore: Math.trunc(item.schedule_event_result?.winning_score) ?? "-",
      losingScore: Math.trunc(item.schedule_event_result?.losing_score) ?? "-",
      result: item.schedule_event_result?.result ?? "N/A",
      venueType: item.venue_type,
      gameday: new Date(item.datetime).toLocaleDateString('en-US', options),
    };
  };
  
  export class GameDataSourceSpecialEvents extends IGameDataSource {
    constructor(url) {
      super();
      this.url = url;
    }
  
    async findMany() {
      try {
        const response = await fetch(this.url);
        const dataRes = await response.json();
        const data = dataRes?.data ?? [];
  
        const items = Array.isArray(data) ? data : [data];
        const games = items.map(itemToGame);
  
        return games;
      } catch (error) {
        console.error("Error fetching game data:", error);
        return [];
      }
    }
  }
  