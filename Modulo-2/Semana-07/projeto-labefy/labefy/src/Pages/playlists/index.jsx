import React from "react";

import { ContainerMenus, SuperContainerPlayslist, ContainerPlaylist, PlaylistCard } from "./styles";

import { getAllPlaylists, createPlaylist, deletePlaylist, setState, searchPlaylist } from "../../services";

export default class Playlist extends React.Component {
    state = {
        playlist: [],
        inputNewPlaylist: '',
        inputSearch: ''
    }
    componentDidMount = () => getAllPlaylists(this.savePlaylist)

    getSetStatePlaylist = () => setState(this.savePlaylist)

    savePlaylist = response => this.setState({ playlist: response })

    handleNewPlaylist = e => this.setState({ inputNewPlaylist: e.target.value })
    handleInputSearch = e => this.setState({ inputSearch: e.target.value })

    createPlaylistCall = () => this.state.inputNewPlaylist && createPlaylist(this.state.inputNewPlaylist)

    call3FunctionCreat = () => {
        this.getSetStatePlaylist()
        this.createPlaylistCall()
        this.setState({ inputNewPlaylist: '' })
    }
    call2FunctionDelete = (id) => {
        this.getSetStatePlaylist()
        deletePlaylist(id)
    }
    call2functions = (id, name) => {
        const box = {
            id: id,
            name: name
        }
        this.props.getPlaylist(box)
        this.props.changePage()
    }
    render() {
        const { playlist, inputNewPlaylist, inputSearch } = this.state
        const { handleNewPlaylist, createPlaylistCall, call3FunctionCreat, call2FunctionDelete, call2functions, savePlaylist, handleInputSearch } = this
        const { logged } = this.props
        return (
            <SuperContainerPlayslist>
                <button onClick={logged}>LogOut</button>
                <h1>Labe<span>Fy</span></h1>
                <h2>Suas playlists</h2>
                <ContainerMenus>
                    <div>
                        <input value={inputNewPlaylist} onChange={handleNewPlaylist} />
                        <button onClick={call3FunctionCreat} >Criar playlist</button>
                    </div>
                    <div>
                        <input value={inputSearch} onChange={handleInputSearch} />
                        <button onClick={() => searchPlaylist(inputSearch, savePlaylist)} >Buscar</button>
                        <button onClick={() => getAllPlaylists(savePlaylist)} >Mostrar Todas</button>
                    </div>
                </ContainerMenus>
                <ContainerPlaylist>
                    {playlist.map(playlist => {
                        return (
                            <PlaylistCard key={playlist.id} >
                                <div onClick={() => call2functions(playlist.id, playlist.name)} >
                                    <p>{playlist.name}</p>
                                </div>
                                <button onClick={() => call2FunctionDelete(playlist.id)} >X</button>
                            </PlaylistCard>

                        )
                    })}
                </ContainerPlaylist>
            </SuperContainerPlayslist>
        )
    }
}