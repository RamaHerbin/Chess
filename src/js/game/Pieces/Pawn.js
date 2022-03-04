import Piece from './Piece.js';
import blackIcon from '../../../images/pawn.png'
class Pawn extends Piece {
    // _moves;

    constructor(player) {
        let name = "Pawn",
            img = "";

        img = player == 1 ? `url(${blackIcon}) no-repeat center` : `url(${blackIcon}) no-repeat center`;
        super(name, img, player);
        this.firstMove = true;
        this.attack = true;
    }

    get moves() {
        return this._moves;
    }
}
export default Pawn;