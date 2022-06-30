import Recipe from "../Model/Entities/Recipes";
import BaseDataBase from "./BaseDataBase";

export default class RecipeBaseDataBase extends BaseDataBase {
    create = async (recipe:Recipe):Promise<void> => {
        console.log(recipe.getUserId())
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
            const result =  await BaseDataBase.connection('Coockenu_Recipe')
            .select('*')
            .where({id})
            return result[0] && Recipe.toUserModel(result[0])
        } catch (error:any) {
            console.log({data:{message:error.sqlMessage}})
            throw new Error('Erro no banco de dados')
        }
    }
}