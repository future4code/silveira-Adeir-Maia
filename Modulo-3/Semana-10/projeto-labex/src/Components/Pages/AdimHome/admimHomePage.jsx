import React, { useState, useEffect } from "react";
import { goToHome, goToCreateTrip, goToLogin } from "../../Routes/coordenator";
import { useNavigate, Link } from "react-router-dom";
import { getTrips, deleteJob } from "../../Services/service";
import { logOut } from "../../Hooks/functions";

const AdmimHome = () => {
    const [trips, setTrips] = useState([])
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        !window.localStorage.getItem('token') && goToLogin(navigate)
        window.localStorage.getItem('token') && getTrips(setTrips, setLoading)
    }, [])

    return (
        <>
            <p>Painel Administrativo</p>
            <button onClick={() => goToHome(navigate)}>voltar</button>
            <button onClick={() => goToCreateTrip(navigate)}>Criar Viagem</button>
            <button onClick={() => logOut(navigate)}>LogOut</button>
            {!loading ? (trips.length > 0 ? trips.map(trip => {
                return (
                    <div key={trip.id}>
                        <Link to={`/admin/trips/${trip.id}`} >
                            <div >
                                <p>Nome: {trip.name}</p>
                            </div>
                        </Link>
                        <button onClick={() => deleteJob(trip.id, setTrips, setLoading)} >Deletar</button>
                    </div>
                )
            }) : <p> Não há viagens no momento </p>) : <p>Carregando...</p>}
        </>
    )
}

export default AdmimHome