// // Пробую. Не відноситься до виконання завдання.

// console.log(document);

// const categoriesEl = document.querySelector('#categories');
// console.log(categoriesEl);

// const itemEls = document.querySelectorAll('.item');
// console.log(itemEls);


// !!! - Виконання завдання 1

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.

const liItemArr = document.querySelectorAll('li.item');
console.log(`Number of categories: ${liItemArr.length}`);

// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// const liItem = document.querySelector('li.item');

for (const liItem of liItemArr) {
    const liItemHead = liItem.querySelector('h2');
    console.log(`Category: ${liItemHead.textContent}`);
    
    const liArr = liItem.querySelectorAll('li');
    console.log(`Elements: ${liArr.length}`);
}



