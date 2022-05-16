import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../Pages/Login/login";
import { Feed } from "../Pages/Feed/feed";
import { SignUp } from "../Pages/SignUp/singup";
import { PostPage } from "../Components/Coments/coments";

export const RoutesComponets = () => (
    <BrowserRouter>
        <Routes>
            <Route index element={<Login />} />
            <Route path="/SingUp" element={<SignUp />} />
            <Route path="/Feed" element={<Feed />} />
            <Route path="/Post/:id/page/:page" element={<PostPage />} />
        </Routes>
    </BrowserRouter>
)