import React, { useState } from "react";
import { ContainerPost, ContainerVote, ArrowLogo, ButtonArrowLogo, ContainerComments, ContainerInteractions, Comments, PostTitle, ContainerLoadingBar } from "./style";
import { Link } from "react-router-dom";
import SetaBaixoPreta from '../../Img/seta-para-baixo-preta.png'
import SetaCimaPreta from '../../Img/seta-para-cima-preta.png'
import SetaBaixoVermelha from '../../Img/seta-para-baixo-vermelha.png'
import SetaCimaVerde from '../../Img/seta-para-cima-verde.png'
import CommentsLogo from '../../Img/comments.png'
import { vote } from "../../Functions/function";
import { LoadingComponentBar } from "../Loading/loadingBar";

export const Posts = (props) => {
    const [loadingBar, setLoadingBar] = useState(false)

    return (
        <>
            {
                props.arrayPost && props.arrayPost.map(post => {
                    return (
                        <ContainerPost key={post.id}>
                            <PostTitle>Enviado por: {post.username}</PostTitle>
                            <h3>{post.title}</h3>
                            <ContainerInteractions>
                                <ContainerVote>
                                    <ButtonArrowLogo onClick={() => vote(post.id, post.userVote, 1, 'posts', props.setFeed, setLoadingBar, props.curentPage)} >
                                        <ArrowLogo
                                            src={post.userVote && post.userVote === 1 ? SetaCimaVerde : SetaCimaPreta}
                                            alt="setaParaCima" />
                                    </ButtonArrowLogo>
                                    <span>{post.voteSum ? post.voteSum : 0}</span>
                                    <ButtonArrowLogo onClick={() => vote(post.id, post.userVote, -1, 'posts', props.setFeed, setLoadingBar, props.curentPage)} >
                                        <ArrowLogo
                                            src={post.userVote && post.userVote === -1 ? SetaBaixoVermelha : SetaBaixoPreta}
                                            alt="setaParaBaixo" />
                                    </ButtonArrowLogo>
                                </ContainerVote>
                                <Link to={`/Post/${post.id}/page/${props.curentPage}`}>
                                    <ContainerComments>
                                        <Comments src={CommentsLogo} alt='iconeComentarios' />
                                        <span >{post.commentCount ? post.commentCount : 0}</span>
                                    </ContainerComments>
                                </Link>
                                <ContainerLoadingBar visible={loadingBar}>
                                    {<LoadingComponentBar />}
                                </ContainerLoadingBar>
                            </ContainerInteractions>
                        </ContainerPost>
                    )
                })
            }
        </>
    )
}