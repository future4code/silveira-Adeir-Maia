import React from "react";
import { ContainerPost, ContainerVote, ArrowLogo, ButtonArrowLogo, ContainerComments, ContainerInteractions, Comments, PostTitle } from "./style";
import { Link } from "react-router-dom";
import SetaBaixoPreta from '../../Img/seta-para-baixo-preta.png'
import SetaCimaPreta from '../../Img/seta-para-cima-preta.png'
import SetaBaixoVermelha from '../../Img/seta-para-baixo-vermelha.png'
import SetaCimaVerde from '../../Img/seta-para-cima-verde.png'
import CommentsLogo from '../../Img/comments.png'
import { vote } from "../../Functions/function";

export const Posts = (props) => {
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
                                    <ButtonArrowLogo onClick={() => vote(post.id, post.userVote, 1, 'posts')} >
                                        <ArrowLogo
                                            src={post.userVote && post.userVote === 1 ? SetaCimaVerde : SetaCimaPreta}
                                            alt="setaParaCima" />
                                    </ButtonArrowLogo>
                                    <span>{post.voteSum ? post.voteSum : 0}</span>
                                    <ButtonArrowLogo onClick={() => vote(post.id, post.userVote, -1, 'posts')} >
                                        <ArrowLogo
                                            src={post.userVote && post.userVote === -1 ? SetaBaixoVermelha : SetaBaixoPreta}
                                            alt="setaParaBaixo" />
                                    </ButtonArrowLogo>
                                </ContainerVote>
                                <Link to={`/Post/${post.id}`}>
                                    <ContainerComments>
                                        <Comments src={CommentsLogo} alt='iconeComentarios' />
                                        <span >{post.commentCount ? post.commentCount : 0}</span>
                                    </ContainerComments>
                                </Link>
                            </ContainerInteractions>
                        </ContainerPost>
                    )
                })
            }
        </>
    )
}