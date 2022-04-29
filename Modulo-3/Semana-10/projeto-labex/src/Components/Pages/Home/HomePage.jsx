import React from "react";
import { goToListTrips, goToLogin, gotoAdmimHome } from "../../Routes/coordenator";
import { useNavigate } from "react-router-dom";
import { SuperContainerHome, ContainerHome } from "./styles";

const Home = () => {

    const navigate = useNavigate()
    return (
        <SuperContainerHome>
            <ContainerHome>
                <button onClick={() => goToListTrips(navigate)} >Ver Viagens</button>
                <button onClick={() => gotoAdmimHome(navigate)} >Cadastrar uma Viagem</button>
            </ContainerHome>

        </SuperContainerHome>
    )
}

export default Home