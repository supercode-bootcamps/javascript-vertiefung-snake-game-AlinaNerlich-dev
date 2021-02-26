// ----------------GRID--------------------

const grid = document.createElement("div");
const body = document.querySelector("body");

body.appendChild(grid);
grid.id = "snakeField";

let i = 0;

for (let i = 0; i < 100; i++) {
  const item = document.createElement("div");
  item.classList.add("item");
  grid.appendChild(item);
}

// ----------------RED BOX--------------------
const itemAll = document.querySelectorAll(".item");
var setTimer = setInterval(randomDiv, 3000);

function randomDiv() {
  let index = Math.floor((Math.random() * 100) + 1);
  itemAll[index].style.backgroundColor = "red";
  setTimeout(function () {
    itemAll[index].style.backgroundColor = "";
  }, 1000);
}

// ----------------COUNTER & ORANGE--------------------
let counterNumber = 0;
const counter = document.createElement("div");
counter.innerHTML = counterNumber;
body.appendChild(counter);
counter.id = "counter";

if (counterNumber === 2) {
  clearInterval(setTimer);
} else {
  itemAll.forEach((item) => {
    item.addEventListener("mouseover", (event) => {
      let color = item.style.backgroundColor;
      event.target.style.backgroundColor = "orange";

      setTimeout(function () {
        item.style.backgroundColor = "";
      }, 500);
      // warum funtkioniert zeile 41 nicht auch in zeile 48???

      if (color == "red") {
        counterNumber++;
        counter.innerHTML = counterNumber;
      }
    })
  })
};
