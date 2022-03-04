import Piece from './Piece.js';

class Bishop extends Piece {
    _moves;

    constructor(player) {
        let name = "Bishop",
            img = "";

        super(name, img, player)



    }

    get moves() {

        return this._moves;
    }



}

export default Bishop;