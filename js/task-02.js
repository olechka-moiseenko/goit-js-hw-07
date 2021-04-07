const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const childNodes = [];
for(const i of ingredients){
    const li = document.createElement('li');
    li.textContent = i;
    childNodes.push(li);
}
const ul = document.querySelector('ul#ingredients');
ul.append(...childNodes);

