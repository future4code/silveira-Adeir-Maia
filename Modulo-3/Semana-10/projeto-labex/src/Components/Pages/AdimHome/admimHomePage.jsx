import React, { useState, useEffect } from "react";
import { goToHome, goToCreateTrip, goToLogin } from "../../Routes/coordenator";
import { useNavigate, Link } from "react-router-dom";
import { getTrips, deleteJob } from "../../Services/service";
import { logOut } from "../../Hooks/functions";
import { CardJob, SuperContainerAdminHome, ContainerCars, ContainerButton } from "./styles";

const AdmimHome = () => {
    const [trips, setTrips] = useState([])
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        !window.localStorage.getItem('token') && goToLogin(navigate)
        window.localStorage.getItem('token') && getTrips(setTrips, setLoading)
    }, [])

    return (
        <SuperContainerAdminHome>
            <h2>Painel Administrativo</h2>
            <ContainerButton>
                <button onClick={() => goToHome(navigate)}>voltar</button>
                <button onClick={() => goToCreateTrip(navigate)}>Criar Viagem</button>
                <button onClick={() => logOut(navigate)}>LogOut</button>
            </ContainerButton>
            <ContainerCars>
                {!loading ? (trips.length > 0 ? trips.map(trip => {
                    return (
                        <CardJob key={trip.id}>
                            <Link to={`/admin/trips/${trip.id}`} >
                                <div >
                                    <p>Nome: {trip.name}</p>
                                </div>
                            </Link>
                            <button onClick={() => deleteJob(trip.id, setTrips, setLoading)} >Deletar</button>
                        </CardJob>
                    )
                }) : <p> Não há viagens no momento </p>) : <p>Carregando...</p>}
            </ContainerCars>
        </SuperContainerAdminHome>
    )
}

export default AdmimHome