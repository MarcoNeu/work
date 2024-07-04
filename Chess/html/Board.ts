import {convertFen, board} from "../src/FenConverter.js"
import { Figure, pieces } from "../src/pieces/Figure.js";
import { toggleMove, showMoves } from "../src/move.js";
let domBoard = document.querySelector("#board-space");

let figure: Figure = new Figure();
let row: number = 0;
let file: number = 0;
let rank: number = 7;
let startPosition: string = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"

function initBoard(){
    console.log("loaded")
    let squareIndex: number = 0;
    for (let i=0; i<8; i++){
        for(let j=0; j<8; j++){
            const square = document.createElement('div')
            square.classList.add('square')
            square.setAttribute('id', squareIndex.toString())
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
    for(let i=0;i<board.length;i++){
        if(board[i] != 0){
            if (board[i] >16){
                let field: HTMLElement = <HTMLElement>document.getElementById(i.toString())
                field.innerHTML= <string>pieces.get(figure.returnPiece(board[i]))
                field.classList.add("black")
                field.addEventListener("click", ()=>{showMoves()})
                field.addEventListener("dragstart", ()=>{toggleMove(board)})
            } else if (board[i] <16){
                let field: HTMLElement = <HTMLElement>document.getElementById(i.toString())
                field.innerHTML= <string>pieces.get(figure.returnPiece(board[i]))
                field.classList.add("white")
            }
        }
    }
}

convertFen(startPosition)
setUpBoard()