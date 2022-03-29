import React, { Component } from "react";
import { ContainerPerguntasFechadas } from "../estilos/styles";

export default class PerguntaFechada extends Component {
    constructor(props) {
        super(props)
        this.state = { padrao: this.props.valuePassadoProps }
    }

    chamaOpcoes = (paramentro) => {
        return paramentro.map(e => {
            return (
                <option value={e} key={e}>{e}</option>
            )
        })

    }
    render() {
        let Opcoes = this.chamaOpcoes(this.props.opcoes)
        return (
            <ContainerPerguntasFechadas>
                <label>
                    {this.props.pergunta1}
                    <select onChange={this.props.onChangeEscolaridadePassadoProps}>
                        {Opcoes}
                    </select>
                </label>
            </ContainerPerguntasFechadas>


        )
    }
}