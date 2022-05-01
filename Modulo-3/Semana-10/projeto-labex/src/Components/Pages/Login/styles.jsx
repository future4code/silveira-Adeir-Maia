import styled from "styled-components";

export const NavContainer = styled.nav`
    padding: 20px 0px 0px 20px;
    button{
        align-self: flex-start;
    }
    `
export const ErroMessage = styled.span`
    visibility: ${({ sucess }) => sucess ? 'hidden' : 'visible'};
    height: 30px;
    text-align: center;
    color: red;
`
export const SuperContainerLogin = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`
export const ContainerLogin = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 10px;
    h2{
        text-align: center;
        font-family: 'Righteous', cursive;
        font-size: 60px;
        color: rgb(244,254,244);
    }
    form{
        display: flex;
        flex-direction: column;
        gap: 10px;
        input{
            height: 25px;
            width: 600px;
            border-radius: 10px;
            @media screen  and (max-width: 700px){
                width: 300px;
            }
        }
        button{
            width: fit-content;
            align-self: center;
        }
    }
`

