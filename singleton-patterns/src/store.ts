
interface Game {
    id:string;
    whitePlayer:string;
    blackPlayer:string;
    moves:string[];
}


export const games:Game[] =[]


export class GameManager{
    games:Game[] =[]
    private static instance:GameManager
    private constructor(){
        this.games = []
    }

    //this is how we create a singleton pattern instance

    static getInstance(){
        if(!GameManager.instance){
            GameManager.instance = new GameManager()
        }
        return GameManager.instance
    }

    addMove(gameId:string,move:string){
        const game = this.games.find(game => game.id === gameId)
        if(game){
            game.moves.push(move)
        }
    }
    
    addGame(whitePlayer:string,blackPlayer:string){
        this.games.push({
            id: Math.random().toString(),
            whitePlayer,
            blackPlayer,
            moves:[]
        })
    }

    log(){
        console.log(this.games);
        
    }
}

//this is how we create a new instance and export it in singleton pattern 
//now we can use only one instance even if we import it in multiple files
export const gameManager = GameManager.getInstance()


// by this everyone will use the same instance of the gameManager, but singleton pattern is not recommended.
// export const gameManager = new GameManager()