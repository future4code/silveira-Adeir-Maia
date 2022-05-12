import styled from "styled-components";

export const ContainerPost = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 20px;
    border: 3px solid black;
    margin: 20px 0px 20px 0px;
    h3{
        font-size: 30px;
        margin: 0;
    }
`
export const PostTitle = styled.p`
    font-size: 20px;
    margin: 0;
`
export const ContainerInteractions = styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;
`
export const ContainerComments = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`
export const ContainerVote = styled.div`
    display: flex;
    flex-direction: row;
`
export const ButtonArrowLogo = styled.button`
    width: fit-content;
    height: fit-content;
    background: none;
    border: none;
`
export const ArrowLogo = styled.img`
    width: 20px;
    height: 20px;
`
export const Comments = styled.img`
    width: 20px;
    height: 20px;
`