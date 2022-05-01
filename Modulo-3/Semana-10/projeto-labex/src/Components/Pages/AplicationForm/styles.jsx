import styled from "styled-components";

export const SuperContainerAplicationFormPage = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 20px;
    button:nth-child(1){
        width: fit-content;
        align-self: center;
    }
    h2{
        text-align: center;
        font-family: 'Righteous', cursive;
        font-weight: 400;
        font-size: 40px;
        color: rgb(244,254,244);
    }
`
export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 0 auto;
    input{
        height: 25px;
        width: 600px;
        border-radius: 10px;
        @media screen  and (max-width: 700px){
            width: 300px;
        }
    }
    select{
        height: 30px;
        width: 608px;
        border-radius: 10px;
        @media screen  and (max-width: 700px){
            width: 308px;
        }
    }
    button{
        width: fit-content;
        margin: 0 auto;
    }
`