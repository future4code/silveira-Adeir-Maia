import styled from "styled-components";

export const ErroMessage = styled.span`
    visibility: ${({ sucess }) => sucess ? 'hidden' : 'visible'};
    height: 30px;
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
    p{
        text-align: center;
    }
    form{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
`

