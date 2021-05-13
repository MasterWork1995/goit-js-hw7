const categoriesRef = document.querySelector('#categories');
console.log(`В списке ${categoriesRef.children.length} категории.`);

const catItemRef = document.querySelectorAll('.item');
console.log(`Категория: ${catItemRef[0].firstElementChild.textContent}`);
console.log(`Количество элементов: ${catItemRef[0].lastElementChild.children.length}`);

console.log(`Категория: ${catItemRef[1].firstElementChild.textContent}`);
console.log(`Количество элементов: ${catItemRef[1].lastElementChild.children.length}`);

console.log(`Категория: ${catItemRef[2].firstElementChild.textContent}`);
console.log(`Количество элементов: ${catItemRef[2].lastElementChild.children.length}`);


