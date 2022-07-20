import { app } from "./app";
import { paymentRouter } from "./Router/paymentRouter";


app.use('/payment', paymentRouter)

