import { useContext } from "react";
import useForm from "../../customHoocks/useForm";
import { ParticipationContext } from "../../GlobalState/context";

const Inputs = () => {
    const globalState = useContext(ParticipationContext)
    const {form, onChange, clearFields} = useForm({fristName: '', lastName: '', participation: ''})

    const preventDefaultFunction = (event) => {
        event.preventDefault()
        globalState.add(form)
        clearFields()
    }

    return (
        <div>
            <form onSubmit={preventDefaultFunction}>

            <input
            name="fristName"
            value={form.fristName}
            onChange={onChange}
            placeholder="Frist Name"
            required/>

            <input
            name="lastName"
            value={form.lastName}
            onChange={onChange}
            placeholder="Last Name"
            required/>

            <input
            name="participation"
            value={form.participation}
            onChange={onChange}
            placeholder="Paticipation"
            type={'number'}
            required/>
            <button>cadastrar</button>

            </form>
        </div>
    )
}

export default Inputs