import axios from "axios";

export const getAllPlaylists = async () => {
    try {
        const response = await axios.get(url, headers)
        this.setState({ playlist: response.data })
    } catch (err) {
        console.log(err.response.data)
        alert('Ocorreu um erro, por favor tente novamente mais tarde!')
    }
}