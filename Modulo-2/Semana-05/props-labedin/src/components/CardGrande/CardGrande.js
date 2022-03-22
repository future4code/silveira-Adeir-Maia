import React from 'react';
import styled from 'styled-components';

const BigcardContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    background-color: rgb(245,250,255);
`
const FotoDePerfil = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`
const BigcardContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`
const Nome = styled.h4`
    margin-bottom: 15px;
`
function CardGrande(props) {
    return (
        <BigcardContainer>
            <FotoDePerfil src={props.imagem} />
            <BigcardContainerDiv>
                <Nome>{props.nome}</Nome>
                <p>{props.descricao}</p>
            </BigcardContainerDiv>
        </BigcardContainer>
    )
}

export default CardGrande;