import styled from "styled-components";

export const FullScreen = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`
export const SuperContainerListTrip = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    padding: 20px; 
    background: linear-gradient(135deg, rgb(35,69,118), rgb(125,195,217));
`
export const ContainerBotões = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
`
export const Titulo = styled.h1`
    text-align: center;
    font-family: 'Righteous', cursive;
    font-weight: 400;
    font-size: 40px;
    color: rgb(244,254,244);
`
export const ContainerListTrip = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 30px;
    gap: 20px;
    justify-content: center;
    
`
export const CardTrip = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 400px;
    border: 10px double black;
    background-color: rgb(244,254,244);
    p{
        margin: 0;
        span:nth-child(1){
            font-weight: 700;
            font-size: 25px;
            color: #071224;
        }
        span:nth-child(2){
            font-size: 25px;
            color: #071224;
        }
    }
`
export const LoadingContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 100px;
`