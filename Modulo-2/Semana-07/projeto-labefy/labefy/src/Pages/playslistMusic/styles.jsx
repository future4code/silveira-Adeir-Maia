import styled from "styled-components";

export const SuperContainerMusic = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    height: 100vh;
    background-color: #f6f6f6;
    p{
        align-self: center;
        span{
            color: red;
        }
    }
    h2{
        align-self: center;
        font-size: 30px;
        font-weight: bold;
    }
`
export const ContainerHeader = styled.header`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: baseline;
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
export const ContainerAddMusic = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
        div:nth-child(1){
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 40px;
            label{
                font-size: 20px;
                font-weight: bold;
                input{
                font-size: 18px;
                border: 2px solid black;
                border-radius: 7px;
                margin-left: 5px;
            }
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
        button{
            background-color: #01ffac;
            border-radius: 10px;
            border: 1px solid black;
            font-size: 18px;
            padding: 5px;
        }
    }
`
export const ContainerMusic = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 330px));
    gap: 30px;
    justify-content: center;
    padding: 20px;
    font-size: 20px;
    font-weight: bold;
    max-width: 100%;
    margin-top: 20px;
`
export const MusicCard = styled.div`
    display: flex;
    flex-direction: column;
    border: 2px solid black;
    background-color: #77f2de;
    padding: 10px;
    div{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0 5px 10px 5px;
            div:nth-child(1){
                display: flex;
                flex-direction: column;
                p:nth-child(1){
                    margin: 0;
                    font-size: 30px;
                }
                p:nth-child(2){
                    margin: 0;
                    font-size: 20px;
            }
        }
            div:nth-child(2){
                button{
                background-color: #01ffac;
                border-radius: 10px;
                border: 1px solid black;
                font-size: 18px;
                padding: 5px;
            }
        }
    }
`