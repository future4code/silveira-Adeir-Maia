import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTrips } from "../../Services/service";
import { goToHome, goToAplicationForm } from "../../Routes/coordenator";
import { ButtonGeral } from "../AdimHome/styles";
import { ComponetLoading } from "../../Loading/loading";
import * as style from "./styles";

const ListTrips = () => {
    const [trips, setTrips] = useState([])
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    useEffect(() => getTrips(setTrips, setLoading), [])

    return (
        <style.FullScreen>
            <style.SuperContainerListTrip>
                <style.ContainerBotões>
                    <ButtonGeral onClick={() => goToHome(navigate)} >Voltar</ButtonGeral>
                    <ButtonGeral onClick={() => goToAplicationForm(navigate)} >Inscrever-se</ButtonGeral>
                </style.ContainerBotões>
                <style.Titulo>Lista de Viagens</style.Titulo>
                <style.ContainerListTrip>
                    {!loading ? (trips.length > 0 ? trips.map(trip => {
                        return (
                            <style.CardTrip key={trip.id}>
                                <p><span>Nome: </span><span>{trip.name}</span></p>
                                <p><span>Descrição: </span><span>{trip.description}</span></p>
                                <p><span>Planeta: </span><span>{trip.planet}</span></p>
                                <p><span>Duração: </span><span>{trip.durationInDays} dias</span></p>
                                <p><span>Data: </span><span>{trip.date}</span></p>
                            </style.CardTrip>
                        )
                    }) : <p> Não há viagens no momento </p>) : <style.LoadingContainer>{ComponetLoading}</style.LoadingContainer>}
                </style.ContainerListTrip>
            </style.SuperContainerListTrip>
        </style.FullScreen>
    )
}

export default ListTrips