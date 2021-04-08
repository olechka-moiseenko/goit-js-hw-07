let counterValue = 0;
const btnIncrement = document.querySelector('button[data-action="increment"]');
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const span = document.querySelector("span#value");
btnIncrement.addEventListener("click", increment);
btnDecrement.addEventListener("click", decrement);

function updateSpan() {
  span.textContent = counterValue;
}
function increment() {
  counterValue++;
  updateSpan();
}
function decrement() {
  counterValue--;
  updateSpan();
}
