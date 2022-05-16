import { goToLogin } from "../Routes/cordinator"
import { CreateVote, ChangeVote, DeleteVote } from "../services/services"

export const logOff = (navigate) => {
    window.localStorage.removeItem('token')
    goToLogin(navigate)
}

export const vote = (id, userVote, voteValue, requestType, setFeed, setLoading, curentPage, postId, resquestSelector) => {
    if (userVote) {
        if (userVote === voteValue) {
            DeleteVote(id, requestType, setFeed, setLoading, curentPage, postId, resquestSelector)
        } else {
            const form = {
                direction: voteValue
            }
            ChangeVote(form, id, requestType, setFeed, setLoading, curentPage, postId, resquestSelector)
        }
    } else {
        const form = {
            direction: voteValue
        }
        CreateVote(form, id, requestType, setFeed, setLoading, curentPage, postId, resquestSelector)
    }
}
