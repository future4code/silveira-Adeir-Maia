import styled from 'styled-components'

export const Body = styled.div`
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    display: flex;
    justify-content: center;
`
export const Main = styled.main`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 750px;
`
export const ContainerPerguntasAbertas = styled.form`
    display: grid;
    text-align: center;
    max-width: 330px;
    width: 100%;
    justify-content: center;
    * {
        margin: 10px;
    }
    label {
        font-weight: 400;
        font-size: 22px;
    }
    input {
        max-width: 100%;
        border: 2px solid black;
        font-size: 18px;
    }
`
export const ContainerPerguntasFechadas = styled.form`
    label {
        display: grid;
        justify-content: center;
        font-weight: 400;
        font-size: 22px;
        margin: 20px;
        select {
            margin: 20px;
        }
    }
`
export const Botao = styled.button`
    width: 100px;
    border-radius: 10px;
    align-self: center;
`