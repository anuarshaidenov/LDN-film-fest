const body = document.querySelector('body');
const html = document.querySelector('html');
const menu = document.getElementById('menu');
const hamburgerContainer = document.getElementById('hamburger-container');
export const btnHamburger = document.getElementById('hamburger');
export const btnClose = document.getElementById('close');

export function openMenu() {
  body.style.overflow = 'hidden';
  html.style.overflow = 'hidden';

  hamburgerContainer.classList.remove('hamburger-sticky');
  btnHamburger.classList.add('hidden');
  btnClose.classList.remove('hidden');
  menu.classList.remove('translated');
}

export function closeMenu() {
  body.style.overflow = 'visible';
  html.style.overflow = 'visible';

  hamburgerContainer.classList.add('hamburger-sticky');
  btnClose.classList.add('hidden');
  btnHamburger.classList.remove('hidden');
  menu.classList.add('translated');
}
