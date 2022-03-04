import Piece from './Piece.js';

class King extends Piece {
    _moves;

  constructor(player) {
    let name = "King",
      img = "";

    super(name, img, player)

  

  }

  get moves() {

    return this._moves;
  }



}

export default King;