"use strict";
//this file goal is to update the state
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = require("./store");
const logger_1 = require("./logger");
(0, logger_1.startLogger)();
setInterval(() => {
    store_1.games.push({
        id: Math.random().toString(),
        whitePlayerName: "akshat",
        blackPlayerName: "avnish",
        moves: []
    });
    store_1.games[0].moves.push('e4');
}, 5000);
//here we have to actually create ws server
//creating chess game like structure to understand stateful backend
