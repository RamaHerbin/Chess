import Tiles from './Tiles.js';
import {Pawn} from './Pieces/Pieces.js'

class Config {
    constructor(){
        this.gameContainer = ".game";
       
        this.board = {
            size : 8,// 8 cases
            color:{
                even: "#d1d1d1",
                odd: "#fff"
            }
        }

        this.tiles = new Tiles();
        this.boards = [];


        // this.boards['default'] = this.createBoard();

        this.boards.push( this.createBoard() );
    }

    createBoard() {
        let board = [];

        for (let row = 0; row < this.board.size; row++) {
            board.push([]); //create new row
            for (let column = 0; column < this.board.size; column++) {
                board[row].push(new Tiles()); //create new column
            }

        }

        board[6][1].addPiece(new Pawn(this.player1))


        return board;
    }
    createPieces() {}
}

export default new Config();