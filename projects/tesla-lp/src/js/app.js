const menu = document.getElementById("menu");
const closeBtn = document.getElementById("close");
const burger = document.getElementById("burger");

const eventListenerMenuCreator = (elenemt, display) => {
  elenemt.addEventListener("click", (e) => {
    e.preventDefault();
    menu.style = `display: ${display}`;
  });
};

eventListenerMenuCreator(burger, 'flex');
eventListenerMenuCreator(closeBtn, 'none');