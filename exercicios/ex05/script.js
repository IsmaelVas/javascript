let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')

let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        // Como estava feito
        //let valor = Number(num.value)
        valores.push(Number(num.value))
        let item = document.createElement('option')
        //item.text = `Valor ${valor} adicionado.`
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já se encontra na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        /* for (let n = 0; n < valores.length; n++) {
            if (valores[n] > maior) {
                maior = valores[n]
            }
            if (valores[n] < menor) {
                menor = valores[n]
            }
        } */

        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior){
                maior = valores[pos]
            }
            if (valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma / total

        /* for (let n = 0; n < total; n++) {
            soma += valores[n]
        }
        res.innerHTML = `Ao todo temos ${total} números cadastrados.
                    <br><br>
                    O maior valor informado foi ${maior}
                    <br><br>
                    O menor valor informado foi ${menor}
                    <br><br>
                    Somando todos os valores, temos ${soma}
                    <br><br>
                    A média dos valores digítados é ${soma / total}` */

        res.innerHeight = ''
        res.innerHTML += `<p>Ao todo temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digítados é ${media}.</p>`

    }
}