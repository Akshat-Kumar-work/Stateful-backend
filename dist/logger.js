"use strict";
//this file goal is to log the state in every 5 seconds
Object.defineProperty(exports, "__esModule", { value: true });
exports.startLogger = void 0;
const store_1 = require("./store");
function startLogger() {
    setInterval(() => {
        console.log("logging games info after every 5 seconds", store_1.games);
    }, 5000);
}
exports.startLogger = startLogger;
