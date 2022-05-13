import axios from "axios";
import { goToFeed } from "../Routes/cordinator";


const BaseUrl = 'https://labeddit.herokuapp.com'
const headers = {
    headers: {
        Authorization: window.localStorage.getItem('token')
    }
}

const setHeader = (response) => {
    response && (headers.headers.Authorization = response.data.token)
    !headers.headers.Authorization && (headers.headers.Authorization = window.localStorage.getItem('token'))
}

export const signUpRequest = async (form, navigate) => {
    try {
        const response = await axios.post(`${BaseUrl}/users/signup`, form)
        window.localStorage.setItem('token', response.data.token)
        alert('sucess')
        goToFeed(navigate)
    } catch (err) {
        console.log(err.response)
    }
}

export const loginRequest = async (form, navigate) => {
    try {
        const response = await axios.post(`${BaseUrl}/users/login`, form)
        setHeader(response)
        window.localStorage.setItem('token', response.data.token)
        alert('sucess')
        goToFeed(navigate)
    } catch (err) {
        console.log(err.response.data.message)
    }
}

export const getPost = (setFeed) => {
    (window.localStorage.getItem('token') && !headers.headers.Authorization) && setHeader()
    axios.get(
        `${BaseUrl}/posts`, headers
    ).then(res => {
        setFeed(res.data)
    }).catch(err => {
        console.log(err.response.data)
    })
}

export const twoRequests = (id, setPost, setComments) => {
    axios.all([
        axios.get(`${BaseUrl}/posts`, headers),
        axios.get(`${BaseUrl}/posts/${id}/comments`, headers)
    ]).then(axios.spread((postResponse, commentsResponse) => {
        setPost(postResponse.data)
        setComments(commentsResponse.data)
    })).catch((errPost, errComments) => {
        console.log(errPost.response)
        console.log(errComments.response)
    })
}

export const createPost = async (form, setFeed) => {
    try {
        const response = await axios.post(`${BaseUrl}/posts`, form, headers)
        alert('sucss')
        getPost(setFeed)
    } catch (err) {
        console.log(err.response.data)
    }
}

export const createComment = async (form, id) => {
    try {
        const response = await axios.post(`${BaseUrl}/posts/${id}/comments`, form, headers)
        alert('sucess')
    } catch (err) {
        console.log(err.response.data)
    }
}

export const CreateVote = async (form, id, PorC) => {
    try {
        const response = await axios.post(`${BaseUrl}/${PorC}/${id}/votes`, form, headers)
        alert('sucess')
    } catch (err) {
        console.log(err.response.data)
    }
}

export const ChangeVote = async (form, id, PorC) => {
    try {
        const response = await axios.put(`${BaseUrl}/${PorC}/${id}/votes`, form, headers)
        alert('sucess')
    } catch (err) {
        console.log(err.response)
    }
}

export const DeleteVote = async (id, PorC) => {
    try {
        const response = await axios.delete(`${BaseUrl}/${PorC}/${id}/votes`, headers)
        alert('sucess')
    } catch (err) {
        console.log(err.response)
    }
}