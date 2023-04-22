// 1. Найти список категорий по id
const listCategoriesEl = document.querySelector("#categories");

//2. Найти все элементы списка категорий
const itemsCategoriesEl = listCategoriesEl.querySelectorAll(".item");

//3. Вывести количество категорий в консоль
console.log(`Number of categories: ${itemsCategoriesEl.length}`);

//4.Для выполнения этой задачи нужно использовать метод forEach()
itemsCategoriesEl.forEach((item) => {
  //5. Найти текст заголовка элемента и количество элементов в категории
  const nameCategoryEl = item.querySelector("h2").textContent;
  const elementsCategoryEl = item.querySelectorAll("li").length;

  //6. Вывести информацию о категории в консоль
  console.log(`Category: ${nameCategoryEl}\nElements: ${elementsCategoryEl}`);
});
