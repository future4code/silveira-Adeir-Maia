import styled from "styled-components";

export const PageTitle = styled.h2`
    font-size: 33px;
    text-align: center;
`
export const SuperContainerFormResgister = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
`
export const ContainerFormResgister = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 10px;
`
export const ContainerInputResgister = styled.input` 
    width: 290px;
    height: 30px;
    font-size: 20px;
    padding: 10px;
    margin: 1px;
    border: 1px solid #EFEFEF;
`
export const ButtonLinearGradient = styled.button`
    width: 320px;
    height: 51px;
    font-size: 18px;
    background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
    border-radius: 27px;
    border: none;
    color: #ffffff;
`
export const ContainerTitleRegister = styled.div`
    
    
`
export const ContainerMessageErrorSingUp = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: 40px;
    visibility: ${({ visible }) => visible ? 'visible' : 'hidden'};
`
export const ErrorMessageSingUp = styled.p`
    margin: 0;
    font-size: 20px;
    color: black;
    text-align: center;
`
