import { disableScroll, enableScroll } from './mobileMenu.js';

export function closeModal(modal) {
  enableScroll();
  modal.classList.add('hidden');
}

export function openModal(modal) {
  disableScroll();
  modal.classList.remove('hidden');
}
