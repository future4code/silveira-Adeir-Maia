import Recipe from "../Model/Entities/Recipes";
import BaseDataBase from "./BaseDataBase";

export default class RecipeBaseDataBase extends BaseDataBase {
    create = async (recipe:Recipe):Promise<void> => {
        try {
            await BaseDataBase.connection('Coockenu_Recipes')
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
}