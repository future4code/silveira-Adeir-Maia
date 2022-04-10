import axios from "axios";

const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
const headers = {
    headers: {
        Authorization: ''
    }
}

const setarUsuario = (User) => {
    localStorage.setItem('usuarioLogado', JSON.stringify(User))
}

export const setAuthorization = (User) => {
    headers.headers.Authorization = User
    setarUsuario(User)
}

const setAuthorizationOnLogged = () => {
    headers.headers.Authorization = JSON.parse(localStorage.getItem('usuarioLogado'))
}

let estado
export const setState = (State) => {
    estado = State
}
// Fala Murilo, a solução foi rodar essa função que guarda o State da pagina playlist antes de chamar as funções de criar e deletar playlist, 
//assim quando eu charmar a 'getAllPlaylist' lá embaixo, ela não vai usar o paramentro save, que nesse momento é undefined, e sim o setState
//que eu guardei na variavel estado antes.

export const getAllPlaylists = async (save) => {
    !headers.headers.Authorization && setAuthorizationOnLogged()
    if (save) {
        try {
            const response = await axios.get(url, headers)
            save(response.data.result.list)
        } catch (err) {
            console.log(err.response.data)
            alert('Ocorreu um erro, por favor tente novamente mais tarde!')
        }
    } else {
        try {
            const response = await axios.get(url, headers)
            estado(response.data.result.list)
        } catch (err) {
            console.log(err.response.data)
            alert('Ocorreu um erro, por favor tente novamente mais tarde!')
        }
    }
}

export const createPlaylist = async (NomedaLista) => {
    const body = {
        name: NomedaLista
    }
    try {
        await axios.post(url, body, headers)
        getAllPlaylists()
    } catch (err) {
        console.log(err.response.data)
        alert('Ocorreu um erro, por favor tente novamente mais tarde!')
    }
}

export const deletePlaylist = async (plsID) => {
    try {
        await axios.delete(`${url}/${plsID}`, headers)
        getAllPlaylists()
    } catch (err) {
        console.log(err.response.data)
        alert('Ocorreu um erro, por favor tente novamente mais tarde!')
    }
}

export const getPlaylistTracks = async (plsID, setState) => {
    try {
        const response = await axios.get(`${url}/${plsID}/tracks`, headers)
        setState(response.data.result.tracks)
    } catch (err) {
        console.log(err.response.data)
        alert('Ocorreu um erro, por favor tente novamente mais tarde!')
    }
}

//Fala Murilo denovo kkk, encontrei outra solução, trazer o setState nas funções add e remove para usar na get

export const addTrackToPlaylist = async (plsID, body, setState) => {
    try {
        await axios.post(`${url}/${plsID}/tracks`, body, headers)
        getPlaylistTracks(plsID, setState)
    } catch (err) {
        console.log(err.response.data)
        alert('Ocorreu um erro, por favor tente novamente mais tarde!')
    }
}

export const removeTrackFromPlaylist = async (plsID, trackID, setState) => {
    try {
        await axios.delete(`${url}/${plsID}/tracks/${trackID}`, headers)
        getPlaylistTracks(plsID, setState)
    } catch (err) {
        console.log(err.response.data)
        alert('Ocorreu um erro, por favor tente novamente mais tarde!')
    }
}

export const searchPlaylist = async (searchName, setState) => {
    try {
        const response = await axios.get(`${url}/search?name=${searchName}`, headers)
        setState(response.data.result.playlist)
    } catch (err) {
        console.log(err.response.data)
        alert('Ocorreu um erro, por favor tente novamente mais tarde!')
    }
}