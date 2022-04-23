import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/home/home";
import Matchs from "../pages/matchs/matchs";

const RoutesComponent = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/matchs' element={<Matchs />} />
        </Routes>
    </BrowserRouter>
)

export default RoutesComponent