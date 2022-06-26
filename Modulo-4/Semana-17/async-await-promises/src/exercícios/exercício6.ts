import axios from "axios";
import { BaseUrl } from "../constants.ts/constants";

//6.a
// Com ele é possivel enviar varias requisições de uma vez, de modo que o tempo gasto será o da requisição quer demorar mais.

//6.b 
// O tempo gasto para será o da requisição que demorar mais porque todas serão enviadas ao mesmo tempo.

const getUserId = (users:any):string[] => {
    return users.map((user:any) => user.id)
} 

const notifySubscribe = async (usersIds:string[]) => {
    try {
        const request = usersIds.map(id => {
            axios.post(`${BaseUrl}notifications`,{
                "subscriberId": id,
                "message": "Seja bem vindoooooo!"
            })
        })
        await Promise.all(request)
        console.log("Notificações enviadas com sucesso!")
    } catch (error) {
        console.log("erro ao notificar")
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