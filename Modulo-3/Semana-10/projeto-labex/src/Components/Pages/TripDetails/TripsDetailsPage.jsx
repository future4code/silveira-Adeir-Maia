import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { goBack, goToLogin } from "../../Routes/coordenator";
import { getTripDetail } from "../../Services/service";
import { decideCandidateCall } from "../../CustonHocks/functions";

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
                <p>Nome: {candidate.name}</p>
                <p>Idade: {candidate.age}</p>
                <p>Profissão: {candidate.profession}</p>
                <p>País: {candidate.country}</p>
                <p>Texto de Candidatura: {candidate.applicationText}</p>
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
        <>
            {tripDetail && (
                <div>
                    <p>Viagem Planetaria</p>
                    <p>Nome: {tripDetail.name}</p>
                    <p>Descrição: {tripDetail.description}</p>
                    <p>Planeta: {tripDetail.planet}</p>
                    <p>Duração: {tripDetail.durationInDays} dias</p>
                    <p>Data: {tripDetail.date}</p>
                    <button onClick={() => goBack(navigate)}>Voltar</button>
                    <p>Candidatos Pendentes</p>
                    {outstandingCandidates}
                    <p>Candidatos Aprovados</p>
                    <ul>
                        {successfulCandidates}
                    </ul>

                </div>
            )}
        </>
    )
}

export default TripsDetails