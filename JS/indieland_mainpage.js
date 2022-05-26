const imgs_carrossel = [
    '../Images/Imgs-carrossel/darkest-dungeon-bg.jpg',
    '../Images/Imgs-carrossel/hades-bg.jpg',
    '../Images/Imgs-carrossel/hollow-knight-bg.jpg',
    '../Images/Imgs-carrossel/inside-bg.jpg',
    '../Images/Imgs-carrossel/skullgirls-bg.jpg',
    '../Images/Imgs-carrossel/minecraft-bg.jpg',
    '../Images/Imgs-carrossel/ori-will-wisps-bg.jpg',
    '../Images/Imgs-carrossel/stardew-valley-bg.png'
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

setTimeout(trocar_carrossel, 0)
setInterval(trocar_carrossel, 4500)