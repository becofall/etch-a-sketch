let grid = document.getElementById("container");
let cell = document.createElement("div");

function makeSquares(num = 16) {
  for (let i = 0; i < num; i++) {
    let row = grid.appendChild(document.createElement("div"));
    row.className = "row";
    for (let j = 0; j < num; j++) {
      let square = document.createElement("div");
      square.className = "square";
      row.appendChild(square);
    }
  }
}

makeSquares();


