//1. найти форму, поля ввода и кнопку отправки
const loginForm = document.querySelector(".login-form");
const emailInput = loginForm.elements.email;
const passwordInput = loginForm.elements.password;
const submitButton = loginForm.querySelector('button[type="submit"]');

//2. добавить слушатель события submit на форму
loginForm.addEventListener("submit", (event) => {
  //3. Отменяем стандартное поведение формы, чтобы страница не перезагружалась
  event.preventDefault();

  //4. проверить, заполнены ли оба поля
  if (emailInput.value === "" || passwordInput.value === "") {
    alert("All fields are required!");
    return;
  }

  //5ю создать объект с данными из полей формы
  const formData = {
    email: emailInput.value,
    password: passwordInput.value,
  };

  //6. Вывести объект с данными в консоль
  console.log(formData);

  //7. очистить значения полей формы
  loginForm.reset();
});
