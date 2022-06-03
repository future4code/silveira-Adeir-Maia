const Nacimento = process.argv[2].split('/').reverse().join('/')
const Emissao = process.argv[3].split('/').reverse().join('/')

const diferencaDatas = (data:string):number => {
    var date1 = new Date(data);
    var date2 = new Date();
    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    var anos =  diffDays/365
    return anos
}

const idade = diferencaDatas(Nacimento)
const carteira = diferencaDatas(Emissao)

const checkCarteira = (idade:number,carteira:number):boolean => {
    if (idade <= 20 ) {
        return carteira >= 5 ? true : false
    } else if (idade > 20 &&  idade <= 50) {
        return carteira >=10 ? true : false
    } else {
        return carteira > 15 ? true : false
    }
}

console.log(checkCarteira(idade,carteira))

