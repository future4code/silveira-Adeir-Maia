import axios from "axios";
import { BaseUrl } from "../constants.ts/constants";

//1.a
//R Eu acredito que com a arroy funcrion é possivel fazer um função sem nomea-la.

//2.b
//R

const main = async () => {
    try {
        const response = await getSubscribers()
        console.log(response)
    } catch (error:any) {
        console.log(error.response?.data || error.message)
    }
}

const getSubscribers = async ():Promise<any[]> => {
    const result = await axios.get(`${BaseUrl}subscribers`)
    return result.data
}

main()