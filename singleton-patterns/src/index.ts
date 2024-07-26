import { games } from "./store"

import { startLogger } from "./logger"

startLogger()
setInterval(() => {
    games.push({
        id: Math.random().toString(),
        whitePlayer: "Alice",
        blackPlayer: "Bob",
        moves: []
    })
},5000)

//now here we updated the variable in the store [which will be in the backend] in a certain inverval.
//but it is not a good practice to update the variable like this.

