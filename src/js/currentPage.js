export function displayCurrentLink(links) {
  links.forEach((link) => {
    if (link.href === window.location.href) link.classList.add('current');
    else link.classList.remove('current');
  });
}
