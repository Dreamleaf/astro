// Toggle the menu on and off
document.addEventListener('astro:page-load', () => {
    document.querySelector('.hamburger').addEventListener('click', () => {
      document.querySelector('.nav-links').classList.toggle('expanded');
    });
});
