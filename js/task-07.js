//1. найти элементы инпута и текста
const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

//2. Добавить слушатель события input
fontSizeControl.addEventListener("input", () => {
  //3. получить значение инпута и устанавливаем его как размер шрифта текста
  const fontSize = fontSizeControl.value + "px";
  text.style.fontSize = fontSize;
});
