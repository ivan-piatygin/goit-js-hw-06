const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// 1. Створюється змінна для списку.
const ingredientsList = document.querySelector('#ingredients');

const itemsRef = ingredients.map((ingredient) => {
  const item = document.createElement('li');
  item.textContent = ingredient;
  item.classList.add('item');
  return item;
});

ingredientsList.append(...itemsRef);

// for (const ingredient of ingredients) {
//   // 2. Створює "лішкі"
//   const ingredientEl = document.createElement("li");
//   // 3. Вставляє у "лішкі" текст (елемент заданого масиву)
//   ingredientEl.textContent = ingredient;
//   // 4. Вставка "лішкі" у список
//   ingredientsList.append(ingredientEl);
// }

// console.log(ingredientsList);
