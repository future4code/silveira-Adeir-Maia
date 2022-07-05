import { app } from "./Presentation/app";
import UserPresentation from "./Presentation/UserPresentation";

const user = new UserPresentation()

app.get('/user/all', user.all)

app.post('/user',user.singUp)

app.post('/user/login', user.login)

app.delete('/user/:id',user.delete)