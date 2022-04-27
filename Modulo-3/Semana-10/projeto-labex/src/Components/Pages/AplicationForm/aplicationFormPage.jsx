import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { goBack } from "../../Routes/coordenator";
import { Countries } from "../../Countries/countries";
import { useInput, } from "../../CustonHocks/custonHucks";
import { aplyToTripCall } from "../../CustonHocks/functions";
import { getTrips } from "../../Services/service";

const AplicationForm = () => {
    const [tripsArray, setTripsArray] = useState([])
    const [name, handleName] = useInput()
    const [age, handleAge] = useInput()
    const [profession, handleProfession] = useInput()
    const [textCandidature, handleTextCandidature] = useInput()
    const [countrie, handleCountrie] = useInput()
    const [intendedTrip, handleIntendedTrip] = useInput()
    const pathParams = useParams()
    const navigate = useNavigate()

    useEffect(() => getTrips(setTripsArray), [])

    const options = Countries.map(e => <option value={e} key={e}>{e}</option>)
    const optionNameTrips = tripsArray.map(e => <option value={e.name} key={e.name}>{e.name}</option>)

    return (
        <>
            <select onChange={handleIntendedTrip} name='viagem' id='viagem' defaultValue=''>
                <option value='' disabled >Escolha um viagem:</option>
                {optionNameTrips}
            </select>
            <input value={name} onChange={handleName} placeholder='Nome' />
            <input type={"number"} value={age} onChange={handleAge} placeholder='Idade' />
            <input value={profession} onChange={handleProfession} placeholder='Profissão' />
            <input value={textCandidature} onChange={handleTextCandidature} placeholder='Texto de Candidatura' />
            <select onChange={handleCountrie} name='profission' id="profission" defaultValue=''>
                <option value='' disabled  >Escolha seu País</option>
                {options}
            </select>
            <button onClick={() => goBack(navigate)} >Voltar</button>
            <button onClick={() => aplyToTripCall(tripsArray, name, age, profession, textCandidature, countrie, intendedTrip)}>Enviar</button>
        </>
    )
}

export default AplicationForm