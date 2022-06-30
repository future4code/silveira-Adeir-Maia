export default class Recipe {
    constructor( 
    private id:string, private title:string, private description:string, private criationDate:string, private userId:string
        ){}

    getId = () => this.id
    getTitle = () => this.title
    getDescription = () => this.description
    getCriationDate = () => this.criationDate
    getUserId = () => this.userId

    static toUserModel(data:any): Recipe {
        return new Recipe( data.id, data.title, data.description, data.criationDate, data.user_id)
    }
}