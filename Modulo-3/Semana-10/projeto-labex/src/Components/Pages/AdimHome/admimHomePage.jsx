import React, { useState, useEffect } from "react";
import { goToHome, goToCreateTrip, goToLogin } from "../../Routes/coordenator";
import { useNavigate } from "react-router-dom";
import { getTrips } from "../../Services/service";

const AdmimHome = () => {
    const [trips, setTrips] = useState([])
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    useEffect(() => getTrips(setTrips, setLoading), [])


    return (
        <>
            <p>Painel Administrativo</p>
            <button onClick={() => goToHome(navigate)}>voltar</button>
            <button onClick={() => goToCreateTrip(navigate)}>Criar Viagem</button>
            <button onClick={() => goToLogin(navigate)}>LogOut</button>

            {!loading ? (trips.length > 0 ? trips.map(trip => {
                return (
                    <div key={trip.id}>
                        <p>Nome: {trip.name}</p>
                        <button>Deletar</button>
                    </div>
                )
            }) : <p> Não há viagens no momento </p>) : <p>Carregando...</p>}
        </>
    )
}

export default AdmimHome