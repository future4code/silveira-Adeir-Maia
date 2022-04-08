import React from "react";
import axios from 'axios'

import Login from "../Pages/login";
import Playlist from "../Pages/playlists";

const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
const headers = {
    headers: {
        Authorization: ''
    }
}

export default class State extends React.Component {
    state = {
        login: false,
        authorization: '',
        playlist: []
    }

    getAllPlaylists = async () => {
        try {
            const response = await axios.get(url, headers)
            this.setState({ playlist: response.data.result.list })
            console.log(response.data)
        } catch (err) {
            console.log(err.response.data)
            alert('Ocorreu um erro, por favor tente novamente mais tarde!')
        }
    }
    logged = () => {
        this.state.login === false ? this.setState({ login: true }) : this.setState({ login: false })
    }
    setAuthorization = (User) => {
        // this.setState({ authorization: User })
        headers.headers.Authorization = User
    }
    render() {
        const { login, authorization } = this.state
        return (
            <>
                {!login && < Login
                    logged={this.logged}
                    setAuthorization={this.setAuthorization}
                />}
                {login && <Playlist
                    getAllPlaylists={this.getAllPlaylists}
                    logged={this.logged}
                    playlistProps={this.state.playlist}
                />}
            </>

        )
    }
}