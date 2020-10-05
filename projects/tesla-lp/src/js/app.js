const menu = document.getElementById("menu");
const closeBtn = document.getElementById("close");
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

const eventListenerMenuCreator = (elenemt, display) => {
  elenemt.addEventListener("click", (e) => {
    e.preventDefault();
    menu.style = `display: ${display}`;
  });
};

eventListenerMenuCreator(burger, 'flex');
eventListenerMenuCreator(closeBtn, 'none');

document.addEventListener('scroll', () => {
  if (window.pageYOffset < nav.clientHeight) {
      nav.classList.remove('nav--filled');

  } else nav.classList.add("nav--filled");
});

AOS.init({
  duration: 1000
});