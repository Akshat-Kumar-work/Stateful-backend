"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameMangerObject = exports.GamesManger = exports.games = void 0;
//in memory state mangement using array variable
exports.games = [];
//state management with a class
class GamesManger {
    constructor() {
        this.games = [];
        this.games = [];
    }
    //function add game
    addGame(gameid, whitePlayerName, blackPlayerName) {
        const game = {
            id: gameid,
            whitePlayerName: whitePlayerName,
            blackPlayerName: blackPlayerName,
            moves: []
        };
        this.games.push(game);
    }
    //function to add move
    addMove(gameId, move) {
        console.log(`adding move ${gameId} to game id ${gameId}`);
        const game = this.games.find(game => game.id === gameId);
        game === null || game === void 0 ? void 0 : game.moves.push(move);
    }
}
exports.GamesManger = GamesManger;
exports.gameMangerObject = new GamesManger();
