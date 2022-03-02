import Tiles from './Tiles.js';




class Config {
    constructor(){
        this.gameContainer = ".game";
       
        this.tiles = new Tiles();

    }

    createBoard() {}
    createPieces() {}
}

export default new Config();