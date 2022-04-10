import React from "react";

import { setAuthorization } from "../services";

import Login from "../Pages/login";
import Playlist from "../Pages/playlists";
import PlayListMusic from "../Pages/playslistMusic";


export default class State extends React.Component {
    state = {
        login: false,
        page: 'Playlists',
        playlist: {}
    }
    componentDidUpdate = (prevProps, prevState) => prevState !== this.state.login && this.saveLocalStorage()

    componentDidMount = () => {
        if (localStorage.getItem('loggged')) {
            let toBoolean = JSON.parse(localStorage.getItem('loggged'))
            toBoolean === 'true' ? this.setState({ login: true }) : this.setState({ login: false })
        }
    }

    logged = () => this.state.login === false ? this.setState({ login: true }) : this.setState({ login: false })

    saveLocalStorage = () => {
        let toString
        this.state.login ? toString = 'true' : toString = 'false'
        localStorage.setItem('loggged', JSON.stringify(toString))
    }
    getAuthorization = User => setAuthorization(User)

    changePage = () => this.state.page === 'Playlists' ? this.setState({ page: 'songs' }) : this.setState({ page: 'Playlists' })

    getPlaylist = box => this.setState({ playlist: box })

    page = () => {
        const { playlist, page } = this.state
        const { logged, saveLocalStorage, changePage, getPlaylist } = this
        switch (page) {
            default:
                return <Playlist
                    logged={logged}
                    saveLocalStorage={saveLocalStorage}
                    changePage={changePage}
                    getPlaylist={getPlaylist}
                />
            case 'songs':
                return <PlayListMusic
                    logged={logged}
                    changePage={changePage}
                    sendPlaylist={playlist}
                />
        }
    }

    render() {
        const { login } = this.state
        const { logged, saveLocalStorage, getAuthorization, page } = this
        const currentPage = page()
        return (
            <>
                {!login && < Login
                    saveLocalStorage={saveLocalStorage}
                    logged={logged}
                    getAuthorization={getAuthorization}
                />}
                {login && currentPage}
            </>

        )
    }
}