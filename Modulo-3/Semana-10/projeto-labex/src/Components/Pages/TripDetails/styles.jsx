import styled from "styled-components";

export const SuperContainerTripDetails = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    button:nth-child(1){
        margin-top: 20px;
        width: fit-content;
        align-self: center;
    }
`
export const ContainerTripDetails = styled.div`
    display: flex;
    flex-direction: column;
    h2{
        text-align: center;
    }
    h3{
        text-align: center;
    }
`
export const ContainerTripsData = styled.div`
    width: fit-content;
    align-self: center;
    padding: 20px;
    span{
        font-size: 20px;
        font-weight: 700;
        font-style: normal;
    }
    p{
        font-size: 15px;
        font-style: italic;
    }
`
export const ContainerCandidatosPendentes = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
`
export const ContainerCandidatosAprovados = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`