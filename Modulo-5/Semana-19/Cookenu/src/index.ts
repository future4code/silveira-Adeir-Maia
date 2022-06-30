import { app } from "./app";
import UserEntitie from "./EndPoints/UserEntitie";

const user = new UserEntitie()

app.post('/user', user.SignUp)

app.post('/user/login', user.Login)

app.get('/user', user.Profile)
