import React from "react";
import styled from "styled-components";
import { ContainerCarregandoeExcluido, ContainerDetalhes } from "../style";

const InputOculto = styled.input`
    visibility: ${({ mostrar }) => mostrar ? 'visible' : 'hidden'};
`
const ButtonOculto = styled.button`
    visibility: ${({ mostrar }) => mostrar ? 'visible' : 'hidden'};
`
const ButtonOcultoEditar = styled.button`
    visibility: ${({ mostrar }) => mostrar ? 'hidden' : 'visible'};
`
export default class Detalhes extends React.Component {
    state = {
        mostrar: false
    }
    openInput = () => {
        this.state.mostrar === false ? this.setState({ mostrar: true }) : this.setState({ mostrar: false })
    }
    chama2funcoes = (id) => {
        if (this.props.valueNomeEditado !== '' && this.props.valueEmailEditado !== '') {
            this.openInput()
            this.props.editUser(id)
        } else alert('O campo nome ou o campo email está vazio')
    }
    conteudo = (argumento) => {
        if (argumento === 'carregando...') {
            return (
                <ContainerCarregandoeExcluido>
                    <button onClick={() => this.props.changePage(2)}>Voltar</button>
                    <p>carregando...</p>
                </ContainerCarregandoeExcluido>
            )
        } else if (argumento === 'Usuario deletado') {
            return (
                <ContainerCarregandoeExcluido>
                    <button onClick={() => this.props.changePage(2)}>Voltar</button>
                    <p>Usuario deletado</p>
                </ContainerCarregandoeExcluido>
            )
        } else {
            return (
                <ContainerDetalhes>
                    <button onClick={() => this.props.changePage(2)}>Voltar</button>
                    <p>{this.props.getUseresById.name}</p>
                    <InputOculto type='text' value={this.props.valueNomeEditado} onChange={this.props.handleInputNomeEditado} mostrar={this.state.mostrar} />
                    <p>{this.props.getUseresById.email}</p>
                    <InputOculto type='text' value={this.props.valueEmailEditado} onChange={this.props.handleInputEmailEditado} mostrar={this.state.mostrar} />
                    <ButtonOcultoEditar onClick={this.openInput} mostrar={this.state.mostrar} >Editar</ButtonOcultoEditar>
                    <ButtonOculto onClick={() => this.chama2funcoes(this.props.getUseresById.id)} mostrar={this.state.mostrar} >Salvar</ButtonOculto>
                    <button onClick={() => this.props.deleteUser(this.props.getUseresById.id)}>deletar</button>
                </ContainerDetalhes>
            )
        }
    }

    render() {
        const conteudo = this.conteudo(this.props.getUseresById)
        return (
            <div>
                {conteudo}
            </div>
        )
    }
}