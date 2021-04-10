const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const childNodes = ingredients.map(i => {
  const li = document.createElement('li');
  li.textContent = i;
  return li;
});
const ul = document.querySelector('ul#ingredients');
ul.append(...childNodes);

