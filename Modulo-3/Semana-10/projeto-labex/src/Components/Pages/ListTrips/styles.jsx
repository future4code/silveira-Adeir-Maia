import styled from "styled-components";

export const SuperContainerListTrip = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
`
export const ContainerBotões = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`
export const Titulo = styled.h1`
    text-align: center;
`
export const ContainerListTrip = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 30px;
    gap: 20px;
`
export const CardTrip = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 400px;
    border: 2px double black;
    span:nth-child(1){
        font-weight: 700;
        font-size: 20px;
    }
    span:nth-child(2){
        font-style: italic;
        font-size: 15px;
    }
    p{
        margin: 0;
    }
`