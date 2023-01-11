import { videos } from "../data/data.js"

document.getElementById('reproductor').src="https://www.youtube.com/embed/xdQvZyWbZIw";

const printVideos = (listVideos, contenedor) => {
  contenedor.innerHTML = '';
  listVideos.forEach(video => {
    const article = document.createElement('article');
    article.classList.add('main-card');
    article.innerHTML = `
    <figure class="card-image">
      <img src=${"."+video.miniatura} alt="${video.titulo}">
        </figure>
        <h4 class="card-titulo">${video.titulo}</h4>
        <h4 class="card-canal">${video.canal}</h4>
        <h4 class="card-info">${video.info}</h4>
    `
    contenedor.appendChild(article);
  });
};


const main = document.querySelector('.main');

const contenedorCards = document.getElementById('contenedorCards');

document.addEventListener('DOMContentLoaded',()=>{
  let miniaturas = sessionStorage.getItem('miniaturas')? JSON.parse(sessionStorage.getItem("miniaturas")): [];
  if(miniaturas.length === 0) {
    sessionStorage.setItem('miniaturas', JSON.stringify(videos));
    miniaturas = JSON.parse(sessionStorage.getItem('miniaturas'));
  }

  printVideos(miniaturas, contenedorCards);
})

const idVideoStr = sessionStorage.getItem("videoPlayer")? JSON.parse(sessionStorage.getItem("videoPlayer")): null;

const idVideo = idVideoStr ? parseInt(idVideoStr) : null;

console.log(idVideo);

const miniaturas = sessionStorage.getItem('miniaturas')? JSON.parse(sessionStorage.getItem("miniaturas")): [];

const video = idVideo? miniaturas.find((vid) => vid.id === idVideo): {};

console.log(video);

document.getElementById('reproductor').src=video.link;

//cambiar el texto

const title = document.getElementById("player-titulo");
title.innerHTML = video.titulo;

const informacion = document.getElementById("player-info");
informacion.innerHTML = video.info;

document.addEventListener("click", (event) => {

  const { target } = event;
  if(target.classList.contains("logoImg") || target.classList.contains("logoTitle")){
    window.location.href = "../index.html";
  }
});