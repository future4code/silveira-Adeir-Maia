import React, { useState, useEffect, } from "react";
import { useNavigate } from "react-router-dom";
import { goToFeed } from "../../Routes/cordinator";
import useForm from "../../Hooks/useForm";
import { signUpRequest } from "../../services/services";

export const SignUp = () => {
    const { form, onChange, cleanFields } = useForm({ username: "", email: "", password: "" })
    const navigate = useNavigate()

    const preventDefaultFunction = (event) => {
        event.preventDefault()
        signUpRequest(form, navigate)
    }

    return (
        <>
            <>Cadastro</>
            <form onSubmit={preventDefaultFunction} >
                <input name="username" placeholder="Nome De Usuário" value={form.username} onChange={onChange}
                    required />
                <input name="email" placeholder="Email" value={form.email} onChange={onChange}
                    required pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                    title="O email deve ter o seguinte formato: exemplo@provedor.com" />
                <input name="password" placeholder="Senha" value={form.password} onChange={onChange}
                    required pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,30}$"
                    title="Senha deve ter entre 8 e 30 caracteres entre letras e números" />
                <button>asdasdasdasd</button>
            </form>
            <button onClick={() => goToFeed(navigate)}>Cadastrar</button>
        </>
    )
}