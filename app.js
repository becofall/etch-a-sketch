let grid = document.querySelector("#container");


function makeSquares(num1 = 16, num2= 22) {
  for (let i = 0; i < num1; i++) {
    let row = grid.appendChild(document.createElement("div"));
    row.className = "row";
    for (let j = 0; j < num2; j++) {
      let cell = document.createElement("div");
      cell.className = "cell";
      row.appendChild(cell);
    }
  }
}

//console.log(square);

makeSquares();

let square = document.querySelectorAll("div");

document.addEventListener("mouseover", function(e) {
  if(e.target.classname == "cell") {
    e.target.style.backgroundColor = "black";
  }
});

function clearGrid() {
  while(grid.firstChild) {
    grid.removeChild(grid.lastChild);
  }
  makeSquares();
}
