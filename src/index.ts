//this file goal is to update the state

import { games } from "./store"
import { startLogger } from "./logger";

startLogger();

setInterval( ()=>{
    games.push({
        id:Math.random().toString(),
        whitePlayerName:"akshat",
        blackPlayerName:"avnish",
        moves:[]
    })
    games[0].moves.push('e4');
},5000)