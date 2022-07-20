import UserData from "../Data/UserData"
import CustomError from "../Model/CustonError"
import { LoginInputDTO, UserInputDTO } from "../Model/Types"
import { User } from "../Model/User"
import Authentication from "../Services/Authentication"
import { HashManager } from "../Services/HashManager"
import IdGenerator from "../Services/IDGenerator"
import DataValidation from "./DataValidation/DataValidation"

export default class UserBusiness {
    private validation = new DataValidation()
    private idGenerator = new IdGenerator()
    private hash = new HashManager()
    private authentication = new Authentication()
    private userData = new UserData()

    signup = async (inputs:UserInputDTO) => {
        const {name,email,password} = inputs
        try {
            this.validation.signup(inputs)

            const id = this.idGenerator.generator()

            const hashPassoword = this.hash.hash(password)

            const user = new User (id,name,email,hashPassoword)

            await this.userData.insert(user)

            return this.authentication.generateToken({id})
        } catch (error:any) {
            throw new CustomError(error.statusCode,error.message)
        }
    }

    login = async (inputs:LoginInputDTO) => {
        const {email,password} = inputs
        try {
            this.validation.login(inputs)

            const user = await this.userData.selectByEmail(email)
            if(!user){
                throw new CustomError(404,'Não há nenhum usuário cadastrado com o email informado.')
            }

            if(user.email !== email || ( user && !this.hash.compare(password,user.password))){
                throw new CustomError(401,'Email ou senha incorretos!')
            }

            return this.authentication.generateToken({id:user.id})
        } catch (error:any) {
            throw new CustomError(error.statusCode,error.message)
        }
    }
}