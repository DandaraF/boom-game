// [FEITO] capturar o elemento html em que vamos inserir os baloes
// [FEITO] adicionar o balão no container
// [FEITO] determinar um intervalo de tempo para adicionar os baloes sequencialmente

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

setInterval(adicionarBalao, 3000); //3000 milesegundos = 3 segundos


  // var no = document.getElementById("balao"); //está pegando o 1 elemento
  // var elemento = document.imag
  // console.log(" ==========>   ", elemento);
// if (no.parentNode) {
//   no.parentNode.removeChild(no);
// }

  
