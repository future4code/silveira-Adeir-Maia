import React from "react";
import { ContainerListaUsuarios } from "../style";



export default class ListaDeUsuarios extends React.Component {
    chama3funçoes = (userID) => {
        this.props.detalhesUsuariomodidicado('carregando...')
        this.props.changePage(3)
        this.props.paginaDetalhesFuncao(userID)
    }
    render() {
        return (
            <ContainerListaUsuarios>
                <button onClick={() => this.props.changePage(1)}>Inicio</button>
                <div>
                    <input value={this.props.valueSearch} onChange={this.props.handleSearch} placeholder='Digite um nome para buscar' />
                    <button onClick={this.props.searchUsers}>Buscar</button>
                    <button onClick={this.props.getAllUsers}>Mostrar Todos</button>
                </div>
                <div>
                    {this.props.arrayDeUsuarios.length > 0 ?
                        this.props.arrayDeUsuarios.map(usuario => {
                            return (
                                <div key={usuario.id} onClick={() => this.chama3funçoes(usuario.id)}>
                                    <p>{usuario.name}</p>
                                    <button onClick={() => this.props.deleteUser(usuario.id)}>deletar</button>
                                </div>
                            )
                        }) : <p>Carregando Lista de Usuarios</p>
                    }
                </div>
            </ContainerListaUsuarios>
        )
    }
}