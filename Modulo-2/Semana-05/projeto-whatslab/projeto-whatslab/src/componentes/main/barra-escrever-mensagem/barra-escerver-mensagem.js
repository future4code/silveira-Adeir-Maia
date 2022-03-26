import React, { Component } from "react";
import { ContainerEscreverMensagem, ContainerCampoMensagen, ContainerMensagemOutros, ContainerMensagemEu } from "../../estilos/body";

export class EscreverMensagem extends Component {
    state = {
        arrayMensagem: [],
        autorInput: '',
        mensagemInput: ""
    }
    onChanceAutor = (e) => {
        this.setState({ autorInput: e.target.value })
    }
    onChanceMensagem = (e) => {
        this.setState({ mensagemInput: e.target.value })
    }
    onClickEnviar = (e) => {
        let novaMensagem = [{ mensagemAutor: this.state.autorInput.trim(), mensagemConteudo: this.state.mensagemInput.trim(), key: this.keyRandon() }];
        this.setState({ arrayMensagem: [...this.state.arrayMensagem].concat(novaMensagem) })
        this.state.autorInput = ''
        this.state.mensagemInput = ''
        e.preventDefault()
    }
    keyRandon = () => {
        let aleatorio = Math.floor(Math.random() * 1000000000000000)
        return aleatorio
    }
    apagaMensagem = (key) => {
        let arrayAtualizado = this.state.arrayMensagem.filter(e => e.key !== key)
        this.setState({ arrayMensagem: arrayAtualizado })
    }
    render() {
        let Mensagem = this.state.arrayMensagem.map(e => {
            if (e.mensagemAutor.toLowerCase() !== 'eu') {
                return (
                    <ContainerMensagemOutros key={e.key}>
                        <div>
                            <li>{e.mensagemAutor}</li>
                            <input type='button' value={'x'} onClick={() => this.apagaMensagem(e.key)} />
                        </div>
                        <li>{e.mensagemConteudo}</li>
                    </ContainerMensagemOutros>
                )
            }
            else {
                return (
                    <ContainerMensagemEu key={e.key}>
                        <div>
                            <li>{e.mensagemAutor}</li>
                            <input type='button' value={'x'} onClick={() => this.apagaMensagem(e.key)} />
                        </div>
                        <li>{e.mensagemConteudo}</li>
                    </ContainerMensagemEu>
                )
            }
        })
        return (
            <>
                <ContainerCampoMensagen>
                    {Mensagem}
                </ContainerCampoMensagen>
                <ContainerEscreverMensagem>
                    <form>
                        <input placeholder="Qual seu nome?" value={this.state.autorInput} onChange={this.onChanceAutor} type='text' />
                        <input placeholder="Escreva sua mensagem" value={this.state.mensagemInput} onChange={this.onChanceMensagem} type='text' />
                        <button onClick={this.onClickEnviar} type={'submit'} value={'Enviar'}>Enviar</button>
                    </form>
                </ContainerEscreverMensagem>
            </>

        )
    }
}