import Tiles from './Tiles.js';

class Config {
    constructor(){
        this.gameContainer = ".game";
       
        this.board = {
            size : 8,// 8 cases
            color:{
                even: "#d0d0d0",
                odd: "#fff"
            }
        }

        this.tiles = new Tiles();
        this.boards = [];
    }

    createBoard() {}
    createPieces() {}
}

export default new Config();