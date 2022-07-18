export interface User  {
    name:string,
    balance:number
}

export const Purchase = (user:User, value: number):User | undefined=> {
    if(user.balance >= value) {
        return {
            ...user, balance: user.balance - value
        }
    }
    return undefined
}

interface Result {
    brazilians: ResultItem;
    americans: ResultItem;
  }
  
  interface ResultItem {
    allowed: string[];
    unallowed: string[];
  }  

enum LOCATION {
    EUA = "EUA",
    BRAZIL = "BRAZIL",
  }
  
  enum NACIONALITY {
    BRAZILIAN = "BRAZILIAN",
    AMERICAN = "AMERICAN",
  }
  
  interface CasinoUser {
    name: string;
    age: number;
    nacionality: NACIONALITY;
  }
  
  interface Casino {
    name: string;
    location: LOCATION;
  }

export const cassino1:Casino = {
    name:'BlackCat',
    location: LOCATION.EUA

} 

export const cassino2:Casino = {
    name:'Gato Negro',
    location: LOCATION.BRAZIL
    
} 

const player1:CasinoUser = {
    name:'Danny Ocean',
    age:50,
    nacionality: NACIONALITY.AMERICAN
}

const player2:CasinoUser = {
    name:'Rusty Ryan',
    age:35,
    nacionality: NACIONALITY.AMERICAN
}

const player3:CasinoUser = {
    name:'Linis Caldwell',
    age:20,
    nacionality: NACIONALITY.AMERICAN
}

const player4:CasinoUser = {
    name:'Eduardo Cunha',
    age:50,
    nacionality: NACIONALITY.BRAZILIAN
}

const player5:CasinoUser = {
    name:'Felipe Neto',
    age:15,
    nacionality: NACIONALITY.BRAZILIAN
}

const player6:CasinoUser = {
    name:'Flávio Bolsonaro',
    age:30,
    nacionality: NACIONALITY.BRAZILIAN
}

export const users = [player1,player2,player3,player4,player5,player6]

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