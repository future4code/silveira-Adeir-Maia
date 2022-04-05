import React from "react";

export default class ListaDeUsuarios extends React.Component {
    render() {
        return (
            <>
                {this.props.arrayDeUsuarios.length > 0 ?
                    this.props.arrayDeUsuarios.map(usuario => {
                        return (
                            <div key={usuario.id}>
                                <p >{usuario.name}</p>
                                <button onClick={() => this.props.deleteUser(usuario.id)}>deletar</button>
                            </div>

                        )
                    }) : <></>
                }
            </>
        )
    }
}