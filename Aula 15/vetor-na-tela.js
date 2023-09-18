let frutas = ['banana', 'limão', 'maçã', 'uva', 'pêra', 'laranja']

frutas.sort()
for (let i = 0; i < frutas.length; i++) {
    console.log(`${i+1}. ${frutas[i]}`)
}

console.log(`=:=:=:=:=:=:=:=:=`)

let j = 1

for (let item in frutas) {
    console.log(`${j++}. ${frutas[item]}`)
}