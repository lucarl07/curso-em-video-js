// CONTADOR EM PROGRESSÃO ARITMÉTICA
/* PROPOSTA:
 * Você irá desenvolver um contador que realiza uma sequência finita em formato de Progressão Aritmética (PA), isto é, a partir de um determinado número, o seu sucessor na sequência será a soma do ponto 0 (inicial) com uma constante.
 * Caso um dos campos permaneça vazio, uma mensagem de erro deverá ser mostrada.
 * Caso o passo seja 0, uma mensagem de erro deverá ser mostrada, porém o valor considerado como 1. */

const botao01 = document.getElementById('botao01')
const botao02 = document.getElementById('botao02')

function execContador() { 
    botao01.style.backgroundImage = 'linear-gradient(to right, #5838a3, #3d53b4)'

    let inputInicio = document.getElementById('input_inicio').value
    let inputFim = document.getElementById('input_fim').value
    let inputPasso = document.getElementById('input_passo').value

    res.innerHTML = ``
    if(inputInicio === '' || inputFim === '' || inputPasso === '') {
        res.innerHTML = 'Informações incompletas!'
    } else if(inputPasso === 0) {
        alert(`Valor de passo inválido! \nO passo ${inputPasso} foi considerado como 1.`)
        calcContador(inputInicio, inputFim, 1);
    } else if(inicio > fim && passo > 0) {
        alert(`Valor de passo inválido! Para realizar uma PA com o valor final sendo menor que o inicial, o passo deve ser um número negativo.`)
    } else {
        calcContador(inputInicio, inputFim, inputPasso);
    }
}

function calcContador(inicio, fim, passo) {
    let res = document.getElementById('cont_resultado')
    res.innerHTML = `Contagem: <br>`

    for(let n = inicio; n <= fim; n += passo) {
        res.innerHTML += `${n} 👉 `
    } res.innerHTML += `🚩`
}

function execTabuada() {
    botao02.style.backgroundImage = 'linear-gradient(to right, #5838a3, #3d53b4)'

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