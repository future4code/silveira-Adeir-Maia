import React from "react";
import { Botao } from "../estilos/styles";
import PerguntasAbertas from "../perguntAberta/pergunataaberta";

export default class Etapa2 extends React.Component {
    state = {
        instituicaoDeEnsino: [],
        inputCurso: '',
        inputIntituicao: ''
    }
    onChanceNome = e => {
        this.setState({ inputCurso: e.taget.value })
    }
    onChanceInstituicao = e => {
        this.setState({ inputIntituicao: e.taget.value })
    }
    botaoContinuar = () => {
        let respostas = [{ curso: this.state.inputCurso, instituto: this.state.inputIntituicao }]
        this.setState({ instituicaoDeEnsino: this.state.instituicaoDeEnsino.concat(respostas) })
    }
    chama2Funcoes = () => {
        if ((this.state.inputCurso !== '') && (this.state.inputIntituicao !== '')) {
            this.botaoContinuar()
            this.props.trocaEtapaPassadoProps2()
        }
        else {
            alert('Preecha todos os campos antes de continuar')
        }
    }
    render() {

        return (
            <>
                <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
                <PerguntasAbertas
                    pergunta1={`5. Qual o curso`} placeholder1={'Escreva aqui o nome do curso'}
                    valuePassadoProps={this.state.inputCurso} onChangePassadoProps={this.onChanceNome} />

                <PerguntasAbertas
                    pergunta1={`6. Qual o nome da instituição`} placeholder1={'Escreva aqui o nome da instituição'}
                    valuePassadoProps={this.state.inputIntituicao} onChangePassadoProps={this.onChanceInstituicao} />
                <Botao onClick={this.props.trocaEtapaPassadoProps2}>Continuar</Botao>
            </>
        )
    }
}