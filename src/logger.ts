//this file goal is to log the state in every 5 seconds

import { games } from "./store";

export function startLogger (){
setInterval(()=>{
    console.log("logging games info after every 5 seconds",games);
},5000)
}