const imgs_carrossel = [
  "Images/Imgs-carrossel/darkest-dungeon-bg.jpg",
  "Images/Imgs-carrossel/hades-bg.jpg",
  "Images/Imgs-carrossel/hollow-knight-bg.jpg",
  "Images/Imgs-carrossel/inside-bg.jpg",
  "Images/Imgs-carrossel/skullgirls-bg.jpg",
  "Images/Imgs-carrossel/minecraft-bg.jpg",
  "Images/Imgs-carrossel/ori-will-wisps-bg.jpg",
  "Images/Imgs-carrossel/stardew-valley-bg.png",
];

var i = 0;
function trocar_carrossel() {
  i++;
  if (i > imgs_carrossel.length - 1) {
    i = 0;
  }
  document.getElementById(
    "carrossel_img"
  ).style.backgroundImage = `url(${imgs_carrossel[i]})`;
  document.querySelectorAll("#carrossel_img");
  carrossel_img.style.transform = `transleteX(${-i * 80}vw)`;
}

function buscar_nome() {
  nome_usuario.innerHTML = sessionStorage.USERNAME_USUARIO;
}
function checklogin() {
  id_usuario = sessionStorage.ID_USUARIO;
  if (id_usuario == null) {
    document.getElementById("botao_sair").innerHTML = "Login/Cadastro";
    document.getElementById("hello_header").innerHTML = "";
  }
  buscar_nome()
}

setTimeout(trocar_carrossel, 0);
setInterval(trocar_carrossel, 4500);

function scroll_inicio() {
  scroll(0, 0);
}
function scroll_jogos() {
  scroll(0, 1300);
}
function scroll_enquete() {
  scroll(0, 1950);
}
function scroll_comentarios() {
  scroll(0, 2600);
}
function sair() {
  sessionStorage.clear();
  window.location = "index.html";
}
function greetings() {
  if (sessionStorage.nome.length > 0) {
    nome_usuario.innerHTML = sessionStorage.nome;
  }
}
function exibir_sobre_boi() {
  sobre_padrao.style.display = "none";
  sobre_boi.style.display = "inline";
  sobre_celeste.style.display = "none";
  sobre_cuphead.style.display = "none";
  sobre_dd.style.display = "none";
  sobre_hades.style.display = "none";
  sobre_hk.style.display = "none";
  sobre_inside.style.display = "none";
  sobre_limbo.style.display = "none";
  sobre_oribf.style.display = "none";
  sobre_oriww.style.display = "none";
  sobre_skullgirls.style.display = "none";
  sobre_sv.style.display = "none";
  sobre_undertale.style.display = "none";
}
function exibir_sobre_celeste() {
  sobre_padrao.style.display = "none";
  sobre_boi.style.display = "none";
  sobre_celeste.style.display = "inline";
  sobre_cuphead.style.display = "none";
  sobre_dd.style.display = "none";
  sobre_hades.style.display = "none";
  sobre_hk.style.display = "none";
  sobre_inside.style.display = "none";
  sobre_limbo.style.display = "none";
  sobre_oribf.style.display = "none";
  sobre_oriww.style.display = "none";
  sobre_skullgirls.style.display = "none";
  sobre_sv.style.display = "none";
  sobre_undertale.style.display = "none";
}
function exibir_sobre_cuphead() {
  sobre_padrao.style.display = "none";
  sobre_boi.style.display = "none";
  sobre_celeste.style.display = "none";
  sobre_cuphead.style.display = "inline";
  sobre_dd.style.display = "none";
  sobre_hades.style.display = "none";
  sobre_hk.style.display = "none";
  sobre_inside.style.display = "none";
  sobre_limbo.style.display = "none";
  sobre_oribf.style.display = "none";
  sobre_oriww.style.display = "none";
  sobre_skullgirls.style.display = "none";
  sobre_sv.style.display = "none";
  sobre_undertale.style.display = "none";
}
function exibir_sobre_dd() {
  sobre_padrao.style.display = "none";
  sobre_boi.style.display = "none";
  sobre_celeste.style.display = "none";
  sobre_cuphead.style.display = "none";
  sobre_dd.style.display = "inline";
  sobre_hades.style.display = "none";
  sobre_hk.style.display = "none";
  sobre_inside.style.display = "none";
  sobre_limbo.style.display = "none";
  sobre_oribf.style.display = "none";
  sobre_oriww.style.display = "none";
  sobre_skullgirls.style.display = "none";
  sobre_sv.style.display = "none";
  sobre_undertale.style.display = "none";
}
function exibir_sobre_hades() {
  sobre_padrao.style.display = "none";
  sobre_boi.style.display = "none";
  sobre_celeste.style.display = "none";
  sobre_cuphead.style.display = "none";
  sobre_dd.style.display = "none";
  sobre_hades.style.display = "inline";
  sobre_hk.style.display = "none";
  sobre_inside.style.display = "none";
  sobre_limbo.style.display = "none";
  sobre_oribf.style.display = "none";
  sobre_oriww.style.display = "none";
  sobre_skullgirls.style.display = "none";
  sobre_sv.style.display = "none";
  sobre_undertale.style.display = "none";
}
function exibir_sobre_hk() {
  sobre_padrao.style.display = "none";
  sobre_boi.style.display = "none";
  sobre_celeste.style.display = "none";
  sobre_cuphead.style.display = "none";
  sobre_dd.style.display = "none";
  sobre_hades.style.display = "none";
  sobre_hk.style.display = "inline";
  sobre_inside.style.display = "none";
  sobre_limbo.style.display = "none";
  sobre_oribf.style.display = "none";
  sobre_oriww.style.display = "none";
  sobre_skullgirls.style.display = "none";
  sobre_sv.style.display = "none";
  sobre_undertale.style.display = "none";
}
function exibir_sobre_inside() {
  sobre_padrao.style.display = "none";
  sobre_boi.style.display = "none";
  sobre_celeste.style.display = "none";
  sobre_cuphead.style.display = "none";
  sobre_dd.style.display = "none";
  sobre_hades.style.display = "none";
  sobre_hk.style.display = "none";
  sobre_inside.style.display = "inline";
  sobre_limbo.style.display = "none";
  sobre_oribf.style.display = "none";
  sobre_oriww.style.display = "none";
  sobre_skullgirls.style.display = "none";
  sobre_sv.style.display = "none";
  sobre_undertale.style.display = "none";
}
function exibir_sobre_limbo() {
  sobre_padrao.style.display = "none";
  sobre_boi.style.display = "none";
  sobre_celeste.style.display = "none";
  sobre_cuphead.style.display = "none";
  sobre_dd.style.display = "none";
  sobre_hades.style.display = "none";
  sobre_hk.style.display = "none";
  sobre_inside.style.display = "none";
  sobre_limbo.style.display = "inline";
  sobre_oribf.style.display = "none";
  sobre_oriww.style.display = "none";
  sobre_skullgirls.style.display = "none";
  sobre_sv.style.display = "none";
  sobre_undertale.style.display = "none";
}
function exibir_sobre_oribf() {
  sobre_padrao.style.display = "none";
  sobre_boi.style.display = "none";
  sobre_celeste.style.display = "none";
  sobre_cuphead.style.display = "none";
  sobre_dd.style.display = "none";
  sobre_hades.style.display = "none";
  sobre_hk.style.display = "none";
  sobre_inside.style.display = "none";
  sobre_limbo.style.display = "none";
  sobre_oribf.style.display = "inline";
  sobre_oriww.style.display = "none";
  sobre_skullgirls.style.display = "none";
  sobre_sv.style.display = "none";
  sobre_undertale.style.display = "none";
}
function exibir_sobre_oriww() {
  sobre_padrao.style.display = "none";
  sobre_boi.style.display = "none";
  sobre_celeste.style.display = "none";
  sobre_cuphead.style.display = "none";
  sobre_dd.style.display = "none";
  sobre_hades.style.display = "none";
  sobre_hk.style.display = "none";
  sobre_inside.style.display = "none";
  sobre_limbo.style.display = "none";
  sobre_oribf.style.display = "none";
  sobre_oriww.style.display = "inline";
  sobre_skullgirls.style.display = "none";
  sobre_sv.style.display = "none";
  sobre_undertale.style.display = "none";
}
function exibir_sobre_skullgirls() {
  sobre_padrao.style.display = "none";
  sobre_boi.style.display = "none";
  sobre_celeste.style.display = "none";
  sobre_cuphead.style.display = "none";
  sobre_dd.style.display = "none";
  sobre_hades.style.display = "none";
  sobre_hk.style.display = "none";
  sobre_inside.style.display = "none";
  sobre_limbo.style.display = "none";
  sobre_oribf.style.display = "none";
  sobre_oriww.style.display = "none";
  sobre_skullgirls.style.display = "inline";
  sobre_sv.style.display = "none";
  sobre_undertale.style.display = "none";
}
function exibir_sobre_sv() {
  sobre_padrao.style.display = "none";
  sobre_boi.style.display = "none";
  sobre_celeste.style.display = "none";
  sobre_cuphead.style.display = "none";
  sobre_dd.style.display = "none";
  sobre_hades.style.display = "none";
  sobre_hk.style.display = "none";
  sobre_inside.style.display = "none";
  sobre_limbo.style.display = "none";
  sobre_oribf.style.display = "none";
  sobre_oriww.style.display = "none";
  sobre_skullgirls.style.display = "none";
  sobre_sv.style.display = "inline";
  sobre_undertale.style.display = "none";
}
function exibir_sobre_undertale() {
  sobre_padrao.style.display = "none";
  sobre_boi.style.display = "none";
  sobre_celeste.style.display = "none";
  sobre_cuphead.style.display = "none";
  sobre_dd.style.display = "none";
  sobre_hades.style.display = "none";
  sobre_hk.style.display = "none";
  sobre_inside.style.display = "none";
  sobre_limbo.style.display = "none";
  sobre_oribf.style.display = "none";
  sobre_oriww.style.display = "none";
  sobre_skullgirls.style.display = "none";
  sobre_sv.style.display = "none";
  sobre_undertale.style.display = "inline";
}

function registrar_voto() {
  let fk_jogo = jogo_favorito.elements["jogo_fav"].value;
  let usuario_id = sessionStorage.ID_USUARIO;
  if (usuario_id == undefined) {
    alert("Faça login para poder votar!");
  }
  fetch(`/usuarios/${usuario_id}/votar/${fk_jogo}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // crie um atributo que recebe o valor recuperado aqui
      // Agora vá para o arquivo routes/usuario.js
    }),
  })
    .then(function (resposta) {
      console.log("resposta: ", resposta);

      if (resposta.ok) {
        console.log("Voto registrado com sucesso");
        alert("Voto registrado com sucesso");
      } else {
        throw "Houve um erro ao tentar realizar o voto";
      }
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });
  setTimeout(recarregar, 500);
}

function recarregar() {
  document.location.reload(true);
}

var respSelect;
var nome1 = "";
var votos1 = 0;
var nome2 = "";
var votos2 = 0;
var nome3 = "";
var votos3 = 0;
var nome4 = "";
var votos4 = 0;
var nome5 = "";
var votos5 = 0;
var nome6 = "";
var votos6 = 0;
var nome7 = "";
var votos7 = 0;
var nome8 = "";
var votos8 = 0;
var nome9 = "";
var votos9 = 0;
var nome10 = "";
var votos10 = 0;
var nome11 = "";
var votos11 = 0;
var nome12 = "";
var votos12 = 0;
var nome13 = "";
var votos13 = 0;
function pegarVoto() {
  //aguardar();
  fetch("/usuarios/pegarVoto")
    .then(function (resposta) {
      if (resposta.ok) {
        resposta.json().then(function (resposta) {
          console.log("Dados recebidos: ", JSON.stringify(resposta));
          nome1 = resposta[0].nome;
          votos1 = resposta[0].QuantVotos;
          if (resposta[1]) {
            nome2 = resposta[1].nome;
            votos2 = resposta[1].QuantVotos;
          }
          if (resposta[2]) {
            nome3 = resposta[2].nome;
            votos3 = resposta[2].QuantVotos;
          }
          if (resposta[3]) {
            nome4 = resposta[3].nome;
            votos4 = resposta[3].QuantVotos;
          }
          if (resposta[4]) {
            nome5 = resposta[4].nome;
            votos5 = resposta[4].QuantVotos;
          }
          if (resposta[5]) {
            nome6 = resposta[5].nome;
            votos6 = resposta[5].QuantVotos;
          }
          if (resposta[6]) {
            nome7 = resposta[6].nome;
            votos7 = resposta[6].QuantVotos;
          }
          if (resposta[7]) {
            nome8 = resposta[7].nome;
            votos8 = resposta[7].QuantVotos;
          }
          if (resposta[8]) {
            nome9 = resposta[8].nome;
            votos9 = resposta[8].QuantVotos;
          }
          if (resposta[9]) {
            nome10 = resposta[9].nome;
            votos10 = resposta[9].QuantVotos;
          }
          if (resposta[10]) {
            nome11 = resposta[10].nome;
            votos11 = resposta[10].QuantVotos;
          }
          if (resposta[11]) {
            nome12 = resposta[11].nome;
            votos12 = resposta[11].QuantVotos;
          }
          if (resposta[12]) {
            nome13 = resposta[12].nome;
            votos13 = resposta[12].QuantVotos;
          }
          if (resposta[13]) {
            nome3 = resposta[13].nome;
            votos3 = resposta[13].QuantVotos;
          }
          graficar();
        });
      } else {
        throw "Houve um erro na API!";
      }
    })
    .catch(function (resposta) {
      console.error(resposta);
    });
}

pegarVoto();

function graficar() {
  const labels = [];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Votos",
        backgroundColor: [
          "#9E7F01",
          "#A82B08",
          "#610091",
          "#0867A8",
          "#089E19",
        ],
        borderColor: "#e30ed8",
        data: [],
      },
      /*   {
            label: 'Boi',
            backgroundColor: 'red',
            borderColor: 'red',
            data: [],
        }, */
    ],
  };

  labels.push(nome1);
  data.datasets[0].data.push(votos1);
  if (votos2 > 0) {
    labels.push(nome2);
    data.datasets[0].data.push(votos2);
  }
  if (votos3 > 0) {
    labels.push(nome3);
    data.datasets[0].data.push(votos3);
  }
  if (votos4 > 0) {
    labels.push(nome4);
    data.datasets[0].data.push(votos4);
  }
  if (votos5 > 0) {
    labels.push(nome5);
    data.datasets[0].data.push(votos5);
  }
  if (votos6 > 0) {
    labels.push(nome6);
    data.datasets[0].data.push(votos6);
  }
  if (votos7 > 0) {
    labels.push(nome7);
    data.datasets[0].data.push(votos7);
  }
  if (votos8 > 0) {
    labels.push(nome8);
    data.datasets[0].data.push(votos8);
  }
  if (votos9 > 0) {
    labels.push(nome9);
    data.datasets[0].data.push(votos9);
  }
  if (votos10 > 0) {
    labels.push(nome10);
    data.datasets[0].data.push(votos10);
  }
  if (votos11 > 0) {
    labels.push(nome11);
    data.datasets[0].data.push(votos11);
  }
  if (votos12 > 0) {
    labels.push(nome12);
    data.datasets[0].data.push(votos12);
  }
  if (votos13 > 0) {
    labels.push(nome13);
    data.datasets[0].data.push(votos13);
  }

  const config = {
    type: "bar",
    data: data,
    options: {},
  };

  const myChart = new Chart(document.getElementById("myChartJs"), config);
}
