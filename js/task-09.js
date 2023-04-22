function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// 1 найти элементы на странице
const body = document.body;
const colorSpan = document.querySelector(".color");
const changeColorButton = document.querySelector(".change-color");

//2. добавить слушатель события click на кнопку
changeColorButton.addEventListener("click", () => {
  //3 Генерируем случайный цвет
  const randomColor = getRandomHexColor();

  //4. Изменить цвет фона элемента body
  body.style.backgroundColor = randomColor;

  //5. Вывести значение цвета в span
  colorSpan.textContent = randomColor;
});
