import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useForm from "../../Hooks/useForm";
import { twoRequests, createComment } from "../../services/services";
import SetaBaixoPreta from '../../Img/seta-para-baixo-preta.png'
import SetaCimaPreta from '../../Img/seta-para-cima-preta.png'
import SetaBaixoVermelha from '../../Img/seta-para-baixo-vermelha.png'
import SetaCimaVerde from '../../Img/seta-para-cima-verde.png'
import * as style from "./styles";
import { vote } from "../../Functions/function";
import { Header } from "../Header/header";
import CommentsLogo from '../../Img/comments.png'
import { LoadingComponent } from "../Loading/loading";
import { LoadingComponentBar } from "../Loading/loadingBar";

export const PostPage = () => {
    const pathParams = useParams()
    const [post, setPosts] = useState([])
    const [comments, setComments] = useState([])
    const [exactPost, setExactPost] = useState([])
    const { form, onChange, cleanFields } = useForm({ body: '' })
    const [loading, setLoading] = useState(false)
    const [loadingBar, setLoadingBar] = useState(false)

    useEffect(() => { twoRequests(pathParams.id, setPosts, setComments, setLoading, pathParams.page) }, [])

    useEffect(() => {
        if (post.length > 0) {
            const filtredPost = post.filter(post => post.id === pathParams.id)
            setExactPost(filtredPost)
        }
    }, [post])

    const preventDefaultFunction = (event) => {
        event.preventDefault()
        createComment(form, exactPost[0].id, setPosts, setComments, cleanFields, setLoadingBar, pathParams.page)
    }

    return (
        <>
            <Header page={'commets'} />
            {loading ?
                <style.ContainerLoadingComment>
                    <LoadingComponent />
                </style.ContainerLoadingComment>
                :
                <>
                    {(exactPost.length > 0) &&
                        <>
                            <style.ContainerPost>
                                <p>Autor: {exactPost[0].username}</p>
                                <h3>{exactPost[0].title}</h3>
                                <p>{exactPost[0].body}</p>
                                <style.ContainerInteractionComment>
                                    <style.ContainerVoteComment>
                                        <style.ButtonArrowLogoComment
                                            onClick={() => vote(exactPost[0].id, exactPost[0].userVote, 1, 'posts', setPosts, setLoadingBar, pathParams.page)} >
                                            <style.ArrowLogoComment
                                                src={exactPost[0].userVote && exactPost[0].userVote === 1 ? SetaCimaVerde : SetaCimaPreta}
                                                alt="setaParaCima" />
                                        </style.ButtonArrowLogoComment>
                                        <span>{exactPost[0].voteSum ? exactPost[0].voteSum : 0}</span>
                                        <style.ButtonArrowLogoComment
                                            onClick={() => vote(exactPost[0].id, exactPost[0].userVote, -1, 'posts', setPosts, setLoadingBar, pathParams.page)} >
                                            <style.ArrowLogoComment
                                                src={exactPost[0].userVote && exactPost[0].userVote === -1 ? SetaBaixoVermelha : SetaBaixoPreta}
                                                alt="setaParaBaixo" />
                                        </style.ButtonArrowLogoComment>
                                    </style.ContainerVoteComment>
                                    <style.ContainerCommentsComment>
                                        <style.CommentsLogoStyle src={CommentsLogo} alt='iconeComentarios' />
                                        <span >{exactPost[0].commentCount ? exactPost[0].commentCount : 0}</span>
                                    </style.ContainerCommentsComment>
                                    {loadingBar && <LoadingComponentBar />}
                                </style.ContainerInteractionComment>
                            </style.ContainerPost>
                            <style.SuperContainerFormComment>
                                <style.ContainerFormComment onSubmit={preventDefaultFunction}>
                                    <style.ContainerTextAreaContent name="body" value={form.body} onChange={onChange}
                                        placeholder='Escreva seu cometário' required />
                                    <style.ButtonLinearGradientComment>Postar</style.ButtonLinearGradientComment>
                                </style.ContainerFormComment>
                                <style.ContainerLoadingBar>
                                    {loadingBar && <LoadingComponentBar />}
                                </style.ContainerLoadingBar>
                            </style.SuperContainerFormComment>
                            {comments.length > 0 && comments.map(comments => {
                                return (
                                    <style.ContainerComentBorder key={comments.id}>
                                        <style.CommentAuthor>Enviado por: {comments.username}</style.CommentAuthor>
                                        <style.CommetBody>{comments.body}</style.CommetBody>
                                        <style.ContainerInteractionComment>
                                            <style.ContainerVoteComment>
                                                <style.ButtonArrowLogoComment
                                                    onClick={() => vote(
                                                        comments.id, comments.userVote, 1, 'comments', setComments, setLoadingBar, true, exactPost[0].id, pathParams.page
                                                    )} >
                                                    <style.ArrowLogoComment
                                                        src={comments.userVote && comments.userVote === 1 ? SetaCimaVerde : SetaCimaPreta}
                                                        alt="setaParaCima" />
                                                </style.ButtonArrowLogoComment>
                                                <span>{comments.voteSum ? comments.voteSum : 0}</span>
                                                <style.ButtonArrowLogoComment
                                                    onClick={() => vote(
                                                        comments.id, comments.userVote, -1, 'comments', setComments, setLoadingBar, true, exactPost[0].id, pathParams.page
                                                    )} >
                                                    <style.ArrowLogoComment
                                                        src={comments.userVote && comments.userVote === -1 ? SetaBaixoVermelha : SetaBaixoPreta}
                                                        alt="setaParaBaixo" />
                                                </style.ButtonArrowLogoComment>
                                            </style.ContainerVoteComment>
                                            {loadingBar && <LoadingComponentBar />}
                                        </style.ContainerInteractionComment>
                                    </style.ContainerComentBorder>
                                )
                            })}
                        </>
                    }
                </>
            }
        </>
    )
}