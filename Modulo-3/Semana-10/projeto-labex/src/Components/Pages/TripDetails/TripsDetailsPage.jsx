import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { goBack, goToLogin } from "../../Routes/coordenator";
import { getTripDetail } from "../../Services/service";
import { decideCandidateCall } from "../../Hooks/functions";
import { ButtonGeral } from "../AdimHome/styles";
import { ComponetLoading } from "../../Loading/loading";
import * as styles from './styles'

const TripsDetails = () => {
    const navigate = useNavigate()
    const pathParams = useParams()
    const [tripDetail, setTripDetail] = useState()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        !window.localStorage.getItem('token') && goToLogin(navigate)
        window.localStorage.getItem('token') && getTripDetail(pathParams.id, setTripDetail, setLoading)
    }, [navigate, pathParams.id])

    const outstandingCandidates = tripDetail && tripDetail.candidates.map(candidate => {
        return (
            <styles.CardApprovedCard key={candidate.id}>
                <p>Nome: <span>{candidate.name}</span></p>
                <p>Idade: <span>{candidate.age}</span></p>
                <p>Profissão: <span>{candidate.profession}</span></p>
                <p>País: <span>{candidate.country}</span></p>
                <p>Texto de Candidatura: <span>{candidate.applicationText}</span></p>
                <div>
                    <ButtonGeral onClick={() => decideCandidateCall(pathParams.id, candidate.id, true, setTripDetail)} >Aprovar</ButtonGeral>
                    <ButtonGeral onClick={() => decideCandidateCall(pathParams.id, candidate.id, false, setTripDetail)} >Reprovar</ButtonGeral>
                </div>
            </styles.CardApprovedCard>
        )
    })

    const successfulCandidates = tripDetail && tripDetail.approved.map(candidate => {
        return (
            <div key={candidate.id}>
                <span>{candidate.name}</span>

            </div>
        )
    })

    return (
        <styles.fullScreen>
            <styles.SuperContainerTripDetails>
                <nav>
                    <ButtonGeral onClick={() => goBack(navigate)}>Voltar</ButtonGeral>
                </nav>
                {!loading ? (tripDetail && (
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
                            {successfulCandidates}
                        </styles.ContainerCandidatosAprovados>
                    </styles.ContainerTripDetails>
                )) : <styles.LoadingContainer>{ComponetLoading}</styles.LoadingContainer>
                }
            </styles.SuperContainerTripDetails>
        </styles.fullScreen>

    )
}

export default TripsDetails