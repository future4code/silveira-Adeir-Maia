import { Router } from "express";
import  paymentController  from "../Controller/PaymentController";

export const paymentRouter = Router()

paymentRouter.post('/register', paymentController.register)
paymentRouter.get('/status', paymentController.status)