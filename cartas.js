//Lista: cartas e seus atributos
var baralhoMaquina = [
    {
      nome: "Itachi Uchiha",
      imagem: "https://c.tenor.com/xiDx7IfcZ1cAAAAC/itachi-uchiha.gif",
      atributos: {
        combate: 5,
        resistencia: 1
      }
    },
    {
      nome: "Pain",
      imagem:
        "https://i.pinimg.com/originals/24/cf/2a/24cf2abe18b7920cae323dc7fbbf4f68.gif",
      atributos: {
        combate: 8,
        resistencia: 6
      }
    },
    {
      nome: "Orochimaru",
      imagem:
        "https://c.tenor.com/IPjQ1ZM4LYIAAAAC/%D0%BE%D1%80%D0%BE%D1%87%D0%B8%D0%BC%D0%B0%D1%80%D1%83-orochimaru.gif",
      atributos: {
        combate: 6,
        resistencia: 3
      }
    }
  ];
  
  var baralhoJogador = [
    {
      nome: "Naruto",
      imagem:
        "https://i.pinimg.com/originals/36/ef/7e/36ef7ebb93b416261b2d94a2fa8575e6.gif",
      atributos: {
        combate: 8,
        resistencia: 9
      }
    },
    {
      nome: "Kakashi",
      imagem:
        "https://i.pinimg.com/originals/78/a7/0c/78a70cf373599e7d88f686ffd5447611.gif",
      atributos: {
        combate: 6,
        resistencia: 3
      }
    },
    {
      nome: "Sasuke",
      imagem: "https://www.icegif.com/wp-content/uploads/sasuke-icegif-1.gif",
      atributos: {
        combate: 7,
        resistencia: 3
      }
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
          "<p class='resultado-final'>Parabéns. Você Venceu!";
        var indice = localizarCarta(baralhoMaquina, cartaMaquina);
        baralhoMaquina.splice(indice, 1);
        baralhoJogador.push(cartaMaquina);
      } else if (valorCartaJogador < valorCartaMaquina) {
        elementoResultado.innerHTML =
          "<p class='resultado-final'>Que pena... Você Perdeu!</p>";
        indice = localizarCarta(baralhoJogador, cartaJogador);
        baralhoJogador.splice(indice, 1);
        baralhoMaquina.push(cartaJogador);
      } else {
        elementoResultado.innerHTML = "<p class='resultado-final'>Empate!</p>";
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
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    var nome = `<p class="carta-subtitle">${carta.nome}</p>`;
  
    return moldura + nome;
  }
  
  function limparCartaMaquina() {
    divCartaMaquina.style.backgroundImage = `url("")`;
    divCartaMaquina.innerHTML = `<img
                              src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png"
                              style=" width: inherit; height: inherit; position: absolute;">`;
  }
  