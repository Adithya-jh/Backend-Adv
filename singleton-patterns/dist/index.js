"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = require("./store");
const logger_1 = require("./logger");
(0, logger_1.startLogger)();
setInterval(() => {
    store_1.gameManager.addGame(Math.random().toString(), Math.random().toString());
}, 5000);
//now here we updated the variable in the store [which will be in the backend] in a certain inverval.
//but it is not a good practice to update the variable like this.
