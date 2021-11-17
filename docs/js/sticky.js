// Get the header
const header = document.getElementById('header');
const hamburger = document.getElementById('hamburger-container');

// Get the offset position of the navbar
const stickyHeader = header.offsetTop;
const stickyHamburger = hamburger.offsetTop;

// Add the sticky class to the header when you reach its scroll position.
export function stickHeader() {
  if (window.pageYOffset > stickyHeader) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}

export function stickHamburger() {
  if (window.pageYOffset > stickyHamburger) {
    hamburger.classList.add('hamburger-sticky');
  } else {
    hamburger.classList.remove('hamburger-sticky');
  }
}
