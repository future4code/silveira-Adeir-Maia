import React from "react";
import LogoImg from '../../Img/logo.png'
import { logOff } from "../../Functions/function";
import { useNavigate } from "react-router-dom";
import { Logo, ContainerHeader, ButtonLogOff } from "./style";
import { goBack } from "../../Routes/cordinator";
import setaRetorno from '../../Img/seta-retorno.png'
import { ButtonReturn } from "./style";

export const Header = (props) => {
    const navigate = useNavigate()
    return (
        <ContainerHeader>
            {(props.page === 'commets' || props.page === 'singUp') &&
                <ButtonReturn onClick={() => goBack(navigate)}>
                    <img src={setaRetorno} alt='setaVoltar' />
                </ButtonReturn>}
            <Logo src={LogoImg} alt="Logo" />
            {props.page !== 'singUp' &&
                <ButtonLogOff onClick={() => logOff(navigate)}>Logout</ButtonLogOff>
            }
        </ContainerHeader>
    )
}

