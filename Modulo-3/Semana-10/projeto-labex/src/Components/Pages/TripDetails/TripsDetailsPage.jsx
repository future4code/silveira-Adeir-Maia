import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { goBack, goToLogin } from "../../Routes/coordenator";
import { getTripDetail } from "../../Services/service";
import { decideCandidateCall } from "../../Hooks/functions";
import * as styles from './styles'

const TripsDetails = () => {
    const navigate = useNavigate()
    const pathParams = useParams()
    const [tripDetail, setTripDetail] = useState()

    useEffect(() => {
        !window.localStorage.getItem('token') && goToLogin(navigate)
        window.localStorage.getItem('token') && getTripDetail(pathParams.id, setTripDetail)
    }, [])

    const outstandingCandidates = tripDetail && tripDetail.candidates.map(candidate => {
        return (
            <div key={candidate.id}>
                <p>Nome: <span>{candidate.name}</span></p>
                <p>Idade: <span>{candidate.age}</span></p>
                <p>Profissão: <span>{candidate.profession}</span></p>
                <p>País: <span>{candidate.country}</span></p>
                <p>Texto de Candidatura: <span>{candidate.applicationText}</span></p>
                <button onClick={() => decideCandidateCall(pathParams.id, candidate.id, true, setTripDetail)} >Aprovar</button>
                <button onClick={() => decideCandidateCall(pathParams.id, candidate.id, false, setTripDetail)} >Reprovar</button>
            </div>
        )
    })

    const successfulCandidates = tripDetail && tripDetail.approved.map(candidate => {
        return (
            <div key={candidate.id}>
                <li>{candidate.name}</li>
            </div>
        )
    })
    return (
        <styles.SuperContainerTripDetails>
            <button onClick={() => goBack(navigate)}>Voltar</button>
            {tripDetail && (
                <styles.ContainerTripDetails>
                    <h2>Viagem Planetaria</h2>
                    <styles.ContainerTripsData>
                        <p><span>Nome: </span>{tripDetail.name}</p>
                        <p><span>Descrição: </span>{tripDetail.description}</p>
                        <p><span>Planeta: </span>{tripDetail.planet}</p>
                        <p><span>Duração: </span>{tripDetail.durationInDays} dias</p>
                        <p><span>Data: </span>{tripDetail.date}</p>
                    </styles.ContainerTripsData>
                    <h3>Candidatos Pendentes</h3>
                    <styles.ContainerCandidatosPendentes>
                        {outstandingCandidates}
                    </styles.ContainerCandidatosPendentes>
                    <h3>Candidatos Aprovados</h3>
                    <styles.ContainerCandidatosAprovados>
                        <ul>
                            {successfulCandidates}
                        </ul>
                    </styles.ContainerCandidatosAprovados>
                </styles.ContainerTripDetails>
            )}
        </styles.SuperContainerTripDetails>
    )
}

export default TripsDetails