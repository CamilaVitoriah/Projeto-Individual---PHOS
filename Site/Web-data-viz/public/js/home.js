function faca() {
  window.location.href = "./cadastro.html";
}

const box = document.querySelector('.conteiner'); 
const imagens = document.querySelectorAll('.conteiner img');
let contador = 0;

function carrosel() {
  contador++;

  if (contador > imagens.length -3) {
    contador = 0;
  }



  box.style.transform = `translateX(${-contador * 1250}px)`;
}

setInterval(carrosel, 2000);
