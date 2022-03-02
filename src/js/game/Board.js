import Players from "./Players.js";
import Config from "./Config.js";

//
class Board {
  constructor() {
    this.$el = document.querySelector(Config.gameContainer);

    this.activeTile = null;
    this.activeTileList = [];

    this.player1 = new Players(1);
    this.player2 = new Players(2);
    this.activePlayer = this.player1;
    this.pieces = [];
    this.loadBoard();

    this.events();
    this.activeTile = this.pieces[3];

    //this.setPossibleMoves();
  }

  loadBoard() {
    this.board = Config.boards["default"];
    this.renderBoard();
  }
  /**
   * Render board on html
   */
  renderBoard() {
    for (let r = 0; r < this.board.length; r++) {
        console.log('r :>> ', r);
      for (let c = 0; c < this.board.length; c++) {
          console.log('c :>> ', c);
        let tile = this.board[r][c];
        let bgcolor = "";
        //row is even
        if (r % 2 == 0) {
          bgcolor =
            c % 2 == 0 ? Config.board.color.even : Config.board.color.odd;
        } else {
          bgcolor =
            c % 2 != 0 ? Config.board.color.even : Config.board.color.odd;
        }

        this.$el.append(tile.getTemplate(bgcolor));
        tile.coordinates.r = r;
        tile.coordinates.c = c;
      }
    }
  }

  onTileClick(selectedTile) {
    //first click, no selected tile
    if (!this.activeTile) {
      if (selectedTile.hasPiece()) {
        var selectedPiece = selectedTile.getPiece();

        //click on active player piece
        if (selectedPiece.player == this.activePlayer.color) {
          this.setActiveTile(selectedTile);
        }
      }
    }
    //piece already clicked
    else {
      var selectedPiece = selectedTile.getPiece();

      //click on same tile
      if (this.activeTile == selectedTile) {
        this.resetActiveTile();
        return;
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
    for (let r = 0; r < this.board.length; r++) {
      for (var c = 0; c < this.board.length; c++) {
        let tile = this.board[r][c];
        if (tile.piece.name == "King" && tile.piece.player == color) {
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