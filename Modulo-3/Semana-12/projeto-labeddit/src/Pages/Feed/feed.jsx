import React, { useState, useEffect, } from "react";
import { useNavigate } from "react-router-dom";
import { logOff } from "../../Functions/function";
import { getPost, createPost } from "../../services/services";
import { Posts } from "../../Components/Posts/posts";
import useForm from "../../Hooks/useForm";

export const Feed = () => {
    const { form, onChange, cleanFields } = useForm({ title: "", body: "" })
    const navigate = useNavigate()
    const [feed, setFeed] = useState()

    useEffect(() => getPost(setFeed), [])

    const preventDefaultFunction = (event) => {
        event.preventDefault()
        createPost(form, setFeed)
    }

    return (
        <>
            <p>Feed</p>
            <button onClick={() => logOff(navigate)}>LogOff</button>
            <div>
                <form onSubmit={preventDefaultFunction}>
                    <label htmlFor="title"> Titulo da Postagem
                        <input id="title" name="title" value={form.title} onChange={onChange}
                            required />
                    </label>
                    <label htmlFor="body" > Conteúdo
                        <input id="body" name="body" value={form.body} onChange={onChange}
                            required />
                    </label>
                    <button>Postar</button>
                </form>
            </div>
            <Posts arrayPost={feed} />
        </>
    )
}