import React from 'react'
import styled from 'styled-components'

import { IconeComContador } from '../IconeComContador/IconeComContador'

import iconeMarcacaoBranca from '../../img/bookmark_black_24dp.svg'
import iconeMarcacaoPreta from '../../img/bookmark_border_black_24dp.svg'
import iconeCompartilhar from '../../img/share_black_24dp.svg'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import { IconeMarcarCompartilhar } from '../IconeCompartilharMarcar/IconeCompartilharMarcar'
import { SecaoComentario } from '../SecaoComentario/SecaoComentario'
import { SecaoCompartilhar } from '../SecaoCompartilhar/SecaoCompartilhar'

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    marcacao: false,
    compartilhar: false,
  }

  onClickCurtida = () => {
    if (this.state.numeroCurtidas === 0) {
      this.setState({ numeroCurtidas: this.state.numeroCurtidas + 1 })
      this.setState({ curtido: !this.state.curtido })
    }
    else {
      this.setState({ numeroCurtidas: this.state.numeroCurtidas - 1 })
      this.setState({ curtido: !this.state.curtido })
    }


  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }
  /*Essa função abre a caixa de inpute para escrecer o comentário junto com o botão enviar */

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }
  /*Ao clicar no botão envisa a variável comentado muda para false e faz com que o inpute e o botão de enviar comentário sumirem*/

  onClickMarcacao = () => {
    this.setState({ marcacao: !this.state.marcacao })
  }

  onClickCompartilhar = () => {
    this.setState({ compartilhar: !this.state.compartilhar })
  }
  render() {
    let iconeCurtida
    if (this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario
    if (this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario} />
    }

    let iconeMarcacao
    if (this.state.marcacao) iconeMarcacao = iconeMarcacaoBranca
    else iconeMarcacao = iconeMarcacaoPreta

    let componenteCompartilhar
    if (this.state.compartilhar) {
      componenteCompartilhar = <SecaoCompartilhar />
    }

    return <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'} />
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'} />

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />
        <IconeMarcarCompartilhar
          icone={iconeMarcacao}
          icone1={iconeCompartilhar}
          onClickIcone={this.onClickMarcacao}
          onclickIcone1={this.onClickCompartilhar}

        />
        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
      </PostFooter>
      {componenteComentario}
      {componenteCompartilhar}
    </PostContainer>
  }
}
export default Post