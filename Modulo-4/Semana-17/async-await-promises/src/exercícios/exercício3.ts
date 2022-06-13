type user = {
    id:string,
    email:string,
    name:string
}

//3.a
// Não. porque o tipo user é exatamente igual a tipagem do objeto que representa um usuário.

//3.b
// Para que o nosso coódigo seguro, e previsivel e legível evitando que ele quebre

//3.c
//

import axios from "axios";
import { BaseUrl } from "../constants.ts/constants";

const main = async () => {
    try {
        const response = await getSubscribers()
        console.log(response)
    } catch (error:any) {
        console.log(error.response?.data || error.message)
    }
}

const getSubscribers = async ():Promise<user[]> => {
    const result = await axios.get(`${BaseUrl}subscribers`)
    return result.data
}

main()