import { Router } from "express";
import productController from "../Controller/ProductController";

export const ProductRouter = Router()

ProductRouter.post('/register', productController.resgister)
ProductRouter.get('',)