import React from "react";
import styled from "styled-components";


const SmallCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-bottom: 20px;
    border:  1px solid rgb(20,20,20);
    padding: 10px;
    background-color: rgb(245,250,255);
`
const Paragrafos = styled.p`
    font-weight: 700;
`
const Icones = styled.img`
    align-self: center;
    width: 30px ;
    height: 30px ;
`
function CardPequeno(props) {
    return (
        <>
            <SmallCardContainer >
                <Icones src={props.img} />
                <Paragrafos>e-mail:</Paragrafos>
                <p>{props.email}</p>
            </SmallCardContainer>
            <SmallCardContainer >
                <Icones src={props.img1} />
                <Paragrafos>Endereço:</Paragrafos>
                <p>{props.endereço}</p>
            </SmallCardContainer>
        </>
    )
}

export default CardPequeno;