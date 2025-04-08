function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom Dia!
        img.src = 'img/fotomanha.png'
        document.body.style.background = '#ffc6d6'
    } else if (hora >= 12 && hora <= 18) {
        //Boa Tarde!
        img.src = 'img/fototarde.png'
        document.body.style.background = '#d3e865'
    } else {
        // Boa Noite
        img.src = 'img/fotonoite.png'
        document.body.style.background = '#2e2a71'
    }
}