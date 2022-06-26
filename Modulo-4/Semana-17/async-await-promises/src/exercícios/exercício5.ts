import axios from "axios";
import { BaseUrl } from "../constants.ts/constants";

type user = {
    id:string,
    email:string,
    name:string
}

const getUserId = (users:any):string[] => {
    return users.map((user:any) => user.id)
} 

const notifySubscribe = async (usersIds:string[]) => {
    for(const id of usersIds) {
        await axios.post(`${BaseUrl}notifications`,{
            "subscriberId": id,
	        "message": "Seja bem vindoooooo!"
        })
        .then(()=> console.log(`Mensagem enviada ao inscrito de id ${id}`))
        .catch(() => console.log(`Erro ao enviar a mensagem ao inscrito de id ${id}`))
    }
}

async function getSubscribers(): Promise<any[]> {
    const response = await axios.get(`${BaseUrl}subscribers`);
    return response.data;
}

const main  = async () => {
    try {
        const users = await getSubscribers()
        const usersIds = getUserId(users)
        await notifySubscribe(usersIds)
    } catch (error:any) {
        console.log(error.response?.data || error.message)
    }
}

main()
// .then(getSubscribers)
// .then(getUserId)
// .catch(erro => erro.response?.data || erro.message)