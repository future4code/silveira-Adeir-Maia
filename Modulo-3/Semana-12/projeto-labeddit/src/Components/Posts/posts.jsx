import React, { useEffect, useState } from "react";
import { ContainerPost, ContainerVote, ArrowLogo, ButtonArrowLogo } from "./style";
import { Link } from "react-router-dom";
import SetaBaixoPreta from '../../Img/seta-para-baixo-preta.png'
import SetaCimaPreta from '../../Img/seta-para-cima-preta.png'
import { vote } from "../../Functions/function";
import { DeleteVote } from "../../services/services";

export const Posts = (props) => {


    return (
        <>
            {
                props.arrayPost && props.arrayPost.map(post => {
                    return (
                        <ContainerPost key={post.id}>
                            <p>Autor: {post.username}</p>
                            <h3>{post.title}</h3>
                            <Link to={`/Post/${post.id}`}>{post.commentCount}  Comentarios</Link>
                            <ContainerVote>
                                <ButtonArrowLogo onClick={() => vote(post.id, post.userVote, 1, 'posts')} ><ArrowLogo src={SetaCimaPreta} alt="setaParaCima" /></ButtonArrowLogo>
                                <span>{post.voteSum ? post.voteSum : 0}</span>
                                <ButtonArrowLogo onClick={() => vote(post.id, post.userVote, -1, 'posts')} ><ArrowLogo src={SetaBaixoPreta} alt="setaParaBaixo" /></ButtonArrowLogo>
                            </ContainerVote>
                            <button onClick={() => DeleteVote(post.id, 'posts')}>LImpar Voto</button>
                        </ContainerPost>
                    )
                })
            }
        </>
    )
}