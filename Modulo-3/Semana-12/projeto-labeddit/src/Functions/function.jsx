import { goToLogin } from "../Routes/cordinator"
import { CreateVote, ChangeVote, DeleteVote } from "../services/services"

export const logOff = (navigate) => {
    window.localStorage.removeItem('token')
    goToLogin(navigate)
}

export const vote = (id, userVote, voteValue, PostOrCommentary) => {
    if (userVote) {
        if (userVote === voteValue) {
            DeleteVote(id, PostOrCommentary)
        } else {
            const form = {
                direction: voteValue
            }
            ChangeVote(form, id, PostOrCommentary)
        }
    } else {
        const form = {
            direction: voteValue
        }
        CreateVote(form, id, PostOrCommentary)
    }
}