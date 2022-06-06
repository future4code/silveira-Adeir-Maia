import { Client, Extract } from "./type";

export const checkData = (body:Extract,clients:Client[]):string | Client => {
    const {name ,value,data,description,cpf} = body
    if(checkParameters(value,data,description,cpf)) {
        return 'Um dos paramentros está ausente ou não corresponde ao type correto.'
    }
    if (data && checkOldData(data as string)){
        return 'Não é possivel agendar um pagamento para uma data que já passou.'
    } 
    const account = checkIfAccountAlreadyExist(cpf as string, name as string, clients)
    if(account) {
        const balance = account.balance
        if(balance - value < 0) {
            return 'Saldo Insuficiente.'
        } else {
            if(data) {
                return schedulePayment(value,data,description,account)
            } else {
                return processPayment(value,description,account)
            }
        }
    } else {
        return 'Não há nenhuma conta cadastrada com CPF informado.'
    }
}

export const ckecktransferData = (body:any,clients:Client[]) => {
    const {originAccName , originAccCPF , value , destinyAccName, destinyAccCPF} = body
    const originAcc = checkIfAccountAlreadyExist(originAccCPF, originAccName, clients)
    const destinyAcc = checkIfAccountAlreadyExist(destinyAccCPF, destinyAccName,  clients)
    if(valueVerification(value) || nameVerification(originAccName) || nameVerification(destinyAccName)){
        return "O VALOR da transferncia ou NOME do titular da conta de origem ou da conta de destino não é válido"
    }
    if(!checkCPFFormat(body.originAccCPF) || !checkCPFFormat(body.destinyAccCPF)){
        return "O CPF da conta de origm ou da conta destino não corresponde ao formato 000.000.000-00."
    }
    if(originAcc === undefined) {
        return "Não há nenhuma conta cadastrada com CPF da conta de origem."
    }
    if(destinyAcc === undefined) {
        return "Não há nenhuma conta cadastrada com CPF da conta destino."
    }
    if(originAcc.balance < body.value) {
        return "Saldo Insuficiente"
    }
    originAcc.balance = originAcc.balance - body.value
    const transactionOrigin:Extract = {
        value: - body.value,
        data: getFullDate(),
        description :'Transverencia entre contas da mesma Instituição',
    }
    originAcc.extract.push(transactionOrigin)

    destinyAcc.balance = destinyAcc.balance + body.value
    const transactionDestiny:Extract = {
        value: body.value,
        data: getFullDate(),
        description :'Transverencia entre contas da mesma Instituição',
    }
    destinyAcc.extract.push(transactionDestiny)
    return true
}

export const checkAge = (date:string):boolean => {
    var date1 = new Date(date.split('/').reverse().join('/'));
    var date2 = new Date();
    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    var idade =  diffDays/365
    return idade < 18 ? true : false
}

export const checkIfAccountAlreadyExist = (cpf:string, name:string, clients:Client[]):undefined | Client => {
return clients.find(client => client.cpf === cpf && client.name === name.toUpperCase())
}

export const checkCPFFormat = (cpf:string):boolean => {
var cpfValido = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}))$/; 
return cpfValido.test(cpf)
}

export const getFullDate = ():string => {
const date = new Date().toISOString().split("T")[0].split('-').reverse().join('/')
const hours = new Date().toISOString().split("T")[1].slice(0, 5)
return `${date} ${hours}`
}

const nameVerification = (name:any):boolean => typeof(name) !== "string" || ! name
const valueVerification = (value:any):boolean => typeof(value) !== "number" || !value
const dataVerification = (data:any):boolean => data ? typeof(data) !== "string" : false 
const descriptionVerification = (description:any):boolean => typeof(description) !== "string" || !description

const checkParameters = (value:any,data:any,description:any,cpf:any):boolean => {
    if ( valueVerification(value) || dataVerification(data) || descriptionVerification(description) || !checkCPFFormat(cpf) )  {
            return true 
        } else {
            return false
        }
}

export const checkOldData = (data:string):boolean => {
    var paymentData = new Date(data.split('/').reverse().join('/')).getTime()
    var now = new Date().getTime()
    const comparationDates = paymentData - now
    return comparationDates < 0 ? true : false
}

const schedulePayment = (value:number,data:string,description:string,account:Client):Client => {
    const transaction:Extract = {value: -value, data, description}
    account.extract.push(transaction)
    return account
}

const processPayment = (value:number,description:string,account:Client) => {
    account.balance = account.balance - value
    const date = new Date().toISOString().split("T")[0].split('-').reverse().join('/')
    const transaction:Extract = {value: -value, data: date, description}
    account.extract.push(transaction)
    return account
}