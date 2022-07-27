import BaseDataBase from "../../src/Data/BaseDataBase"
import { ProductDB, TagDB, LinkDB } from "../../src/Model/types"
import { product1, product2, product3, product4, tag1 } from "./ProductsMock"



export class ProductDataMock extends BaseDataBase {

    getProductById = async (id:string):Promise<ProductDB | undefined> => {
        if(product1.id === id) return product1
    }

    getProductBySpecificName = async (name:string):Promise<ProductDB | undefined> => {
        if(product2.name === name)return product2
    }

    getProductByName = async (name:string):Promise<ProductDB[] | undefined> => {
        if (product3.name.includes(name)) return [product3]
    }

    getProductByTags = async (tags:string[]):Promise<ProductDB[] | undefined> => {
        return [product4]
    }

    insertProduct = async (product:ProductDB):Promise<void> => {}

    insertTags = async (tag:TagDB):Promise<void> => {}

    getTagByName = async (name:string):Promise<TagDB | undefined> => {
        if(tag1.name === name)return tag1
    }

    insertProductTagLink = async (Link:LinkDB):Promise<void> => {}
}