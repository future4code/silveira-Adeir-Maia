const apresentação = (nome:string,data:string):string=> {
    return `Olá, me chamo ${nome}, nasci no dia ${data.split('/')[0]} do mês ${data.split('/')[1]} do ano ${data.split('/')[2]}`
}

console.log(apresentação('Adeir','12/12/1994'))