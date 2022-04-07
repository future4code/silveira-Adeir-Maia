import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ListaDeUsuarios from "../lista";
import Detalhes from "../detalhes";
import Cadastro from "../cadastro";

const Rotas = () => {
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={Cadastro} />
            <Route path="/ListaUsuarios" element={ListaDeUsuarios} />
            <Route path="/Detalhes" element={Detalhes} />
        </Routes>
    </BrowserRouter>
}

export default Rotas;