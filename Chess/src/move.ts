let startPosition
let draggedElement


export function showMoves(piece: string, squareId: string){
    console.log(squareId)
    switch(piece){

        case "pawn": {
            showPawnMoves(parseInt(squareId))
        }
        case "rook": {

        }
        case "queen": {

        }
        case "bishop": {

        }
        case "knight": {

        }
        case "king": {

        }
    }
    console.log("showing moves")
}

function calcMoves(){

}

export function toggleMove(event: Event){
    event.stopPropagation
    //console.log("dragging")
    console.log((<HTMLElement>event.target).parentNode)
}

export function dragOver(e: Event){
    e.preventDefault()
} 

export function dragDrop(e:Event){
    e. stopPropagation();
    console.log((<HTMLElement>e.target).parentNode)
}

function showPawnMoves(squareId: number){

}