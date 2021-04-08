const input = document.querySelector('input#validation-input');

input.addEventListener('blur', checkInput);
const dataLength = Number.parseInt(input.dataset.length);

function checkInput(e) {
  if(dataLength===e.target.value.length){
    e.target.classList.add('valid');
    e.target.classList.remove('invalid');
  }
  else {
    e.target.classList.add('invalid');
    e.target.classList.remove('valid');
  }
}