const liItems = document.querySelectorAll('ul#categories > li.item');
console.log(`В списке ${liItems.length} категории.`);

liItems.forEach(i => {
    console.log(`Категория: ${i.querySelector('h2').textContent}`);
    console.log(`Количество элементов: ${i.querySelectorAll('li').length}`);
});