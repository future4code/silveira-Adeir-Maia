function carregar() {
    var m = window.document.getElementById('msg')
    var i = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    m.innerHTML = `<strong>Agora é ${hora} horas e ${minutos} minutos.</strong>`
    if (hora > 5 && hora <= 12) {
        i.src = "./img/manha.jpg"
        window.document.body.style.backgroundColor = 'khaki'
    } else if (hora > 12 && hora <= 18) {
        i.src = "./img/tarde.jpeg"
        window.document.body.style.backgroundColor = 'deepskyblue'
    } else {
        i.src = "./img/noite.jpg"
        window.document.body.style.backgroundColor = 'darkgrey'
    }
}