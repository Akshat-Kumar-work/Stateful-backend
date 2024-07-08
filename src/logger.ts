//this file goal is to log the state in every 5 seconds

import { games } from "./store";
import { gameMangerObject } from "./store";
import { singleton_instance_GameManger } from "./store";

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



//logging class state with singleton pattern
export function startLoggerForSingletonPattern(){
    setInterval(()=>{
        console.log("logging games info of class built using singleton pattern state after every 5 seconds ",singleton_instance_GameManger.games);
    },5000)
}

