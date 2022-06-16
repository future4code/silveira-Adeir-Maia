import express, { Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import createUser from "./endpoints/createUser";
import getAllUsers from "./endpoints/getAllUsers";
import registerProduct from "./endpoints/registerProduct";
import getallProducts from "./endpoints/getAllProducts";

const app: Express = express();
app.use(express.json());
app.use(cors());

app.get("/user", getAllUsers)

app.get("/products", getallProducts)

app.post("/user", createUser)

app.post("/products", registerProduct)

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});