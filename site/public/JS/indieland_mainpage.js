const imgs_carrossel = [
    'Images/Imgs-carrossel/darkest-dungeon-bg.jpg',
    'Images/Imgs-carrossel/hades-bg.jpg',
    'Images/Imgs-carrossel/hollow-knight-bg.jpg',
    'Images/Imgs-carrossel/inside-bg.jpg',
    'Images/Imgs-carrossel/skullgirls-bg.jpg',
    'Images/Imgs-carrossel/minecraft-bg.jpg',
    'Images/Imgs-carrossel/ori-will-wisps-bg.jpg',
    'Images/Imgs-carrossel/stardew-valley-bg.png'
]

    var i = 0
 function trocar_carrossel(){
    i++
    if(i > imgs_carrossel.length-1){
        i = 0
    }
    document.getElementById('carrossel_img').style.backgroundImage = `url(${imgs_carrossel[i]})`
    document.querySelectorAll('#carrossel_img')
    carrossel_img.style.transform = `transleteX(${-i * 80}vw)`
}

function buscar_nome(){
    nome_usuario.innerHTML = sessionStorage.nome
}

setTimeout(trocar_carrossel, 0)
setInterval(trocar_carrossel, 4500)

function scroll_inicio(){
    scroll(0,0);
}
function scroll_jogos(){
    scroll(0,1300)
}
function scroll_enquete(){
    scroll(0,1950)
}
function scroll_comentarios(){
    scroll(0,2500)
}
function exibir_sobre_boi(){
    sobre_padrao.style.display = 'none'
    sobre_boi.style.display = 'inline'
    sobre_celeste.style.display = 'none'
    sobre_cuphead.style.display = 'none'
    sobre_dd.style.display = 'none'
    sobre_hades.style.display = 'none'
    sobre_hk.style.display = 'none'
    sobre_inside.style.display = 'none'
    sobre_limbo.style.display = 'none'
    sobre_oribf.style.display = 'none'
    sobre_oriww.style.display = 'none'
    sobre_skullgirls.style.display = 'none'
    sobre_sv.style.display = 'none'
    sobre_undertale.style.display = 'none'
}
function exibir_sobre_celeste(){
    sobre_padrao.style.display = 'none'
    sobre_boi.style.display = 'none'
    sobre_celeste.style.display = 'inline'
    sobre_cuphead.style.display = 'none'
    sobre_dd.style.display = 'none'
    sobre_hades.style.display = 'none'
    sobre_hk.style.display = 'none'
    sobre_inside.style.display = 'none'
    sobre_limbo.style.display = 'none'
    sobre_oribf.style.display = 'none'
    sobre_oriww.style.display = 'none'
    sobre_skullgirls.style.display = 'none'
    sobre_sv.style.display = 'none'
    sobre_undertale.style.display = 'none'
}
function exibir_sobre_cuphead(){
    sobre_padrao.style.display = 'none'
    sobre_boi.style.display = 'none'
    sobre_celeste.style.display = 'none'
    sobre_cuphead.style.display = 'inline'
    sobre_dd.style.display = 'none'
    sobre_hades.style.display = 'none'
    sobre_hk.style.display = 'none'
    sobre_inside.style.display = 'none'
    sobre_limbo.style.display = 'none'
    sobre_oribf.style.display = 'none'
    sobre_oriww.style.display = 'none'
    sobre_skullgirls.style.display = 'none'
    sobre_sv.style.display = 'none'
    sobre_undertale.style.display = 'none'
}
function exibir_sobre_dd(){
    sobre_padrao.style.display = 'none'
    sobre_boi.style.display = 'none'
    sobre_celeste.style.display = 'none'
    sobre_cuphead.style.display = 'none'
    sobre_dd.style.display = 'inline'
    sobre_hades.style.display = 'none'
    sobre_hk.style.display = 'none'
    sobre_inside.style.display = 'none'
    sobre_limbo.style.display = 'none'
    sobre_oribf.style.display = 'none'
    sobre_oriww.style.display = 'none'
    sobre_skullgirls.style.display = 'none'
    sobre_sv.style.display = 'none'
    sobre_undertale.style.display = 'none'
}
function exibir_sobre_hades(){
    sobre_padrao.style.display = 'none'
    sobre_boi.style.display = 'none'
    sobre_celeste.style.display = 'none'
    sobre_cuphead.style.display = 'none'
    sobre_dd.style.display = 'none'
    sobre_hades.style.display = 'inline'
    sobre_hk.style.display = 'none'
    sobre_inside.style.display = 'none'
    sobre_limbo.style.display = 'none'
    sobre_oribf.style.display = 'none'
    sobre_oriww.style.display = 'none'
    sobre_skullgirls.style.display = 'none'
    sobre_sv.style.display = 'none'
    sobre_undertale.style.display = 'none'
}
function exibir_sobre_hk(){
    sobre_padrao.style.display = 'none'
    sobre_boi.style.display = 'none'
    sobre_celeste.style.display = 'none'
    sobre_cuphead.style.display = 'none'
    sobre_dd.style.display = 'none'
    sobre_hades.style.display = 'none'
    sobre_hk.style.display = 'inline'
    sobre_inside.style.display = 'none'
    sobre_limbo.style.display = 'none'
    sobre_oribf.style.display = 'none'
    sobre_oriww.style.display = 'none'
    sobre_skullgirls.style.display = 'none'
    sobre_sv.style.display = 'none'
    sobre_undertale.style.display = 'none'
}
function exibir_sobre_inside(){
    sobre_padrao.style.display = 'none'
    sobre_boi.style.display = 'none'
    sobre_celeste.style.display = 'none'
    sobre_cuphead.style.display = 'none'
    sobre_dd.style.display = 'none'
    sobre_hades.style.display = 'none'
    sobre_hk.style.display = 'none'
    sobre_inside.style.display = 'inline'
    sobre_limbo.style.display = 'none'
    sobre_oribf.style.display = 'none'
    sobre_oriww.style.display = 'none'
    sobre_skullgirls.style.display = 'none'
    sobre_sv.style.display = 'none'
    sobre_undertale.style.display = 'none'
}
function exibir_sobre_limbo(){
    sobre_padrao.style.display = 'none'
    sobre_boi.style.display = 'none'
    sobre_celeste.style.display = 'none'
    sobre_cuphead.style.display = 'none'
    sobre_dd.style.display = 'none'
    sobre_hades.style.display = 'none'
    sobre_hk.style.display = 'none'
    sobre_inside.style.display = 'none'
    sobre_limbo.style.display = 'inline'
    sobre_oribf.style.display = 'none'
    sobre_oriww.style.display = 'none'
    sobre_skullgirls.style.display = 'none'
    sobre_sv.style.display = 'none'
    sobre_undertale.style.display = 'none'
}
function exibir_sobre_oribf(){
    sobre_padrao.style.display = 'none'
    sobre_boi.style.display = 'none'
    sobre_celeste.style.display = 'none'
    sobre_cuphead.style.display = 'none'
    sobre_dd.style.display = 'none'
    sobre_hades.style.display = 'none'
    sobre_hk.style.display = 'none'
    sobre_inside.style.display = 'none'
    sobre_limbo.style.display = 'none'
    sobre_oribf.style.display = 'inline'
    sobre_oriww.style.display = 'none'
    sobre_skullgirls.style.display = 'none'
    sobre_sv.style.display = 'none'
    sobre_undertale.style.display = 'none'
}
function exibir_sobre_oriww(){
    sobre_padrao.style.display = 'none'
    sobre_boi.style.display = 'none'
    sobre_celeste.style.display = 'none'
    sobre_cuphead.style.display = 'none'
    sobre_dd.style.display = 'none'
    sobre_hades.style.display = 'none'
    sobre_hk.style.display = 'none'
    sobre_inside.style.display = 'none'
    sobre_limbo.style.display = 'none'
    sobre_oribf.style.display = 'none'
    sobre_oriww.style.display = 'inline'
    sobre_skullgirls.style.display = 'none'
    sobre_sv.style.display = 'none'
    sobre_undertale.style.display = 'none'
}
function exibir_sobre_skullgirls(){
    sobre_padrao.style.display = 'none'
    sobre_boi.style.display = 'none'
    sobre_celeste.style.display = 'none'
    sobre_cuphead.style.display = 'none'
    sobre_dd.style.display = 'none'
    sobre_hades.style.display = 'none'
    sobre_hk.style.display = 'none'
    sobre_inside.style.display = 'none'
    sobre_limbo.style.display = 'none'
    sobre_oribf.style.display = 'none'
    sobre_oriww.style.display = 'none'
    sobre_skullgirls.style.display = 'inline'
    sobre_sv.style.display = 'none'
    sobre_undertale.style.display = 'none'
}
function exibir_sobre_sv(){
    sobre_padrao.style.display = 'none'
    sobre_boi.style.display = 'none'
    sobre_celeste.style.display = 'none'
    sobre_cuphead.style.display = 'none'
    sobre_dd.style.display = 'none'
    sobre_hades.style.display = 'none'
    sobre_hk.style.display = 'none'
    sobre_inside.style.display = 'none'
    sobre_limbo.style.display = 'none'
    sobre_oribf.style.display = 'none'
    sobre_oriww.style.display = 'none'
    sobre_skullgirls.style.display = 'none'
    sobre_sv.style.display = 'inline'
    sobre_undertale.style.display = 'none'
}
function exibir_sobre_undertale(){
    sobre_padrao.style.display = 'none'
    sobre_boi.style.display = 'none'
    sobre_celeste.style.display = 'none'
    sobre_cuphead.style.display = 'none'
    sobre_dd.style.display = 'none'
    sobre_hades.style.display = 'none'
    sobre_hk.style.display = 'none'
    sobre_inside.style.display = 'none'
    sobre_limbo.style.display = 'none'
    sobre_oribf.style.display = 'none'
    sobre_oriww.style.display = 'none'
    sobre_skullgirls.style.display = 'none'
    sobre_sv.style.display = 'none'
    sobre_undertale.style.display = 'inline'
}

function registrar_voto(){
    let fk_jogo = jogo_favorito.elements['jogo_fav'].value
    let usuario_id = sessionStorage.ID_USUARIO
    fetch(`/usuarios/${usuario_id}/votar/${fk_jogo}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
           console.log('Voto registrado com sucesso')
        } else {
            throw ("Houve um erro ao tentar realizar o voto");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });

}

function obterDadosGrafico(idAquario) {
    alterarTitulo(idAquario)

    if (proximaAtualizacao != undefined) {
        clearTimeout(proximaAtualizacao);
    }

    fetch(`/medidas/ultimas/${idAquario}`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                resposta.reverse();

                plotarGrafico(resposta, idAquario);
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

// Esta função *plotarGrafico* usa os dados capturados na função anterior para criar o gráfico
// Configura o gráfico (cores, tipo, etc), materializa-o na página e, 
// A função *plotarGrafico* também invoca a função *atualizarGrafico*
function plotarGrafico(resposta) {
    console.log('iniciando plotagem do gráfico...');

    var dados = {
        labels: [],
        datasets: [
            {
                yAxisID: 'y-Votos',
                label: 'Jogos mais votados',
                borderColor: '#32B9CD',
                backgroundColor: '#32b9cd8f',
                fill: true,
                data: []
            },
/*             {
                yAxisID: 'y-temperatura',
                label: 'Temperatura',
                borderColor: '#FFF',
                backgroundColor: '#32b9cd8f',
                fill: true,
                data: []
            } */
        ]
    };

    for (i = 0; i < resposta.length; i++) {
        var registro = resposta[i];
        dados.labels.push(registro.momento_grafico);
        dados.datasets[0].data.push(registro.umidade);
        dados.datasets[1].data.push(registro.temperatura);
    }

    console.log(JSON.stringify(dados));

    var ctx = myChartJs.getContext('2d');
    window.grafico_linha = Chart.Line(ctx, {
        data: dados,
        options: {
            responsive: true,
            animation: { duration: 500 },
            hoverMode: 'index',
            stacked: false,
            title: {
                display: false,
                text: 'Votos'
            },
            scales: {
                yAxes: [{
                    type: 'bar',
                    display: true,
                    position: 'left',
                    id: 'y-temperatura',
                    ticks: {
                        beginAtZero: true,
                        max: 100,
                        min: 0
                    }
                }, {
                    type: 'bar',
                    display: false,
                    position: 'right',
                    id: 'y-umidade',
                    ticks: {
                        beginAtZero: true,
                        max: 100,
                        min: 0
                    },

                    gridLines: {
                        drawOnChartArea: false,
                    },
                }],
            }
        }
    });

    setTimeout(() => atualizarGrafico(idAquario, dados), 2000);
}
