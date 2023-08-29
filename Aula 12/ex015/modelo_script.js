function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let formAno = document.getElementById('txtano')
    let res = document.querySelector('div#res')

    if(formAno.value.length == 0 || Number(formAno.value) > ano) {
        alert('[ERRO 404] Verifique os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(formAno.value)
        let gênero = ''
        let img = document.querySelector('img#foto')

        if(fsex[0].checked) {
            gênero = 'um homem'
            if(idade >= 0 && idade < 7) {
                // Bebê ou criança
                document.body.style.background = '#0fd1d1'
                img.setAttribute('src', 'foto-bebe-m.jpg')
            } else if(idade < 14) {
                // Criança ou pré-adolescente
                document.body.style.background = '#0f83d1'
                img.setAttribute('src', 'foto-crianca-m.jpg')
            } else if(idade < 21) {
                // Jovem
                document.body.style.background = '#2748b3'
                img.setAttribute('src', 'foto-jovem-m.jpg')
            } else if(idade < 56) {
                // Adulto
                document.body.style.background = '#2e4694'
                img.setAttribute('src', 'foto-adulto-m.jpg')
            } else {
                // Idoso 
                document.body.style.background = '#4d5b87'
                img.setAttribute('src', 'foto-idoso-m.jpg')
            }
        } else if(fsex[1].checked) {
            gênero = 'uma mulher'
            if(idade >= 0 && idade < 7) {
                // Bebê ou criança
                document.body.style.background = '#e332bd'
                img.setAttribute('src', 'foto-bebe-f.jpg')
            } else if(idade < 14) {
                // Criança ou pré-adolescente
                document.body.style.background = '#c712a0'
                img.setAttribute('src', 'foto-crianca-f.jpg')
            } else if(idade < 21) {
                // Jovem
                document.body.style.background = '#c41b76'
                img.setAttribute('src', 'foto-jovem-f.jpg')
            } else if(idade < 56) {
                // Adulta
                document.body.style.background = '#c74a78'
                img.setAttribute('src', 'foto-adulto-f.jpg')
            } else {
                // Idosa
                document.body.style.background = '#c46c89'
                img.setAttribute('src', 'foto-idoso-f.jpg')
            }
        } else {
            window.alert('[ERRO 101] Gênero não constado selecionado.')
        }
        res.style.font = 'italic 16pt Arial'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    }
}