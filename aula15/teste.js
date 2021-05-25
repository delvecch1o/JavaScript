let num = [5, 8, 2, 9, 3]
num.push(1) // tem que inserir algum valor sempre antes do sort() para que posso ser ordenado o vetor.
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)

console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(8) // localiza a posição do vetor na qual está sendo procurada.
if (pos == -1){
    console.log(`O valor não foi encontrado!`)
} else{
    console.log(`O valor 8 está na posição ${pos}`)
}
