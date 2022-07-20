import PostDataBase from "../Data/PostDataBase"
import CustomError from "../Model/CustonError"
import { Post } from "../Model/Post"
import { GetByIdInputDTO, PostInputDTO } from "../Model/Types"
import Authentication from "../Services/Authentication"
import IdGenerator from "../Services/IDGenerator"
import DataValidation from "./DataValidation/DataValidation"

export default class PostBusiness {
    private validation = new DataValidation()
    private idGenerate = new IdGenerator()
    private postDB = new PostDataBase()
    private auth = new Authentication()

    create = async (inputs:PostInputDTO) => {
        const {photo,description,type,token} = inputs
        try {
            this.validation.postCreate(inputs)

            const user_id = this.auth.getTokenData(token)

            const id = this.idGenerate.generator()

            const creation_date = new Date().toISOString().slice(0,10)

            const post = new Post(id,photo,description,creation_date,type,user_id.id)

            await this.postDB.insert(post)
        } catch (error:any) {
            throw new CustomError(error.statusCode,error.message)
        }
    }

    getById = async (inputs:GetByIdInputDTO) => {
        const {token,id} = inputs
        try {
            this.validation.getPostById(inputs)

            this.auth.getTokenData(token)

            const post = await this.postDB.select(id)
            const reverseDate = new Date(post.creation_date).toISOString().slice(0, 10).split("-").reverse().join("/")
            post.creation_date = reverseDate

            return post
        } catch (error:any) {
            throw new CustomError(error.statusCode,error.message)
        }
    }

    feed = async (token:string) => {
        try {
            this.validation.feed(token)

            const tokenData = this.auth.getTokenData(token)

            return await this.postDB.feed(tokenData.id)
        } catch (error:any) {
            throw new CustomError(error.statusCode,error.message)
        }
    }
}