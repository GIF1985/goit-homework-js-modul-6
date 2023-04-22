//1. найти элементы счетчика
const counter = document.querySelector("#counter");
const counterValue = document.querySelector("#value");
const decrementBtn = counter.querySelector('[data-action="decrement"]');
const incrementBtn = counter.querySelector('[data-action="increment"]');

//2. Инициализирывать значение счетчика
let currentValue = 0;

//3. Добавляем слушатели кликов на кнопки
decrementBtn.addEventListener("click", () => {
  currentValue -= 1;
  counterValue.textContent = currentValue;
});

incrementBtn.addEventListener("click", () => {
  currentValue += 1;
  counterValue.textContent = currentValue;
});
