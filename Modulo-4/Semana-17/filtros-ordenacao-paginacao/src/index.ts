import express, { Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { getUsers } from "./endPoints/getAllUsersEndPoint";
import { getUsersOrdenedByType } from "./endPoints/getUserOrdenedByType";
import { getUsersOrdened } from "./endPoints/getUsersOrdened";
import { getUsersByPage } from "./endPoints/getUsers";
import { getData } from "./endPoints/getData";

const app: Express = express();
app.use(express.json());
app.use(cors());

app.get("/User", getUsers)

app.get("/UserByType", getUsersOrdenedByType)

app.get("/UserOrdernedByType", getUsersOrdened)

app.get("/Users", getUsersByPage)

app.get("/Usersall", getData)

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});