"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameManager = exports.GameManager = exports.games = void 0;
exports.games = [];
class GameManager {
    constructor() {
        this.games = [];
        this.games = [];
    }
    addMove(gameId, move) {
        const game = this.games.find(game => game.id === gameId);
        if (game) {
            game.moves.push(move);
        }
    }
    addGame(whitePlayer, blackPlayer) {
        this.games.push({
            id: Math.random().toString(),
            whitePlayer,
            blackPlayer,
            moves: []
        });
    }
    log() {
        console.log(this.games);
    }
}
exports.GameManager = GameManager;
//now here we updated the variable in the store [which will be in the backend] in a certain inverval.
exports.gameManager = new GameManager();
