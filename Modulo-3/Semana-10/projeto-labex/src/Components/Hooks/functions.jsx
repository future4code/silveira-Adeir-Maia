import { decideCandidate } from "../Services/service"
import { goToLogin } from "../Routes/coordenator"

export const logOut = (navigate) => {
    window.localStorage.removeItem('token')
    goToLogin(navigate)
}

export const decideCandidateCall = (tripId, candidateId, response, setTrips) => {
    const body = {
        approve: response
    }
    decideCandidate(tripId, candidateId, body, setTrips)
}



