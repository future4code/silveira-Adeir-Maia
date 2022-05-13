import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useForm from "../../Hooks/useForm";
import { goBack } from "../../Routes/cordinator";
import { twoRequests, createComment } from "../../services/services";
import SetaBaixoPreta from '../../Img/seta-para-baixo-preta.png'
import SetaCimaPreta from '../../Img/seta-para-cima-preta.png'
import SetaBaixoVermelha from '../../Img/seta-para-baixo-vermelha.png'
import SetaCimaVerde from '../../Img/seta-para-cima-verde.png'
import * as style from "./styles";
import { vote } from "../../Functions/function";
import { Header } from "../Header/header";
import CommentsLogo from '../../Img/comments.png'

export const PostPage = () => {
    const pathParams = useParams()
    const [post, setPosts] = useState([])
    const [comments, setComments] = useState([])
    const [exactPost, setExactPost] = useState([])
    const { form, onChange, cleanFields } = useForm({ body: '' })

    useEffect(() => { twoRequests(pathParams.id, setPosts, setComments) }, [])

    useEffect(() => {
        if (post.length > 0) {
            const postes = post.filter(post => post.id === pathParams.id)
            setExactPost(postes)
        }
    }, [post])

    const preventDefaultFunction = (event) => {
        event.preventDefault()
        createComment(form, exactPost[0].id)
    }

    return (
        <div>
            <Header page={'commets'} />
            {(exactPost.length > 0) &&
                <>
                    <style.ContainerPost>
                        <p>Autor: {exactPost[0].username}</p>
                        <h3>{exactPost[0].title}</h3>
                        <p>{exactPost[0].body}</p>
                        <style.ContainerInteractionComment>
                            <style.ContainerVoteComment>
                                <style.ButtonArrowLogoComment onClick={() => vote(comments.id, comments.userVote, 1, 'posts')} >
                                    <style.ArrowLogoComment
                                        src={comments.userVote && comments.userVote === 1 ? SetaCimaVerde : SetaCimaPreta}
                                        alt="setaParaCima" />
                                </style.ButtonArrowLogoComment>
                                <span>{exactPost[0].voteSum ? comments.voteSum : 0}</span>
                                <style.ButtonArrowLogoComment onClick={() => vote(comments.id, comments.userVote, -1, 'posts')} >
                                    <style.ArrowLogoComment
                                        src={comments.userVote && comments.userVote === -1 ? SetaBaixoVermelha : SetaBaixoPreta}
                                        alt="setaParaBaixo" />
                                </style.ButtonArrowLogoComment>
                            </style.ContainerVoteComment>
                            <style.ContainerCommentsComment>
                                <style.CommentsLogoStyle src={CommentsLogo} alt='iconeComentarios' />
                                <span >{comments.commentCount ? comments.commentCount : 0}</span>
                            </style.ContainerCommentsComment>
                        </style.ContainerInteractionComment>
                    </style.ContainerPost>
                    <style.SuperContainerFormComment>
                        <style.ContainerFormComment onSubmit={preventDefaultFunction}>
                            <style.ContainerTextAreaContent name="body" value={form.body} onChange={onChange}
                                placeholder='Escreva seu cometário' required />
                            <style.ButtonLinearGradientComment>Postar</style.ButtonLinearGradientComment>
                        </style.ContainerFormComment>
                    </style.SuperContainerFormComment>
                    {comments.length > 0 && comments.map(comments => {
                        return (
                            <style.ContainerComentBorder key={comments.id}>
                                <style.CommentAuthor>Enviado por: {comments.username}</style.CommentAuthor>
                                <style.CommetBody>{comments.body}</style.CommetBody>
                                <style.ContainerVoteComment>
                                    <style.ButtonArrowLogoComment onClick={() => vote(comments.id, comments.userVote, 1, 'comments')} >
                                        <style.ArrowLogoComment src={comments.userVote && comments.userVote === 1 ? SetaCimaVerde : SetaCimaPreta}
                                            alt="setaParaCima" />
                                    </style.ButtonArrowLogoComment>
                                    <span>{comments.voteSum ? comments.voteSum : 0}</span>
                                    <style.ButtonArrowLogoComment onClick={() => vote(comments.id, comments.userVote, -1, 'comments')} >
                                        <style.ArrowLogoComment src={comments.userVote && comments.userVote === -1 ? SetaBaixoVermelha : SetaBaixoPreta}
                                            alt="setaParaBaixo" />
                                    </style.ButtonArrowLogoComment>
                                </style.ContainerVoteComment>
                            </style.ContainerComentBorder>
                        )
                    })}
                </>
            }
        </div>
    )
}