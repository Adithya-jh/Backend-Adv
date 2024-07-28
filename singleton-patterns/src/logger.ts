import { gameManager, GameManager, games } from "./store";


export const startLogger = () => {
    setInterval(() => {
        //@ts-ignore
        console.log(gameManager.log());
    }, 5000);
    
}


