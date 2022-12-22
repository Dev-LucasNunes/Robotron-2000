// hoisting só funciona com função

const controle = document.querySelectorAll("[data-controle]");
const estatistica = document.querySelectorAll("[data-estatistica]");
const color = document.querySelectorAll(".color");
let robo = document.querySelector(".robo");
console.log(robo);

const pecas = {
  bracos: {
    forca: 29,
    poder: 35,
    energia: -21,
    velocidade: -5,
  },

  blindagem: {
    forca: 41,
    poder: 20,
    energia: 0,
    velocidade: -20,
  },
  nucleos: {
    forca: 0,
    poder: 7,
    energia: 48,
    velocidade: -24,
  },
  pernas: {
    forca: 27,
    poder: 21,
    energia: -32,
    velocidade: 42,
  },
  foguetes: {
    forca: 0,
    poder: 28,
    energia: 0,
    velocidade: -2,
  },
};

function mudaCor(cor) {
  robo.src = `img/robotron-${cor}.png`;
}

color.forEach((el) => {
  el.addEventListener("click", (evt) => {
    mudaCor(evt.target.textContent);
    evt.preventDefault();
  });
});

function manipulaDados(operacao, controle) {
  const peca = controle.querySelector("[data-contador");
  //assim eu consigo pegar o controle contador que está dentro do controle ajuste somente

  if (operacao === "-") {
    peca.value = parseInt(peca.value) - 1;
  } else {
    peca.value = parseInt(peca.value) + 1;
  }
}

function atualizaEstatistica(peca) {
  estatistica.forEach((elemento) => {
    elemento.textContent =
      parseInt(elemento.textContent) +
      pecas[peca][elemento.dataset.estatistica];
  });
}

controle.forEach((el) => {
  el.addEventListener("click", (evt) => {
    manipulaDados(evt.target.dataset.controle, evt.target.parentNode); //pega quem foi clicado e o pai dele respectivamente, mesmo com nomes iguais ele pega somente o pai do elemento clicado
    atualizaEstatistica(evt.target.dataset.peca);
  });
});

//data-atribute serve para voce deixar mais generico o codigo, voce consegue deixar sempre o mesmo valor nele, mesmo se o texto da div mudar, ou seja, é melhor do que usa o textContent
//voce coloca data-(escreve o que quiser aqui sem parenteses) e na frente entre aspas voce pode colocar o nome de um atributo ou não
//ai voce pode comparar esse atributo, ou usar ele para qualquer coisa
//quando vc chama com o query selector voce coloca ele entre colchetes
//serve muito para voce desacoplar o javascript do css com as classes ou do html, assim tanto um quanto o outro pode ser mudado sem quebrar o javascript (boas praticas)

// const controle = document.querySelectorAll("[data-controle]");
// const estatistica = document.querySelectorAll("[data-estatistica]");
