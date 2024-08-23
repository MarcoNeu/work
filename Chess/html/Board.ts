import {convertFen, board} from "../src/FenConverter.js"
import { Figure, piecesW, piecesB } from "../src/pieces/Figure.js";
import { toggleMove, showMoves, dragOver, dragDrop } from "../src/move.js";
let domBoard = document.querySelector("#board-space");

let figure: Figure = new Figure();
let row: number = 0;
let file: number = 0;
let rank: number = 7;
let startPosition: string = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
let randomFen: string ="8/2k2P2/p3P2p/1b1n2PB/R2K3P/6b1/1p6/3NQ3 w - - 0 1"

function initBoard(){
    console.log("loaded")
    let squareIndex: number = 0;
    for (let i=0; i<8; i++){
        for(let j=0; j<8; j++){
            const square = document.createElement('div')
            square.classList.add('square')
            square.setAttribute('id', squareIndex.toString())
            //square.setAttribute("draggable", "true")
            square.addEventListener("drag", (e)=>{toggleMove(e)})
            square.addEventListener("dragover", (e)=>{dragOver(e)})
            switch(j % 2){
                case 0: {
                    if(i % 2 != 0){
                        square.classList.add('brown')
                    }
                    break;
                }
                case 1: {
                    if(i % 2 == 0){
                        square.classList.add('brown')
                    }
                    break;
                }
            }
            if(domBoard != null){
                domBoard.append(square)
            }
            squareIndex +=1
        }
        
    }
}
initBoard()

function setUpBoard(){
    let field: HTMLElement;
    let pieces;
    let pieceNr: number = 0;
    let test: Array<Element>;
    for(let i=0;i<board.length;i++){
        if(board[i] != 0){
            if (board[i] <16){
                field = <HTMLElement>document.getElementById(i.toString())
                pieceNr += 1;
                field.innerHTML= `<div piece_id="${pieceNr}" class="piece` + <string>piecesW.get(figure.returnPiece(board[i]))
            }
            if (board[i] >16){
                field = <HTMLElement>document.getElementById(i.toString())
                pieceNr += 1;
                field.innerHTML= `<div piece_id="${pieceNr}" class="piece` + <string>piecesB.get(figure.returnPiece(board[i]))
            } 
        }
    }
    pieces = document.getElementsByClassName("piece")
    test = Array.from(pieces)
    Array.from(pieces).forEach(piece => {
        piece.setAttribute("draggable", "true")
        piece.addEventListener("click", ()=>{showMoves(piece.id, piece.parentElement?.id!)}) })
}

convertFen(startPosition)
setUpBoard()