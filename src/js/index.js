import { stickHeader, stickHamburger } from './sticky.js';
import * as mobileMenu from './mobileMenu.js';

window.addEventListener('scroll', stickHeader);
window.addEventListener('scroll', stickHamburger);

mobileMenu.btnHamburger.addEventListener('click', mobileMenu.openMenu);
mobileMenu.btnClose.addEventListener('click', mobileMenu.closeMenu);
