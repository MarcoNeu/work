import { convertFen, board } from "../src/FenConverter.js";
import { Figure, piecesW, piecesB } from "../src/pieces/Figure.js";
import { toggleMove, showMoves, dragOver } from "../src/move.js";
let domBoard = document.querySelector("#board-space");
let figure = new Figure();
let row = 0;
let file = 0;
let rank = 7;
let startPosition = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
let randomFen = "8/2k2P2/p3P2p/1b1n2PB/R2K3P/6b1/1p6/3NQ3 w - - 0 1";
function initBoard() {
    console.log("loaded");
    let squareIndex = 0;
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.setAttribute('id', squareIndex.toString());
            //square.setAttribute("draggable", "true")
            square.addEventListener("drag", (e) => { toggleMove(e); });
            square.addEventListener("dragover", (e) => { dragOver(e); });
            switch (j % 2) {
                case 0: {
                    if (i % 2 != 0) {
                        square.classList.add('brown');
                    }
                    break;
                }
                case 1: {
                    if (i % 2 == 0) {
                        square.classList.add('brown');
                    }
                    break;
                }
            }
            if (domBoard != null) {
                domBoard.append(square);
            }
            squareIndex += 1;
        }
    }
}
initBoard();
function setUpBoard() {
    let field;
    let pieces;
    let pieceNr = 0;
    let test;
    for (let i = 0; i < board.length; i++) {
        if (board[i] != 0) {
            if (board[i] < 16) {
                field = document.getElementById(i.toString());
                pieceNr += 1;
                field.innerHTML = `<div piece_id="${pieceNr}" class="piece` + piecesW.get(figure.returnPiece(board[i]));
            }
            if (board[i] > 16) {
                field = document.getElementById(i.toString());
                pieceNr += 1;
                field.innerHTML = `<div piece_id="${pieceNr}" class="piece` + piecesB.get(figure.returnPiece(board[i]));
            }
        }
    }
    pieces = document.getElementsByClassName("piece");
    test = Array.from(pieces);
    Array.from(pieces).forEach(piece => {
        piece.setAttribute("draggable", "true");
        piece.addEventListener("click", () => { showMoves(piece.id, piece.parentElement?.id); });
    });
}
convertFen(startPosition);
setUpBoard();
