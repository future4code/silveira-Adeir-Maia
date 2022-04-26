import { useState } from "react";

export const useInput = () => {
    const [value, setValue] = useState('')

    const handleValue = e => {
        setValue(e.target.value)
    }

    return [value, handleValue]
}

export const useTripID = (trips, tripName) => {
    let trip = trips.map(trip => trip.name === tripName)
    return trip[0].id
}
