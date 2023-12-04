//открытие меню
const menuBtn = document.querySelector(".menu__btn");
const menuMobile = document.querySelector(".menu__mobile");
menuBtn.addEventListener("click", () => {
  menuMobile.classList.toggle("menu--open");
  menuBtn.classList.toggle("menu--click");
});

//дублирование картинок
const marqueeContainer = document.querySelector(".sponsors__box");
function duplicateImages() {
  const images = marqueeContainer.querySelectorAll("img");
  images.forEach((image) => {
    const clone = image.cloneNode(true);
    marqueeContainer.appendChild(clone);
  });
}

duplicateImages();
