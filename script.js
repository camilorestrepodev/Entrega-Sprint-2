import { videos } from "./data/data.js"

// array function que recorre lista de videos

const printVideos = (listVideos, contenedor) => {
  contenedor.innerHTML = '';
  listVideos.forEach(video => {
    const article = document.createElement('article');
    article.classList.add('main-card');
    article.innerHTML = `
            <figure class="card-image">
                    <img id=${video.id} src=${video.miniatura} alt="${video.titulo}" class="card-img">
                </figure>
                    <h4 class="card-titulo">${video.titulo}</h4>
                    <h5 class="card-canal">${video.canal}>
                    <h6 class="card-info">${video.info}</h6>
        `
    contenedor.appendChild(article);
  });
};

// Data sesión

const main = document.querySelector('.main');

const contenedorVideos = document.getElementById('contenedorCards')

document.addEventListener('DOMContentLoaded', () => {
  let miniaturas = sessionStorage.getItem('miniaturas') ? JSON.parse(sessionStorage.getItem("miniaturas")) : [];
  if (miniaturas.length === 0) {
    sessionStorage.setItem('miniaturas', JSON.stringify(videos));
    miniaturas = JSON.parse(sessionStorage.getItem('miniaturas'));
  }

  printVideos(miniaturas, contenedorVideos);
})

// Filtración por videos.

const botonTodos = document.getElementById('todos');
const botonMusica = document.getElementById('musica');
const botonProgramacion = document.getElementById('programacion');
const botonDiseno = document.getElementById('diseno');

const filterButtons = [botonTodos, botonMusica, botonProgramacion, botonDiseno];

filterButtons.forEach(button => {
  button.addEventListener("click", (event) => {
    let videosFiltrados = [];
    if (button.id === "todos") {
      videosFiltrados = videos;
    }
    else {
      videosFiltrados = videos.filter(video => video.categoria === button.id);
    }
    console.log(videosFiltrados);
    printVideos(videosFiltrados, contenedorVideos);
  });
});

// Abrir nuevo video.
document.addEventListener("click", (event) => {

  const { target } = event;

  if (target.classList.contains("card-img")) {
    console.log(target.id);
    sessionStorage.setItem("videoPlayer", JSON.stringify(target.id));
    window.location.href = "./pages/nuevovideo.html";
  }
  if (target.classList.contains("logo") || target.classList.contains("h1-text")) {
    window.location.href = "./index.html";
  }
});

