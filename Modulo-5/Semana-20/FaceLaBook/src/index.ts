import { app } from "./Controller/app";
import UserController from "./Controller/UserController";

const user = new UserController()

app.post('/user', user.signup)

app.post('/user/login', user.login)