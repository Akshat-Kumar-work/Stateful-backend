"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.singleton_instance_GameManger = exports.gameMangerObject = exports.games = void 0;
//in memory state mangement using array variable
//problem with this approach is that we have to read the code that what type of operation we have to perform to put the move or update
exports.games = [];
//state management with a class
//this is better approach , as we dont have to check the code we simply call the function to update
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
//here we are exporting the single instance of class so every file uses it and not create its own new object
//it is great very great but the problem with this is if some other developer is working together he or she can create a new instance of this class and may save it in db, 
//so can we do something that it will prevent to create another instance or provide some error if its more than 1 instance of it
exports.gameMangerObject = new GamesManger();
//here comes singleton pattern
//it means if there is something you want to initialize once than use singleton pattern
//we use singleton in most of the open source 
//example -> how can we inforce that no one can ever create this new game manger instance there will be only single instance of this game manager
//to implement this make the constructor private, so that no one can call it from out side
//singleton -> making constructor private
//so how we can create a single instance -> by using static methods and variable
// static method or variable or attribute is part of class it is not depend or associated upon instance of class/object
class gameMangerUsing_Singleton {
    constructor() {
        this.games = [];
        this.games = [];
    }
    static getInstance() {
        //agar instance bna hua hai phle se aur kisi bevkoof developer n again getInstance call kari hai toh
        //new instance return na ho toh we are checking it by static attribute of class
        if (gameMangerUsing_Singleton.instance) {
            return gameMangerUsing_Singleton.instance;
        }
        else {
            //agar instance phle se nai hai toh new instance bnao and return it
            this.instance = new gameMangerUsing_Singleton();
            return gameMangerUsing_Singleton.instance;
        }
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
        console.log(`adding move ${move} to game id ${gameId}`);
        const game = this.games.find(game => game.id === gameId);
        game === null || game === void 0 ? void 0 : game.moves.push(move);
    }
}
exports.singleton_instance_GameManger = gameMangerUsing_Singleton.getInstance();
