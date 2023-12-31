// CONTADOR EM PROGRESSÃO ARITMÉTICA
/* PROPOSTA:
 * Você irá desenvolver um contador que realiza uma sequência finita em formato de Progressão Aritmética (PA), isto é, a partir de um determinado número, o seu sucessor na sequência será a soma do ponto 0 (inicial) com uma constante.
 * Caso um dos campos permaneça vazio, uma mensagem de erro deverá ser mostrada.
 * Caso o passo seja 0, uma mensagem de erro deverá ser mostrada, porém o valor considerado como 1. */

function execContador() 
{ /** FUNÇÃO PARA VALIDAR OS VALORES DO CONTADOR DE P.A E EXECUTAR calcContador() **/

    let inicio = document.getElementById('input_inicio').value
    let fim = document.getElementById('input_fim').value
    let passo = document.getElementById('input_passo').value
    let res = document.getElementById('cont_resultado')

    if (inicio.length == 0 || fim.length == 0 || passo.length == 0) {
        // Pelo menos algum dos campos de preenchimento está vazio;
        res.innerHTML = '<p>Dados vazios ou incorretos! \u{1F620}</p> Você deve colocar números maiores do que 0.' // <- Emoji zangado
    } else if (passo <= 0) {
        // O valor no campo 'input_passo' é igual à 0;
        alert(`Valor de passo inválido! \nO passo ${passo} foi considerado como 1.`)
        calcContador(Number(inicio), Number(fim), 1); // <- p = 1 porquê passo = '0'.
    } else {
        // O valor no campo 'input_passo' é qualquer outro número.
        calcContador(Number(inicio), Number(fim), Number(passo));
    }

    function calcContador(i, f, p) 
    {   /** FUNÇÃO PARA REALIZAR A CONTAGEM DO CONTADOR DE P.A **/

        res.innerHTML = `<u>Contagem:</u> <br>`
        if(i < f) {
            // Contagem crescente:
            for (let n = i; n <= f; n += p) {
                res.innerHTML += `${n} \u{1F449} ` // <- Emoji de seta
            } res.innerHTML += `\u{1F6A9}` // <- Emoji de bandeira
        } else {
            // Contagem regressiva:
            for (let n = i; n >= f; n -= p) {
                res.innerHTML += `${n} \u{1F449} ` // <- Emoji de seta
            } res.innerHTML += `\u{1F6A9}` // <- Emoji de bandeira
        }
        
    }

}

document.querySelector('#input_numero').addEventListener('keydown', (enterExec) => {
    if(enterExec.code === 'Enter') { execTabuada(); }
})

function execTabuada() 
{ /** FUNÇÃO PARA CALCULAR A TABUADA DO VALOR EM #input_numero **/

    let num = document.querySelector('#input_numero').value
    let tab = document.querySelector('#tab_resultado')

    if (num.length == 0 || isNaN(num)) {
        alert(`Valor inválido! \nTente novamente, digitando um valor numérico no input.`)
    } else {
        tab.innerHTML = ``
        num = Number(num)

        for (let i = 0; i < 10; i++) {
            let item = document.createElement('option')
            let res = num * (i+1)

            item.text = `${num} x ${i + 1} = ${resultadoValidado(res)}`
            // IMPORTANTE PARA O BACK-END!! --> item.value = `tab${i}`
            tab.appendChild(item)
        }
    }

    function resultadoValidado(valor) {
        let decimal = valor.toString()
        
        if (decimal.indexOf(".") >= 0) {
            decimal = decimal.split('.')[1]

            if (decimal.length > 3) {
                return valor.toFixed(3)
            } else {
                return valor;
            }
        } else {
            return valor;
        }
    }
}