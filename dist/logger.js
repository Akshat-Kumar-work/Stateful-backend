"use strict";
//this file goal is to log the state in every 5 seconds
Object.defineProperty(exports, "__esModule", { value: true });
exports.startLoggerForGameManger = exports.startLogger = void 0;
const store_1 = require("./store");
const store_2 = require("./store");
//logging state variable
function startLogger() {
    setInterval(() => {
        console.log("logging games info after every 5 seconds", store_1.games);
    }, 5000);
}
exports.startLogger = startLogger;
//logging class state
function startLoggerForGameManger() {
    setInterval(() => {
        console.log("logging games info of class state after every 5 seconds", store_2.gameMangerObject.games);
    }, 5000);
}
exports.startLoggerForGameManger = startLoggerForGameManger;
