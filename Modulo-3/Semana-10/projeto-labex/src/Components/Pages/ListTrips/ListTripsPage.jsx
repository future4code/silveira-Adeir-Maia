import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTrips } from "../../Services/service";
import { goToHome, goToAplicationForm } from "../../Routes/coordenator";
import { CardTrip, SuperContainerListTrip, ContainerListTrip, ContainerBotões, Titulo } from "./styles";

const ListTrips = () => {
    const [trips, setTrips] = useState([])
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    useEffect(() => getTrips(setTrips, setLoading), [])

    return (
        <SuperContainerListTrip>
            <ContainerBotões>
                <button onClick={() => goToHome(navigate)} >Voltar</button>
                <button onClick={() => goToAplicationForm(navigate)} >Inscrever-se</button>
            </ContainerBotões>
            <Titulo>Lista de Viagens</Titulo>
            <ContainerListTrip>
                {!loading ? (trips.length > 0 ? trips.map(trip => {
                    return (
                        <CardTrip key={trip.id}>
                            <p><span>Nome: </span><span>{trip.name}</span></p>
                            <p><span>Descrição: </span><span>{trip.description}</span></p>
                            <p><span>Planeta: </span><span>{trip.planet}</span></p>
                            <p><span>Duração: </span><span>{trip.durationInDays}</span></p>
                            <p><span>Data: </span><span>{trip.date}</span></p>
                        </CardTrip>
                    )
                }) : <p> Não há viagens no momento </p>) : <p>Carregando...</p>}
            </ContainerListTrip>
        </SuperContainerListTrip>
    )
}

export default ListTrips