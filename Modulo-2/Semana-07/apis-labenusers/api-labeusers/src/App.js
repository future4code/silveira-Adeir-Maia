import './App.css';
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import axios from 'axios'

import Cadastro from './Components/cadastro';
import ListaDeUsuarios from './Components/lista';

const headers = {
  headers: {
    Authorization: 'Adeir-Maia-Silveira'
  }
}

const GlobalStyled = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  box-sizing: border-box;
  list-style: none;
  background-color: aqua;
}
`





class App extends React.Component {
  state = {
    arrayDeUsuarios: [],
    inputNome: '',
    inputEmail: ''
  }

  componentDidMount = () => {
    this.getAllUsers()
  }
  getAllUsers = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", headers).then(res => {
      this.setState({ arrayDeUsuarios: res.data })
    }).catch(err => {
      console.log(err.response.data)
    })
  }
  createUser = () => {
    const body = {
      name: this.state.inputNome,
      email: this.state.inputEmail
    }
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, headers).then(res => {
      this.setState({ inputNome: '' })
      this.setState({ inputEmail: '' })
      this.getAllUsers()

    }).catch(err => {
      console.log(err.response.data)
    })
  }
  deleteUser = (usuarioId) => {

    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${usuarioId}`, headers).then(res => {
      this.getAllUsers()
    }).catch(err => {
      console.log(err.response.data)
    })
  }
  handleInputNome = (e) => {
    this.setState({ inputNome: e.target.value })
  }
  handleInputEmail = (e) => {
    this.setState({ inputEmail: e.target.value })
  }

  render() {
    return (

      <div>
        <Cadastro
          nomeValue={this.state.inputNome}
          emailValue={this.state.inputEmail}
          handleNome={this.handleInputNome}
          handleEmail={this.handleInputEmail}
          createUser={this.createUser}
        />
        <ListaDeUsuarios
          arrayDeUsuarios={this.state.arrayDeUsuarios}
          deleteUser={this.deleteUser}
        />
      </div>
    );
  }
}

export default App;
