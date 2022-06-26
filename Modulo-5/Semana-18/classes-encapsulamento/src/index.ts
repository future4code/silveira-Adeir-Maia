class Transaction {
    private description: string
    private value: number
    private date: string

    constructor(description:string,value:number,date:string) {
        this.description = description,
        this.value = value,
        this.date = date
    }
    public getDescription():string {
        return this.description
    }
    public getValue():number {
        return this.value
    }
    public getDate():string {
        return this.date
    }
}

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];

    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }
    /**
     * name
     */
    public getCPF():string {
        return this.cpf
    }
    public getName():string {
        return this.name
    }
    public getAge():number {
        return this.age
    }
    public getBalance():number {
        return this.balance
    }
    public getTransations():Transaction[] {
        return this.transactions
    }
    public setTransaction(transactions:Transaction):void{
        this.transactions.push(transactions)
    }
  }

//1.a Ele serve para definir os valores de algumas propriedades da classe ao ser inicializada. É uma função que existe
//dentro da clase, bastando chama-la passando como argumentos os valores da propiedades. No corpo da função usamos 
// a sintaxe this.nomeda propiedade = valor da propiedade.

//1.b
const usuario = new UserAccount('15975345682','Maria com classe',22)
const usuario2 = new UserAccount('98745632115','Dev Junior',30)
// 1 vez

//1.c
//usando uma função Getters pública para exibir o valor da variável

//2. 
const transacao = new Transaction('Pagamento da Prvi', 850, '20/06/2022')
usuario.setTransaction(transacao)
console.log(usuario.getTransations())

//3
class Bank {
    private accounts: UserAccount[]
    constructor(accounts: UserAccount[]) {
        this.accounts = accounts
    }
    public registerAccount (account: UserAccount):void{
        this.accounts.push(account)
    }
    public getAccounts (): UserAccount[]{
        return this.accounts
    }
}

const LabeBank = new Bank([usuario,usuario2])
console.log(LabeBank.getAccounts())



