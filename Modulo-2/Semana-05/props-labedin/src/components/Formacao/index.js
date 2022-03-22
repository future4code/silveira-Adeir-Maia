import React from "react";
import styled from "styled-components";

const Lista = styled.ul`
    list-style: square;
    border: 1px solid black;
    padding: 20px;
    background-color: rgb(245,250,255);
`
const ItensDaLista = styled.li`
    margin-left: 30px;
`
export default function Formmaçao(props) {
    return (
        <>
            <Lista>
                <ItensDaLista>{props.curso1}</ItensDaLista>
                <ItensDaLista>{props.curso2}</ItensDaLista>
                <ItensDaLista>{props.curso3}</ItensDaLista>
            </Lista>
        </>
    )
}

