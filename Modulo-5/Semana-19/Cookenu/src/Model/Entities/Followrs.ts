export default class Follow {
    constructor(private id: string, private user_id: string, private follow_id:string){}
    getId = () => this.id
    getUser_Id = () => this.user_id
    getFollow_Id = () => this.follow_id
    
    static toUserModel(data:any): Follow {
        return new Follow( data.id, data.user_id, data.follow_id)
    }
}