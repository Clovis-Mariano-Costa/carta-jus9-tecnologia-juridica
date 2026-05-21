// Jus 9 - scripts essenciais da Carta.
(function () {
  const toggle = document.querySelector('.mobile-toggle');
  const menu = document.querySelector('.menu');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('open');
    });
  }

  document.querySelectorAll('.menu a').forEach((link) => {
    link.addEventListener('click', () => {
      if (menu) menu.classList.remove('open');
    });
  });

  const year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();
})();
