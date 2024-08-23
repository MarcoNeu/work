let startPosition;
let draggedElement;
export function showMoves(piece, squareId) {
    console.log(squareId);
    switch (piece) {
        case "pawn": {
            showPawnMoves();
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
    console.log("showing moves");
}
function calcMoves() {
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
function showPawnMoves() {
}
