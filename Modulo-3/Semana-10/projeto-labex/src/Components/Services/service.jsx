import axios from "axios";

const BaseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/'
const Aluno = 'Adeir-Moreira-Silveira/'

export const getTrips = (setTrips, setLoading) => {
    setLoading && setLoading(true)
    axios.get(`${BaseUrl}${Aluno}trips`).then(response => {
        setTrips(response.data.trips)
        setLoading && setLoading(false)
    }).catch(err => {
        console.log(err.data)
        setLoading(false)
    })
}