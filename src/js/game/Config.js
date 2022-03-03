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


        this.boards['default'] = this.createBoard();
    }

    createBoard() {
        let board = [];

        for (let r = 0; r < this.board.size; r++) {
            board.push([]); //create new row
            for (let c = 0; c < this.board.size; c++) {
                board[r].push(new Tiles()); //create new column
            }

        }
        return board;
    }
    createPieces() {}
}

export default new Config();