//Lista: cartas e seus atributos
var baralhoMaquina = [
  {
    nome: "Itachi Uchiha",
    imagem: "https://c.tenor.com/xiDx7IfcZ1cAAAAC/itachi-uchiha.gif",
    atributos: {
      combate: 5,
      resistencia: 1,
    },
  },
  {
    nome: "Pain",
    imagem:
      "https://i.pinimg.com/originals/24/cf/2a/24cf2abe18b7920cae323dc7fbbf4f68.gif",
    atributos: {
      combate: 8,
      resistencia: 6,
    },
  },
  {
    nome: "Orochimaru",
    imagem:
      "https://c.tenor.com/IPjQ1ZM4LYIAAAAC/%D0%BE%D1%80%D0%BE%D1%87%D0%B8%D0%BC%D0%B0%D1%80%D1%83-orochimaru.gif",
    atributos: {
      combate: 6,
      resistencia: 3,
    },
  },
  {
    nome: "Deidara",
    imagem: "https://media.tenor.com/u3FKVwgnz0AAAAAM/naruto-deidara.gif",
    atributos: {
      combate: 4,
      resistencia: 6,
    },
  },
  {
    nome: "Kakuzu",
    imagem:
      "https://64.media.tumblr.com/4f0ea6cd9d7afed95b4c6d328d6f24b2/4843c9924ff222a2-d3/s540x810/60f3a6f75a77e81276e5891f62db61a5dd0341d9.gif",
    atributos: {
      combate: 8,
      resistencia: 5,
    },
  },
  {
    nome: "Kisame Hoshigaki",
    imagem:
      "https://i.pinimg.com/originals/41/89/4a/41894a707a85c6e9c03061333a1266b8.gif",
    atributos: {
      combate: 5,
      resistencia: 6,
    },
  },
  {
    nome: "Konan",
    imagem:
      "https://i.pinimg.com/originals/d0/ef/af/d0efaf7bf5a2f3552f98a03e8b049ebf.gif",
    atributos: {
      combate: 8,
      resistencia: 5,
    },
  },
  {
    nome: "Sasori",
    imagem:
      "https://i.pinimg.com/originals/b2/03/de/b203de6e1f7a17551a5aa91738963367.gif",
    atributos: {
      combate: 7,
      resistencia: 6,
    },
  },
];

var baralhoJogador = [
  {
    nome: "Naruto",
    imagem:
      "https://i.pinimg.com/originals/36/ef/7e/36ef7ebb93b416261b2d94a2fa8575e6.gif",
    atributos: {
      combate: 8,
      resistencia: 9,
    },
  },
  {
    nome: "Kakashi",
    imagem:
      "https://i.pinimg.com/originals/78/a7/0c/78a70cf373599e7d88f686ffd5447611.gif",
    atributos: {
      combate: 8,
      resistencia: 6,
    },
  },
  {
    nome: "Sasuke",
    imagem:
      "https://i.pinimg.com/originals/06/7b/90/067b90993286eaced297d2d31510427c.gif",
    atributos: {
      combate: 7,
      resistencia: 3,
    },
  },
  {
    nome: "Sakura",
    imagem:
      "https://i.pinimg.com/originals/53/57/92/5357927ba4cf4e27a584a04fe55e8f00.gif",
    atributos: {
      combate: 6,
      resistencia: 8,
    },
  },
  {
    nome: "Ino Yamanaka",
    imagem:
      "https://i.pinimg.com/originals/06/67/62/066762f5f72eb2ab35569dbc6449161d.gif",
    atributos: {
      combate: 6,
      resistencia: 8,
    },
  },
  {
    nome: "Shika",
    imagem:
      "https://i.pinimg.com/originals/4a/83/ef/4a83ef1f74141a9485e30097e4497638.gif",
    atributos: {
      combate: 7,
      resistencia: 4,
    },
  },
  {
    nome: "Chouji Chou",
    imagem:
      "https://i.pinimg.com/originals/71/6e/78/716e787df1909585515242f71419f6ba.gif",
    atributos: {
      combate: 4,
      resistencia: 6,
    },
  },
  {
    nome: "Rock Lee",
    imagem:
      "https://pa1.aminoapps.com/6320/686f298e04036f2cb33a687f1d9059769e8ad2dd_00.gif",
    atributos: {
      combate: 6,
      resistencia: 7,
    },
  }
];

var cartaMaquina;
var cartaJogador;

var divCartaMaquina = document.getElementById("carta-maquina");

// Função do botao sortear
function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * baralhoMaquina.length);

  cartaMaquina = baralhoMaquina[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * baralhoJogador.length);

  // while (enquanto - cartaMaquina == cartaJogador)

  cartaJogador = baralhoJogador[numeroCartaJogador];
  document.getElementById("btnSortear").disabled = true; //desabilita botão sortear
  document.getElementById("btnJogar").disabled = false; // habilita botão jogar

  limparCartaMaquina(); // ocultar a carta

  // Exibindo a carta do Jogador com HTML
  var divCartaJogador = document.getElementById("carta-jogador");

  divCartaJogador.innerHTML = exibirCarta(divCartaJogador, cartaJogador);

  var tagHTML = `<div id="opcoes" class="carta-status">`;

  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    // for para inserir os atributos com radios buttons
    opcoesTexto +=
      "<input type='radio' name ='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  divCartaJogador.innerHTML += tagHTML + opcoesTexto + "</div>";
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

// Função para encontrar a carta
function localizarCarta(baralho, carta) {
  for (var i = 0; i < baralho.length; i++) {
    if (baralho[i].nome == carta.nome) {
      var indice = i;
    }
  }
  return indice;
}

// Função do botao jogar
function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();

  if (typeof atributoSelecionado === "undefined") {
    alert("Selecione a skill para continuar");
  } else {
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
    var elementoResultado = document.getElementById("resultado");
    var indice;

    // A condição para comparar os atributo
    if (valorCartaJogador > valorCartaMaquina) {
      elementoResultado.innerHTML =
        "<p class='resultado-final'>Parabéns! Você Venceu!!";
      var indice = localizarCarta(baralhoMaquina, cartaMaquina);
      baralhoMaquina.splice(indice, 1);
      baralhoJogador.push(cartaMaquina);
    } else if (valorCartaJogador < valorCartaMaquina) {
      elementoResultado.innerHTML =
        "<p class='resultado-final'>Que pena... Você Perdeu.</p>";
      indice = localizarCarta(baralhoJogador, cartaJogador);
      baralhoJogador.splice(indice, 1);
      baralhoMaquina.push(cartaJogador);
    } else {
      elementoResultado.innerHTML = "<p class='resultado-final'>Empate!!</p>";
    }

    document.getElementById("btnJogar").disabled = true; // desabilita botão jogar
    document.getElementById("btnSortear").disabled = false; //habilita botão sortear

    //Exibir a cartaMaquina

    divCartaMaquina.innerHTML = exibirCarta(divCartaMaquina, cartaMaquina);

    var tagHTML = `<div id="opcoes" class="carta-status">`;

    var opcoesTexto = "";
    for (var atributo in cartaMaquina.atributos) {
      opcoesTexto +=
        "<p type='text' name ='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        cartaMaquina.atributos[atributo] +
        "</p>";
    }
    divCartaMaquina.innerHTML += tagHTML + opcoesTexto + "</div>";
  }

  //Variavel de verificacao das cartas (acabaram)
  var elementoResultadoFinal = document.getElementById("resultadoFinal");

  if (baralhoMaquina.length == 0) {
    elementoResultadoFinal.innerHTML =
      "<p class='resultado-final'>Fim do Jogo! Parabéns, você Venceu! A Maquina está sem cartas.</p>";
    document.getElementById("btnJogar").disabled = true; // desabilita botão jogar
    document.getElementById("btnSortear").disabled = true; //desabilita botão sortear
  } else if (baralhoJogador.length == 0) {
    elementoResultadoFinal.innerHTML =
      "<p class='resultado-final'>Fim do Jogo! Que pena, você Perdeu! Suas cartas acabaram.</p>";
    document.getElementById("btnJogar").disabled = true; // desabilita botão jogar
    document.getElementById("btnSortear").disabled = true; //desabilita botão sortear
  }
}

function exibirCarta(div, carta) {
  div.style.backgroundImage = `url(${carta.imagem})`;

  var moldura =
    '<img src="./img/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var nome = `<p class="carta-subtitle">${carta.nome}</p>`;

  return moldura + nome;
}

function limparCartaMaquina() {
  divCartaMaquina.style.backgroundImage = `url("")`;
  divCartaMaquina.innerHTML = `<img
                              src="./img/card-super-trunfo-transparent-ajustado.png"
                              style=" width: inherit; height: inherit; position: absolute;">`;
}
