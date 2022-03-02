import Piece from './Piece.js';

class Queen extends Piece {

  constructor(player) {
    let name = "Queen",
      img = "";

    super(name, img, player)

  

  }

  get moves() {

    return this._moves;
  }



}

export default Queen;