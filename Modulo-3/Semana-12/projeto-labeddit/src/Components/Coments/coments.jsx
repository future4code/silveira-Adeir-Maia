import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useForm from "../../Hooks/useForm";
import { goBack } from "../../Routes/cordinator";
import { twoRequests, createComment } from "../../services/services";
import SetaBaixoPreta from '../../Img/seta-para-baixo-preta.png'
import SetaCimaPreta from '../../Img/seta-para-cima-preta.png'
import SetaBaixoVermelha from '../../Img/seta-para-baixo-vermelha.png'
import SetaCimaVerde from '../../Img/seta-para-cima-verde.png'
import { ContainerVote, ArrowLogo, ButtonArrowLogo } from "./styles";
import { vote } from "../../Functions/function";
import { Header } from "../Header/header";
import { ContainerPost, ContainerInteractions, ContainerComments, } from "../Posts/style";

export const PostPage = () => {
    const navigate = useNavigate()
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
            <Header />
            <button onClick={() => goBack(navigate)}>Voltar</button>

            {(exactPost.length > 0) &&
                <>
                    <ContainerPost>
                        <p>Autor: {exactPost[0].username}</p>
                        <h3>{exactPost[0].title}</h3>
                        <p>{exactPost[0].body}</p>
                    </ContainerPost>
                    <div>
                        <form onSubmit={preventDefaultFunction}>
                            <textarea name="body" value={form.body} onChange={onChange}
                                placeholder='Escreva seu cometário' required />
                            <button>Postar</button>
                        </form>
                    </div>
                    {comments.length > 0 && comments.map(comments => {
                        return (
                            <ContainerPost key={comments.id}>
                                <p>Enviado por: {comments.username}</p>
                                <p>{comments.body}</p>
                                <ContainerVote>
                                    <ButtonArrowLogo onClick={() => vote(comments.id, comments.userVote, 1, 'comments')} >
                                        <ArrowLogo src={comments.userVote && comments.userVote === 1 ? SetaCimaVerde : SetaCimaPreta}
                                            alt="setaParaCima" />
                                    </ButtonArrowLogo>
                                    <span>{comments.voteSum ? comments.voteSum : 0}</span>
                                    <ButtonArrowLogo onClick={() => vote(comments.id, comments.userVote, -1, 'comments')} >
                                        <ArrowLogo src={comments.userVote && comments.userVote === -1 ? SetaBaixoVermelha : SetaBaixoPreta}
                                            alt="setaParaBaixo" />
                                    </ButtonArrowLogo>
                                </ContainerVote>
                            </ContainerPost>
                        )
                    })}
                </>
            }


        </div>
    )
}