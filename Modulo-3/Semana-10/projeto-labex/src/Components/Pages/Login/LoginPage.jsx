import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToHome } from "../../Routes/coordenator";
import { useInput } from "../../CustonHocks/custonHucks";
import { loginCall } from "../../CustonHocks/functions";
import { ErroMessage } from "./styles";

const Login = () => {
    const [email, handleEmail] = useInput('')
    const [password, handlePassword] = useInput('')
    const [sucess, setSucess] = useState(true)
    const [messageError, setMessageError] = useState('')
    const navigate = useNavigate()

    return (
        <>
            <p>Login</p>
            <input value={email} onChange={handleEmail} />
            <input type='password' value={password} onChange={handlePassword} />
            <ErroMessage sucess={sucess}>{messageError}</ErroMessage>
            <button onClick={() => goToHome(navigate)} >Voltar</button>
            <button onClick={() => loginCall(email, password, navigate, setSucess, setMessageError)} >Entrar</button>
        </>
    )
}

export default Login