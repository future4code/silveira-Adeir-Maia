import { applyToTrip, LoginRequest, decideCandidate } from "../Services/service"
import { goToLogin } from "../Routes/coordenator"

export const aplyToTripCall = (arraytrips, name, age, profession, text, contry, trip) => {
    const id = getTripID(arraytrips, trip)
    const body = buildBody(name, age, text, profession, contry)
    applyToTrip(id, body)
}

const getTripID = (trips, tripName) => {
    let trip = trips.find(trip => trip.name === tripName)
    return trip.id
}

const buildBody = (name, age, applicationText, profession, country) => {
    return {
        name,
        age: +age,
        applicationText,
        profession,
        country
    }
}

export const loginCall = (email, password, navigate, setSucess, setMessageError) => {
    const body = {
        email,
        password
    }
    LoginRequest(body, navigate, setSucess, setMessageError)
}

export const logOut = (navigate) => {
    window.localStorage.removeItem('token')
    goToLogin(navigate)
}

// export const tripsToString = (trips) => {
//     const tripsarray = trips.map(trips => trips.name)

// }

export const decideCandidateCall = (tripId, candidateId, response, setTrips) => {
    const body = {
        approve: response
    }
    decideCandidate(tripId, candidateId, body, setTrips)
}

