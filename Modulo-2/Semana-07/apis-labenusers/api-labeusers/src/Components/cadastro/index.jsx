import React from "react";
import { ContainerCadastro } from "../style";

export default class Cadastro extends React.Component {
    render() {
        return (
            <ContainerCadastro>
                <button onClick={() => this.props.changePage(2)} >Lista de Usuarios</button>
                <h1>Cadastro de Usuários</h1>
                <label htmlFor="name"> Nome:
                    <input id="name" placeholder="Digite seu nome" value={this.props.nomeValue} onChange={this.props.handleNome} ></input>
                </label>
                <label htmlFor="email"> E-mail:
                    <input id="email" placeholder="Digite seu email" value={this.props.emailValue} onChange={this.props.handleEmail} ></input>
                </label>
                <button onClick={this.props.createUser}>Adicionar</button>

            </ContainerCadastro>
        )
    }
}