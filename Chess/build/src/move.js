let startPosition;
let draggedElement;
export function showMoves() {
    console.log("showing moves");
}
export function toggleMove(event) {
    event.stopPropagation;
    //console.log("dragging")
    console.log(event.target.parentNode);
}
export function dragOver(e) {
    e.preventDefault();
}
export function dragDrop(e) {
    e.stopPropagation();
    console.log(e.target.parentNode);
}
