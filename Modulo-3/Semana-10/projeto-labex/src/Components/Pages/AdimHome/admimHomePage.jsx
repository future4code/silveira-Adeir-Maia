import React, { useState, useEffect } from "react";
import { goToHome, goToCreateTrip, goToLogin } from "../../Routes/coordenator";
import { useNavigate, Link } from "react-router-dom";
import { getTrips, deleteJob } from "../../Services/service";
import { logOut } from "../../Hooks/functions";
import { ComponetLoading } from "../../Loading/loading";
import { ButtonGeral } from "./styles";
import * as style from "./styles";

const AdmimHome = () => {
    const [trips, setTrips] = useState([])
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        !window.localStorage.getItem('token') && goToLogin(navigate)
        window.localStorage.getItem('token') && getTrips(setTrips, setLoading)
    }, [navigate])

    return (
        <style.fullScreen>
            <style.SuperContainerAdminHome>
                <nav>
                    <ButtonGeral onClick={() => goToHome(navigate)}>Voltar</ButtonGeral>
                    <ButtonGeral onClick={() => logOut(navigate)}>LogOut</ButtonGeral>
                </nav>
                <h2>Painel Administrativo</h2>
                <style.ContainerButton>
                    <ButtonGeral onClick={() => goToCreateTrip(navigate)}>Criar Viagem</ButtonGeral>
                </style.ContainerButton>
                <style.ContainerCars>
                    {!loading ? (trips.length > 0 ? trips.map(trip => {
                        return (
                            <style.CardJob key={trip.id}>
                                <Link to={`/admin/trips/${trip.id}`} >
                                    <div >
                                        <p>{trip.name}</p>
                                    </div>
                                </Link>
                                <button onClick={() => deleteJob(trip.id, setTrips, setLoading)} >X</button>
                            </style.CardJob>
                        )
                    }) : <p> Não há viagens no momento </p>) : <style.LoadingContainer>{ComponetLoading}</style.LoadingContainer>}
                </style.ContainerCars>
            </style.SuperContainerAdminHome>
        </style.fullScreen>

    )
}

export default AdmimHome