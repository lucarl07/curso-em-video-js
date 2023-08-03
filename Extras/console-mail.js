function enviarMsg() {
    // (X) PARTE 1 - Capturar o conteúdo do campo "input#msgCon001" em uma variável;
    // (X) PARTE 2 - Enviar o conteúdo dessa variável ao console;
    /* ( ) PARTE 3 - Fazer o programa obedecer as instruções enviadas, como:
        (X) 3.1 - Escrever o alerta "Olá mundo" na tela;
        (X) 3.2 - Escrever "Olá mundo" na página HTML;
        (X) 3.3 - Trocar a cor de fundo da página para vermelho, verde ou azul.
    */
    let inputMsg = String(document.querySelector('input#msgCon001').value)
    let helloWorld = 'Olá mundo'
    let moreText = document.querySelector('div#extra-text')
    let body = document.querySelector('body#css_body')
    
    console.log(`Mensagem para o console: ${inputMsg}`)
    switch(inputMsg) {
        default:
            // Output padrão, caso o usuário não envie um comando.
            alert(`A mensagem: "${inputMsg}" foi encaminhada.`)
            break
        case '#alert "Olá mundo"':
            // Função 3.1:
            window.alert(helloWorld)
            break
        case '#body.write "Olá mundo"': 
            // Função 3.2:
            moreText.innerHTML += 'Olá mundo <br/>'
            break

        // FUNÇÕES 3.3 ABAIXO:
        case '#changeStyle.background.color "red"':
            // Em CSS --> background-color: red;
            body.style.background = 'rgb(255, 0, 0)'
            break
        case '#changeStyle.background.color "green"':
            // Em CSS --> background-color: green;
            body.style.background = 'rgb(0, 255, 0)'
            break
        case '#changeStyle.background.color "blue"':
            // Em CSS --> background-color: blue;
            body.style.background = 'rgb(0, 0, 255)'
            break
    }
}