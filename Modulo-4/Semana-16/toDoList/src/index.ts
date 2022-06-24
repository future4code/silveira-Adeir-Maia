import express,{ Express} from "express";
import cors from "cors";
import { AddressInfo } from "net";
import createUserEndPoint from "./endpoints/createUser";
import getUserByIdEndPoint from "./endpoints/getUserById";
import editUserEndPoint from "./endpoints/editUser";
import createTaskEndPoint from "./endpoints/createTask";
import getTasksCreateByUserEndPoint from "./endpoints/getTasksCreateByUser";
import getAllUsersEndPoint from "./endpoints/getAllUsers";
import getTaskByIdEndPoint from "./endpoints/getTaskById";
import searchUserEndPoint from "./endpoints/searchUser";
import assignResponsibleEndPoint from "./endpoints/assignResponsible";

const app:Express = express();
app.use(express.json());
app.use(cors());

app.get("/user/all", getAllUsersEndPoint)

app.get("/user/:id", getUserByIdEndPoint)

app.get("/task", getTasksCreateByUserEndPoint)

app.get("/task/:id", getTaskByIdEndPoint)

app.get("/user", searchUserEndPoint)

app.post("/task", createTaskEndPoint)

app.post("/user", createUserEndPoint)

app.post("/task/responsible", assignResponsibleEndPoint)

app.put("/user/edit/:id", editUserEndPoint)

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
}); 