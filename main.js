// [FEITO] capturar o elemento html em que vamos inserir os baloes
// [FEITO] adicionar o balão no container
// [FEITO] determinar um intervalo de tempo para adicionar os baloes sequencialmente
// [FEITO] identificar quando um balao é clicado
// [FEITO] criar uma função para remover o balao
// [FEITO] Contador no jogo

// TO DO
// [] Acelerar aparição dos balões conforme vão sendo estourados
// [] Limite de X baloes na tela

const containerBaloes = document.querySelector(".container-baloes");

<<<<<<< HEAD
=======
let pontuacao = 0;
>>>>>>> 784d9a58293665674065029dd311d906e06a31f8

function adicionarBalao() {

  const elementoImg = document.createElement("img");

  elementoImg.setAttribute("src", "./assets/baloon.png");
  elementoImg.setAttribute("class", "balao");
  // elementoImg.setAttribute("id", "balao");
  // elementoImg.setAttribute("onclick", "removerBalao()");
  
  const valorLeft = Math.round(Math.random() * 90);
  const valorTop = Math.round(Math.random() * 90);

  elementoImg.style.left = valorLeft + "vw";
  elementoImg.style.top = valorTop + "vh";

<<<<<<< HEAD
=======
  // usando função separada para remover
  elementoImg.addEventListener("click", () => removeBalao(elementoImg));

  // + 1 opção de remoção do elemento
  // elementoImg.addEventListener("click", (event) => {
  // event.target.remove();
  // });
>>>>>>> 784d9a58293665674065029dd311d906e06a31f8

  elementoImg.addEventListener("click", () => {
    containerBaloes.removeChild(elementoImg);
  })
  containerBaloes.appendChild(elementoImg);

<<<<<<< HEAD


=======
  const arrayBaloes = document.querySelectorAll(".balao");
  const quantidadeDeBaloes = arrayBaloes.length;

  // PERDE
  if (quantidadeDeBaloes === 3) {
    clearInterval(intervalBalao);

    alert("Você perdeu!");
    pontuacao = 0;
    atualizarPontuacao(0);

    const arrayElementosFilhos = Array.from(containerBaloes.children);

    arrayElementosFilhos.forEach((elementoFilho) => {
      removeBalao(elementoFilho, false, false);
    });
  }
>>>>>>> 784d9a58293665674065029dd311d906e06a31f8
}

function removeBalao(element, executarSom = true, somarPontuacao = true) {
  if (executarSom) {
    const boomSound = new Audio("./assets/boom.mpeg");
    boomSound.volume = 0.1;
    boomSound.play();
  }

  containerBaloes.removeChild(element);

  if (somarPontuacao) {
    pontuacao = pontuacao + 1;
    atualizarPontuacao(pontuacao);
  }
}

function atualizarPontuacao(novaPontuacao) {
  const elementoPontuacao = document.querySelector("#pontuacao");

  elementoPontuacao.textContent = novaPontuacao;
}

<<<<<<< HEAD

  // var no = document.getElementById("balao"); //está pegando o 1 elemento
  // var elemento = document.imag
  // console.log(" ==========>   ", elemento);
// if (no.parentNode) {
//   no.parentNode.removeChild(no);
// }

  
=======
const intervalBalao = setInterval(adicionarBalao, 3000); //3000 milesegundos = 3 segundos
>>>>>>> 784d9a58293665674065029dd311d906e06a31f8
