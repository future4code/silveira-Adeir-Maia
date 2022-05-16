import React, { useState, useEffect, } from "react";
import { getPost, createPost } from "../../services/services";
import { Posts } from "../../Components/Posts/posts";
import useForm from "../../Hooks/useForm";
import { Header } from "../../Components/Header/header";
import {
    ContainerForm, ContainerLabel, ContainerInputTitle, ContainerInputContent, ContainerButtonPostar, ContainerLoading, ContainerLoadingBar
} from "./style";
import { LoadingComponent } from "../../Components/Loading/loading";
import { LoadingComponentBar } from "../../Components/Loading/loadingBar";
import { Pagination } from "../../Components/Pagination/pagination";

export const Feed = () => {
    const { form, onChange, cleanFields } = useForm({ title: "", body: "" })
    const [feed, setFeed] = useState()
    const [loading, setLoading] = useState(false)
    const [loadingBar, setLoadingBar] = useState(false)
    const [curentPage, setCurentPage] = useState(1)



    useEffect(() => {
        getPost(setFeed, setLoading, null, curentPage)
    }, [curentPage])

    const preventDefaultFunction = (event) => {
        event.preventDefault()
        createPost(form, setFeed, cleanFields, setLoadingBar, 1)
    }

    return (
        <>
            <Header page={''} />
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
            <ContainerLoadingBar>
                {loadingBar && <LoadingComponentBar />}
            </ContainerLoadingBar >
            <Pagination limit={10} total={500} setCurentPage={setCurentPage} loading={loading} />
            {loading ?
                <ContainerLoading>
                    <LoadingComponent />
                </ContainerLoading>
                :
                <Posts arrayPost={feed} setFeed={setFeed} curentPage={curentPage} />
            }
        </>
    )
}