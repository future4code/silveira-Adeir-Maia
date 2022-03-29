import React, { Component } from "react";
import PerguntasAbertas from "../perguntAberta/pergunataaberta";
import PerguntaFechada from "../perguntaFechada/perguntaFechada";
import { Botao } from "../estilos/styles";

export default class Etapa1 extends Component {
    state = {
        arrayRespostas: [],
        inputNome: '',
        inputIdade: '',
        inputEmail: '',
        inputEscolaridade: ''
    }
    onChangeNome = e => this.setState({ inputNome: e.target.value })

    onChangeIdade = e => this.setState({ inputIdade: e.target.value })

    onChangeEmail = e => this.setState({ inputEmail: e.target.value })

    onChangeEscolaridade = e => this.setState({ inputEscolaridade: e.target.value })

    botaoContinuar = (e) => {
        let dados = [{ nome: this.state.inputNome, idade: this.state.inputIdade, email: this.state.inputEmail, escolaridade: this.state.inputEscolaridade }]
        this.setState({ arrayRespostas: this.state.arrayRespostas.concat(dados) })
        this.setState({ inputNome: '' })
        this.setState({ inputIdade: '' })
        this.setState({ inputEmail: '' })
        this.setState({ inputEscolaridade: '' })
    }
    chama2funcoes = () => {
        if ((this.state.inputNome !== '') && (this.state.inputIdade !== '') && (this.state.inputEmail !== '')) {
            this.botaoContinuar()
            this.state.inputEscolaridade === 'Ensino Superior Completo' || this.state.inputEscolaridade === 'Ensino Superior Incompleto' ?
                this.props.trocaEtapaPassadoProps() : this.props.trocaEtapaPassadoProps2()
        } else {
            alert('Preecha todos os campos antes de continuar')
        }
    }
    render() {

        return (
            <>
                <h1>Etapa1 - Dados Gerais</h1>
                <PerguntasAbertas pergunta1={`1. Qual é o seu nome?`} placeholder1={'Escreva aqui seu nome...'}
                    valuePassadoProps={this.state.inputNome} onChangePassadoProps={this.onChangeNome} />

                <PerguntasAbertas pergunta1={`2. Qual a sua idade?`} placeholder1={'Escreva aqui sua idade...'}
                    valuePassadoProps={this.state.inputIdade} onChangePassadoProps={this.onChangeIdade} />

                <PerguntasAbertas pergunta1={`3. Qual é o seu e-mail?`} placeholder1={'Escreva aqui seu e-mail...'}
                    valuePassadoProps={this.state.inputEmail} onChangePassadoProps={this.onChangeEmail} />

                <PerguntaFechada pergunta1={`4. Qual a sua escolaridade?`}
                    opcoes={['Ensino Médio Incompleto', 'Ensino Médio Completo', 'Ensino Superior Completo', 'Ensino Superior Incompleto']}
                    valuePassadoProps={this.state.inputEscolaridade} onChangeEscolaridadePassadoProps={this.onChangeEscolaridade} />

                <Botao onClick={this.chama2funcoes}>Continuar</Botao>
            </>
        )
    }
}