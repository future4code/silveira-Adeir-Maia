import React from 'react';
import styled from 'styled-components';

const ImageButtonContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 50px;
    width: 200px;
    padding: 15px 30px;
    margin: 10px auto;
    background-color: rgb(245,250,255);
`
const Setinha = styled.img`
    width: 30px;
    margin-right: 10px;
`

function ImagemButton(props) {
    return (
        <ImageButtonContainer>
            <a href={props.link} target='_blank'><Setinha src={props.imagem} /></a>
            <a href={props.link} target='_blank'><p>{props.texto}</p></a>
        </ImageButtonContainer>

    )
}

export default ImagemButton;