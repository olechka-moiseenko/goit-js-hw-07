const input = document.querySelector("input");
const btnRender = document.querySelector('button[data-action="render"]');
const btnDestroy = document.querySelector('button[data-action="destroy"]');
const boxes = document.querySelector("div#boxes");

btnRender.addEventListener("click", btnRenderHandler);
btnDestroy.addEventListener("click", btnDestroyHandler);

function btnRenderHandler() {
  if (input.value) {
    createBoxes(input.value);
  } else {
    alert("Please specify number of DIVs to create");
  }
}

function btnDestroyHandler() {
  destroyBoxes();
}

function createBoxes(amount) {
  destroyBoxes();
  let size = 30;
  const container = [];
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.height = `${size}px`;
    div.style.width = div.style.height;
    div.style.backgroundColor = getRandomColor();
    container.push(div);
    size += 10;
  }
  boxes.append(...container);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

function getRandomColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `rgb(${red},${green},${blue})`;
}
