import styled from "styled-components";

export const ContainerCadastro = styled.div`
    padding: 50px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    height: 100vh;
    label{
        font-size: 30px;
        font-weight: bold;
        input{
            font-size: 20px;
            margin-left: 15px;
            width: 300px;
        }
    }
    button{
        background-color: #d2ff1f;
        font-size: 20px;
        border-radius: 10px;
    }
`
export const ContainerListaUsuarios = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    padding: 50px;
    gap: 50px;
    button{
        background-color: #d2ff1f;
        font-size: 20px;
        border-radius: 10px;
    }
    div:nth-child(2){
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 20px;
        input{
            font-size: 20px;
            margin-left: 15px;
            width: 300px;
        }
    }
    div:nth-child(3){
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 20px;
        div{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
            gap: 20px;
            border: 2px solid #ff6a00;
            background-color: #ffc300;
            padding: 10px;
            height: 50px;
            p {
                font-size: 30px;
                font-weight: bold;
                color: #3b0c2c;
                line-height: 0px;
            }
            button{
                height: 30px;
            }
        }
    }
`
export const ContainerDetalhes = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    padding: 50px;
    button{
        background-color: #d2ff1f;
        font-size: 20px;
        border-radius: 10px;
    }
    p {
        font-size: 30px;
        font-weight: bold;
    }
`
export const ContainerCarregandoeExcluido = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    padding: 50px;
    button{
        background-color: #d2ff1f;
        font-size: 20px;
        border-radius: 10px;
    }
    p {
        font-size: 30px;
        font-weight: bold;
    }
`