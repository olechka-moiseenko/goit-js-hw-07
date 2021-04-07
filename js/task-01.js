const categories = document.querySelector('ul#categories');
console.log(`В списке ${categories.children.length} категории.`);

for(const i of categories.children){
    console.log(`Категория: ${i.querySelector('h2').textContent}`);
    console.log(`Количество элементов: ${i.querySelectorAll('li').length}`);
}