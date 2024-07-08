"use strict";
//this file goal is to update the state
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = require("./store");
const logger_1 = require("./logger");
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
//for class
// setInterval( ()=>{
//     const currentGameId = Math.random().toString();
//     gameMangerObject.addGame(currentGameId,'akshat','avnish');
//     gameMangerObject.addMove(currentGameId,'e4');
// },5000);
// //logging game info of game class
// startLoggerForGameManger();
//for singleton class
setInterval(() => {
    const currentGameId = Math.random().toString();
    store_1.singleton_instance_GameManger.addGame(currentGameId, 'akshat', 'avnish');
    store_1.singleton_instance_GameManger.addMove(currentGameId, 'e4');
}, 5000);
//logging game info of game class
(0, logger_1.startLoggerForSingletonPattern)();
//here we have to actually create ws server
//creating chess game like structure to understand stateful backend
