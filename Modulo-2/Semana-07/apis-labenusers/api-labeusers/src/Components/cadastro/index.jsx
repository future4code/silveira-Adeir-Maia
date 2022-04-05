import React from "react";

export default class Cadastro extends React.Component {
    render() {
        return (
            <>
                <label htmlFor="name"> Nome:
                    <input id="name" placeholder="Digite seu nome" value={this.props.nomeValue} onChange={this.props.handleNome} ></input>
                </label>
                <label htmlFor="email"> E-mail:
                    <input id="email" placeholder="Digite seu email" value={this.props.emailValue} onChange={this.props.handleEmail} ></input>
                </label>
                <button onClick={this.props.createUser}>add</button>

            </>
        )
    }
}