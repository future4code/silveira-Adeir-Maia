import { CustonError } from "../Model/CustonError/CustonError";
import { LinkDB, ProductDB, TagDB } from "../Model/types";
import BaseDataBase from "./BaseDataBase";


export class ProductData extends BaseDataBase {
    getProductByName = async (name:string):Promise<ProductDB | undefined> => {
        try {
            const resultDB = await BaseDataBase.connection('Amaro_Product').select('*').where({name})
            // if(resultDB.length === 0) {
            //     return undefined
            // }
            const result:ProductDB = {
                id: resultDB[0]?.id,
                name: resultDB[0]?.name
            }
            return result
        } catch (error:any) {
            throw new CustonError(error.statusCode || 500, error.sqlMessage || error.message)
        }
    }

    insertProduct = async (product:ProductDB):Promise<void> => {
        try {
            await BaseDataBase.connection('Amaro_Product').insert(product)
        } catch (error:any) {
            throw new CustonError(error.statusCode || 500, error.sqlMessage || error.message)
        }
    }

    insertTags = async (tag:TagDB):Promise<void> => {
        try {
            await BaseDataBase.connection('Amaro_Tags').insert(tag)
        } catch (error:any) {
            throw new CustonError(error.statusCode || 500, error.sqlMessage || error.message)
        }
    }

    getByTagName = async (name:string):Promise<TagDB | undefined> => {
        try {
            const resultDB = await BaseDataBase.connection("Amaro_Tags").where({name,});
            const result:TagDB = {
                id: resultDB[0]?.id,
                name: resultDB[0]?.name,
            };
            return result;
        } catch (error:any) {
            throw new CustonError(error.statusCode || 500, error.sqlMessage || error.message)
        }
    }

    insertProductTagLink = async (Link:LinkDB):Promise<void> => {
        try {
            await BaseDataBase.connection('Amaro_Products_Tags').insert(Link)
        } catch (error:any) {
            throw new CustonError(error.statusCode || 500, error.sqlMessage || error.message)
        }
    }
}