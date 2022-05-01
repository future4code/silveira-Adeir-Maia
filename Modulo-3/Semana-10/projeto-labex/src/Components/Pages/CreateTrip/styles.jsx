import styled from "styled-components";

export const SuperContainerCreatTrip = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    h2{
        font-family: 'Righteous', cursive;
        font-size: 40px;
    }
    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 20px;
        input{
            height: 25px;
            width: 600px;
            border-radius: 10px;
            @media screen  and (max-width: 700px){
                width: 300px;
            }
        }
        select{
            width: 608px;
            border-radius: 10px;
            height: 30px;
            @media screen  and (max-width: 700px){
                width: 308px;
            }
        }
        button{
            width: fit-content;
            margin: 0 auto;
        }
    }
`