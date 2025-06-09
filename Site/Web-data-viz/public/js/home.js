function faca() {
  window.location.href = "./cadastro.html";
}

const box = document.getElementById('img'); // é o .contener
const imagens = document.querySelectorAll('#img img'); // as imagens dentro
let contador = 0;

function carrosel() {
  contador++;

  if (contador >= imagens.length) {
    contador = 0;
  }

  box.style.transform = `translateX(-${contador * 100}%)`;
}

setInterval(carrosel, 4000);
