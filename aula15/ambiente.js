let num = [5, 8, 2, 9, 3]
/* 
console.log(num)
console.log(`Nosso vetor é o ${num} e tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
num.push(1) // adicionando valor 1 a ultima posição do vetor
console.log(num)
num.sort()
console.log(`Rearranjando os valores em ordem crescente...`)
console.log(num)
*/
for (let pos=0; pos < num.length ; pos++) {
    console.log(num[pos])
}

let pos = num.indexOf(8)
if (pos == -1){
    console.log('O valor não foi encontrado no vetor')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}