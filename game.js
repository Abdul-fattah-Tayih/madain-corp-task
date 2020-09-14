class Game {
    // the possible options for each game
    static options = ['rock', 'paper', 'scissors'];
    // Each key contains the option that it beats
    static winCases = { 'rock': 'scissors', 'paper': 'rock', 'scissors': 'paper' }

    constructor(playerOption, computerOption = null) {
        this.playerOption = playerOption;
        this.computerOption = computerOption;
    }

    play() {
        this.computerOption = this.randomOption();
        return this.determineResult();
    }

    determineResult() {
        const computerIndex = Game.options[this.computerOption];
        const playerIndex = Game.options[this.playerOption];

        if (Game.winCases[playerIndex] === computerIndex) {
            return 'You win!';
        } else if (playerIndex === computerIndex) {
            return 'Draw!';
        } else {
            return 'You lose!';
        }
    }

    randomOption() {
        return Math.floor(
            Game.options.length * Math.random()
        );
    }

    getComputerOption() {
        return Game.options[this.computerOption];
    }

    getPlayerOption() {
        return Game.options[this.playerOption];
    }
}