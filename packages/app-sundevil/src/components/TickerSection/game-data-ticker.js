import { IGameDataSource } from "../Game/game-data-source";

  const itemToGame = (item) => {
    const { 
      id, 
      opponent_name, 
      datetime, 
      venue_type, 
      schedule, 
      schedule_event_result 
    } = item;
  
    const sportName = schedule?.sport?.name ?? "Unknown";
    const result = schedule_event_result?.result;
    const winningScore = schedule_event_result?.winning_score;
    const losingScore = schedule_event_result?.losing_score;
    const homeTeamName = "Sun Devils";
    const opponentName = opponent_name;
    const firstTeam = {
        name: '',
        score: '',
        won: false
    };
    const secondTeam= {
        name: '',
        score: '',
        won: false
    };
  
    if(venue_type === 'home'){
        firstTeam.name = opponentName;
        secondTeam.name = homeTeamName;
        if(result === 'win'){
            firstTeam.score = Math.trunc(losingScore ?? 0);
            secondTeam.score = Math.trunc(winningScore ?? 0);
            secondTeam.won = true;
        }
        else {
            firstTeam.score = Math.trunc(winningScore ?? 0);
            secondTeam.score = Math.trunc(losingScore ?? 0);
            firstTeam.won = true;
        }
    } else if(venue_type === 'away'){
        firstTeam.name = homeTeamName;
        secondTeam.name = opponentName;
        if(result === 'win'){
            secondTeam.score = Math.trunc(losingScore ?? 0);
            firstTeam.score = Math.trunc(winningScore ?? 0);
            firstTeam.won = true;
        }
        else {
            secondTeam.score = Math.trunc(winningScore ?? 0);
            firstTeam.score = Math.trunc(losingScore ?? 0);
            secondTeam.won = true;
        }
    }
  
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    const gameday = datetime 
      ? new Date(datetime).toLocaleDateString('en-US', options)
      : 'Invalid Date';

    return {
      id,
      sportName,
      gameday,
      firstTeam,
      secondTeam
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
  