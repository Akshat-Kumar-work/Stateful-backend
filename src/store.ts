interface game{
    id:string,
    whitePlayerName:string,
    blackPlayerName:string,
    moves:string[];
}


//in memory state mangement using array variable
//problem with this approach is that we have to read the code that what type of operation we have to perform to put the move or update
export const games :game[]= [];




//state management with a class
//this is better approach , as we dont have to check the code we simply call the function to update
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

//here we are exporting the single instance of class so every file uses it and not create its own new object
//it is great very great but the problem with this is if some other developer is working together he or she can create a new instance of this class and may save it in db, 
//so can we do something that it will prevent to create another instance or provide some error if its more than 1 instance of it
export const gameMangerObject = new GamesManger();


//here comes singleton pattern
//it means if there is something you want to initialize once than use singleton pattern
//we use singleton in most of the open source 