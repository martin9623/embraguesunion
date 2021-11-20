const BOTON = document.querySelector(".header__nav__btn");
const ICON = document.querySelector(".header__nav__btn__icon");
const MENU = document.querySelector(".header__nav__menu");
const LINK = document.querySelector(".header__nav__menu__list__item__link");
const FORM = document.getElementById("form");

const MENU_ACTIVO = (x) => {
  if (x) {
    x.addEventListener("click", () => {
      ICON.classList.toggle("fa-times");
      MENU.classList.toggle("menu-activo");
    });
  }
};

MENU_ACTIVO(BOTON);
MENU_ACTIVO(LINK[0]);
MENU_ACTIVO(LINK[1]);
MENU_ACTIVO(LINK[2]);
MENU_ACTIVO(LINK[3]);
MENU_ACTIVO(LINK[4]);

if (FORM) {
  FORM.addEventListener("submit", (e) => {
    e.preventDefault();
  });
}
