import styled from "styled-components";

export const ContainerLogoLogin = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    padding: 50px 0px 0px 0px;
`
export const ImgLogoLogin = styled.img`
    width: 100px;
    height: 100px;
`
export const Titleh1 = styled.h1`
    font-size: 40px;
    margin: 0;
`
export const Titleh2 = styled.h2`
    font-size: 16px;
    margin: 0;
`
export const SuperContainerForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`
export const ContainerForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 5px;
`
export const ContainerInput = styled.input` 
    width: 290px;
    height: 30px;
    font-size: 20px;
    padding: 10px;
    border: 1px solid #EFEFEF;
`
export const LineStylized = styled.div`
    margin: 20px;
    height: 1px;
    background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
    width: 320px;
`
export const ButtonLinearGradient = styled.button`
    width: 320px;
    height: 40px;
    font-size: 20px;
    font-size: 18px;
    border: none;
    background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
    border-radius: 27px;
    color: #FFFFFF;
`
export const RegisterButton = styled.button`
    width: 320px;
    height: 40px;
    font-size: 20px;
    background: white;
    border: 1px solid #FE7E02;
    border-radius: 27px;
    color: #FE7E02;
`
export const ContainerMessageError = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: 50px;
    visibility: ${({ visible }) => visible ? 'visible' : 'hidden'};
`
export const ErrorMessage = styled.p`
    margin: 0;
    font-size: 20px;
    color: black;
    text-align: center;
`