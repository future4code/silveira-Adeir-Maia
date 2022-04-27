import React from "react";
import { goToListTrips, goToLogin, gotoAdmimHome } from "../../Routes/coordenator";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate()
    return (
        <>
            <button onClick={() => goToListTrips(navigate)} >Ver Viagens</button>
            <button onClick={() => gotoAdmimHome(navigate)} >Cadastrar uma Viagem</button>
        </>
    )
}

export default Home