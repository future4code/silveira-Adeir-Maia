import { connection } from "../connection";

export default function assignResponsible(id:number,responsible_user_id:number) {
    return connection("Tasks").update({responsible_user_id}).where({id})
}