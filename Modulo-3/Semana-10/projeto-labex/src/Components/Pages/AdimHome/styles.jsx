import styled from "styled-components";

export const fullScreen = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`
export const SuperContainerAdminHome = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    background: linear-gradient(135deg, rgb(35,69,118), rgb(125,195,217));
    h2{
        text-align: center;
        font-family: 'Righteous', cursive;
        font-size: 40px;
        color: rgb(244,254,244);
    }
    nav{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
`
export const ContainerButton = styled.div`
    margin: 0 auto;
    padding: 20px;
`
export const ButtonGeral = styled.button`
    height: 40px;
    min-width: 150px;
    font-size: 20px;
    border: 3px solid black;
    border-radius: 30px;
    background-color: rgb(244,254,244);
`
export const ContainerCars = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
`
export const CardJob = styled.div`
    display: flex;
    flex-direction: row;
    width: 300px;
    border: 3px solid black;
    background-color: rgb(244,254,244);
    border-radius: 10px;
    a{
        flex-grow: 1;
        text-decoration: none;
        div{
            padding: 10px;
            p{
                text-align: center;
                font-size: 25px;
                font-family: 'Maven Pro', sans-serif;
                font-weight: 400;
                color: black;
            }
        }
    }
    button{
        border-radius: 10px;
        font-family: 'Maven Pro', sans-serif;
        font-weight: 400;
        color: white;
        font-size: 20px;
        background-color: rgb(7,18,36);
    }
`
export const LoadingContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 100px;
`
