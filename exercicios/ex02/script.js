function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano ) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            if (idade >= 0 && idade < 10) {
                genero = 'uma criança'
                img.setAttribute('src', 'img/bebemasculino.png  ')
            } else if (idade < 21) {
                genero = 'um jovem'
                img.setAttribute('src', 'img/jovemmasculino.png')
            } else if (idade < 50) {
                genero = 'um adulto'
                img.setAttribute('src', 'img/adultomasculino.png')
            } else {
                genero = 'um idoso'
                img.setAttribute('src', 'img/idosomasculino.png')
            }
        } else if (fsex[1].checked) {
            if (idade >= 0 && idade < 10) {
                genero = 'uma criança'
                img.setAttribute('src', 'img/bebefeminina.png')
            } else if (idade < 21) {
                genero = 'um jovem'
                img.setAttribute('src', 'img/jovemfeminina.png')
            } else if (idade < 50) {
                genero = 'um adulta'
                img.setAttribute('src', 'img/adultafeminina.png')
            } else {
                genero = 'um idosa'
                img.setAttribute('src', 'img/idosafeminina.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}