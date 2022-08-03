import { useContext } from "react"
import { useInput } from "../../customHoocks/useInputs;"
import { ParticipationContext } from "../../GlobalState/context"
import { ButtonDelete, ButtonUpdate, Container, Form, Inputs } from "./styles"


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
        <Container>
        {
            globalState.edit && 
            <>
                <Form onSubmit={preventDefaultFunction}>
                    <Inputs
                        name="participation"
                        value={value}
                        onChange={handleValue}
                        placeholder="participation"
                        required
                    />
                    <ButtonUpdate>Update</ButtonUpdate>
                </Form>
                <ButtonDelete onClick={() => callTwoFunctions()}>Delete</ButtonDelete>
            </>
        }
        </Container>
    )
}