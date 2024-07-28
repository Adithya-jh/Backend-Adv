import { GameManager, games } from "./store"

import { startLogger } from "./logger"

const gameManager = new GameManager()

startLogger()
setInterval(() => {
    gameManager.addGame("Alice","Bob")
},5000)


//now here we updated the variable in the store [which will be in the backend] in a certain inverval.
//but it is not a good practice to update the variable like this.

