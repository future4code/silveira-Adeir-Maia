import { useContext } from "react"
import { useInput } from "../../customHoocks/useInputs;"
import { ParticipationContext } from "../../GlobalState/context"


export const EditInputs = () => {
    const globalState = useContext(ParticipationContext)
    const [value, handleValue, clearInput] = useInput('')

    const preventDefaultFunction = (event) => {
        event.preventDefault()
        globalState.editParticipation(value)
        globalState.showEditFn()
        clearInput()
    }

    const callTwoFunctions = () => {
        globalState.del()
        globalState.showEditFn()
    }

    return (
        <>
        {
            globalState.edit && 
            <>
                <form onSubmit={preventDefaultFunction}>
                    <input
                        name="participation"
                        value={value}
                        onChange={handleValue}
                        placeholder="participation"
                        required
                    />
                    <button>Update</button>
                </form>
                <button onClick={() => callTwoFunctions()}>Deletar</button>
            </>
        }
        </>
    )
}