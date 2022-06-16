export const dataCheck = (name:string,email:string,password:string) => {
    if(stringVerification(name) || stringVerification(email) || stringVerification( password)) {
        return "Um dos parametros passados não do tipo string ou não foi passado."
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
    

const stringVerification = (string:any):boolean => typeof(string) !== "string" || string === ""

const numberVerification = (number:any):boolean => isNaN(number) || number === 0 || number === ''