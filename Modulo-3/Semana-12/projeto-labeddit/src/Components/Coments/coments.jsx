import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useForm from "../../Hooks/useForm";
import { goBack } from "../../Routes/cordinator";
import { twoRequests, createComment, DeleteVote } from "../../services/services";
import SetaBaixoPreta from '../../Img/seta-para-baixo-preta.png'
import SetaCimaPreta from '../../Img/seta-para-cima-preta.png'
import { ContainerVote, ArrowLogo, ButtonArrowLogo } from "./styles";
import { vote } from "../../Functions/function";

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
            <button onClick={() => goBack(navigate)}>Voltar</button>
            {(exactPost.length > 0) &&
                <div>
                    <p>Autor: {exactPost[0].username}</p>
                    <h3>{exactPost[0].title}</h3>
                    <p>{exactPost[0].body}</p>
                    <div>
                        <form onSubmit={preventDefaultFunction}>
                            <input name="body" value={form.body} onChange={onChange}
                                placeholder='Escreva seu cometário' required />
                            <button>Postar</button>
                        </form>
                    </div>
                    {comments.length > 0 && comments.map(comments => {
                        return (
                            <div key={comments.id}>
                                <p>{comments.username}:  {comments.body}</p>
                                <ContainerVote>
                                    <ButtonArrowLogo onClick={() => vote(comments.id, comments.userVote, 1, 'comments')} >
                                        <ArrowLogo src={SetaCimaPreta} alt="setaParaCima" />
                                    </ButtonArrowLogo>
                                    <span>{comments.voteSum ? comments.voteSum : 0}</span>
                                    <ButtonArrowLogo onClick={() => vote(comments.id, comments.userVote, -1, 'comments')} >
                                        <ArrowLogo src={SetaBaixoPreta} alt="setaParaBaixo" />
                                    </ButtonArrowLogo>
                                    <button onClick={() => DeleteVote(comments.id, 'comments')}>LImpar Voto</button>
                                </ContainerVote>
                            </div>
                        )
                    })}
                </div>
            }
        </div>
    )
}