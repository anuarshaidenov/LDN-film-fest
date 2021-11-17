import { stickHeader, stickHamburger } from './sticky.js';
import * as mobileMenu from './mobileMenu.js';
import displayCurrentLink from './currentPage.js';
import displayData from './displayData.js';
import { openModal, closeModal } from './modal.js';
import { saveData, loadData, emptyLocalStorage } from './localStorage.js';

const links = document.querySelectorAll('.nav-link a');
const mobileLinks = document.querySelectorAll('.mobile-menu__nav-link');
const creativesContainer = document.getElementById('creatives');
const modal = document.getElementById('modal');
const bookBtns = document.querySelectorAll('.book');
const closeModalBtn = document.getElementById('close-modal');
const inputName = document.getElementById('name');
const inputSurname = document.getElementById('surname');
const inputEmail = document.getElementById('email');
const bookForm = document.getElementById('book-form');

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
    img: './images/steven.png',
  },
  {
    name: 'Zoe Kravitz',
    role: 'An actress',
    description:
      'Recipient of multiple accolades, including two Academy Awards, three Screen Actors Guild Awards, a BAFTA award, a Golden Globe Award and a Primetime Emmy Award.',
    img: './images/zoe-kravitz.png',
  },
  {
    name: 'Denzel Washington',
    role: 'An actor',
    description:
      'Recipient of multiple accolades, including two Academy Awards, three Screen Actors Guild Awards, a BAFTA award, a Golden Globe Award and a Primetime Emmy Award.',
    img: './images/denzel.png',
  },
  {
    name: 'Brad Pitt',
    role: 'An actor',
    description:
      'Recipient of multiple accolades, including two Academy Awards, three Screen Actors Guild Awards, a BAFTA award, a Golden Globe Award and a Primetime Emmy Award.',
    img: './images/brad-pitt.png',
  },
  {
    name: 'Quentin Tarantino',
    role: 'A film director',
    description:
      'Recipient of multiple accolades, including two Academy Awards, three Screen Actors Guild Awards, a BAFTA award, a Golden Globe Award and a Primetime Emmy Award. Director of Pupl Fiction.',
    img: './images/quentin.png',
  },
];

// Display the creatives
displayData(creativesContainer, creatives);

window.addEventListener('scroll', stickHeader);
window.addEventListener('scroll', stickHamburger);

// Mobile menu
mobileMenu.btnHamburger.addEventListener('click', mobileMenu.openMenu);
mobileMenu.btnClose.addEventListener('click', mobileMenu.closeMenu);
mobileLinks.forEach((link) => {
  link.addEventListener('click', mobileMenu.closeMenu);
});

// Open modal
bookBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    openModal(modal);
  });
});

// Close modal
closeModalBtn.addEventListener('click', () => {
  closeModal(modal);
});
modal.addEventListener('click', (e) => {
  if (e.target.id === 'modal') closeModal(modal);
});

// Save form data in the local storage
inputName.addEventListener('input', () => {
  saveData(inputName, inputSurname, inputEmail);
});
inputSurname.addEventListener('input', () => {
  saveData(inputName, inputSurname, inputEmail);
});
inputEmail.addEventListener('input', () => {
  saveData(inputName, inputSurname, inputEmail);
});

bookForm.addEventListener('submit', emptyLocalStorage);

// Load form data from the local storage.
loadData(inputName, inputSurname, inputEmail);

// Render current link
displayCurrentLink(links);
