import styled from 'styled-components'

export const PhotoProfile = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
`
export const ContainerMatch = styled.div`
    display: flex;
    padding: 30px;
    flex-direction: column;
    align-items: center;
    gap: 50px;
`
export const NavContainer = styled.nav`
    border: 5px solid black;
    background: linear-gradient(135deg,#f31afe3b,#44dbe642);
    display: flex;
    flex-direction: column;
    align-items: center;
    div{
        display: flex;
        gap: 200px;
        height: 120px;
        button{
            height: 120px;
            width: 120px;
            background-color: transparent;
            border: none;
            img{
                height: 100px;
                width: 100px;
            }
            img:hover{
                width: 120px;
                height: 120px;
            }
        }
        div{
            width: 120px;
            height: 120px;
            img{
                height: 100px;
                width: 100px;
            }
            img:hover{
                width: 120px;
                height: 120px;
            }
        }
    }
`
export const CardProfile = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: column;
`
export const ContainerProfiles = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 50px;
    border: 5px solid black;
    padding: 20px;
    background: linear-gradient(135deg,#f31afe3b,#44dbe642);
    p{
        margin: 0;
        text-align: center;
        display: flex;
        flex-wrap: wrap;
        font-size: 20px;
        color: black;
        font-weight: 500;
        margin-top: 30px;
    }
`
export const Paragrafo = styled.p`
    text-align: center;
    font-size: 30px;
`
export const AplicationTitle = styled.h1`
    font-size: 40px;
    color: #F319FE;
    span{
        color: #42DEE6;
    }
`