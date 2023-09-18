let num = [8, 3, 4];
num[3] = 7

num.push(5)
num.sort()
num.push(10)

console.log('Vetor: ' + num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let index = num.indexOf(8)

if (index >= 0) {
    console.log(`Índice de 8: ${index}`)
} else {
    console.log(`O valor 8 não foi encontrado`)
}