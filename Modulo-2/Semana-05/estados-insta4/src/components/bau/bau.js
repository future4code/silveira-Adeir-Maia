dadosDoPost = [
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
]



const Postagem = dadosDoPost.map(e => {
    return (
        <Post
            nomeUsuario={e.nomeUsuario}
            fotoUsuario={e.fotoUsuario}
            fotoPost={e.fotoPost}
        />
    )
})

onChangeAutorPost = (event) => {
    this.setState({ autorDoPost: event.target.value })
}
onChangeConteudoPost = (event) => {
    this.setState({ conteudoDoPost: event.target.value })
}

<div>
    <input placeholder='Seu nome' value={this.state.autorDoPost} onChange={this.onChangeAutorPost} />
    <input placeholder='No que está pensando?' value={this.state.conteudoDoPost} onChange={this.onChangeConteudoPost} />
    <button>Postar</button>

</div>