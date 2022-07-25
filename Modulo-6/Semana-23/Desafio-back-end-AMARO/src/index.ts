import { app } from "./app";
import { ProductRouter } from "./Router/ProductRouter";

app.use('/product', ProductRouter)