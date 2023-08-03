var p1 = document.querySelector('p#par001')
var d1 = document.querySelector('div#bt002')
d1.addEventListener('click', clicar)
d1.addEventListener('mouseenter', entradaMouse)
d1.addEventListener('mouseout', saidaMouse)

function entradaMouse() {
    p1.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque scelerisque vehicula ultrices. Proin varius magna.'
}
function clicar() {
    d1.innerText = 'Fui clicado!'
    d1.style.background = 'rgb(72, 72, 72)'
}
function saidaMouse() {
    window.alert(`Espere, volte, clique em mim!`)
    d1.innerText = 'Clique em mim!'
    d1.style.background = 'rgb(36, 36, 36)'
    p1.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque scelerisque vehicula ultrices. Por que você não clica em mim? ;-;'
} 