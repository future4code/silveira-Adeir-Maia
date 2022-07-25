import { ProductData } from "../Data/ProductDataBase"
import { CustonError } from "../Model/CustonError/CustonError"
import { LinkDB, ProductDB, RegisterInputsDTO, TagDB } from "../Model/types"
import IdGenerator from "../Services/IDGenerator"
import { InputsValidation } from "./DataValidation/InputsValidation"


export class ProductBusiness {
    constructor(
        private inputsValidation: InputsValidation,
        private productDataBase: ProductData,
        private idGenerator: IdGenerator
    ){}

    register =  async (inputs:RegisterInputsDTO):Promise<void> => {
        try {
            this.inputsValidation.register(inputs)

            const productDB = await this.productDataBase.getProductByName(inputs.name) as ProductDB
            if(productDB.id || productDB.name){
                throw new CustonError(409,'Produto já registrado!')
            }

            const productId = this.idGenerator.generate()
            await this.productDataBase.insertProduct({id: productId, name:inputs.name,})

            const tagsArray = inputs.tags.map(async tag => {
                const tagDB = await this.productDataBase.getByTagName(tag) as TagDB
                if(!tagDB.id || !tagDB.name){
                    const tagId = this.idGenerator.generate()
                    await this.productDataBase.insertTags({id:tagId,name:tag})
                    tagDB.id = tagId,
                    tagDB.name = tag
                }
                return tagDB
            })

            const tags = await Promise.all(tagsArray)

            tags.map(async tag => {
                const Link:LinkDB = {
                    id_product: productId,
                    id_tag:tag.id
                }
                await this.productDataBase.insertProductTagLink(Link)
            })
            
        } catch (error:any) {
            throw new CustonError(error.statusCode, error.message)
        }
    }
}

export default new ProductBusiness(
    new InputsValidation(),
    new ProductData(),
    new IdGenerator()
)