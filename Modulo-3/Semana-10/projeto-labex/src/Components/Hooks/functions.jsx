import { applyToTrip, decideCandidate } from "../Services/service"
import { goToLogin } from "../Routes/coordenator"

export const aplyToTripCall = (arraytrips, form, trip, cleanFields) => {
    const id = getTripID(arraytrips, trip)
    applyToTrip(id, form, cleanFields)
}

const getTripID = (trips, tripName) => {
    let trip = trips.find(trip => trip.name === tripName)
    return trip.id
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

