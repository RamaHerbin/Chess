import Players from "./Players.js";
import Config from "./Config.js";
import {Pawn} from './Pieces/Pieces.js'
import Tiles from './Tiles.js';

//
class Board {
    constructor() {
        this.$el = document.querySelector(Config.gameContainer);

        console.log('this.$el :>> ', this.$el);
        this.activeTile = null;
        this.activeTileList = [];

        this.player1 = new Players(1);
        this.player2 = new Players(2);
        this.activePlayer = this.player1;
        this.pieces = [];
        this.loadBoard();


        this.events();
        //this.setPossibleMoves();
    }

    loadBoard() {
        this.board = Config.boards[0];
        console.log('this.board :>> ', this.board);
        this.renderBoard();
        this.renderPieces();
        console.log('this.board :>> ', this.board);

    }

    /**
     * Render board on html
     */
    renderBoard() {

        for (let row = 0; row < this.board.length; row++) {
            for (let column = 0; column < this.board.length; column++) {
                let tile = this.board[row][column];
                let bgcolor = "";
                //row is even
                if (row % 2 === 0) {
                    bgcolor = column % 2 === 0 ? Config.board.color.even : Config.board.color.odd;
                } else {
                    bgcolor = column % 2 !== 0 ? Config.board.color.even : Config.board.color.odd;
                }

                this.$el.append(tile.getTemplate(bgcolor));
                tile.coordinates.row = row;
                tile.coordinates.column = column;
            }
        }
    }

      /**
     * Render pieces on board
     */
      renderPieces() {

        for (var c = 0; c < this.board.size; c++) {
            this.board[6][c].addPiece(new Pawn(this.player1))
        }
        console.log('new Pawn(this.player.1) :>> ', new Pawn(this.player1));
        console.log('this.board :>> ', this.board);
        // this.boards['default'] = board;
      }


    onTileClick(selectedTile) {
        //first click, no selected tile
        if (!this.activeTile) {
            if (selectedTile.hasPiece()) {
                let selectedPiece = selectedTile.getPiece();

                //click on active player piece
                if (selectedPiece.player === this.activePlayer.color) {
                    this.setActiveTile(selectedTile);
                }
            }
        }
        //piece already clicked
        else {
            let selectedPiece = selectedTile.getPiece();

            //click on same tile
            if (this.activeTile === selectedTile) {
                this.resetActiveTile();

            }


            // click on active player piece
            // destination tile has a enemy piece + update active tile
        }
    }

    setActiveTile(tile) {
        tile.setSelected(true);
        this.activeTile = tile;

        this.setPossibleMoves();
    }

    setPossibleMoves() {
        const moves = this.activeTile.piece.moves;
        let activeTile = this.activeTile;


    }

    resetActiveTile() {

    }


//   Switch player ?


    isInBounds() {

    }

    updateActiveTileList(tile) {
        this.activeTileList.push(tile);
        tile.setValidMove(true);
    }

    getKing(color) {
        for (let row = 0; row < this.board.length; row++) {
            for (let column = 0; column < this.board.length; column++) {
                let tile = this.board[row][column];
                if (tile.piece.name === "King" && tile.piece.player === color) {
                    return tile.piece;
                }
            }
        }
    }

    events() {
        document.addEventListener("onTileClick", e => {
            this.onTileClick(e.detail.tile);
        });
    }
}

export default Board;