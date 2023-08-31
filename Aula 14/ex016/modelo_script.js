// CONTADOR EM PROGRESSÃO ARITMÉTICA - Por: Luiz Carlos Jr.
/* PROPOSTA:
 * Você irá desenvolver um contador que realiza uma sequência finita em formato de Progressão Aritmética (PA), isto é, a partir de um determinado número, o seu sucessor na sequência será a soma do ponto 0 (inicial) com uma constante.
 * Caso um dos campos permaneça vazio, uma mensagem de erro deverá ser mostrada.
 * Caso o passo seja 0, uma mensagem de erro deverá ser mostrada, porém o valor considerado como 1. */

const botao = document.getElementById('botao')
function mouseEntraBotao() { 
    botao.style.backgroundImage = 'linear-gradient(to right, #6742bd, #4c67c0)'
    botao.style.textDecoration = 'underline'
}
function mouseSaiBotao() {
    botao.style.backgroundImage = 'linear-gradient(to right, #8554f7, #5675ff)'
    botao.style.textDecoration = null
}

function executar() { 
    botao.style.backgroundImage = 'linear-gradient(to right, #5838a3, #3d53b4)'

    let inputInicio = document.getElementById('input_inicio')
    let inputFim = document.getElementById('input_fim')
    let inputPasso = document.getElementById('input_passo')
    let res = document.getElementById('resultado')

    const inicio = Number(inputInicio.value), fim = Number(inputFim.value), passo = Number(inputPasso.value)

    res.innerHTML = ``
    if(inputInicio.value === '' || inputFim.value === '' || inputPasso.value === '') {
        res.innerHTML = 'Informações incompletas!'
    } else if(inputPasso.value == 0) {
        alert(`Valor de passo inválido! \nO passo ${inputPasso.value} foi considerado como 1.`)
    } else if(inicio > fim && passo > 0) {
        alert(`Valor de passo inválido! Para realizar uma PA com o valor final sendo menor que o inicial, o passo deve ser um número negativo.`)
    } else {
        res.innerHTML = `Contagem: <br>`
        for(let n = inicio; n <= fim; n += passo) {
            res.innerHTML += `${n} 👉 `
        } res.innerHTML += `🚩`
    }
}