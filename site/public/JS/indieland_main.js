var nome_ok = false
var username_ok = false
var password_ok = false
var password_confirm_ok = false
var email_ok = false
var tudo_ok = false

const images = [
    'Images/Binding_of_Isaac_img.jpg',
    'Images/Celeste_img.png',
    'Images/Cuphead_img2.jpg',
    'Images/Darkest_Dungeon_img.jpg',
    'Images/Hades_img.png',
    'Images/Hollow_Knight_img.jpg',
    'Images/Limbo_img.jpg',
    'Images/ori_img.jpg',
    'Images/Undertale_img.png'
]

function trocarFundo() {
    let i = Math.floor(Math.random() * images.length)
    document.getElementById('body').style.backgroundImage = `url(${images[i]})`
}
setInterval(trocarFundo, 5000)

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

function checagem_nome() {
    var nome = input_nome.value
    if (nome.length < 3) {
        input_nome.style.border = '2px solid red'
        input_nome.style.boxShadow = '0 0 10px red'
    }
    else {
        input_nome.style.border = '2px solid blue'
        input_nome.style.boxShadow = 'none'
        nome_ok = true
    }
}
function checagem_usuario() {
    var username = input_username.value
    if (username.length < 5) {
        input_username.style.border = '2px solid red'
        input_username.style.boxShadow = '0 0 10px red'
    }
    else {
        input_username.style.border = '2px solid blue'
        input_username.style.boxShadow = 'none'
        username_ok = true
    }
}
function checagem_senha() {
    var senha = input_password.value
    if (senha.length < 6 || senha.indexOf('@') == -1 && senha.indexOf('*') == -1 && senha.indexOf('!') == -1 && senha.indexOf('>') == -1 && senha.indexOf('<') == -1 && senha.indexOf('?') == -1) {
        input_password.style.border = '2px solid red'
        input_password.style.boxShadow = '0 0 10px red'
    }
    else {
        input_password.style.border = '2px solid blue'
        input_password.style.boxShadow = 'none'
        password_ok = true
    }
}
function checagem_senha_confirmada() {
    var senha = input_password.value
    var senha_check = confirm_password.value
    if (senha != senha_check) {
        confirm_password.style.border = '2px solid red'
        confirm_password.style.boxShadow = '0 0 10px red'
    }
    else {
        confirm_password.style.border = '2px solid blue'
        confirm_password.style.boxShadow = 'none'
        password_confirm_ok = true
    }
}

function checagem_email() {
    var email = input_email.value
    if (email.length < 5 || email.indexOf('@') == -1) {
        input_email.style.border = '2px solid red'
        input_email.style.boxShadow = '0 0 10px red'
    }
    else {
        input_email.style.border = '2px solid blue'
        input_email.style.boxShadow = 'none'
        email_ok = true
    }
}

function realizar_cadastro() {
    if (nome_ok && username_ok && password_ok && password_confirm_ok && email_ok) {
        cadastrar()
    }
    else {
        alert('Cheque se os campos estão ok!')
    }
}

function cadastrar() {

    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    var nomeVar = input_nome.value;
    var usernameVar = input_username.value;
    var emailVar = input_email.value;
    var senhaVar = input_password.value;
    var confirmacaoSenhaVar = confirm_password.value;

    if (nomeVar == "" || emailVar == "" || senhaVar == "" || confirmacaoSenhaVar == "") {
        alert('Campo em branco, cheque novamente')
        return false;
    }

    // Enviando o valor da nova input
    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            nomeServer: nomeVar,
            emailServer: emailVar,
            senhaServer: senhaVar,
            usernameServer: usernameVar
        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            alert('Cadastro realizado com sucesso!')
            chamar_login()
        } else {
            alert('Ops! Algo deu errado')
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });

    return false;
}

function fazer_login() {



    var emailVar = login_email.value;
    var senhaVar = login_password.value;

    if (emailVar == "" || senhaVar == "") {
        alert('Campos em branco!')
        return false;
    }
    else {
        
    }

    console.log("FORM LOGIN: ", emailVar);
    console.log("FORM SENHA: ", senhaVar);

    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: emailVar,
            senhaServer: senhaVar
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));

                sessionStorage.EMAIL_USUARIO = json.email;
                sessionStorage.NOME_USUARIO = json.nome;
                sessionStorage.ID_USUARIO = json.id;
                sessionStorage.USERNAME_USUARIO = json.username;

                setTimeout(function () {
                    window.location = "mainpage.html";
                }, 1000); // apenas para exibir o loading

            });

        } else {

            console.log("Houve um erro ao tentar realizar o login!");

            resposta.text().then(texto => {
                console.error(texto);
                finalizarAguardar(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}

function sumirMensagem() {
    cardErro.style.display = "none"

}