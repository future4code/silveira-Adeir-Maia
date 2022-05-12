import React, { useState, useEffect, } from "react";
import { useNavigate } from "react-router-dom";
import { goToSingUp } from "../../Routes/cordinator";
import useForm from "../../Hooks/useForm";
import { loginRequest } from "../../services/services";
import LogoImg from '../../Img/logo.png'
import * as style from "./style";


export const Login = () => {
    const { form, onChange, cleanFields } = useForm({ email: "", password: "" })
    const navigate = useNavigate()

    const preventDefaultFunction = (event) => {
        event.preventDefault()
        loginRequest(form, navigate)
    }

    return (
        <>
            <style.ContainerLogoLogin>
                <style.ImgLogoLogin src={LogoImg} alt={'Logotipo do app'} />
                <style.Titleh1>LabEddit</style.Titleh1>
                <style.Titleh2>A rede social da Labenu</style.Titleh2>
            </style.ContainerLogoLogin>
            <style.SuperContainerForm>
                <style.ContainerForm onSubmit={preventDefaultFunction}>
                    <style.ContainerInput name="email" placeholder="Email"
                        value={form.email} onChange={onChange}
                        required pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                        title="O email deve ter o seguinte formato: exemplo@provedor.com" />
                    <style.ContainerInput type={"password"} name="password" placeholder="Senha"
                        value={form.password} onChange={onChange}
                        required pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,30}$"
                        title="Senha deve ter entre 8 e 30 caracteres entre letras e números" />
                    <style.ButtonLinearGradient>Login</style.ButtonLinearGradient>
                </style.ContainerForm>
                <style.LineStylized>

                </style.LineStylized>
                <style.RegisterButton onClick={() => goToSingUp(navigate)}>Cadastrar</style.RegisterButton>
            </style.SuperContainerForm>
        </>
    )
}