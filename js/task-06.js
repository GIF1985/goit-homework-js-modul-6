//1. найти элемент инпута
const validationInputEl = document.querySelector("#validation-input");

//2. получить значение атрибута data-length
const validLength = parseInt(validationInputEl.getAttribute("data-length"));

//3. добавить слушатель события blur на инпут
validationInputEl.addEventListener("blur", () => {
  //4. получить текущее значение инпута и его длину
  const inputValue = validationInputEl.value.trim();
  const inputLength = inputValue.length;

  //5. Добавляем или удаляем классы в зависимости от длины значения
  if (inputLength === validLength) {
    validationInputEl.classList.remove("invalid");
    validationInputEl.classList.add("valid");
  } else {
    validationInputEl.classList.remove("valid");
    validationInputEl.classList.add("invalid");
  }
});
