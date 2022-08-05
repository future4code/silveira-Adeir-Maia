import { CustonError } from "../Model/CustonError/CustonError";
import { LinkDB, ProductDB, TagDB } from "../Model/types";
import BaseDataBase from "./BaseDataBase";


export class ProductData extends BaseDataBase {

    getProductById = async (id:string):Promise<ProductDB | undefined> => {
        try {
            const resultDB = await BaseDataBase.connection('Amaro_Product').select('*').where({id})
            const result:ProductDB = {
                id: resultDB[0]?.id,
                name: resultDB[0]?.name
            }
            return result
        } catch (error:any) {
            throw new CustonError(error.statusCode || 500, error.sqlMessage || error.message)
        }
    }

    getProductBySpecificName = async (name:string):Promise<ProductDB | undefined> => {
        try {
            const resultDB = await BaseDataBase.connection('Amaro_Product').select('*').where({name})
            const result:ProductDB = {
                id: resultDB[0]?.id,
                name: resultDB[0]?.name
            }
            return result
        } catch (error:any) {
            throw new CustonError(error.statusCode || 500, error.sqlMessage || error.message)
        }
    }

    getProductByName = async (name:string):Promise<ProductDB[] | undefined> => {
        try {
            const resultDB = await BaseDataBase.connection('Amaro_Product').select('*').where("name", "LIKE", `%${name}%`)
            const result:ProductDB[] = resultDB?.map((product:ProductDB) => {
                return {id: product.id, name:product.name}
            })

            return result
        } catch (error:any) {
            throw new CustonError(error.statusCode || 500, error.sqlMessage || error.message)
        }
    }

    getProductByTags = async (tags:string[]):Promise<ProductDB[] | undefined> => {
        try {
            const promisesArray = tags.map(tag => {
                return BaseDataBase.connection('Amaro_Product')
                .select('Amaro_Product.id as id', 'Amaro_Product.name as name')
                .innerJoin('Amaro_Products_Tags','Amaro_Products_Tags.id_product','Amaro_Product.id')
                .innerJoin('Amaro_Tags','Amaro_Tags.id','Amaro_Products_Tags.id_tag')
                .where('Amaro_Tags.name',tag)
            })
            const resultDB = await Promise.all(promisesArray)

            if(resultDB.length > 0) {
                let result:ProductDB[] = []
                resultDB.map(a => a.map(b => result.push({ id: b.id, name: b.name})))
                const resultStrings = result.map(a => JSON.stringify(a))
                const set = new Set(resultStrings)
                result = Array.from(set).map(a => JSON.parse(a))
                return result
            }
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

    getTagByName = async (name:string):Promise<TagDB | undefined> => {
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