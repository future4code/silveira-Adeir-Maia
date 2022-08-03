import { useContext } from "react";
import useForm from "../../customHoocks/useForm";
import { ParticipationContext } from "../../GlobalState/context";
import * as s from "./style";

const Inputs = () => {
    const globalState = useContext(ParticipationContext)
    const {form, onChange, clearFields} = useForm({fristName: '', lastName: '', participation: ''})

    const preventDefaultFunction = (event) => {
        event.preventDefault()
        globalState.add(form)
        clearFields()
    }

    return (
        
            <s.Form onSubmit={preventDefaultFunction}>

            <s.Inputs
            name="fristName"
            value={form.fristName}
            onChange={onChange}
            placeholder="Frist Name"
            required/>

            <s.Inputs
            name="lastName"
            value={form.lastName}
            onChange={onChange}
            placeholder="Last Name"
            required/>

            <s.Inputs
            name="participation"
            value={form.participation}
            onChange={onChange}
            placeholder="Paticipation"
            type={'number'}
            required/>
            <s.ButtonSend>SEND</s.ButtonSend>
            </s.Form>
    )
}

export default Inputs