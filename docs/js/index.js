import { stickHeader, stickHamburger } from './sticky.js';
import * as mobileMenu from './mobileMenu.js';
import displayCurrentLink from './currentPage.js';
import displayData from './displayData.js';

const links = document.querySelectorAll('.nav-link a');
const mobileLinks = document.querySelectorAll('.mobile-menu__nav-link a');
const creativesContainer = document.getElementById('creatives');

const creatives = [
  {
    name: 'Mahershalla Ali',
    role: 'An actor and a rapper',
    description:
      'Recipient of multiple accolades, including two Academy Awards, three Screen Actors Guild Awards, a BAFTA award, a Golden Globe Award and a Primetime Emmy Award.',
    img: './images/mahershalla.png',
  },
  {
    name: 'Steven Yeun',
    role: 'An actor',
    description:
      'Recipient of multiple accolades, including two Academy Awards, three Screen Actors Guild Awards, a BAFTA award, a Golden Globe Award and a Primetime Emmy Award.',
    img: './images/steven.jpeg',
  },
  {
    name: 'Zoe Kravitz',
    role: 'An actress',
    description:
      'Recipient of multiple accolades, including two Academy Awards, three Screen Actors Guild Awards, a BAFTA award, a Golden Globe Award and a Primetime Emmy Award.',
    img: './images/zoe-kravitz.jpeg',
  },
  {
    name: 'Denzel Washington',
    role: 'An actor',
    description:
      'Recipient of multiple accolades, including two Academy Awards, three Screen Actors Guild Awards, a BAFTA award, a Golden Globe Award and a Primetime Emmy Award.',
    img: './images/denzel.jpeg',
  },
  {
    name: 'Brad Pitt',
    role: 'An actor',
    description:
      'Recipient of multiple accolades, including two Academy Awards, three Screen Actors Guild Awards, a BAFTA award, a Golden Globe Award and a Primetime Emmy Award.',
    img: './images/brad-pitt.jpeg',
  },
  {
    name: 'Quentin Tarantino',
    role: 'A film director',
    description:
      'Recipient of multiple accolades, including two Academy Awards, three Screen Actors Guild Awards, a BAFTA award, a Golden Globe Award and a Primetime Emmy Award. Director of Pupl Fiction.',
    img: './images/quentin.jpeg',
  },
];

displayData(creativesContainer, creatives);

window.addEventListener('scroll', stickHeader);
window.addEventListener('scroll', stickHamburger);

mobileMenu.btnHamburger.addEventListener('click', mobileMenu.openMenu);
mobileMenu.btnClose.addEventListener('click', mobileMenu.closeMenu);
mobileLinks.forEach((link) => {
  link.addEventListener('click', mobileMenu.closeMenu);
});

displayCurrentLink(links);
