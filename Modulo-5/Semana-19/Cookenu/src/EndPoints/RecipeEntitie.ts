import { Request, Response } from "express"
import RecipeBaseDataBase from "../Data/RecipesDatabase"
import Recipe from "../Model/Entities/Recipes"
import Authentication from "../Services/Authentication"
import IdGenerator from "../Services/IDGenerator"
import DataChecking from "./DataChecking/dataChecking"

export default class RecipeEntitie {
    Create = async (req:Request,res:Response):Promise<void> => {
        let statusCode = 201
        const token = req.headers.authorization as string
        const {title,description} = req.body
        try {
            const dataChecking = new DataChecking()
            const checking = dataChecking.CreateRecipe(token,title,description)
            if(checking) {
                statusCode = checking.statusCode
                throw new Error(checking.message)
            }
            const idGenerator = new IdGenerator()
            const id = idGenerator.generator()

            const authentication = new Authentication()
            const tokenData = authentication.getTokenData(token)

            const criationDate = new Date().toISOString().slice(0,10)

            const recipe = new Recipe(id,title,description,criationDate,tokenData.id)
            
            const recipeDB = new RecipeBaseDataBase()
            await recipeDB.create(recipe)
            
            res.status(statusCode).send()

        } catch (error:any) {
            res.status(statusCode).send(error.message)
        }
    }
}