let grid = document.querySelector("#board");
const button = document.querySelector(".button");
const leftKnob = document.querySelector(".knob-left");
const rightKnob = document.querySelector(".knob-right");
const resetGrid = document.querySelector("#resetGrid");
let color = "black";

function makeSquares(size) {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let numDivs = size * size;

  for(let i = 0; i < numDivs; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.backgroundColor = color;
    // cell.addEventListener("mouseover", colorDiv);
    grid.insertAdjacentElement("beforeend", cell);
  }
}

makeSquares(16);

function gridSizePrompt() {
  let input = prompt("Choose grid size");
  if(input > 0 && input <= 100) {
    clearGrid();
    makeSquares(input);
   } else if (input == "") {
    prompt("Please provide a number");
   } else {
    prompt("Must be a number between 1 - 100");
   }
}

function cellColor() {

}

rightKnob.addEventListener("click", () => {
  let randomColor = `hsl(${Math.random() * 360}, 100%, 50%)`
  if (color == "black") {
    color = randomColor;
  } else {
    color = "black";
  }
})

leftKnob.addEventListener("click", () => {
  let size = gridSizePrompt();
  makeSquares(size);
  // window.alert("testing");
});


document.addEventListener("mouseover", function(e) {
  if(e.target.classname == "cell") {
    e.target.style.backgroundColor = "black";
  }
});


function clearGrid() {
  grid.innerHTML = "";
  // makeSquares(16);
}

resetGrid.addEventListener("click", () => {
  location.reload();
  // window.alert("testing");
});




//TODO
//Reset grid DONE
//Grid size functionality
//Color mode functionality
//Mobile accessibility

// function makeSquares(num) {

// }

// function makeCell(num) {
//   num = num || 10;
//   for(let i = 0; i < num; i++) {
//     cell = document.createElement("div");
//     cell.classList.add("cell");
//     grid.appendChild(cell);
    
//   }
//   // let cellWidth = 640/num;
//   // let cellHeight = 640/num;
//   // document.cell.style.width = cellWidth;
//   // document.cell.style.height = cellHeight;
// }

// function makeSquares(row, col) {
//   grid.style.setProperty("--rows", row);
//   grid.style.setProperty("--cols", col);
//   for(let i = 0; i < row; i++) {
//     makeCell(col);
//   }
  
// }w.className = "row";
//     for (let j = 0; j < num; j++) {
//       let cell = document.createElement("div");
//       cell.className = "cell";
//       row.appendChild(cell);
//     }
//   }
//   let cellWidth = 640/num;
//   let cellHeight = 640/num;
//   let cellStyle = document.querySelector(".cell");
//   cellStyle.style.width = cellWidth + "px";
//   cellStyle.style.height = cellHeight + "px";
//   // document.cell.style.width = cellWidth;
//   // document.cell.style.height = cellHeight;
//   // document.button.style.backgroundColor = "purple";
// }

// function makeSquares(num) {
//   num = num || 10;
//   for (let rows = 0; rows < num; rows++) {
//     for (let columns = 0; columns < num; columns++) {
//       grid.appendChild(cell);
//     };
//   };
//   let cellWidth = 640/num;
//   let cellHeight = 640/num;
//   document.cell.style.width = cellWidth;
//   document.cell.style.height = cellHeight;
// }n makeSquares (num) {
//   for (let i = 0; i < num; i++) {
//     let row = grid.appendChild(document.createElement("div"));
//     row.className = "row";
//     for (let j = 0; j < num; j++) {
//       let cell = document.createElement("div");
//       cell.className = "cell";
//       row.appendChild(cell);
//     }
//   }
//   let cellWidth = 640/num;
//   let cellHeight = 640/num;
//   let cellStyle = document.querySelector(".cell");
//   cellStyle.style.width = cellWidth + "px";
//   cellStyle.style.height = cellHeight + "px";
//   // document.cell.style.width = cellWidth;
//   // document.cell.style.height = cellHeight;
//   // document.button.style.backgroundColor = "purple";
// }

// function makeSquares(num) {
//   num = num || 10;
//   for (let rows = 0; rows < num; rows++) {
//     for (let columns = 0; columns < num; columns++) {
//       grid.appendChild(cell);
//     };
//   };
//   let cellWidth = 640/num;
//   let cellHeight = 640/num;
//   document.cell.style.width = cellWidth;
//   document.cell.style.height = cellHeight;
// }