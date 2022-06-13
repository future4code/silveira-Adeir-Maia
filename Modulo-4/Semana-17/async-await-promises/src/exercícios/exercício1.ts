import axios from "axios";
import { BaseUrl } from "../constants.ts/constants";

//1.a 
//R. GET/subscribers

//1.b
//R. Promise<any[]>

//1.c
//R
const main = async () => {
    try {
        const response = await getSubscribers()
        console.log(response)
    } catch (error:any) {
        console.log(error.response?.data || error.message)
    }
}

async function getSubscribers(): Promise<any[]> {
    const response = await axios.get(`${BaseUrl}subscribers`);
    return response.data;
}

main()


