import styled from "styled-components";

export const SuperContainerHome = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    @media screen and (max-width: 800px){
        justify-content: center;
    }
    height: 100vh;
    width: 100vw;

`
export const ContainerHome = styled.div`
    display: flex;
    flex-direction: column;
    gap: 100px;
    padding: 100px 0px 0px 100px;
    @media screen and (max-width: 800px){
        padding: 0;
        justify-content: center;
        
    }
    div:nth-child(1){
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: 'Righteous', cursive;
        font-weight: 400;
        h1{
            font-size: 100px;
            margin: 0;
            color: rgb(244,254,244);
        span{
            color: #071224;
        }
        }
        p{
            font-size: 50px;
            color: rgb(244,254,244);
            @media screen and (max-width: 800px){
                text-align: center;
            }
        } 
    }
    div:nth-child(2){
        display: flex;
        justify-content: space-evenly;
        button:nth-child(1){
            display: flex;
            align-items: center;
            font-family: inherit;
            font-weight: 500;
            font-size: 17px;
            padding: 0.8em 1.3em 0.8em 0.9em;
            color: white;
            background: #ad5389;
            /* background: linear-gradient(to right, #0f0c29, #302b63, #24243e); */
            background: linear-gradient(to right, #071224, #234576, #7DC3D9);
            border: none;
            letter-spacing: 0.05em;
            border-radius: 16px;
        }
        button:nth-child(1) svg {
            margin-right: 3px;
            transform: rotate(30deg);
            transition: transform 0.5s cubic-bezier(0.76, 0, 0.24, 1);
        }
        button:nth-child(1) span {
            transition: transform 0.5s cubic-bezier(0.76, 0, 0.24, 1);
        }
        button:nth-child(1):hover svg {
        transform: translateX(5px) rotate(90deg);
        }
        button:nth-child(1):hover span {
        transform: translateX(7px);
        }
    }
    
`
