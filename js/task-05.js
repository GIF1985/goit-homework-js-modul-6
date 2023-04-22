// Находим элементы инпута и span
const nameInputEl = document.querySelector("#name-input");
const nameOutputEl = document.querySelector("#name-output");

// Добавляем слушатель события input на инпут
nameInputEl.addEventListener("input", () => {
  // Получаем текущее значение инпута
  const inputValueEl = nameInputEl.value.trim();

  // Обновляем содержимое элемента span
  if (inputValueEl === "") {
    nameOutputEl.textContent = "Anonymous";
  } else {
    nameOutputEl.textContent = inputValueEl;
  }
});
