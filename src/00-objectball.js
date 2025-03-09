const gameObject = function (home, away) {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          Number: 0,
          Shoe: 16,
          points: 22,
          Rebounds: 12,
          Assists: 12,
          Steals: 3,
          Blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          Number: 30,
          Shoe: 14,
          points: 12,
          Rebounds: 12,
          Assists: 12,
          Steals: 12,
          Blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          Number: 11,
          Shoe: 17,
          points: 17,
          Rebounds: 19,
          Assists: 10,
          Steals: 3,
          Blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          Number: 1,
          Shoe: 19,
          points: 26,
          Rebounds: 12,
          Assists: 6,
          Steals: 3,
          Blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          Number: 31,
          Shoe: 15,
          points: 19,
          Rebounds: 2,
          Assists: 2,
          Steals: 4,
          Blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          Number: 4,
          Shoe: 18,
          points: 10,
          Rebounds: 1,
          Assists: 1,
          Steals: 2,
          Blocks: 7,
          slamDunks: 2,
        },
        "Bismack Biyombo": {
          Number: 0,
          Shoe: 16,
          points: 12,
          Rebounds: 4,
          Assists: 7,
          Steals: 7,
          Blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          Number: 2,
          Shoe: 14,
          points: 24,
          Rebounds: 12,
          Assists: 12,
          Steals: 4,
          Blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          Number: 8,
          Shoe: 15,
          points: 33,
          Rebounds: 3,
          Assists: 2,
          Steals: 1,
          Blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          Number: 33,
          Shoe: 15,
          points: 6,
          Rebounds: 12,
          Assists: 12,
          Steals: 22,
          Blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
};

function numPointsScored(playerName) {
  for (let team in gameObject()) {
    for (let player in gameObject()[team].players) {
      if ((player = playerName)) {
        console.log(gameObject()[team].players[player].points);
      }
    }
  }
}

function shoeSize(playerName) {
  for (let team in gameObject()) {
    for (let player in gameObject()[team].players) {
      if (player == playerName) {
        return gameObject()[team].players[player].Shoe;
      }
    }
  }
}

function teamColors(teamName) {
  for (let team in gameObject()) {
    if (gameObject()[team].teamName === teamName) {
      return gameObject()[team].colors;
    }
  }
}

function teamNames() {
  let names = [];
  for (let team in gameObject()) {
    if (gameObject()[team].teamName) {
      names.push(gameObject()[team].teamName);
    }
  }
  return names;
}

function playerNumbers(teamName) {
  for (let team in gameObject()) {
    if (gameObject()[team].teamName === teamName) {
      let numbers = [];
      for (let player in gameObject()[team].players)
        numbers.push(gameObject()[team].players[player].Number);
      return numbers;
    }
  }
}

function playerStats(playerName) {
  for (let team in gameObject()) {
    if (gameObject()[team].players[playerName]) {
      return gameObject()[team].players[playerName];
    }
  }
}

function bigShoeRebounds() {
  let largestShoeSize = 0;
  for (let team in gameObject()) {
    for (let player in gameObject()[team].players) {
      if (gameObject()[team].players[player].Shoe > 0) {
        largestShoeSize = gameObject()[team].players[player].Shoe;
        return gameObject()[team].players[player].Rebounds;
      }
    }
  }
}
console.log(bigShoeRebounds());

