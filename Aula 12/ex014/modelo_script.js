function carregar() {
    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var horario = '[Erro no horário]' // Mensagem padrão caso nenhuma das demais sejam processadas.

    /* LISTA DE HORÁRIOS (Mais cedo --> Mais tarde):
        Manhã: 00h às 11h
        - Madrugada: 00h às 04h
        - Nascer do Sol: 04h às 06h
        Tarde: 12h às 19h
        - Pôr do Sol: 17h às 19h
        Noite: 19h às 00h   */

    if (hora < 4) {
        horario = 'manhã' // BOA MADRUGADA!
        img.src = 'foto-noite.png'
        document.body.style.background = '#233451'
    } else if(hora >= 4 && hora < 6) {
        horario = 'manhã' // BOM DIA! (Nascer do Sol)
        img.src = 'foto-manha-nascer-do-sol.png'
        document.body.style.background = '#84638E'
    } else if(hora >= 6 && hora < 12) { 
        horario = 'manhã' // BOM DIA!
        img.src = 'foto-manha.png'
        document.body.style.background = '#E2CD9F'
    } else if(hora >= 12 && hora < 17) {
        horario = 'tarde' // BOA TARDE!
        img.src = 'foto-tarde.png'
        document.body.style.background = '#68BEED'
    } else if(hora >= 17 && hora < 19) {
        horario = 'tarde' // BOA TARDE! (Pôr do sol)
        img.src = 'foto-tarde-por-do-sol.png'
        document.body.style.background = '#7A8AA3'
    } else if(hora >= 19) { 
        horario = 'noite' // BOA NOITE!
        img.src = 'foto-noite.png'
        document.body.style.background = '#35507A'
    }

    if(hora > 1) {
        msg.innerHTML = `Agora são ${hora}:${minuto} da ${horario}.`
    } else if(hora == 0) {
        msg.innerHTML = `Agora é ${hora}:${minuto} da madrugada.`
    } else {
        msg.innerHTML = `Agora é ${hora}:${minuto} da ${horario}.`
    }
    
}
