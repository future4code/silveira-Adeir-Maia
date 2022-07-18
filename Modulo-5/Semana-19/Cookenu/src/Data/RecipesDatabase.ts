import Recipe from "../Model/Entities/Recipes";
import BaseDataBase from "./BaseDataBase";

export default class RecipeBaseDataBase extends BaseDataBase {
    create = async (recipe:Recipe):Promise<void> => {
        try {
            await BaseDataBase.connection('Coockenu_Recipe')
            .insert({
                id: recipe.getId(),
                title: recipe.getTitle(),
                description: recipe.getDescription(),
                criation_date: recipe.getCriationDate(),
                user_id: recipe.getUserId()
            })
        } catch (error:any) {
            console.log({data:{message:error.sqlMessage}})
            throw new Error('Erro no banco de dados')
        }
    }

    getById = async (id:string):Promise<Recipe> => {
        try {
            const result = await BaseDataBase.connection('Coockenu_Recipe')
            .select('*')
            .where({id})
            return result[0] && Recipe.toUserModel(result[0])
        } catch (error:any) {
            console.log({data:{message:error.sqlMessage}})
            throw new Error('Erro no banco de dados')
        }
    }

    feed = async (id:string) => {
        try {
            return  await BaseDataBase.connection('Coockenu_Follows')
            .select(
                'Coockenu_Recipe.id as id',
            'Coockenu_Recipe.title as title','Coockenu_Recipe.description as description',
            'Coockenu_Recipe.criation_date as criatedAt','Coockenu_Recipe.user_id as userID'
            ,'Coockenu_User.name as name'
            )
            .join('Coockenu_User','Coockenu_User.id','=','Coockenu_Follows.follow_id')
            .join('Coockenu_Recipe','Coockenu_Recipe.user_id','=','Coockenu_Follows.follow_id')
            .where("Coockenu_Follows.user_id",id)
        } catch (error:any) {
            console.log({data:{message:error.sqlMessage}})
            throw new Error('Erro no banco de dados')
        }
    }

    update = async (id:string,title:string,description:string):Promise<void> => {
        try {
            await BaseDataBase.connection('Coockenu_Recipe')
            .update({title,description})
            .where({id})
        } catch (error:any) {
            console.log({data:{message:error.sqlMessage}})
            throw new Error('Erro no banco de dados')
        }
    }

    delete = async (id:string):Promise<void> => {
        try {
            await BaseDataBase.connection('Coockenu_Recipe')
            .delete()
            .where({id})
        } catch (error:any) {
            console.log({data:{message:error.sqlMessage}})
            throw new Error('Erro no banco de dados')
        }
    }
}