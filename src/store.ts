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
 class GamesManger{

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
//example -> how can we inforce that no one can ever create this new game manger instance there will be only single instance of this game manager
//to implement this make the constructor private, so that no one can call it from out side



//singleton -> making constructor private
//so how we can create a single instance -> by using static methods and variable
// static method or variable or attribute is part of class it is not depend or associated upon instance of class/object

export class gameMangerUsing_Singleton{

    //it is a static attribute type of this instance is same class 
    //basically creating a same instance of same class which is private 
    private static instance : gameMangerUsing_Singleton;

    games: game[] = [];

    private constructor(){
        this.games = [];
    }

    static getInstance(){
        //agar instance bna hua hai phle se aur kisi bevkoof developer n again getInstance call kari hai toh
        //new instance return na ho toh we are checking it by static attribute of class
        if(gameMangerUsing_Singleton.instance){
            return gameMangerUsing_Singleton.instance;
        }else{
            //agar instance phle se nai hai toh new instance bnao and return it
            this.instance = new gameMangerUsing_Singleton();
            return gameMangerUsing_Singleton.instance;
        }
      
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
        console.log(`adding move ${move} to game id ${gameId}`);
        const game = this.games.find(game=>game.id === gameId);
        game?.moves.push(move);
    }



}

//now we dont have to export the object of class we can call the getInstance function anywhere 
//it will provide us the same instance all over the application 
 //export const singleton_instance_GameManger = gameMangerUsing_Singleton.getInstance();
