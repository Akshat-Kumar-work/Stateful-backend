//this file goal is to update the state

import { games } from "./store"
import { startLogger } from "./logger";
import { startLoggerForGameManger } from "./logger";
import { gameMangerObject } from "./store";

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




setInterval( ()=>{
    const currentGameId = Math.random().toString();
    gameMangerObject.addGame(currentGameId,'akshat','avnish');
    gameMangerObject.addMove(currentGameId,'e4');
},5000);

//logging game info of game class
startLoggerForGameManger();


//here we have to actually create ws server
//creating chess game like structure to understand stateful backend