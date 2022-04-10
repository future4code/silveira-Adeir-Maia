import styled from "styled-components"

export const SuperContainerLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    background-color: #f6f6f6;
    padding: 20px;
    h1 {
        font-size: 40px;
        span{
            color: #01ffac;
        }
    }
    p{
        font-size: 20px;
    }
    div:nth-child(4){
        display: flex;
        flex-direction: row;
        gap: 50px;
        margin-top: 50px;
        button{
            background-color: #01ffac;
            border-radius: 10px;
            border: 1px solid black;
            font-size: 18px;
            padding: 5px;
        }
    }
`
export const ContainerCreateUser = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black; 
    border-radius: 10px;
    padding: 10px;
    font-size: 25px;
    font-weight: 700;
    align-items: center;
    background-color: #77f2de;
    input {
            margin: 0 0 20px;
            width: 230px;
            font-size: 18px;
            border: 2px solid black;
            border-radius: 7px;
        }
    div:nth-child(4){
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        button{
            background-color: #01ffac;
            border-radius: 10px;
            border: 1px solid black;
            font-size: 18px;
            padding: 5px;
        }
    }
`
export const ContainerLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black; 
    border-radius: 10px;
    padding: 10px;
    font-size: 25px;
    font-weight: 700;
    background-color:  #77f2de;
    padding: 30px;
    input {
            margin: 0 0 20px;
            width: 230px;
            font-size: 18px;
            border: 2px solid black;
            border-radius: 7px;
        }
    div:nth-child(3){
        display: flex;
        flex-direction: row;
        gap: 50px;
        margin-top: 20px;
        button{
            background-color: #01ffac;
            border-radius: 10px;
            border: 1px solid black;
            font-size: 18px;
            padding: 5px;
        }
    }
`

