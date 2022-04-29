import styled from "styled-components";

export const SuperContainerAplicationFormPage = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 20px;
    button:nth-child(1){
        width: fit-content;
    }
`
export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 0 auto;
    button{
        width: fit-content;
        margin: 0 auto;
    }
`