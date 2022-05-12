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
`
export const ContainerInputTitle = styled.textarea`
    height: 50px;
    resize: none;
`
export const ContainerInputContent = styled.textarea`
    height: 100px;
    resize: none;
`
export const ContainerButtonPostar = styled.button`
    width: fit-content;
    margin: 0 auto;
`