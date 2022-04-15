import styled from "styled-components";

export const SuperContainerPlayslist = styled.div`
    height: 100vh;
    background-color: #f6f6f6;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
        font-size: 40px;
        span{
            color: #01ffac;
        }
    }
    button{
            background-color: #01ffac;
            border-radius: 10px;
            border: 1px solid black;
            font-size: 18px;
            padding: 5px;
        }
`
export const ContainerMenus = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 100px;
    padding: 10px;
    div:nth-child(1){
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: center;
        input{
            width: 300px;
            font-size: 18px;
            border: 2px solid black;
            border-radius: 7px;
        }
        button{
            background-color: #01ffac;
            border-radius: 10px;
            border: 1px solid black;
            font-size: 18px;
            padding: 5px;
        }
    }
    div:nth-child(2){
        display: flex;
        flex-direction: row;
        gap: 20px;
        flex-wrap: wrap;
        justify-content: center;
        input{
            width: 300px;
            font-size: 18px;
            border: 2px solid black;
            border-radius: 7px;
        }
        button{
            background-color: #01ffac;
            border-radius: 10px;
            border: 1px solid black;
            font-size: 18px;
            padding: 5px;
        }
    }
`
export const ContainerPlaylist = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, auto));
    gap: 30px;
    padding: 50px;
    max-width: 100%;
`
export const PlaylistCard = styled.div`
    display: flex;
    flex-direction: row;
    border: 1px solid black;
    background-color: #77f2de;
    border-radius: 7px;
    div{
        width: 100%;
        padding: 20px;
        p{
            margin: 0;
            font-size: 20px;
            font-weight: bold;
        }
    }
    button{
        background-color: #01ffac;
        border: 1px solid black;
        border-radius: 7px;
    }
`