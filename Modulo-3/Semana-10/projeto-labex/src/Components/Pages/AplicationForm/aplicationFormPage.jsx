import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goBack } from "../../Routes/coordenator";
import { Countries } from "../../Countries/countries";
import { useInput, } from "../../Hooks/useInput";
import { aplyToTripCall } from "../../Hooks/functions";
import { getTrips } from "../../Services/service";
import useForm from "../../Hooks/useForm";

const AplicationForm = () => {
    const { form, onChange, cleanFields } = useForm({ name: '', age: '', applicationText: '', profession: '', country: '' })
    const [tripsArray, setTripsArray] = useState([])
    const [intendedTrip, handleIntendedTrip] = useInput()
    const navigate = useNavigate()

    useEffect(() => getTrips(setTripsArray), [])

    const options = Countries.map(e => <option value={e} key={e}>{e}</option>)
    const optionNameTrips = tripsArray.map(e => <option value={e.name} key={e.name}>{e.name}</option>)

    const preventDefaultFunction = (event) => {
        event.preventDefault()
        aplyToTripCall(tripsArray, form, intendedTrip, cleanFields)
    }

    return (
        <>
            <form onSubmit={preventDefaultFunction}>
                <select onChange={handleIntendedTrip} name='viagem' id='viagem' defaultValue='' required >
                    <option value='' disabled >Escolha um viagem:</option>
                    {optionNameTrips}
                </select>
                <input name="name" value={form.name} onChange={onChange} placeholder='Nome' required
                    pattern="(?=^.{3,}$)^([A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ][\s]?)+$" title="o nome deve ter no mínimo 3 caracteres" />
                <input name="age" type={"number"} value={form.age} onChange={onChange} placeholder='Idade' required min={18} />
                <input name="profession" value={form.profession} onChange={onChange} placeholder='Profissão' required
                    pattern="(?=^.{4,}$)^([A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ][\s]?)+$" title="A Profissão deve ter no mínimo 4 caracteres" />
                <input name="applicationText" value={form.applicationText} onChange={onChange} placeholder='Texto de Candidatura' required
                    pattern="(?=^.{30,}$)^([A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ][\s]?)+$" title="O texto de candidatura deve ter no mínimo 30 caracteres" />
                <select onChange={onChange} name='country' id="country" defaultValue='' required >
                    <option value='' disabled  >Escolha seu País</option>
                    {options}
                </select>
                <button>Enviar</button>
            </form>
            <button onClick={() => goBack(navigate)} >Voltar</button>
        </>
    )
}

export default AplicationForm