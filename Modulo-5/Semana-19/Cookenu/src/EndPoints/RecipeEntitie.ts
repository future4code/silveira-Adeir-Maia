import { Request, Response } from "express"
import RecipeBaseDataBase from "../Data/RecipesDatabase"
import Recipe from "../Model/Entities/Recipes"
import { USER_ROLE } from "../Model/Entities/User"
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
            if(error.message.includes('jwt')) {
                statusCode = 401
                error.message = 'Token expirado'
            }
            res.status(statusCode).send(error.message)
        }
    }
    getById = async (req:Request,res:Response):Promise<void> => {
        let statusCode = 200
        const token = req.headers.authorization as string
        const id = req.params.id
        try {
            const dataChecking = new DataChecking()
            const checking = dataChecking.getById(token,id)
            if(checking) {
                statusCode = checking.statusCode
                throw new Error(checking.message)
            }

            const authentication = new Authentication()
            const tokenData = authentication.getTokenData(token)

            const recipeDB = new DataChecking().DateReverted(await new RecipeBaseDataBase().getById(id)) 
            
            if(!recipeDB) {
                statusCode = 404
                throw new Error('Receita não encontrada!')
            }

            res.status(statusCode).send({recipe:recipeDB})
        } catch (error:any) {
            if(error.message.includes('jwt')) {
                statusCode = 401
                error.message = 'Token expirado'
            }
            res.status(statusCode).send(error.message)
        }
    }

    feed = async (req:Request,res:Response):Promise<void> => {
        let statusCode = 200
        const token = req.headers.authorization as string
        try {
            const dataChecking = new DataChecking().feed(token)
            if(dataChecking) {
                statusCode = dataChecking.statusCode
                throw new Error(dataChecking.message)
            }

            const tokenData = new Authentication().getTokenData(token)

            const recipeDB = new RecipeBaseDataBase()
            const feed = await recipeDB.feed(tokenData.id)
            
            res.status(statusCode).send(feed)
        } catch (error:any) {
            if(error.message.includes('jwt')) {
                statusCode = 401
                error.message = 'Token expirado'
            }
            res.status(statusCode).send(error.message)
        }
    }

    edit = async (req:Request,res:Response):Promise<void> => {
        let statusCode = 200
        const token = req.headers.authorization as string
        const {id ,title, description} = req.body
        try {
            const dataChecking = new DataChecking()
            const checking = dataChecking.edit(token, id, title, description)
            if(checking) {
                statusCode = checking.statusCode
                throw new Error(checking.message)
            }

            const tokenData = new Authentication().getTokenData(token)

            const recipeDB = await new RecipeBaseDataBase().getById(id)

            if( !recipeDB || recipeDB.getUserId() !== tokenData.id){
                statusCode = 401
                throw new Error('Não é possível editar essa receita, pois ela não existe ou não é sua!')
            }

            await new RecipeBaseDataBase().update(id,title || recipeDB.getTitle(),description || recipeDB.getDescription())

            res.status(statusCode).send()
        } catch (error:any) {
            if(error.message.includes('jwt')) {
                statusCode = 401
                error.message = 'Token expirado'
            }
            res.status(statusCode).send(error.message)
        }
    }

    delete = async (req:Request,res:Response) => {
        let statusCode = 200
        const token = req.headers.authorization as string
        const {id} = req.body
        try {
            const dataChecking = new DataChecking()
            const checking = dataChecking.delete(token, id)
            if(checking) {
                statusCode = checking.statusCode
                throw new Error(checking.message)
            }

            const tokenData = new Authentication().getTokenData(token)

            const recipeDB = await new RecipeBaseDataBase().getById(id)

            if(!recipeDB) {
                statusCode = 404
                throw new Error('Receita não encontrada!')
            }
            if(tokenData.role === USER_ROLE.NORMAL && recipeDB.getUserId() !== tokenData.id){
                statusCode = 401
                throw new Error('Apenas Usuários com privilégios de ADMINISTRADOR podem deletar receitas que não são suas.')
            }
            res.status(statusCode).send(await new RecipeBaseDataBase().delete(id))
        } catch (error:any) {
            if(error.message.includes('jwt')) {
                statusCode = 401
                error.message = 'Token expirado'
            }
            res.status(statusCode).send(error.message)
        }
    }
}