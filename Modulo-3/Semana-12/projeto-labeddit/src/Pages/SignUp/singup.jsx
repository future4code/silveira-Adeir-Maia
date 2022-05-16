import React, { useState, useEffect, } from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../Hooks/useForm";
import { signUpRequest } from "../../services/services";
import * as style from './style'
import Error from '../../Img/Error.png'
import { Header } from "../../Components/Header/header";

export const SignUp = () => {
    const { form, onChange, cleanFields } = useForm({ username: "", email: "", password: "" })
    const [messageError, setMessageError] = useState('')
    const navigate = useNavigate()

    const preventDefaultFunction = (event) => {
        event.preventDefault()
        signUpRequest(form, navigate, setMessageError)
    }

    return (
        <>
            <Header page={'singUp'} />
            <style.ContainerTitleRegister>
                <style.PageTitle>Olá, boas vinda ao LabEddit</style.PageTitle>
            </style.ContainerTitleRegister>
            <style.ContainerMessageErrorSingUp visible={messageError}>
                <img src={Error} alt="errorIcone" />
                <style.ErrorMessageSingUp>{messageError}</style.ErrorMessageSingUp>
            </style.ContainerMessageErrorSingUp>
            <style.SuperContainerFormResgister>
                <style.ContainerFormResgister onSubmit={preventDefaultFunction} >
                    <style.ContainerInputResgister name="username" placeholder="Nome De Usuário" value={form.username} onChange={onChange}
                        required />
                    <style.ContainerInputResgister name="email" placeholder="Email" value={form.email} onChange={onChange}
                        required pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                        title="O email deve ter o seguinte formato: exemplo@provedor.com" />
                    <style.ContainerInputResgister name="password" placeholder="Senha" value={form.password} onChange={onChange}
                        required pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,30}$" type={"password"}
                        title="Senha deve ter entre 8 e 30 caracteres entre letras e números" />
                    <p>Ao continuar, você concorda com nosso <a href="">Contrato de Usuário</a> e nossa
                        <a href=""> Política de Privacidade</a>
                    </p>
                    <div>
                        <input type={"checkbox"} required />
                        <label>Eu concordo em receber emails sobre coisas legais no labeddit</label>
                    </div>
                    <style.ButtonLinearGradient>Cadastrar</style.ButtonLinearGradient>
                </style.ContainerFormResgister>
            </style.SuperContainerFormResgister>

        </>
    )
}