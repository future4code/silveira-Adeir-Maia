import React from "react";
import PerguntaFechada from "../perguntaFechada/perguntaFechada";
import PerguntasAbertas from "../perguntAberta/pergunataaberta";
import { Botao } from "../estilos/styles";

export default class Etapa3 extends React.Component {
    state = {
        informacoes: [],
        inputCurso: '',
        inputOutroCurso: ''
    }
    onChageCurso = e => {
        this.setState({ inputCurso: e.target.value })
    }
    onChageCursoProfisionalizante = e => {
        this.setState({ inputOutroCurso: e.target.value })
    }
    botaoContinuar = () => {
        let respostas = [{ curso: this.state.inputCurso, instituto: this.state.inputOutroCurso }]
        this.setState({ informacoes: this.state.informacoes.concat(respostas) })
    }
    chama2Funcoes = () => {
        if ((this.state.inputCurso !== '')) {
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
                <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
                <PerguntasAbertas
                    pergunta1={'5. Você pretende fazer algum curso? se sim, qual?'}
                    placeholder1={'Escreva aqui seu resposta....'}
                    valuePassadoProps={this.state.inputCurso} onChangePassadoProps={this.onChageCurso}

                />
                <PerguntaFechada
                    pergunta1={`6. Você fez algum outro curso?`}
                    opcoes={['Curso Técnico', 'Curso Profissionalizante', 'Outro']}
                    onChangeEscolaridadePassadoProps={this.onChageCursoProfisionalizante}
                />
                <Botao onClick={this.chama2Funcoes}>Continuar</Botao>
            </>
        )
    }

}