import Piece from './Piece.js';

class Pawn extends Piece {
    _moves;

    constructor(player) {
        let name = "Pawn",
            img = "";

        super(name, img, player)
    }

    get moves() {
        return this._moves;
    }
}
export default Pawn;