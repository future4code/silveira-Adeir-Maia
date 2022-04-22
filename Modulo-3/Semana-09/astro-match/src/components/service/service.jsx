import axios from 'axios'

const BaseUrl = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/'
const Me = 'Adeir'

export const getProfiles = (setProfle) => {
    axios.get(`${BaseUrl}${Me}/person`).then(response => {
        setProfle(response.data.profile)
    }).catch(err => {
        console.log(err)
    })
}

export const choosePerson = (body) => {
    axios.post(`${BaseUrl}${Me}/choose-person`, body).then(response => {
    }).catch(err => {
        console.log(err.data)
    })
}

export const getMatches = async (setMatchs) => {
    try {
        const response = await axios.get(`${BaseUrl}${Me}/matches`)
        setMatchs(response.data.matches)
    } catch (err) {
        console.log(err.data)
    }
}

export const clearProfiles = async (setProfile) => {
    try {
        await axios.put(`${BaseUrl}${Me}/clear`)
        setProfile([])
    } catch (err) {
        console.log(err.data)
    }
}