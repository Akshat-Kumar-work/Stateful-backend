//this file goal is to log the state in every 5 seconds

import { games } from "./store";
import { gameMangerObject } from "./store";

//logging state variable
export function startLogger (){
setInterval(()=>{
    console.log("logging games info after every 5 seconds",games);
},5000)
}


//logging class state
export function startLoggerForGameManger(){
    setInterval(()=>{
        console.log("logging games info of class state after every 5 seconds",gameMangerObject.games);
    },5000)
}

