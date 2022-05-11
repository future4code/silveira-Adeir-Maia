import React, { useState, useEffect, } from "react";
import { useNavigate } from "react-router-dom";
import { goToFeed, goToSingUp } from "../../Routes/cordinator";
import useForm from "../../Hooks/useForm";
import { loginRequest } from "../../services/services";
import { logOff } from "../../Functions/function";

export const Login = () => {
    const { form, onChange, cleanFields } = useForm({ email: "", password: "" })
    const navigate = useNavigate()

    const preventDefaultFunction = (event) => {
        event.preventDefault()
        loginRequest(form, navigate)
    }

    return (
        <>
            <p>Login</p>
            <form onSubmit={preventDefaultFunction}>
                <input name="email" placeholder="Email" value={form.email} onChange={onChange}
                    required pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                    title="O email deve ter o seguinte formato: exemplo@provedor.com" />
                <input type={"password"} name="password" placeholder="Senha" value={form.password} onChange={onChange}
                    required pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,30}$"
                    title="Senha deve ter entre 8 e 30 caracteres entre letras e números" />
                <button>Login</button>
            </form>
            <button onClick={() => goToSingUp(navigate)}>Cadastrar</button>
        </>
    )
}