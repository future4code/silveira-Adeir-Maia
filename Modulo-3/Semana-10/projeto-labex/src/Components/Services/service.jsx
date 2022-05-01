import axios from "axios";
import { gotoAdmimHome } from "../Routes/coordenator";

const BaseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/'
const Aluno = 'Adeir-Moreira-Silveira/'
const headers = {
    headers: {
        auth: window.localStorage.getItem('token')
    }
}

const setHeader = (headers) => {
    headers.headers.auth = window.localStorage.getItem('token')
}

export const getTrips = (setTrips, setLoading) => {
    window.localStorage.getItem('token') && setHeader(headers)
    setLoading && setLoading(true)
    axios.get(`${BaseUrl}${Aluno}trips`).then(response => {
        setTrips(response.data.trips)
        setLoading && setLoading(false)
    }).catch(err => {
        console.log(err.data)
        setLoading(false)
    })
}

export const applyToTrip = async (tripId, body, cleanFields, cleanInputs) => {
    try {
        await axios.post(`${BaseUrl}${Aluno}trips/${tripId}/apply`, body)
        cleanFields()
        cleanInputs()
        alert('sucess')
    } catch (err) {
        alert('falha')
        console.log(err.data)
    }
}

export const LoginRequest = async (body, navigate, setSucess, setMessageError, cleanFields) => {
    try {
        const response = await axios.post(`${BaseUrl}${Aluno}login`, body)
        setHeader(headers, response)
        window.localStorage.setItem('token', response.data.token)
        gotoAdmimHome(navigate)
        setSucess(true)
        cleanFields()
    } catch (err) {
        setSucess(false)
        setMessageError(err.response.data.message)
    }
}

export const getTripDetail = async (id, setTripDetail, setLoading) => {
    setLoading && setLoading(true)
    try {
        const response = await axios.get(`${BaseUrl}${Aluno}trip/${id}`, headers)
        setTripDetail(response.data.trip)
        setLoading(false)
    } catch (err) {
        console.log(err.response.data)
        setLoading(false)
    }
}

export const deleteJob = async (id, setTrips, setLoading) => {
    try {
        await axios.delete(`${BaseUrl}${Aluno}trips/${id}`, headers)
        getTrips(setTrips, setLoading)
    } catch (err) {
        console.log(err.response.data)
    }
}

export const decideCandidate = async (idTrip, idCandidate, body, setTrips) => {
    try {
        await axios.put(`${BaseUrl}${Aluno}trips/${idTrip}/candidates/${idCandidate}/decide`, body, headers)
        getTripDetail(idTrip, setTrips)
    } catch (err) {
        console.log(err.response)
    }
}

export const createTripRequest = async (body, clearFields, clearInput) => {
    try {
        await axios.post(`${BaseUrl}${Aluno}trips`, body, headers)
        clearFields && clearFields()
        clearInput && clearInput()
        alert('sucess')
    } catch (err) {
        console.log(err.response.data)
    }
}