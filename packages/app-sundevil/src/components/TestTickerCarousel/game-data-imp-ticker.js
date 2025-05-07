import { IGameDataSource } from "../Game/game-data-source";

// const itemToGame = item => {
//     console.log("date time, ", typeof(item.datetime))
//     const options = { month: 'short', day: 'numeric', year: 'numeric' };
//     return {
//       id: item.id,
//       sportName: item.schedule?.sport?.name ?? "Unknown",
//       homeTeamName: "Sun Devils",
//       opponentName: item.opponent_name,
//     //   result: item.schedule_event_result?.result ?? "N/A",
//       //if result is won, highlight homeTeam, else highlight opponent team
//       //If result is won, winning score is for SunDevils
//       //If result is lose, the losing score is for sun devils
//     //   winningScore: Math.trunc(item.schedule_event_result?.winning_score) ?? "-",
//     //   losingScore: Math.trunc(item.schedule_event_result?.losing_score) ?? "-",
//       sunDevilsScore: item.schedule_event_result?.result == 'win' ? Math.trunc(item.schedule_event_result?.winning_score) : Math.trunc(item.schedule_event_result?.losing_score),
//       opponentScore: item.schedule_event_result?.result == 'lose' ? Math.trunc(item.schedule_event_result?.winning_score) : Math.trunc(item.schedule_event_result?.losing_score),
//       venueType: item.venue_type,
//       //if venue is home, SD will be second, else first
//       gameday: new Date(item.datetime).toLocaleDateString('en-US', options),
//     };
//   };

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
    // const sunDevilsWon = result === 'win' ? true : false;
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
  
    // const sunDevilsScore = result === 'win' 
    //   ? Math.trunc(winningScore ?? 0) 
    //   : Math.trunc(losingScore ?? 0);
  
    // const opponentScore = result === 'lose' 
    //   ? Math.trunc(winningScore ?? 0) 
    //   : Math.trunc(losingScore ?? 0);

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

    
  
    // console.log("Date type:", typeof datetime);
  
    return {
      id,
      sportName,
    //   homeTeamName: "Sun Devils",
    //   opponentName: opponent_name,
    //   sunDevilsScore,
    //   opponentScore,
    //   venueType: venue_type,
      gameday,
    //   sunDevilsWon,
    //   result,
      firstTeam,
      secondTeam
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
        console.log("games", games)
        return games;
      } catch (error) {
        console.error("Error fetching game data:", error);
        return [];
      }
    }
  }
  