import styled from "styled-components"

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
    p{
        margin: 0;
    }
`

export const ButtonArrowLogoComment = styled.button`
    width: fit-content;
    height: fit-content;
    background: none;
    border: none;
`
export const ArrowLogoComment = styled.img`
    width: 20px;
    height: 20px;
`
export const ButtonLinearGradientComment = styled.button`
    width: 100%;
    margin: 0 auto;
    height: 47px;
    font-size: 18px;
    border: none;
    background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%), #4088CB;
    border-radius: 12px;
    color: #FFFFFF;
`
export const ContainerComentBorder = styled.div`
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
    p{
        margin: 0;
    }
`
export const ContainerVoteComment = styled.div`
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

export const CommentsLogoStyle = styled.img`
    width: 20px;
    height: 20px;
`
export const ContainerCommentsComment = styled.div`
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
export const ContainerInteractionComment = styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;
    a{
        text-decoration: none;
    }
`
export const SuperContainerFormComment = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
`

export const ContainerFormComment = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
`
export const ContainerLabel = styled.label`
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 10px;
    font-size: 18px;
`
export const ContainerTextAreaContent = styled.textarea`
    border: 1px solid black;
    height: 130px;
    resize: none;
    background: #EDEDED;
    border-radius: 12px;
    padding: 10px;
    font-size: 18px;
`
export const CommentAuthor = styled.p`
    font-size: 12px;
    color: #6F6F6F;
`
export const CommetBody = styled.p`
    font-size: 18px;

`
export const ContainerLoadingComment = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 50px;
`
export const ContainerLoadingBar = styled.div`
    visibility: visible;
    display: flex;
    justify-content: center;
    height: 50px;
`