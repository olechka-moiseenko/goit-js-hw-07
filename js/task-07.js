const input = document.querySelector("input#font-size-control");
const span = document.querySelector("span#text");

input.addEventListener("input", updateFontSize);

function updateFontSize(e) {
  span.style.fontSize = `calc(${e.target.value}% * 2)`;
}
