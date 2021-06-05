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


  elementoImg.addEventListener("click", () => {
    containerBaloes.removeChild(elementoImg);
  })
  containerBaloes.appendChild(elementoImg);



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



  
