document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('mobile-menu-button');
    const menuBackground = document.getElementById('mobile-menu-bg');
    const mobileMenu = document.querySelector('.lg:hidden');
    const body = document.body;
  
    // Fonction pour ouvrir le menu
    function openMenu() {
      mobileMenu.classList.add('block');
      mobileMenu.classList.remove('hidden');
      body.classList.add('overflow-hidden');
    }
  
    // Fonction pour fermer le menu
    function closeMenu() {
      mobileMenu.classList.add('hidden');
      mobileMenu.classList.remove('block');
      body.classList.remove('overflow-hidden');
    }
  
    // Écouter le clic sur le bouton de menu
    menuButton.addEventListener('click', function () {
      if (mobileMenu.classList.contains('hidden')) {
        openMenu();
      } else {
        closeMenu();
      }
    });
  
    // Écouter le clic sur l'arrière-plan du menu pour le fermer
    menuBackground.addEventListener('click', function () {
      closeMenu();
    });
});

const carousel = document.getElementById('carousel');
const next = document.getElementById('next');
const prev = document.getElementById('prev');

let index = 0;

next.addEventListener('click', () => {
    index = (index + 1) % carousel.children.length;
    carousel.style.transform = `translateX(-${index * 100}%)`;
});

prev.addEventListener('click', () => {
    index = (index - 1 + carousel.children.length) % carousel.children.length;
    carousel.style.transform = `translateX(-${index * 100}%)`;
});
  