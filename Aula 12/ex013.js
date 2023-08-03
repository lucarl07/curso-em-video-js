var timeNow = new Date()
var weekDay = timeNow.getDay(), currentDay
/* ORDEM DOS DIAS: 
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado
*/
switch(weekDay) {
    case 0:
        currentDay = 'Domingo'
        break
    case 1:
        currentDay = 'Segunda-feira'
        break
    case 2:
        currentDay = 'Terça-feira'
        break
    case 3:
        currentDay = 'Quarta-feira'
        break
    case 4:
        currentDay = 'Quinta-feira'
        break
    case 5:
        currentDay = 'Sexta-feira'
        break
    case 6:
        currentDay = 'Sábado'
        break
    default:
        currentDay = '[invalid day]'
}
console.log(`Hoje é ${currentDay}!`)