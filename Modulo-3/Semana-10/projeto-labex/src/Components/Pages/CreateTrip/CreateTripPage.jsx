import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { goBack, goToLogin } from "../../Routes/coordenator";
import { Planets } from "../../Countries/countries";
import useForm from "../../Hooks/useForm";
import { createTripRequest } from "../../Services/service";
import { SuperContainerCreatTrip } from "./styles";
import { ButtonGeral } from "../AdimHome/styles";
const CreateTrip = () => {
    const navigate = useNavigate()
    useEffect(() => {
        !window.localStorage.getItem('token') && goToLogin(navigate)
    }, [])

    const { form, onChange, cleanFields } = useForm({ name: "", planet: "", date: "", description: "", durationInDays: '' })

    const planetsOptions = Planets.map(planet => <option value={planet} key={planet}>{planet}</option>)

    const preventDefaultFunction = (event) => {
        event.preventDefault()
        const reverseData = { ...form, ['date']: form.date.split('-').reverse().join('-') }
        const body = reverseData
        createTripRequest(body, cleanFields)
    }

    return (

        <SuperContainerCreatTrip>
            <ButtonGeral onClick={() => goBack(navigate)}>voltar</ButtonGeral>
            <h2>Criar Viagem</h2>
            <form onSubmit={preventDefaultFunction} >
                <input name="name" value={form.name} onChange={onChange} placeholder="Nome" required
                    pattern="(?=^.{5,}$)^([A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ][\s]?)+$" title="O nome deve ter no mínimo 5 caracteres" />
                <select onChange={onChange} id='planet' name="planet" value={form.planet} required>
                    <option value='' disabled >Escolha um Planeta</option>
                    {planetsOptions}
                </select>
                <input name="date" type="date" value={form.date} onChange={onChange} min={new Date().toISOString().slice(0, 10)} required ></input>
                <input name="description" value={form.description} onChange={onChange} placeholder="Descrição" required
                    pattern="(?=^.{30,}$)^([A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ][\s]?)+$" title="A descrição deve ter no mínimo 30 caracteres" />
                <input name="durationInDays" type={'number'} value={form.durationInDays} onChange={onChange} placeholder="Duração em Dias" required min={50} />
                <ButtonGeral>Criar</ButtonGeral>
            </form>
        </SuperContainerCreatTrip>
    )
}

export default CreateTrip