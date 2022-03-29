import React from "react";
import { ContainerPerguntasAbertas } from "../estilos/styles";

export default class PerguntasAbertas extends React.Component {

    render() {

        return (
            <ContainerPerguntasAbertas>
                <label htmlFor="nome">{this.props.pergunta1}</label>
                <input id="nome" type={'text'} placeholder={this.props.placeholder1}
                    value={this.props.valuePassadoProps} onChange={this.props.onChangePassadoProps} />
            </ContainerPerguntasAbertas>
        )
    }
}