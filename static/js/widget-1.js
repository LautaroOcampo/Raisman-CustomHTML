const URLactual = window.location.pathname

const videos = document.querySelectorAll('.video');
let activeVideo = 0;

document.querySelector('#prevVideo').addEventListener('click', () => {
  // Oculta el video actual
  videos[activeVideo].classList.remove('active');
  videos[activeVideo].classList.add('inactive');

  // Calcula el índice del siguiente video
  activeVideo--;
  if (activeVideo < 0) {
    activeVideo = videos.length - 1;
  }

  // Muestra el siguiente video
  videos[activeVideo].classList.remove('inactive');
  videos[activeVideo].classList.add('active');
});

document.querySelector('#nextVideo').addEventListener('click', () => {
  // Oculta el video actual
  videos[activeVideo].classList.remove('active');
  videos[activeVideo].classList.add('inactive');

  // Calcula el índice del siguiente video
  activeVideo++;
  if (activeVideo >= videos.length) {
    activeVideo = 0;
  }

  // Muestra el siguiente video
  videos[activeVideo].classList.remove('inactive');
  videos[activeVideo].classList.add('active');
});

const componentWrapper = document.querySelectorAll(".component-wrapper");
const marcas = document.querySelector(".marcas-section");

setTimeout(function() {
  componentWrapper[0].parentNode.insertBefore(marcas, componentWrapper[0].nextSibling);
}, 200);
