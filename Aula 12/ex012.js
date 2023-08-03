var tempoAgora = new Date()
var hora = tempoAgora.getHours()

if(hora < 2) {
    console.log(`Agora é exatamente ${hora} hora.`)
} else {
    console.log(`Agora são exatamente ${hora} horas.`)
}

if (hora < 5) {
    console.log(`Bom dia, madrugueiro!`)
} else if (hora < 12) {
    console.log(`Bom dia!`)
} else if (hora <= 18) {
    console.log(`Boa tarde!`)
} else {
    console.log(`Boa noite!`)
}