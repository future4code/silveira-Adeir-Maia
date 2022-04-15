import React from "react";

import { SuperContainerMusic, ContainerHeader, ContainerAddMusic, ContainerMusic, MusicCard } from "./styles";

import { getPlaylistTracks, addTrackToPlaylist, removeTrackFromPlaylist } from "../../services";

export default class PlayListMusic extends React.Component {
    state = {
        playListName: '',
        playListId: '',
        tracks: [],
        inputTrackName: "",
        inputTrackArtist: "",
        inputTrackUrl: ""
    }
    componentDidMount() {
        this.setPlaylist()
        getPlaylistTracks(this.props.sendPlaylist.id, this.saveTracks)
    }
    setPlaylist = () => this.setState({ playsListName: this.props.sendPlaylist.name, playListId: this.props.sendPlaylist.id })

    saveTracks = Data => this.setState({ tracks: Data })

    handleInputName = e => this.setState({ inputTrackName: e.target.value })
    handleInputArtist = e => this.setState({ inputTrackArtist: e.target.value })
    handleInputUrl = e => this.setState({ inputTrackUrl: e.target.value })

    addTrackToPlaylistCall = () => {
        const { inputTrackName, inputTrackArtist, inputTrackUrl, playListId } = this.state
        const { saveTracks } = this
        const body = {
            name: inputTrackName,
            artist: inputTrackArtist,
            url: inputTrackUrl
        }
        if (inputTrackName && inputTrackArtist && inputTrackUrl) {
            addTrackToPlaylist(playListId, body, saveTracks)
            this.setState({ inputTrackName: "", inputTrackArtist: "", inputTrackUrl: '' })
        }
    }

    render() {
        const playListName = this.props.sendPlaylist.name
        const { logged, changePage } = this.props
        const { tracks, playListId, inputTrackName, inputTrackArtist, inputTrackUrl } = this.state
        const { handleInputName, handleInputArtist, handleInputUrl, addTrackToPlaylistCall, saveTracks } = this
        return (
            <SuperContainerMusic>
                <ContainerHeader>
                    <button onClick={changePage} >Voltar</button>
                    <h1>Labe<span>Fy</span></h1>
                    <button onClick={logged} >LogOut</button>
                </ContainerHeader>
                <p>Use essa url para adicionar musicas, troque o número <span>vermelho</span> ao final da url para ouvir uma musica diferente. Você
                    pode usar númros de 1 a 100.</p>
                <p>http://spoti4.future4.com.br/<span>1</span>.mp3</p>
                <h2>{playListName}</h2>
                <ContainerAddMusic>
                    <div>
                        <label htmlFor="nome">Nome
                            <input name="nome" value={inputTrackName} onChange={handleInputName} />
                        </label>
                        <label htmlFor="artist" >Artista
                            <input name="artist" value={inputTrackArtist} onChange={handleInputArtist} />
                        </label>
                        <label htmlFor="url" >Url
                            <input name="url" value={inputTrackUrl} onChange={handleInputUrl} />
                        </label>
                    </div>
                    <div>
                        <button onClick={addTrackToPlaylistCall} >Adicionar Musica</button>
                    </div>
                </ContainerAddMusic>
                <ContainerMusic>
                    {tracks.length !== 0 ? tracks.map(music => {
                        return (
                            <MusicCard key={music.id} >
                                <div>
                                    <div>
                                        <p>{music.name}</p>
                                        <p>{music.artist}</p>
                                    </div>
                                    <div>
                                        <button onClick={() => removeTrackFromPlaylist(playListId, music.id, saveTracks)} >X</button>
                                    </div>
                                </div>
                                <audio src={music.url} controls ></audio>
                            </MusicCard>
                        )
                    }) :
                        <p>Essa playlist não contem músicas</p>
                    }
                </ContainerMusic>

            </SuperContainerMusic>
        )
    }
}