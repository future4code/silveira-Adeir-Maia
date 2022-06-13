import { TaskData } from "../Types"

export const dataCkeck = (name?:any,nickName?:any,email?:any,id?:any):string| undefined => {
    if(name !== undefined && stringVerification(name) || nickName !== undefined &&  stringVerification(nickName)) {
        return "O name ou o nickName não são do tipo string ou não foram passados"
    }
    if(email !== undefined && !checkEmailFormat(email)) {
        return "O email não é válido"
    }
    if(id !== undefined && numberVerification(id)){
        return "O id não é do tipo number ou não foi passado"
    }
}

export const taskDataCheck = (title:string,description:string,limitDate:string,creatorUserId:string):string| undefined => {
    if(stringVerification(title) || stringVerification(description) || numberVerification(creatorUserId)) {
        return "Um ou mais paramentros não foi passado ou não é válido"
    }
    if(stringVerification(limitDate) || !checkeDateFormat(limitDate)) {
        return "A data limite da tarefa não tem formato dd/mm/aaaa"
    }
}

export const idCheck = (id:any) => {
    if(numberVerification(id)){
        return "O id não é do tipo number ou não foi passado"
    }
}

export const taskAndResponsibleUserIdCheck = (taskId:any,responsibleId:any) => {
    if(numberVerification(taskId) || numberVerification(responsibleId)) {
        return "O id da tarefa ou o id do responsável pela tarefa não foi passado!"
    }
}

export const queryCheck = (query:any): string | undefined => {
    if(!query) {
        return "Não foi passado um termo para a busca!"
    }
}

const stringVerification = (string:any):boolean => typeof(string) !== "string" || string === ""

const numberVerification = (number:any):boolean => isNaN(number) || number === 0 || number === ''

const checkEmailFormat = (email:string):boolean => {
    const emailValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/; 
    return emailValid.test(email)
}

const checkeDateFormat = (date:string):boolean => {
    const dateValid = /^(\d{2})\/(\d{2})\/(\d{4})$/
    return dateValid.test(date)
}

export const changeDateFormat = (tasksArray:TaskData[]):TaskData[] => {
    return tasksArray.map(task => {
        const limitDateReverted  = new Date(task.limitDate).toISOString().slice(0, 10).split("-").reverse().join("/");
        return {...task, limitDate: limitDateReverted}
    })
}
