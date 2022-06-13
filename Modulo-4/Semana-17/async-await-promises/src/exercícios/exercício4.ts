import axios from "axios";
import { BaseUrl } from "../constants.ts/constants";

//2.a
//R Uma função normal que não tem retorno, porque quando se cria uma notícia não se espera nada 

//2.b
//R

async function createNews(title:string,content:string,date:number):Promise<void> {
    await axios.put(`${BaseUrl}news`,{title,content,date})
}

createNews("Bolsonaro22","Bolsonaro vence no primeiro turno e eleito 39° presidente do brasil",new Date("02/10/2022").getTime())