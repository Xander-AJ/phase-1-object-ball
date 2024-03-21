// Part 1: Building the Object
function gameObject() {
    return {
      home: {
        teamName: "Dallas Mavericks",
        colors: ["Blue", "White"],
        players: {
          "Luka Doncic": { number: 77, shoe: 15, points: 34.1, rebounds: 9, assists: 9.8, steals: 1.43, blocks: 0.55, slamDunks: 5 },
          "Kyrie Irving": { number: 11, shoe: 11, points: 25.4, rebounds: 5.1, assists: 5.2, steals: 1.26, blocks: 0.47, slamDunks: 1 },
          "Daniel Gafford": { number: 21, shoe: 17, points: 11, rebounds: 7.9, assists: 1.4, steals: 0.89, blocks: 2.06, slamDunks: 8 },
          "P.J. Washington": { number: 25, shoe: 13, points: 12.7, rebounds: 5.4, assists: 2, steals: 0.89, blocks: 0.77, slamDunks: 3 },
          "Tim Hardaway Jr.": { number: 10, shoe: 10, points: 15.5, rebounds: 3.4, assists: 1.7, steals: 0.52, blocks: 0.08, slamDunks: 2 }
        }
      },
      away: {
        teamName: "Los Angeles Lakers",
        colors: ["Purple", "Gold"],
        players: {
        "LeBron James": { number: 23, shoe: 15, points: 25, rebounds: 8, assists: 10, steals: 2, blocks: 1, slamDunks: 3 },
        "Anthony Davis": { number: 3, shoe: 17, points: 20, rebounds: 12, assists: 5, steals: 3, blocks: 4, slamDunks: 5 },
        "Russell Westbrook": { number: 0, shoe: 14, points: 18, rebounds: 6, assists: 8, steals: 4, blocks: 1, slamDunks: 2 },
        "Carmelo Anthony": { number: 7, shoe: 16, points: 15, rebounds: 4, assists: 3, steals: 1, blocks: 0, slamDunks: 1 },
        "Dwight Howard": { number: 39, shoe: 18, points: 10, rebounds: 10, assists: 2, steals: 1, blocks: 3, slamDunks: 4 }
        }
      }
    };
  }
  
  // Function to find the number of points scored for a player
  function numPointsScored(playerName) {
    let game = gameObject();
    for (let teamKey in game) {
      let players = game[teamKey].players;
      if (playerName in players) {
        return players[playerName].points;
      }
    }
    return null; // Player not found
  }
  
  // Function to find the shoe size of a player
  function shoeSize(playerName) {
    let game = gameObject();
    for (let teamKey in game) {
      let players = game[teamKey].players;
      if (playerName in players) {
        return players[playerName].shoe;
      }
    }
    return null; // Player not found
  }
  
  // Function to find the colors of a team
  function teamColors(teamName) {
    let game = gameObject();
    for (let teamKey in game) {
      if (game[teamKey].teamName === teamName) {
        return game[teamKey].colors;
      }
    }
    return null; // Team not found
  }
  
  // Function to return an array of team names
  function teamNames() {
    let game = gameObject();
    return [game.home.teamName, game.away.teamName];
  }
  
  // Function to return an array of jersey numbers for a team
  function playerNumbers(teamName) {
    let game = gameObject();
    for (let teamKey in game) {
      if (game[teamKey].teamName === teamName) {
        let players = game[teamKey].players;
        return Object.values(players).map(player => player.number);
      }
    }
    return null; // Team not found
  }
  
  // Function to return an object of player's stats
  function playerStats(playerName) {
    let game = gameObject();
    for (let teamKey in game) {
      let players = game[teamKey].players;
      if (playerName in players) {
        return players[playerName];
      }
    }
    return null; // Player not found
  }
  
  // Function to return the number of rebounds associated with the player that has the largest shoe size
  function bigShoeRebounds() {
    let game = gameObject();
    let largestShoeSize = -Infinity;
    let playerWithLargestShoe;
    for (let teamKey in game) {
      let players = game[teamKey].players;
      for (let player in players) {
        if (players[player].shoe > largestShoeSize) {
          largestShoeSize = players[player].shoe;
          playerWithLargestShoe = player;
        }
      }
    }
    return game.home.players[playerWithLargestShoe].rebounds || game.away.players[playerWithLargestShoe].rebounds;
  }
  
  // Example usage:
  console.log(gameObject()); // Check the created object
  