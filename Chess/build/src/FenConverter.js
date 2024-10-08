import { Figure } from "../src/pieces/Figure.js";
let figure = new Figure();
let file = 0;
let rank = 7;
export let board = [];
let pieceMap = new Map([
    ['p', 1],
    ['b', 2],
    ['n', 3],
    ['r', 4],
    ['q', 5],
    ['k', 6]
]);
export function convertFen(fen) {
    let fenArr = fen.split(" ");
    fenArr[0].split("").forEach(char => {
        if (char == "/") {
            file = 0;
            rank--;
        }
        else if (!isNaN(Number(char) * 1)) {
            for (let i = 0; i < Number(char); i++) {
                board.push(0);
            }
        }
        else if (char == char.toUpperCase()) {
            board.push(figure.setColourWhite((Number(pieceMap.get(char.toLowerCase())))));
        }
        else if (char == char.toLowerCase()) {
            board.push(figure.setColourBlack((Number(pieceMap.get(char.toLowerCase())))));
        }
    });
    console.log(board);
    return board;
}
function returnGamePiece() {
}
