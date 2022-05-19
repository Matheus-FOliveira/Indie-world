function chamar_cadastro() {
    document.getElementById('card_cadastro').style.display = 'flex'
    document.getElementById('card_inicial').style.display = 'none'
}

function chamar_login() {
    document.getElementById('card_cadastro').style.display = 'none'
    document.getElementById('card_inicial').style.display = 'flex'
}