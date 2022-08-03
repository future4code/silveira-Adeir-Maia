import axios from "axios";

const BaseUrl = 'http://localhost:3003/'

export const requestInsert = async (from) => {
    try {
        await axios.post(`${BaseUrl}participation/insert`,from)
    } catch (error) {
        console.log(error.response.data)
    }
}

export const requestSelect = async (getall) => {
    try {
        const result =  await axios.get(`${BaseUrl}participation/select`)
        getall(result.data)
    } catch (error) {
        console.log(error.response.data)
    }
}

export const requestPut = async (form) => {
    try {
        await axios.put(`${BaseUrl}participation/update`,form)
    } catch (error) {
        console.log(error.response.data)
    }
}

export const requestDelete = async (form) => {
    try {
        await axios.delete(`${BaseUrl}participation/delete`,{data:form})
    } catch (error) {
        console.log(error.response.data)
    }
}



