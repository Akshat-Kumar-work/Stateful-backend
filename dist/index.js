"use strict";
//this file goal is to update the state
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("./logger");
const store_1 = require("./store");
//startLogger();
//setting value into simple array variable for in memory state
// setInterval( ()=>{
//     games.push({
//         id:Math.random().toString(),
//         whitePlayerName:"akshat",
//         blackPlayerName:"avnish",
//         moves:[]
//     })
//     games[0].moves.push('e4');
// },5000);
setInterval(() => {
    const currentGameId = Math.random().toString();
    store_1.gameMangerObject.addGame(currentGameId, 'akshat', 'avnish');
    store_1.gameMangerObject.addMove(currentGameId, 'e4');
}, 5000);
//logging game info of game class
(0, logger_1.startLoggerForGameManger)();
//here we have to actually create ws server
//creating chess game like structure to understand stateful backend
