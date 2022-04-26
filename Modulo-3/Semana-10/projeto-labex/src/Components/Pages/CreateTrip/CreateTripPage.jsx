import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { goBack } from "../../Routes/coordenator";
import { useInput } from "../../CustonHocks/custonHucks";
import { Planets } from "../../Countries/countries";

const CreateTrip = () => {
    const [nome, handleNome] = useInput('')
    const [descricao, handleDescricao] = useInput('')
    const [duracao, handleDuração] = useInput('')
    const [planeta, handlePlaneta] = useInput('')
    const [date, handleDate] = useInput()
    const navigate = useNavigate()

    const planetsOptions = Planets.map(planet => <option value={planet} key={planet}>{planet}</option>)

    return (
        <>
            <p>Criar Viagem</p>
            <input value={nome} onChange={handleNome} placeholder="Nome" />
            <select onChange={handlePlaneta} id='Planeta' name="Planeta" value=''>
                <option value='' disabled >Escolha um Planeta</option>
                {planetsOptions}
            </select>
            <input type="date" value={date} onChange={handleDate} min={new Date().toISOString().slice(0, 10)} ></input>
            <input value={descricao} onChange={handleDescricao} placeholder="Descrição" />
            <input value={duracao} onChange={handleDuração} placeholder="Duração em Dias" />
            <button onClick={() => goBack(navigate)}>voltar</button>
            <button>Criar</button>

        </>
    )
}

export default CreateTrip