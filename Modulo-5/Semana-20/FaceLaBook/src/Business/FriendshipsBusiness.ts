import FriendshipDataBase from "../Data/FriendshipDataBase";
import UserData from "../Data/UserData";
import CustomError from "../Model/CustonError";
import { FollowInputDTO, FriendshipData } from "../Model/Types";
import Authentication from "../Services/Authentication";
import IdGenerator from "../Services/IDGenerator";
import DataValidation from "./DataValidation/DataValidation";


export default class FriendshipBusiness {
    private validation = new DataValidation()
    private idGenerator = new IdGenerator()
    private authentication = new Authentication()
    private userDB = new UserData()
    private friendshipDB = new FriendshipDataBase()

    follow = async (inputs:FollowInputDTO) => {
        const {token,friend_id} = inputs
        try {
            this.validation.follow(inputs)

            const tokenData = this.authentication.getTokenData(token)

            await this.userDB.selectById(friend_id)

            const id = this.idGenerator.generator()

            const friendshipData:FriendshipData = {id, user_id:tokenData.id, friend_id}

            await this.friendshipDB.insert(friendshipData)
        } catch (error:any) {
            throw new CustomError(error.statusCode,error.message)
        }
    }

    unFollow = async (inputs:FollowInputDTO) => {
        const {token,friend_id} = inputs
        try {
            this.validation.follow(inputs)

            const tokenData = this.authentication.getTokenData(token)

            const friendship:FriendshipData = {user_id:tokenData.id,friend_id}

            await this.friendshipDB.select(friendship)

            await this.friendshipDB.unFollow(friendship)
        } catch (error:any) {
            throw new CustomError(error.statusCode,error.message)
        }
    }
}