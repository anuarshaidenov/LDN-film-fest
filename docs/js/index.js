import { stickHeader, stickHamburger } from './sticky.js';
import * as mobileMenu from './mobileMenu.js';
import { displayCurrentLink } from './currentPage.js';

const links = document.querySelectorAll('.nav-link a');
const mobileLinks = document.querySelectorAll('.mobile-menu__nav-link a');

window.addEventListener('scroll', stickHeader);
window.addEventListener('scroll', stickHamburger);

mobileMenu.btnHamburger.addEventListener('click', mobileMenu.openMenu);
mobileMenu.btnClose.addEventListener('click', mobileMenu.closeMenu);
mobileLinks.forEach((link) => {
  link.addEventListener('click', mobileMenu.closeMenu);
});

displayCurrentLink(links);
