### 1.a
```
export interface User  {
    name:string,
    balance:number
}
```
### 1.b
```
const Purchase = (user:User, value: number):User | undefined=> {
    if(user.balance >= value) {
        return {
            ...user, balance: user.balance - value
        }
    }
    return undefined
}
```

### 2
```
describe("testando o usuário", ()=> {
    test("testar o saldo maior que a compra", ()=> {
        const user:User = {
            name:'astrodev',
            balance:100
        }

        const result = Purchase(user,40)

        expect(result).toEqual({
            name:'astrodev',
            balance: 60
        })
    })

    test("testar o saldo igual a compra", () => {
        const user:User = {
            name:'astrodev',
            balance:100
        }

        const result = Purchase(user,100)

        expect(result).toEqual({
            name:'astrodev',
            balance: 0
        })
    })

    test("testar o saldo maior a compra", () => {
        const user:User = {
            name:'astrodev',
            balance:100
        }

        const result = Purchase(user,150)

        expect(result).not.toBeDefined()
    })
})
```
### 3
```
export const verifyAge = (cassino:Casino, users:CasinoUser[]):Result => {
    const allowed:CasinoUser[] = [] 
    const unallowed:CasinoUser[] = [] 
    users.map(player => {
        if(cassino.location === LOCATION.EUA && player.age >= 21) {
            allowed.push(player)
        } 
        else if (cassino.location === LOCATION.BRAZIL && player.age >= 18){
            allowed.push(player)
        }
        else {
            unallowed.push(player)
        }
    })

    const brazilians = {
        allowed : allowed.filter(player => player.nacionality === NACIONALITY.BRAZILIAN).map(p => p.name),
        unallowed : unallowed.filter(player => player.nacionality === NACIONALITY.BRAZILIAN).map(p => p.name)
    }

    const americans = {
        allowed : allowed.filter(player => player.nacionality === NACIONALITY.AMERICAN).map(p => p.name),
        unallowed : unallowed.filter(player => player.nacionality === NACIONALITY.AMERICAN).map(p => p.name)
    }

    return {brazilians,americans}
}
```
### 4 
```
describe("testando o cassino", () => {
    test("teste cassino1", () => {
        const result = verifyAge(cassino1,users)
        console.log(result)

        expect(result).toEqual({
            brazilians: {allowed:['Eduardo Cunha','Flávio Bolsonaro'],unallowed:['Felipe Neto']},
            americans: {allowed:['Danny Ocean','Rusty Ryan'],unallowed:['Linis Caldwell']}
        })
    })

    test("teste cassino2", () => {
        const result = verifyAge(cassino2,users)
        console.log(result)

        expect(result).toEqual({
            brazilians: {allowed:['Eduardo Cunha','Flávio Bolsonaro'],unallowed:['Felipe Neto']},
            americans: {allowed:['Danny Ocean','Rusty Ryan','Linis Caldwell'],unallowed:[]}
        })
    })
})
```