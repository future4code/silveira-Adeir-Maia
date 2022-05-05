import styled from "styled-components";

export const fullScreen = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`

export const SuperContainerTripDetails = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    background: linear-gradient(135deg, rgb(35,69,118), rgb(125,195,217));
    padding-bottom: 20px;
    nav{
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
        color: rgb(244,254,244);
        font-size: 40px;
        font-family: 'Righteous', cursive;
    }
    h3{
        text-align: center;
        color: rgb(244,254,244);
        font-size: 30px;
        font-family: 'Righteous', cursive;
    }
`
export const ContainerTripsData = styled.div`
    width: fit-content;
    align-self: center;
    padding: 20px;
    max-width: 1000px;
    span{
        font-size: 25px;
        font-weight: 700;
        font-style: normal;
    }
    p{
        font-size: 25px;
    }
`
export const ContainerCandidatosPendentes = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
`
export const ContainerCandidatosAprovados = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    div{
        span{
            font-size: 25px;
            font-weight: 700;
            color: rgb(7,18,36);
        }
    }
`
export const LoadingContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 100px;
`
export const CardApprovedCard = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 2px solid black;
    width: 300px;
    p{
        font-size: 20px;
        font-weight: 700;
        span{
            font-size: 20px;
            font-weight: 400;
        }
    }
    div{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        button:nth-of-type(1){
            width: fit-content;
            color: green;
        }
        button:nth-of-type(2){
            width: fit-content;
            color: red;
        }
    }
`