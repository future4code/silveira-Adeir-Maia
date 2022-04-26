import React, { useState, useEffect } from "react";
import { useNavigate, } from "react-router-dom";
import { goBack } from "../../Routes/coordenator";
import { Countries } from "../../Countries/countries";
import { useInput, useTripID } from "../../CustonHocks/custonHucks";
import { getTrips } from "../../Services/service";

const AplicationForm = () => {
    const [tripNames, setTripNames] = useState([])
    const [name, handleName] = useInput()
    const [age, handleAge] = useInput()
    const [profession, handleProfession] = useInput()
    const [textCandidature, handleTextCandidature] = useInput()
    const [countrie, handleCountrie] = useInput()
    const [tripName, handleTripName] = useInput()

    useEffect(() => getTrips(setTripNames), [])

    const navigate = useNavigate()

    const options = Countries.map(e => <option value={e} key={e}>{e}</option>)
    const optionNameTrips = tripNames.map(e => <option value={e.name} key={e.name}>{e.name}</option>)

    return (
        <>
            <button onClick={() => goBack(navigate)} >Voltar</button>
            <button>Enviar</button>
            <select onChange={handleTripName} name='viagem' id='viagem' value=''>
                <option value='' disabled >Escolha um viagem:</option>
                {optionNameTrips}
            </select>
            {tripName}
            <input value={name} onChange={handleName} placeholder='Nome' />
            <input type={"number"} value={age} onChange={handleAge} placeholder='Idade' />
            <input value={profession} onChange={handleProfession} placeholder='Profissão' />
            <input value={textCandidature} onChange={handleTextCandidature} placeholder='Texto de Candidatura' />
            <select onChange={handleCountrie} name='profission' id="profission" value=''>
                <option value='' disabled  >Escolha seu País</option>
                {options}
            </select>
        </>
    )
}

export default AplicationForm