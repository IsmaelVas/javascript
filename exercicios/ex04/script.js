function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    
    if (num.value.length == 0) {
        window.alert('[ERRO] Digite um número!')
    } else {
        tab.innerHTML = ''
        let n = Number(num.value)
        for (let t = 1; t <= 10; t++) {
            let item = document.createElement('option')
            item.text = `${n} X ${t} = ${n * t}`
            tab.appendChild(item)
        }
    }
}