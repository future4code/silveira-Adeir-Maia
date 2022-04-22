import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'

const Post = (props) => {
  const [curtida, setcurtida] = useState(false)
  const [numeroCurtidas, setNumeroCurtidas] = useState(0)
  const [iconeCurtida, setIconeCurtida] = useState(iconeCoracaoBranco)
  const [arrayComentarios, setArrayComentarios] = useState([])
  const [comentando, setComentando] = useState(false)
  const [numeroComentarios, setNumeroComentarios] = useState(0)

  const onClickCurtida = () => {
    if (curtida) {
      setcurtida(!curtida)
      setNumeroCurtidas(numeroCurtidas - 1)
      setIconeCurtida(iconeCoracaoBranco)
    } else {
      setcurtida(!curtida)
      setNumeroCurtidas(numeroCurtidas + 1)
      setIconeCurtida(iconeCoracaoPreto)
    }
  };

  const onClickComentario = () => {
    setComentando(!comentando)
  };

  const enviarComentario = (comentario) => {
    const novoArrayComenrari = [...arrayComentarios, comentario]
    setArrayComentarios(novoArrayComenrari)
    setComentando(false)
    setNumeroComentarios(numeroComentarios + 1)
  }

  const caixaDeComentario = comentando ? <SecaoComentario enviarComentario={enviarComentario} />
    : arrayComentarios.map(comentario => {
      return (
        <CommentContainer>
          {comentario}
        </CommentContainer>
      )
    })

  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'} />
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'} />

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroComentarios}
        />
      </PostFooter>
      {caixaDeComentario}
    </PostContainer>
  )
}

export default Post