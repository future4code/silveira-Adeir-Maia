import React, { useState, useEffect, } from "react";
import { useNavigate } from "react-router-dom";
import { logOff } from "../../Functions/function";
import { getPost, createPost } from "../../services/services";
import { Posts } from "../../Components/Posts/posts";
import useForm from "../../Hooks/useForm";
import { Header } from "../../Components/Header/header";
import { ContainerForm, ContainerLabel, ContainerInputTitle, ContainerInputContent, ContainerButtonPostar } from "./style";

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
            <Header page={''} />
            <div>
                <ContainerForm onSubmit={preventDefaultFunction}>
                    <ContainerLabel htmlFor="title"> Titulo da Postagem
                        <ContainerInputTitle id="title" name="title" value={form.title} onChange={onChange}
                            required placeholder="Título do Post" />
                    </ContainerLabel>
                    <ContainerLabel htmlFor="body" > Conteúdo
                        <ContainerInputContent id="body" name="body" value={form.body} onChange={onChange}
                            required placeholder="Escreva seu Post" />
                    </ContainerLabel>
                    <ContainerButtonPostar>Postar</ContainerButtonPostar>
                </ContainerForm>
            </div>
            <Posts arrayPost={feed} />
        </>
    )
}