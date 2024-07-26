let startPosition
let draggedElement


export function showMoves(){
    console.log("showing moves")
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