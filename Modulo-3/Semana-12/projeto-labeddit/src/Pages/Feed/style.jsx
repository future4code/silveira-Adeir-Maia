import styled from "styled-components";

export const ContainerForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
`
export const ContainerLabel = styled.label`
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 10px;
    font-size: 30px;
    color: #FE7E02;
`
export const ContainerInputTitle = styled.textarea`
    border: 1px solid black;
    height: 50px;
    resize: none;
    background: #EDEDED;
    border-radius: 12px;
    padding: 10px;
    font-size: 18px;
`
export const ContainerInputContent = styled.textarea`
    border: 1px solid black;
    height: 130px;
    resize: none;
    background: #EDEDED;
    border-radius: 12px;
    padding: 10px;
    font-size: 18px;
`
export const ContainerButtonPostar = styled.button`
    width: 100%;
    margin: 0 auto;
    height: 47px;
    font-size: 18px;
    border: none;
    background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%), #4088CB;
    border-radius: 12px;
    color: #FFFFFF;
`
export const ContainerLoading = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 50px;
`
export const ContainerLoadingBar = styled.div`
    display: flex;
    justify-content: center;
    height: 50px;
`