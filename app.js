let grid = document.querySelector("#container");
const button = document.querySelector(".button");
const leftKnob = document.querySelector(".knob-left");
const rightKnob = document.querySelector(".knob-right");
const resetGrid = document.querySelector("#resetGrid");
let rows = 16;
let columns = 22;


function makeSquares (rows, columns) {
  for (let i = 0; i < rows; i++) {
    let row = grid.appendChild(document.createElement("div"));
    row.className = "row";
    for (let j = 0; j < columns; j++) {
      let cell = document.createElement("div");
      cell.className = "cell";
      row.appendChild(cell);
    }
  }
}

function changeSize() {
  
}

//console.log(square);

makeSquares (rows, columns);

let square = document.querySelectorAll("div");

document.addEventListener("mouseover", function(e) {
  if(e.target.classname == "cell") {
    e.target.style.backgroundColor = "black";
  }
});

leftKnob.addEventListener("click", )

function clearGrid() {
  while(grid.firstChild) {
    grid.removeChild(grid.lastChild);
  }
  makeSquares(rows, columns);
}

resetGrid.addEventListener("click", clearGrid);