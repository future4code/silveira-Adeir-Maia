
import React from 'react';
import styled from 'styled-components'
import axios from 'axios'

import Cadastro from './Components/cadastro';
import ListaDeUsuarios from './Components/lista';
import Detalhes from './Components/detalhes';

const headers = {
  headers: {
    Authorization: 'Adeir-Maia-Silveira'
  }
}

const GlobalStyled = styled.div`
  margin: 0;
  padding: 0;
  text-decoration: none;
  box-sizing: border-box;
  list-style: none;
  
`

class App extends React.Component {
  state = {
    arrayDeUsuarios: [],
    inputNome: '',
    inputEmail: '',
    pagina: 1,
    usuarioDetalhado: "",
    inputNomeAlterado: '',
    inputEmailAlterado: '',
    inputBusca: ''
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
      name: this.state.inputNome.trim(),
      email: this.state.inputEmail.trim()
    }
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, headers).then(res => {
      alert(`O usuario ${body.name} foi criando com sucesso!`)
      this.setState({ inputNome: '' })
      this.setState({ inputEmail: '' })
      this.getAllUsers()

    }).catch(err => {
      console.log(err.response.data)
      alert('Desculpe, ocorreu um erro, tente novamente mais tarde')
    })
  }
  deleteUser = (usuarioId) => {
    window.confirm('Tem certeza que quer apagar esse usuario?') &&
      axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${usuarioId}`, headers).then(res => {
        this.getAllUsers()
        this.detalhesUsuariomodidicado('Usuario deletado')
        alert('O usuario foi deletado com sucesso')
      }).catch(err => {
        alert('Não foi possivel excluir, por favor tente mais tarde!')
        console.log(err.response.data)
      })
  }
  getUseresById = async (idUser) => {
    try {
      const response = await axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${idUser}`,
        headers)
      this.setState({ usuarioDetalhado: response.data, })
    } catch (err) {
      console.log(err.response.data)
      alert('Ocorreu um erro tente novamente mais tarde')
    }
  }
  editUser = async (idUser) => {
    const body = {
      name: this.state.inputNomeAlterado.trim(),
      email: this.state.inputEmailAlterado.trim()
    }
    try {
      const response = await axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${idUser}`, body, headers)
      this.getUseresById(idUser)
      this.setState({ inputNomeAlterado: '', inputEmailAlterado: '' })
      alert('Usuario alterado com sucesso')
    } catch (err) {
      alert('Ocorreu um erro, por favor tente mais tarde')
      console.log(err.response.data)
    }
  }
  searchUsers = async () => {
    const name = this.state.inputBusca.trim()
    try {
      const response = await axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=${name}&email=`, headers)
      response.data.length > 0 ? this.setState({ arrayDeUsuarios: response.data }) : alert('Não foi encontrado nenhum usuario com esse nome!')
      this.setState({ inputBusca: '' })
    } catch (err) {
      alert('Ocorreu um erro, por favir tente mais tarde')
      console.log(err.reponse.data)
    }
  }
  handleInputNome = (e) => {
    this.setState({ inputNome: e.target.value })
  }
  handleInputEmail = (e) => {
    this.setState({ inputEmail: e.target.value })
  }
  handleInputNomeEditado = (e) => {
    this.setState({ inputNomeAlterado: e.target.value })
  }
  handleInputEmailEditado = (e) => {
    this.setState({ inputEmailAlterado: e.target.value })
  }
  handleSearch = (e) => {
    this.setState({ inputBusca: e.target.value })
  }
  changePage = (page) => {
    this.setState({ pagina: page })
  }
  detalhesUsuariomodidicado = (frase) => {
    this.setState({ usuarioDetalhado: frase })
  }
  trocaPagina = (etapa) => {
    switch (etapa) {
      default:
        return <Cadastro
          nomeValue={this.state.inputNome}
          emailValue={this.state.inputEmail}
          handleNome={this.handleInputNome}
          handleEmail={this.handleInputEmail}
          createUser={this.createUser}
          changePage={this.changePage}
        />
      case 2:
        return <ListaDeUsuarios
          arrayDeUsuarios={this.state.arrayDeUsuarios}
          deleteUser={this.deleteUser}
          changePage={this.changePage}
          paginaDetalhesFuncao={this.getUseresById}
          detalhesUsuariomodidicado={this.detalhesUsuariomodidicado}
          handleSearch={this.handleSearch}
          valueSearch={this.state.inputBusca}
          searchUsers={this.searchUsers}
          getAllUsers={this.getAllUsers}
        />
      case 3:
        return <Detalhes
          changePage={this.changePage}
          getUseresById={this.state.usuarioDetalhado}
          deleteUser={this.deleteUser}
          detalhesUsuariomodidicado={this.detalhesUsuariomodidicado}
          valueNomeEditado={this.state.inputNomeAlterado}
          valueEmailEditado={this.state.inputEmailAlterado}
          handleInputNomeEditado={this.handleInputNomeEditado}
          handleInputEmailEditado={this.handleInputEmailEditado}
          editUser={this.editUser}
        />
    }
  }

  render() {
    let pagina = this.trocaPagina(this.state.pagina)
    return (
      <GlobalStyled>
        {pagina}
      </GlobalStyled>
    );
  }
}

export default App;