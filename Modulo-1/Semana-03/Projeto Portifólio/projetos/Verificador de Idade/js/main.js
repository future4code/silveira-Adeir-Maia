function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')//É preciso conver para Number!!!
    var res = document.querySelector('p#res')
    var nasc = Number(fano.value)//Para receber o valor da caixa de texto e transformar em número

    if (nasc == 0 || nasc > ano || nasc < 1900) {
        window.alert('ERRO verifique os dados')
    } else {
        let fsex = window.document.getElementsByName('radsex')
        var idade = ano - nasc
        let genero = ''
        let img = window.document.createElement('img')//Criou a tag <img></img> dinamicamente pelo JS
        img.setAttribute('id', 'foto') //Deu a tag <img> a >>id='foto'<<
        img.setAttribute('width', '300')
        img.setAttribute('height', '300')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade > 0 && idade < 10) {
                img.setAttribute('src', './img/foto-bebe-m.png')
            } else if (idade < 18) {
                img.setAttribute('src', './img/foto-jovem-m.png')
            } else if (idade < 60) {
                img.setAttribute('src', './img/foto-adulto-m.png')
            } else {
                img.setAttribute('src', './img/foto-idoso-m.png')
            }
        } else {
            genero = 'Mulher'
            if (idade > 0 && idade < 10) {
                img.setAttribute('src', './img/foto-bebe-f.png')
            } else if (idade < 18) {
                img.setAttribute('src', './img/foto-jovem-f.png')
            } else if (idade < 60) {
                img.setAttribute('src', './img/foto-adulto-f.png')
            } else {
                img.setAttribute('src', './img/foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Você é ${genero} de ${idade} anos.`
        res.appendChild(img)
    }
}