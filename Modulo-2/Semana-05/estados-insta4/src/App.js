import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const PostagemPersonalida = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(51,142,251);
  gap: 5px;

  input:nth-child(1) {
    width: 200px;
    border-radius: 10px;
  }
  input:nth-child(2){
    height: 20px;
    width: 294px;
    border-radius: 10px;
  }
  button {
    border-radius: 5px;
  }
`
const ContainerPostagemPersonalida = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    border: 1px solid black;
    background-color: rgb(51,142,251);
    margin: 10px;
    span:last-child{
    font-style: italic;
  }
  }
  
`
class App extends React.Component {
  state = {
    dadosDoPost: [
      {
        nomeUsuario: 'Paulinha',
        fotoUsuario: 'https://picsum.photos/50/50?random=1',
        fotoPost: 'https://picsum.photos/200/150?random=1'
      },
      {
        nomeUsuario: 'Chijo',
        fotoUsuario: 'https://picsum.photos/50/50?random=2',
        fotoPost: 'https://picsum.photos/200/150?random=2'
      },
      {
        nomeUsuario: 'Alfonsi',
        fotoUsuario: 'https://picsum.photos/50/50?random=3',
        fotoPost: 'https://picsum.photos/200/150?random=3'
      }
    ],
    dodosDoPostPersonalizado: [],
    autorDoPostInput: '',
    conteudoDoPostInput: '',
  }

  onChangeAutorPost = (event) => {
    this.setState({ autorDoPostInput: event.target.value })
  }
  onChangeConteudoPost = (event) => {
    this.setState({ conteudoDoPostInput: event.target.value })
  }
  onClickClicar = () => {
    let novaPostagem = { autorDoPost: this.state.autorDoPostInput, conteudoDoPost: this.state.conteudoDoPostInput }
    let arrayDasPostagens = [...this.state.dodosDoPostPersonalizado]
    arrayDasPostagens.push(novaPostagem)
    this.setState({ dodosDoPostPersonalizado: arrayDasPostagens })
    this.setState({ autorDoPostInput: '' })
    this.setState({ conteudoDoPostInput: '' })

  }
  render() {

    const Postagem = this.state.dadosDoPost.map(e => {
      return (
        <Post
          nomeUsuario={e.nomeUsuario}
          fotoUsuario={e.fotoUsuario}
          fotoPost={e.fotoPost}
        />
      )
    })
    const PostPernsonalizado = this.state.dodosDoPostPersonalizado.map(e => {
      return (

        <ContainerPostagemPersonalida>
          <div>
            <span>{e.autorDoPost} postou:</span>
            <span>"{e.conteudoDoPost}"</span>
          </div>

        </ContainerPostagemPersonalida>
      )
    })

    return (
      <MainContainer>
        <PostagemPersonalida>
          <input placeholder='Seu nome' value={this.state.autorDoPostInput} onChange={this.onChangeAutorPost} type="text" />
          <input placeholder='No que está pensando?' value={this.state.conteudoDoPostInput} onChange={this.onChangeConteudoPost} type="text" />
          <button onClick={this.onClickClicar}>Postar</button>
        </PostagemPersonalida>
        {Postagem}
        {PostPernsonalizado}
      </MainContainer >
    );
  }
}

export default App;
