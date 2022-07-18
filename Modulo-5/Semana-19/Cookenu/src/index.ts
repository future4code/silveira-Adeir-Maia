import { app } from "./app";
import FollowersEntitie from "./EndPoints/FollowersEntitie";
import RecipeEntitie from "./EndPoints/RecipeEntitie";
import UserEntitie from "./EndPoints/UserEntitie";

const user = new UserEntitie()
const recipe = new RecipeEntitie()
const follow = new FollowersEntitie()

app.get('/user', user.Profile)

app.get('/recipe/feed', recipe.feed)

app.get('/recipe/:id', recipe.getById)

app.get('/user/:id', user.getById)

app.post('/user', user.SignUp)

app.post('/user/login', user.Login)

app.post('/recipe', recipe.Create)

app.post('/user/follow', follow.follow)

app.put('/recipe/edit', recipe.edit)

app.delete('/user/unfollow', follow.unFollow)

app.delete('/recipe/delete', recipe.delete)

app.delete('/user/delete', user.delete)
