import { Client } from "./type";

export const checkAge = (date:string) => {
        var date1 = new Date(date.split('/').reverse().join('/'));
        var date2 = new Date();
        var timeDiff = Math.abs(date2.getTime() - date1.getTime());
        var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
        var anos =  diffDays/365
        console.log(date,date1,date2)
        return anos < 18 ? true : false
}

export const checkIfCPFalreadyExists = (cpf:string, clients:Client[]) => {
    return clients.find(client => client.cpf === cpf)
}

export const checkCPFFormat = (cpf:string) => {
    var cpfValido = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}))$/; 
    return cpfValido.test(cpf)
}

