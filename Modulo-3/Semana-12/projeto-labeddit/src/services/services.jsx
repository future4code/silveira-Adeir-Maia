import axios from "axios";
import { goToFeed } from "../Routes/cordinator";


const BaseUrl = 'https://labeddit.herokuapp.com'
const headers = {
    headers: {
        Authorization: window.localStorage.getItem('token')
    }
}

const size = 10

const setHeader = (response) => {
    response && (headers.headers.Authorization = response.data.token)
    !headers.headers.Authorization && (headers.headers.Authorization = window.localStorage.getItem('token'))
}

export const signUpRequest = async (form, navigate, setMessage, clearFields) => {
    try {
        const response = await axios.post(`${BaseUrl}/users/signup`, form)
        window.localStorage.getItem('token') && window.localStorage.removeItem('token')
        window.localStorage.setItem('token', response.data.token)
        goToFeed(navigate)
        clearFields()
    } catch (err) {
        setMessage(err.response.data)
        clearFields()
    }
}

export const loginRequest = async (form, navigate, setMessage, clearFieds) => {
    try {
        const response = await axios.post(`${BaseUrl}/users/login`, form)
        setHeader(response)
        window.localStorage.setItem('token', response.data.token)
        goToFeed(navigate)
        clearFieds()
    } catch (err) {
        setMessage(err.response.data)
        clearFieds()
    }
}

export const getPost = (setFeed, setLoading, clearFields, curentPage) => {
    (window.localStorage.getItem('token') && !headers.headers.Authorization) && setHeader()
    setLoading && setLoading(true)
    axios.get(
        `${BaseUrl}/posts?page=${curentPage}&size=${size}`, headers
    ).then(res => {
        clearFields && clearFields()
        setFeed(res.data)
        setLoading && setLoading(false)
    }).catch(err => {
        console.log(err.data)
        setLoading && setLoading(false)
    })
}

export const twoRequests = (id, setPost, setComments, setLoading, curentPage) => {
    setLoading(true)
    axios.all([
        setPost && axios.get(`${BaseUrl}/posts?page=${curentPage}&size=${size}`, headers),/*Se for usar paginação mude aqui*/
        setComments && axios.get(`${BaseUrl}/posts/${id}/comments`, headers)
    ]).then(axios.spread((postResponse, commentsResponse) => {
        setPost && setPost(postResponse.data)
        setComments && setComments(commentsResponse.data)
        setLoading(false)
    })).catch((errPost, errComments) => {
        console.log(errPost.response)
        console.log(errComments.response)
        setLoading(false)
    })
}

export const getPostComents = async (id, setComments, setLoading) => {
    setLoading && setLoading(true)
    try {
        const response = await axios.get(`${BaseUrl}/posts/${id}/comments`, headers)
        setComments(response.data)
        setLoading && setLoading(false)
    } catch (err) {
        console.log(err.response)
        setLoading && setLoading(false)
    }
}

export const createPost = async (form, setFeed, cleanFields, setLoading, curentPage) => {
    try {
        const response = await axios.post(`${BaseUrl}/posts`, form, headers)
        getPost(setFeed, setLoading, cleanFields, curentPage)
    } catch (err) {
        console.log(err.response.data)
    }
}

export const createComment = async (form, id, setPosts, setComments, clearFields, setLoading, curentPage) => {
    setLoading && setLoading(true)
    try {
        const response = await axios.post(`${BaseUrl}/posts/${id}/comments`, form, headers)
        clearFields()
        twoRequests(id, setPosts, setComments, setLoading, curentPage)
    } catch (err) {
        console.log(err.response.data)
        setLoading && setLoading(false)
    }
}

export const CreateVote = async (form, id, PorC, setData, setLoading, curentPage, postId, resquestSelector) => {
    setLoading && setLoading(true)
    try {
        const response = await axios.post(`${BaseUrl}/${PorC}/${id}/votes`, form, headers)
        resquestSelector ?
            getPostComents(postId, setData, setLoading, curentPage) :
            getPost(setData, setLoading, null, curentPage)
    } catch (err) {
        console.log(err.response.data)
        setLoading && setLoading(false)
    }
}

export const ChangeVote = async (form, id, PorC, setData, setLoading, curentPage, postId, resquestSelector) => {
    setLoading && setLoading(true)
    try {
        const response = await axios.put(`${BaseUrl}/${PorC}/${id}/votes`, form, headers)
        resquestSelector ?
            getPostComents(postId, setData, setLoading, curentPage) :
            getPost(setData, setLoading, null, curentPage)
    } catch (err) {
        console.log(err.response)
        setLoading && setLoading(false)
    }
}

export const DeleteVote = async (id, PorC, setData, setLoading, curentPage, postId, resquestSelector) => {
    setLoading && setLoading(true)
    try {
        const response = await axios.delete(`${BaseUrl}/${PorC}/${id}/votes`, headers)
        resquestSelector ?
            getPostComents(postId, setData, setLoading, curentPage) :
            getPost(setData, setLoading, null, curentPage)
    } catch (err) {
        console.log(err.response)
        setLoading && setLoading(false)
    }
}
