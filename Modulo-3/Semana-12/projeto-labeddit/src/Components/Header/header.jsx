import React from "react";
import LogoImg from '../../Img/logo.png'
import { logOff } from "../../Functions/function";
import { useNavigate } from "react-router-dom";
import { Logo, ContainerHeader, ButtonLogOff } from "./style";

export const Header = () => {

    const navigate = useNavigate()

    return (
        <ContainerHeader>
            <Logo src={LogoImg} alt="Logo" />
            <ButtonLogOff onClick={() => logOff(navigate)}>LogOff</ButtonLogOff>
        </ContainerHeader>
    )
}

