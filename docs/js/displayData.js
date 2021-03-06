export default function displayData(container, data) {
  if (!container) return;

  data.forEach((entry) => {
    const markup = `
  <li class="creative-card">
  <div class="creative-card__img"><img
    src="${entry.img}"
    alt="${entry.name} picture"
    class=""
  /></div>
  <h3 class="creative-card__name">${entry.name}</h3>
  <p class="creative-card__role">${entry.role}</p>
  <p class="creative-card__description">
    ${entry.description}
  </p>
</li>
  `;

    container.insertAdjacentHTML('beforeend', markup);
  });
}
