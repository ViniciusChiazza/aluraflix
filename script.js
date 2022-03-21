var jogos = [];

function adicionarJogo() {
  var nome = document.getElementById("nomeJogo").value;
  var url = document.getElementById("urlJogo").value;
  var jogo = [nome, url];

  if (nome == "" || !url.endsWith(".jpg")) {
    alert("Por favor coloque o nome do jogo, ou a url com o final '.jpg'");
  } else if (jogos.findIndex((jogo) => jogo[0] == nome) < 0) {
    jogos.push(jogo);
    RecaregarFavoritos();
  } else {
    alert("Um jogo com esse nome já esta registrado");
  }

  document.getElementById("nomeJogo").value = "";
  document.getElementById("urlJogo").value = "";
}

function RecaregarFavoritos() {
  var catalogo = document.getElementById("jogos");

  catalogo.innerHTML +=
    "<div class='jogo'><img src=" +
    jogos[jogos.length - 1][1] +
    "><p>" +
    jogos[jogos.length - 1][0] +
    "</p></div>";
}

function limpar() {
  var catalogo = document.getElementById("jogos");

  for (var i = jogos.length - 1; i >= 0; i--) {
    jogos.pop();
  }

  catalogo.innerHTML = "";
}

function removerJogo() {
  var nome = document.getElementById("nomeJogo").value;
  var url = document.getElementById("urlJogo").value;
  var jogo = [nome, url];
  var indexNome = jogos.findIndex((jogo) => jogo[0] == nome);
  var indexUrl = jogos.findIndex((jogo) => jogo[1] == url);
  var catalogo = document.getElementById("jogos");

  if (indexNome > -1) {
    jogos.splice(indexNome, 1);
  } else if (indexUrl > -1) {
    jogos.splice(indexUrl, 1);
  }

  document.getElementById("nomeJogo").value = "";
  document.getElementById("urlJogo").value = "";

  catalogo.innerHTML = "";

  for (var i = 0; i < filmes.length; i++) {
    catalogo.innerHTML +=
      "<div class='jogo'><img src=" +
      jogos[i][1] +
      "><p>" +
      jogos[i][0] +
      "</p></div>";
  }
}