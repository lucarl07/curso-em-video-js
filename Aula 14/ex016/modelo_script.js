// CONTADOR EM PROGRESSÃO ARITMÉTICA
/* PROPOSTA:
 * Você irá desenvolver um contador que realiza uma sequência finita em formato de Progressão Aritmética (PA), isto é, a partir de um determinado número, o seu sucessor na sequência será a soma do ponto 0 (inicial) com uma constante.
 * Caso um dos campos permaneça vazio, uma mensagem de erro deverá ser mostrada.
 * Caso o passo seja 0, uma mensagem de erro deverá ser mostrada, porém o valor considerado como 1. */

// const botao01 = document.querySelector('#botao01')
// const botao02 = document.querySelector('#botao02')
let botao01 = document.getElementsByClassName('botao')[0]
let botao02 = document.getElementsByClassName('botao')[1]

function mouseEntra01() {
    botao01.style.backgroundImage = 'linear-gradient(to right, #6742bd, #4c67c0)'
    botao01.style.textDecoration = 'underline'
} function mouseSai01() {
    botao01.style.backgroundImage = 'linear-gradient(to right, #8554f7, #5675ff)'
    botao01.style.textDecoration = null
} function mouseEntra02() {
    botao02.style.backgroundImage = 'linear-gradient(to right, #6742bd, #4c67c0)'
    botao02.style.textDecoration = 'underline'
} function mouseSai02() {
    botao02.style.backgroundImage = 'linear-gradient(to right, #8554f7, #5675ff)'
    botao02.style.textDecoration = null
}

function execContador() { 
    botao01.style.backgroundImage = 'linear-gradient(to right, #5838a3, #3d53b4)'

    let inputInicio = document.getElementById('input_inicio')
    let inputFim = document.getElementById('input_fim')
    let inputPasso = document.getElementById('input_passo')
    let res = document.getElementById('cont_resultado')

    const inicio = Number(inputInicio.value), fim = Number(inputFim.value), passo = Number(inputPasso.value)
    function calcContador() {
        res.innerHTML = `Contagem: <br>`
        for(let n = inicio; n <= fim; n += passo) {
            res.innerHTML += `${n} 👉 `
        } res.innerHTML += `🚩`
    }

    res.innerHTML = ``
    if(inputInicio.value === '' || inputFim.value === '' || inputPasso.value === '') {
        res.innerHTML = 'Informações incompletas!'
    } else if(inputPasso.value == 0) {
        alert(`Valor de passo inválido! \nO passo ${inputPasso.value} foi considerado como 1.`)
        calcContador();
    } else if(inicio > fim && passo > 0) {
        alert(`Valor de passo inválido! Para realizar uma PA com o valor final sendo menor que o inicial, o passo deve ser um número negativo.`)
    } else {
        calcContador();
    }
}

function execTabuada() {
    let numero = document.querySelector('#input_numero').value
    let resultado = document.querySelector('#tab_resultado')
    let tabuada = [];
    
    if(numero === '' || isNaN(numero)) {
        alert(`Valor inválido! \nTente novamente, digitando um valor numérico no input.`)
    } else {
        numero = Number(numero)
        for(let i = 0; i < 10; i++) {
            let mult = numero * (i+1)
            tabuada.push(`${numero} x ${i+1} = ${mult}`)
            resultado.options[i].text = tabuada[i];
        }
    }
}