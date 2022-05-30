enum categorias {
    INVERNO = 'inverno',
    VERÃO = 'verão',
    BANHO = 'banho',
    ÍNTIMAS = 'íntimas'
}
type produto = {
    nome:string,
    preco:number,
    classificação:string,
    precoComDesconto: number | undefined
}
const blackFriday = (produtos:produto[]):produto[] => {
    const promoções = produtos.map(produto=> {
        if(produto.classificação === categorias.VERÃO ) {
            produto.precoComDesconto = produto.preco * 0.95
            return produto
        } else if(produto.classificação === categorias.INVERNO ) {
            produto.precoComDesconto = produto.preco * 0.90
            return produto
        } else if(produto.classificação === categorias.BANHO ) {
            produto.precoComDesconto = produto.preco * 0.96
            return produto
        }else {
            produto.precoComDesconto = produto.preco * 0.93
            return produto
        }
    })
    return promoções
}

const produtos:produto[] = [
    {
        nome:'Blusa',
        preco:50,
        classificação:categorias.INVERNO,
        precoComDesconto: undefined
    },
    {
        nome:'camisa',
        preco:30,
        classificação:categorias.VERÃO,
        precoComDesconto: undefined
    },
    {
        nome:'Cueca',
        preco:10,
        classificação:categorias.ÍNTIMAS,
        precoComDesconto: undefined
    },
    {
        nome:'calça',
        preco:35,
        classificação:categorias.INVERNO,
        precoComDesconto: undefined
    },
    {
        nome:'Toalha',
        preco:20,
        classificação:categorias.BANHO,
        precoComDesconto: undefined
    },
    {
        nome:'calcinha',
        preco:25,
        classificação:categorias.ÍNTIMAS,
        precoComDesconto: undefined
    }
]
    
console.log(blackFriday(produtos))