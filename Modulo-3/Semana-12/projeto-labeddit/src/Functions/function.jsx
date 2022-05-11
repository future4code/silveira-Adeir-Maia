import { goToLogin } from "../Routes/cordinator"
import { createVote, ChangeVote } from "../services/services"

export const logOff = (navigate) => {
    window.localStorage.removeItem('token')
    goToLogin(navigate)
}

export const vote = (id, userVote, voteValue, PostOrCommentary) => {
    if (userVote) {
        const form = {
            direction: voteValue
        }
        ChangeVote(form, id, PostOrCommentary)
    } else {
        const form = {
            direction: voteValue
        }
        createVote(form, id, PostOrCommentary)
    }

}