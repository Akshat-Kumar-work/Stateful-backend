interface game{
    id:string,
    whitePlayerName:string,
    blackPlayerName:string,
    moves:string[];
}


//in memory state mangement using array variable
export const games :game[]= [];




//state management with a class
export class GamesManger{

    games: game[] = [];

    constructor(){
        this.games = [];
    }
    
 
    //function add game
    addGame(gameid:string , whitePlayerName:string , blackPlayerName:string ){
        const game = {
            id:gameid,
            whitePlayerName:whitePlayerName,
            blackPlayerName:blackPlayerName,
            moves:[]
        }

        this.games.push(game);
    }

       //function to add move
       addMove(gameId:string,move:string){
        console.log(`adding move ${gameId} to game id ${gameId}`);
        const game = this.games.find(game=>game.id === gameId);
        game?.moves.push(move);
    }



}

export const gameMangerObject = new GamesManger();