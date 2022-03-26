import styled from 'styled-components'

export { Body, Main, ContainerEscreverMensagem, ContainerCampoMensagen, ContainerMensagemOutros, ContainerMensagemEu }

const Body = styled.div`
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    display: flex;
    justify-content: center;
`
const Main = styled.main`
    max-width: 800px;
    width: 100%;
    background-color: #e5e5e5;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: flex-end;
    flex: 1 1 auto;
    min-height: 99.7vh;
`
const ContainerCampoMensagen = styled.div`
    flex: 1 1 auto;
    width: 500px;
    background-color: white;
    display: flex;
    flex-direction: column;
`
const ContainerEscreverMensagem = styled.div`
    display: flex;
    flex-direction: row;
`
const ContainerMensagemOutros = styled.ul`
    list-style: none;
    background-color: coral;
    border-radius: 5px;
    width: fit-content;
    padding: 5px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    div {
        display: flex;
        flex-direction: row;
        gap: 10px;
        li {
            font-weight: bold;
        }
        input {
            width: 20px;
            height: 15px;
            font-size: 8px;
        }
    }
    li {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
    }
`
const ContainerMensagemEu = styled.ul`
    list-style: none;
    background-color: #d9fdd3;
    border-radius: 5px;
    width: fit-content;
    padding: 5px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-self: flex-end;
    div {
        display: flex;
        flex-direction: row;
        gap: 10px;
        li {
            font-weight: bold;
        }
        input {
            width: 20px;
            height: 15px;
            font-size: 8px;
        }
    }
    li {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
    }
`