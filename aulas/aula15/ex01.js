let num = [5, 8, 1, 9, 3]

console.log(`O vetor é formado por: ${num}`)
console.log(`O vetor tem um total de ${num.length} posições`);
num.push(0)
console.log(`Acrescentando o número 0, fica: ${num}`)
console.log(`Agora o vetor tem um total de ${num.length} posições`);
console.log(`Vetor ordenado: ${num.sort()}`);
let pos = num.indexOf(7)
if (pos == -1) {
    console.log('O valor não foi encontrado!');
} else {
    consaole.log(`O valor está na posição ${pos}`)
}