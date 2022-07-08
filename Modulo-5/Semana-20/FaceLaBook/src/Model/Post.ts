import { POST_TYPE } from "./Types";

export class Post {
    constructor(
        private id:string, 
        private photo:string, 
        private description:string, 
        private creation_date:string, 
        private type:POST_TYPE,
        private user_id:string
        ){}
}