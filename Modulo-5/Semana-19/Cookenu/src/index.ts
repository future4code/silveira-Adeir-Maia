import { app } from "./app";
import FollowersEntitie from "./EndPoints/followersEntitie";
import RecipeEntitie from "./EndPoints/RecipeEntitie";
import UserEntitie from "./EndPoints/UserEntitie";

const user = new UserEntitie()
const recipe = new RecipeEntitie()
const follow = new FollowersEntitie()

app.get('/user', user.Profile)

app.get('/recipe/:id', recipe.getById)

app.get('/user/:id', user.getById)

app.post('/user', user.SignUp)

app.post('/user/login', user.Login)

app.post('/recipe', recipe.Create)

app.post('/user/follow', follow.follow)

app.delete('/user/unfollow', follow.unFollow)
