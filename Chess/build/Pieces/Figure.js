"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Figure = void 0;
class Figure {
    constructor() {
        this.none = 0;
        this.pawn = 1;
        this.bishop = 2;
        this.knight = 3;
        this.rook = 4;
        this.queen = 5;
        this.king = 6;
        this.white = 8;
        this.black = 16;
        this.pieceMask = 0b0111;
        this.whiteMask = 0b01000;
        this.blackMask = 0b10000;
        this.colourMask = 0b11000;
        /*private position: [number, number];
        private colour: PieceColour;
    
        constructor(position: [number, number], colour: PieceColour){
            this.position = position;
            this.colour = colour;
        }
    
        getPosition(){
            return this.position;
        }
    
        setPosition(position: [number, number]){
            this.position = position;
        }
    
        getColour(){
            return this.colour;
        }
    
        setColour(colour: PieceColour){
            this.colour = colour;
        }
            */
    }
    returnPiece(piece) {
        return (piece & this.pieceMask);
    }
    returnColour(piece) {
        return (piece & this.colourMask);
    }
}
exports.Figure = Figure;
