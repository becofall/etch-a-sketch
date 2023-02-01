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
    cell.addEventListener("mouseover", cellColor);
    cell.addEventListener("click", cellColor);
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
    prompt("Please provide a number between 1-100");
   } else {
    prompt("Must be a number between 1 - 100");
   }
}

function cellColor() {
  if(color == "black") {
    this.style.backgroundColor = "black";
  } else {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  }
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
});

function clearGrid() {
  grid.innerHTML = "";
}

resetGrid.addEventListener("click", () => {
  location.reload();
});




//TODO
//Reset grid DONE
//Grid size functionality DONE
//Color mode functionality DONE
//Mobile accessibility
//Footer DONE

