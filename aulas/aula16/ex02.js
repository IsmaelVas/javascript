/* function fatorial(n) {
    let fat = 1
    for (let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}

console.log(fatorial(5));
 */

//Recursivedade - Usa a propria função para a resolução.
function fatorial(n) {
    if (n == 1) {
        return 1
    } else {      //chamando a função
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5));
