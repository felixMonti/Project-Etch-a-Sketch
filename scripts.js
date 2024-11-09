const GRIDSIDE = 600;
let squaresPerSide = 16;

const sketchArea = document.querySelector("#sketch-area");
sketchArea.style.width = `${GRIDSIDE}px`;
sketchArea.style.height = `${GRIDSIDE}px`;

function changeBackgroundColor(){
    this.style.backgroundColor = "black";
}


function createGridCells() {
    const numberOfSquares = (squaresPerSide*squaresPerSide)
    const widthOrHeigth = `${(GRIDSIDE/squaresPerSide - 2)}px`

    for (let i = 0; i < numberOfSquares; i++) {
        const gridCell = document.createElement("div");

        gridCell.style.width = gridCell.style.height = widthOrHeigth;
        gridCell.classList.add("cell");

        sketchArea.appendChild(gridCell);

        gridCell.addEventListener("mouseover", changeBackgroundColor);
    }
}

createGridCells();

