import Piece from './Piece.js';

class Rook extends Piece {
    _moves;

    constructor(player) {
        let name = "Rook",
            img = "";

        super(name, img, player)
    }

    get moves() {
        return this._moves;
    }
}
export default Rook;