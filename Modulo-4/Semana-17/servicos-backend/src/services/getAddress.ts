import axios from "axios"
import { address } from "../types"

const BaseUrl = "https://viacep.com.br/ws/"

export default async function getAddress(CEP:number):Promise<address> {
        const fullAddress = await axios.get(`${BaseUrl}${CEP}/json`)
        return {
            CEP: fullAddress.data.cep,
            Logradouro: fullAddress.data.logradouro,
            Bairro: fullAddress.data.bairro,
            Cidade: fullAddress.data.localidade,
            Estado: fullAddress.data.uf
        }
}