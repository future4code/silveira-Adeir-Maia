export default class Recipe {
    constructor( 
    private id:string, private title:string, private description:string, private criationDate:string, private userId:string
        ){}

    getId = () => this.id
    getTitle = () => this.title
    getDescription = () => this.description
    getCriationDate = () => this.criationDate
    getUserId = () => this.userId

    setCriationDate= (criation_Date:string) => {
        this.criationDate = criation_Date
    }

    static toUserModel(data:any): Recipe {
        return new Recipe( data.id, data.title, data.description, data.criation_date, data.user_id)
    }
}