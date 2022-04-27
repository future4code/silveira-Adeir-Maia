import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTrips } from "../../Services/service";
import { goToHome, goToAplicationForm } from "../../Routes/coordenator";

const ListTrips = () => {
    const [trips, setTrips] = useState([])
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()


    useEffect(() => getTrips(setTrips, setLoading), [])

    return (
        <>
            <button onClick={() => goToHome(navigate)} >Voltar</button>
            <button onClick={() => goToAplicationForm(navigate)} >Inscrever-se</button>

            <p>Lista de Viagens</p>
            {!loading ? (trips.length > 0 ? trips.map(trip => {
                return (
                    <div key={trip.id}>
                        <p>Nome: {trip.name}</p>
                        <p>Descrição: {trip.description}</p>
                        <p>Planeta: {trip.planet}</p>
                        <p>Duração: {trip.durationInDays}</p>
                        <p>Data: {trip.date}</p>
                    </div>
                )
            }) : <p> Não há viagens no momento </p>) : <p>Carregando...</p>}
        </>
    )
}

export default ListTrips