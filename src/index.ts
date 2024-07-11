//this file goal is to update the state

import { games } from "./store"
import { startLogger } from "./logger";
import { startLoggerForGameManger } from "./logger";
import { gameMangerObject } from "./store";
import { gameMangerUsing_Singleton} from "./store";
import { startLoggerForSingletonPattern } from "./logger";

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
setInterval( ()=>{
    const currentGameId = Math.random().toString();
    gameMangerUsing_Singleton.getInstance().addGame(currentGameId,'akshat','avnish');
   gameMangerUsing_Singleton.getInstance().addMove(currentGameId,'e4');
},5000);

//logging game info of game class
startLoggerForSingletonPattern();




//here we have to actually create ws server
//creating chess game like structure to understand stateful backend