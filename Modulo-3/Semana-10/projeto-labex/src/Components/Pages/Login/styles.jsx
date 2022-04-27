import styled from "styled-components";

export const ErroMessage = styled.p`
    visibility: ${({ sucess }) => sucess ? 'hidden' : 'visible'};
`

