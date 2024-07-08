//this file goal is to log the state in every 5 seconds

import { games } from "./store";

export function startLogger (){
setInterval(()=>{
    console.log(games);
},5000)
}