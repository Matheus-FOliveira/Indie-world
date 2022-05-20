var nome_ok = false
var username_ok = false
var password_ok = false
var password_confirm_ok = false
var email_ok = false
var tudo_ok = false

function chamar_cadastro() {
    document.getElementById('card_cadastro').style.display = 'flex'
    document.getElementById('card_cadastro').style.opacity = 1

    document.getElementById('card_inicial').style.display = 'none'
    console.log('Hello world')
}

function chamar_login() {
    document.getElementById('card_cadastro').style.display = 'none'
    document.getElementById('card_inicial').style.display = 'flex'
}

function checagem_nome(){
    var nome = input_nome.value
    if(nome.length < 3){
        input_nome.style.border = '2px solid red'
        input_nome.style.boxShadow = '0 0 10px red'
    }
    else{
        input_nome.style.border = '2px solid blue'
        input_nome.style.boxShadow = 'none'
        nome_ok = true
    }
}
function checagem_usuario(){
    var username = input_username.value
    if(username.length < 5){
        input_username.style.border = '2px solid red'
        input_username.style.boxShadow = '0 0 10px red'
    }
    else{
        input_username.style.border = '2px solid blue'
        input_username.style.boxShadow = 'none'
        username_ok = true
    }
}
function checagem_senha(){
    var senha = input_password.value
    if(senha.length < 6 || senha.indexOf('@') == -1 && senha.indexOf('*') == -1 && senha.indexOf('!') == -1 && senha.indexOf('>')== -1 && senha.indexOf('<')== -1 && senha.indexOf('?') == -1){
        input_password.style.border = '2px solid red'
        input_password.style.boxShadow = '0 0 10px red'
    }
    else{
        input_password.style.border = '2px solid blue'
        input_password.style.boxShadow = 'none'
        password_ok = true
    }
}
function checagem_senha_confirmada(){
    var senha = input_password.value
    var senha_check = confirm_password.value
    if (senha != senha_check){
        confirm_password.style.border = '2px solid red'
        confirm_password.style.boxShadow = '0 0 10px red'
    }
    else{
        confirm_password.style.border = '2px solid blue'
        confirm_password.style.boxShadow = 'none'
        password_confirm_ok = true
    }
}

function checagem_email(){
    var email = input_email.value
    if (email.length < 5 || email.indexOf('@') == -1){
        input_email.style.border = '2px solid red'
        input_email.style.boxShadow = '0 0 10px red'
    }
    else{
        input_email.style.border = '2px solid blue'
        input_email.style.boxShadow = 'none'
        email_ok = true
    }
}
