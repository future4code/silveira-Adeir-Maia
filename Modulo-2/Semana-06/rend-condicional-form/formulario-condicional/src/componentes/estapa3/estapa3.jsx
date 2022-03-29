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
    render() {
        return (
            <>
                <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
                <PerguntasAbertas
                    pergunta1={'5. Você pretende fazer algum curso? se sim, qual?'}
                    placeholder1={'Escreva aqui seu resposta....'}

                />
                <PerguntaFechada
                    pergunta1={`6. Você fez algum outro curso?`}
                    opcoes={['Curso Técnico', 'Curso Profissionalizante', 'Outro']}
                />
                <Botao onClick={this.props.trocaEtapaPassadoProps2}>Continuar</Botao>
            </>
        )
    }

}