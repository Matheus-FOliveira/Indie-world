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
    alert('Seu voto foi registrado! Fique a vontade pra trocar!')
}