const body = document.querySelector('body');
const html = document.querySelector('html');
const menu = document.getElementById('menu');
export const btnHamburger = document.getElementById('hamburger');
export const btnClose = document.getElementById('close');

export function disableScroll() {
  body.style.overflow = 'hidden';
  html.style.overflow = 'hidden';
}

export function enableScroll() {
  body.style.overflow = 'visible';
  html.style.overflow = 'visible';
}

export function openMenu() {
  disableScroll();

  btnHamburger.classList.add('hidden');
  btnClose.classList.remove('hidden');
  menu.classList.remove('translated');
}

export function closeMenu() {
  enableScroll();

  btnClose.classList.add('hidden');
  btnHamburger.classList.remove('hidden');
  menu.classList.add('translated');
}
