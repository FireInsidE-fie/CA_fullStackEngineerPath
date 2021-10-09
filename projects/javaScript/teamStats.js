// https://www.codecademy.com/paths/full-stack-engineer-career-path/tracks/fscp-javascript-syntax-part-ii/modules/fecp-learn-javascript-syntax-objects/projects/team-stats
// 02.09.2021

const team = {
    _players: [  // Invented data. Lists all the wanted players.
        {firstName: 'Pablo', lastName: 'Sanchez', age: 11},
        {firstName: 'Ricardo', lastName: 'Enchev', age: 24},
        {firstName: 'Roger', lastName: 'Federer', age: 19}
    ],
    _games: [  // Invented data. Lists all the games players are going to play.
        {opponent: 'Broncos', teamPoints: 42, opponentPoints: 27},
        {opponent: 'Boufball', teamPoints: 24, opponentPoints: 99},
        {opponent: 'Sooccerball', teamPoints: 56, opponentPoints: 35}
    ],

    get players() {  // Getter method for _players
        return this._players;
    },
    get games() {  // Getter method for _games
        return this._games;
    },

    // This method will add a new player object to the players array.
    addplayer(firstName, lastName, age) {
        let player = {firstName: firstName, lastName: lastName, age: age};  // Creates the new player object.
        this.players.push(player);  // Adds the new player to the array.
    },

    // Adds a new game to the games array.
    addGame(opponent, teamPoints, opponentPoints) {
        let game = {opponent: opponent, teamPoints: teamPoints, opponentPoints: opponentPoints};
        this.games.push(game);
    }
}

// Adds new players to the players array
team.addplayer('Steph', 'Curry', 28);
team.addplayer('Lisa', 'Leslie', 44);
team.addplayer('Bugs', 'Bunny', 76);

console.log(team.players);

team.addGame('<opponent>', 50, 25);
team.addGame('<opponent>', 50, 25);
team.addGame('<opponent>', 50, 25);

console.log(team.games);
