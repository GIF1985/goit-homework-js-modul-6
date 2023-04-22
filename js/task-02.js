const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

//1. найти список ul#ingredients
const ingredientsListEl = document.querySelector("#ingredients");

//2. создать элементы li для каждого ингредиента в массиве ingredients
const ingredientsItemsEl = ingredients.map((ingredient) => {
  const item = document.createElement("li");
  item.textContent = ingredient;
  item.classList.add("item");
  return item;
});

//3. добавить все элементы li в список
ingredientsListEl.append(...ingredientsItemsEl);
