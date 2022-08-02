import axios from "axios";

const BaseUrl = 'http://localhost:3003/'

export const insert = async (from) => {
    try {
        await axios.post(`${BaseUrl}participation/insert`,from)
    } catch (error) {
        console.log(err.response.data)
    }
}

export const select = async () => {
    try {
        return axios.post(`${BaseUrl}participation/select`)
    } catch (error) {
        console.log(err.response.data)
    }
}

export const put = async () => {
    try {
        return axios.post(`${BaseUrl}participation/select`)
    } catch (error) {
        console.log(err.response.data)
    }
}



