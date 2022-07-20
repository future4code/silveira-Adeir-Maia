import { app } from "./Controller/app";
import FriendshipsController from "./Controller/FriendshipsControler";
import PostController from "./Controller/PostController";
import UserController from "./Controller/UserController";

const user = new UserController()
const post = new PostController()
const friendship = new FriendshipsController()

app.get('/post/feed', post.feed)

app.get('/post/:id', post.getById)

app.post('/user', user.signup)

app.post('/user/login', user.login)

app.post('/post', post.create)

app.post('/friendship/follow', friendship.follow)

app.post('/friendship/unFollow', friendship.unFollow)