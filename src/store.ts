//in memory store
interface game{
    id:string,
    whitePlayerName:string,
    blackPlayerName:string,
    moves:string[];
}

export const games :game[]= [];