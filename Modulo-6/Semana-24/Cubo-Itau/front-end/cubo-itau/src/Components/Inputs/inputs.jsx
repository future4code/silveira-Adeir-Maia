import useForm from "../../customHoocks/useForm";

const Inputs = () => {
    const {form, onChange, clearFields} = useForm({fristName: '', lastName: '', participation: ''})

    const preventDefaultFunction = (event) => {
        event.preventDefault()
        console.log(form)
    }

    return (
        <div>
            <form 
            onSubmit={preventDefaultFunction}
            >
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