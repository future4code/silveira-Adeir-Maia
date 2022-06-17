import queryGetUserById from "../querys/getUserById"
import { User } from "../type"

export const dataCheck = (name:string,email:string,password:string) => {
    if(stringVerification(name) || stringVerification(email) || stringVerification(password)) {
        return "Um ou mais parametros passados não são do tipo string ou não foi passado."
    }
}

export const productDataCheck  = (name:string,price:number,image_url:string) => {
    if(stringVerification(name) || stringVerification (image_url)) {
        return "Um ou mais parametros 'nome' ou 'image_url' não são do tipo string ou não foi passado."
    }

    if(numberVerification(price)){
        return "O parametro 'preço' não é do tipo number ou não foi passado."
    }
}

export const purchaseDataCheck = (user_id:string,product_id:string,quantity:number) => {
    if((stringVerification(user_id) || user_id.length !== 21) || (stringVerification(product_id) || product_id.length !== 21 )) {
        return "O parametro 'id do usuário' e/ou 'id do produto' não tem o formato correto."
    }
    if(numberVerification(quantity)) {
        return "O parametro 'quantidade' não tem o formato correto."
    }
}

export const  idCheck =  (user_id:string) => {
    if(stringVerification(user_id) || user_id.length !== 21 ) {
        return "O 'id do usuário' não é válido ou não foi passado!"
    }
}

export const querysCheck = (colum:string,orderBY:string) => {
    if(colum.toUpperCase() !== "NAME" && colum.toUpperCase() !== "PRICE") {
        return `Query param 'colum' inválido, por favor escolha 'name' para ordenar por nome ou 'price' par ordenar por preço.`
    }
    if((orderBY.toUpperCase() !== "ASC" && orderBY.toUpperCase() !== "DESC") && orderBY !== "") {
        return `Query param 'orderBy' inválido, por favor escolha 'ASC' para ordem crescente ou 'DESC' para ordem decrescente.`
    }
}

const stringVerification = (string:any):boolean => typeof(string) !== "string" || string === ""

const numberVerification = (number:any):boolean => isNaN(number) || number === 0 || number === ''