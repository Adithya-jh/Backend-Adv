import { games } from "./store";


export const startLogger = () => {
    setInterval(() => {
        console.log(games);
    }, 5000);
    
}


