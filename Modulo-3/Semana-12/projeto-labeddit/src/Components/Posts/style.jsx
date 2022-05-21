import styled from "styled-components";

export const ContainerPost = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 20px;
    background: #FBFBFB;
    border: 1px solid #E0E0E0;
    border-radius: 12px;
    margin: 20px 0px 20px 0px;
    h3{
        font-size: 18px;
        margin: 0;
        
    }
`
export const PostTitle = styled.p`
    font-size: 13px;
    margin: 0px;
    color: #6F6F6F;
`
export const ContainerInteractions = styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;
    a{
        text-decoration: none;
    }
`
export const ContainerComments = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    border: 1px solid #EFEFEF;
    border-radius: 28px;
    padding: 5px 10px 5px 10px;
    background: #F9B24E;
    span{
        font-size: 18px;
        color: #5695cf;
    }
`
export const ContainerVote = styled.div`
    display: flex;
    flex-direction: row;
    border: 1px solid #EFEFEF;
    border-radius: 28px;
    padding: 5px;
    background: #F9B24E;
    span{
        font-size: 18px;
        color: #5695cf;
    }
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
export const ContainerLoadingBar = styled.div`
    visibility: ${({ visible }) => visible ? `visible` : `hidden`};
`