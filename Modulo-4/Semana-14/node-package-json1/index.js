// 1.
// aprocess.argv[2]

// 1.b
const nome = process.argv[2]
const idade = +process.argv[3]

var red, blue, reset, purple;
red = '\u001b[31m';
blue = '\u001b[34m';
purple = '\033[1;35m';
reset = '\u001b[0m';


if (process.argv[2] && process.argv[3]) {

    console.log(red + `Olá, meu nome é ${nome} e tenho ${idade} anos.`)


    // 1.c
    const newage = idade + 7
    console.log(purple + `Olá, meu nome é ${nome}` + blue + ` e tenho ${idade} anos e daqui` + red + ` a 7 anos eu terei ${newage}`)
} else {
    console.log(`não recebi os 2 parametros`)
}




