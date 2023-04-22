const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=550",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=550",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=550",
    alt: "Group of Horses Running",
  },
];

//1. найти список ul
const galleryListEl = document.querySelector(".gallery");

//2. создать разметку для каждого объекта в массиве images
const galleryItemsMarkupEl = images
  .map(({ url, alt }) => {
    return `
    <li class="gallery__item">
      <img class="gallery__image" src="${url}" alt="${alt}">
    </li>
  `;
  })
  .join("");

//3. добавить разметку в список ul
galleryListEl.insertAdjacentHTML("beforeend", galleryItemsMarkupEl);
