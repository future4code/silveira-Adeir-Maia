import idGenerator from "./idGerator/idGerator";

class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;
  
    constructor(
          id: string,
          email: string,
          name: string,
          password: string
      ){
          console.log("Chamando o construtor da classe User")
          this.id = id
          this.email = email
          this.name = name 
          this.password = password
      }
  
      public getId(): string {
          return this.id
      }
  
      public getEmail(): string {
          return this.email
      }
  
      public getName(): string {
          return this.name
      }

      public introduceYourself():void {
        console.log(`Olá, sou ${this.name}. Bom dia!`)
      }
  }

const user= new User(idGenerator(),'usuario','usuario@email.com','qualquer')
console.log(user)

//1.a
//Não, pois não há uma função get password e a propiedade password é privada

//1.b
//uma vez

class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;
  
    constructor(
      id: string,
      email: string,
      name: string,
      password: string,
      creditCard: string
    ) {
      super(id, email, name, password);
      console.log("Chamando o construtor da classe Customer");
      this.creditCard = creditCard;
    }
  
    public getCreditCard(): string {
      return this.creditCard;
    }
  }

const costumer = new Customer(idGenerator(),'custumer@gmail.com','custumer','qualquer','159753852456')
console.log(costumer)

//2.a
//1 vez

//2.b
// 1 vez so porque foi criado apenas uma foi criado apenas uma instancia.

//3.a
//Não, pois não há uma função get password e a propiedade password é privada

//4
costumer.introduceYourself()

//5.

//##############################################################################

//1.a
export interface Client {
    name: string;
    // Refere-se ao nome do cliente
  
    registrationNumber: number;
    // Refere-se ao número de cadastro do cliente na concessionária
      // como se fosse um id
  
    consumedEnergy: number;
    // Refere-se à energia consumida pelo cliente no mês
  
    calculateBill(): number;
    // Retorna o valor da conta em reais
  }

  const client: Client = {
    name: "Golen",
    registrationNumber: 1,
    consumedEnergy: 100,
  
    calculateBill: () => {
      return 2;
    }
  }

console.log(client.name,client.registrationNumber,client.consumedEnergy,client.calculateBill())
//Consegui imprimir todas as propiedades


//2.a
export abstract class Place {
    constructor(protected cep: string) {}
  
      public getCep(): string {
          return this.cep;
    }
  }

// const place = new Place('33015100')
//Não é possível criar uma instância de uma classe abstrata.

//3.a
export class Residence extends Place {
    constructor(
      protected residentsQuantity: number,
      // Refere-se ao número de moradores da casa
  
      cep: string
    ) {
      super(cep);
    }
    public getResidentsQuantity(): number {
        return this.residentsQuantity
      }
  }

export class Commerce extends Place {
    constructor(
      protected floorsQuantity: number,
      // Refere-se à quantidade de andares do lugar
  
      cep: string
    ) {
      super(cep);
    }
    public getflorQuantity(): number {
        return this.floorsQuantity
      }
  }

export class Industry extends Place {
    constructor(
      protected machinesQuantity: number, 
      // Refere-se à quantidade de máquinas do local 
      
      cep: string
          ) {
          super(cep);
    }
    public getmachinesQuantity(): number {
        return this.machinesQuantity
      }
  }

//4.a
class ResidentialClient extends Residence implements Client {
    constructor(
      public name: string,
      public registrationNumber: number,
      public consumedEnergy: number,
      private cpf: string,
      residentsQuantity: number,
      cep: string
    ) {
      super(residentsQuantity, cep);
    }
  
    public getCpf(): string {
      return this.cpf;
    }
  
    public calculateBill(): number {
      return this.consumedEnergy * 0.75;
    }
  }

// 
// Tem 6 propiedades: name, registrationNumber, consumedEnergy, cpf, residentsQuantity, cep e 2 funções
// getCPF, calculateBill

class ComercialClient extends Commerce implements Client{
    constructor (
        public name:string, public registrationNumber:number, public consumedEnergy:number, private cnpj: string, florsQuantity: number, cep:string
        ){
        super(florsQuantity,cep)
    }
    calculateBill(): number {
        return this.consumedEnergy * 0.53
    }
    public getCep(): string {
        return this.cep
    }
    public getName(): string {
        return this.name
    }
    public getRegistration(): number {
        return this.registrationNumber
    }
    public getCosumedEnergy(): number {
        return this.consumedEnergy
    }
    public getFlorsQuantity(): number {
        return this.floorsQuantity
    }
    public getCEP(): string {
        return this.cep
    }
}

// 5.a name, registrationNumber, consumedEnery, calculed bill
// 5.b cnpj, florquantity

class IndustrialClient extends Industry implements Client {
    constructor(public name: string,  public registrationNumber:number, public consumedEnergy:number, private insdustryNumber:number, machineQuantity:number, cep:string){
        super(machineQuantity,cep)
    }
    calculateBill = ():number => {
        return this.consumedEnergy * 0.4
    }

    public getIndustryNumber(): number {
        return this.insdustryNumber
    }
}
//6.a filha da instrustry porque ela tem a machineQuantity que é uma especificidade da industrial
//6.b Client
//6 porque as outras propiedades são 



class Employee extends User {
    constructor (id:string,email:string,name:string,password:string, protected admissionDate: string, protected baseSalary: number) {
        super(id,email,name,password)
    }
    getAdmissionDate = () => {
        return this.admissionDate
    }
    getBaseSalary = () => {
        return this.baseSalary
    }
    calculateSalary = () => {
        return this.baseSalary + 400
    }
}

const colaborador = new Employee(idGenerator(),'colaborador@gmail.com','colabarador','123','21/06/2022',3000)

console.log(colaborador.getAdmissionDate(),colaborador.getBaseSalary(), colaborador.calculateSalary())
