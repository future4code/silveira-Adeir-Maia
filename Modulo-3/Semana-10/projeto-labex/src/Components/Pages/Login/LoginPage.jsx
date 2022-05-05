import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToHome } from "../../Routes/coordenator";
import { ErroMessage } from "./styles";
import useForm from "../../Hooks/useForm";
import { LoginRequest } from "../../Services/service";
import { SuperContainerLogin, ContainerLogin } from "./styles";
import { ButtonGeral } from "../AdimHome/styles";

const Login = () => {
    const { form, onChange, cleanFields } = useForm({ email: "", password: "" })
    const [sucess, setSucess] = useState(true)
    const [messageError, setMessageError] = useState('')
    const navigate = useNavigate()

    const preventDefaultFunction = (event) => {
        event.preventDefault()
        LoginRequest(form, navigate, setSucess, setMessageError, cleanFields)
    }

    return (
        <SuperContainerLogin>
            <nav>
                <ButtonGeral onClick={() => goToHome(navigate)} >Home</ButtonGeral>
            </nav>
            <ContainerLogin>
                <h2>Login</h2>
                <form onSubmit={preventDefaultFunction}>
                    <input
                        name="email" type='email' value={form.email} onChange={onChange} required
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" placeholder="Email" />
                    <input name="password" type='password' value={form.password} onChange={onChange} required
                        pattern="^.{6,}" title="A senha deve ter pelo menos 6 caracteres" placeholder="Senha" />
                    <ErroMessage sucess={sucess}>{messageError}</ErroMessage>
                    <ButtonGeral>Entrar</ButtonGeral>
                </form>

            </ContainerLogin>
        </SuperContainerLogin>
    )
}

export default Login