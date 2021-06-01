// [FEITO] capturar o elemento html em que vamos inserir os baloes
// [FEITO] adicionar o balão no container
// [FEITO] determinar um intervalo de tempo para adicionar os baloes sequencialmente

const containerBaloes = document.querySelector(".container-baloes");

function adicionarBalao() {
  const elementoImg = document.createElement("img");

  elementoImg.setAttribute("src", "./assets/baloon.png");
  elementoImg.setAttribute("class", "balao");
  elementoImg.setAttribute("id", "balao");
  elementoImg.setAttribute("onclick", "removerBalao()");
  
  

  const valorLeft = Math.round(Math.random() * 90);
  const valorTop = Math.round(Math.random() * 90);

  elementoImg.style.left = valorLeft + "vw";
  elementoImg.style.top = valorTop + "vh";

  console.log("left=>", valorLeft);
  console.log("Top=>", valorTop);

  containerBaloes.appendChild(elementoImg);

  console.log("Elemento Img =>", elementoImg);
}

setInterval(adicionarBalao, 3000); //3000 milesegundos = 3 segundos


function removerBalao(elemento) {

  var no = document.getElementById("balao");
  console.log(" ==========>   ", no);
if (no.parentNode) {
  no.parentNode.removeChild(no);
}
}
  
