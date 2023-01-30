// // Пробую. Не відноситься до виконання завдання. Репета 19:45 заняття 13

// const btnEl = document.querySelector("button");

// console.log(btnEl);

// btnEl.addEventListener("click", () => {
//   const counterEl = document.querySelector("#value");
//   console.log(counterEl);
// });

let counterValue = 0;
const valueRef = document.querySelector("#value");
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

const onClickDecrementBtn = () => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
};

const onClickIncrementBtn = () => {
  counterValue += 1;
  valueRef.textContent = counterValue;
};

decrementBtn.addEventListener("click", onClickDecrementBtn);

incrementBtn.addEventListener("click", onClickIncrementBtn);


// decrementBtn.addEventListener('click', () => {
//   counterValue -=1;
//   valueRef.textContent = counterValue;
// });

// incrementBtn.addEventListener('click', () => {
//   counterValue +=1;
//   valueRef.textContent = counterValue;
// });
