//INSERE NÚMEROS NA TELA DA CALCULADORA
function insert(num) {
    document.querySelector('#result').innerHTML += num
}

//LIMPA A TELA DA CALCULADORA
function clean() {
    document.querySelector('#result').innerHTML = ""
}

//APAGA O ÚLTIMO CARACTERE INSERIDO NA CALCULADORA
function backsp() {
    var result = document.querySelector('#result').innerHTML
    document.querySelector('#result').innerHTML = result.substring(0, result.length - 1)
}

//EFETUA A OPERAÇÃO MATEMÁTICA SOLICITADA PELO USUÁRIO E A EXIBE NA TELA DA CALCULADORA
function calc() {
    var result = document.querySelector('#result').innerHTML
    if(result) {
        document.querySelector('#result').innerHTML = eval(result)
    } else {
        document.querySelector('#result').innerHTML = "Null"
    }
}

//MUDA A COR DE TEMA
function mudaTema() {
    document.body.classList.toggle("blue")
}