
interface Game {
    id:string;
    whitePlayer:string;
    blackPlayer:string;
    moves:string[];
}


export const games:Game[] =[]


export class GameManager{
    games:Game[] =[]
    constructor(){
        this.games = []
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
}