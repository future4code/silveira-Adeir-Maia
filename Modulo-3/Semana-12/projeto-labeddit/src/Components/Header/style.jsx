import styled from "styled-components"

export const ContainerHeader = styled.div`
    display: flex;
    flex-direction: row;
    background: #EDEDED;
    height: 50px;
    align-items: center;
`
export const Logo = styled.img`
    width: 28px;
    height: 28px;
    margin: 0 auto;
    align-self: center;
`
export const ButtonLogOff = styled.a`
    width: fit-content;
    height: 30px;
    align-self: center;
    position: absolute;
    right: 10%;
    background: none;
    border: none;
    color: rgb(86,149,207);
    font-size: 18px;
`
export const ButtonReturn = styled.button`
    display: flex;
    border: none;
    background: none;
    align-self: center;
    img{
        width: 28px;
        height: 28px;
    }
`