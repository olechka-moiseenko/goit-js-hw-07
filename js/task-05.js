const input = document.querySelector('input#name-input');
const span = document.querySelector('span#name-output');

input.addEventListener('input', updateValue);

function updateValue(e) {
  span.textContent = e.target.value ? e.target.value : 'незнакомец';
}