import { useContext } from "react"
import { ParticipationContext } from "../../GlobalState/context"
import { Aligned,  Celula, CelulaTd,  Container,  Id, Participation, Table1 } from "./style"
import { Message } from "../Message/Message"

const Table = () => {
    const globalState = useContext(ParticipationContext)

    const twoFunctionsCall = (fristName, lastName) => {
        globalState.editTableDataFn(fristName,lastName)
        globalState.showEditFn()
    }

    return (
        <Container>
            <Message/>
            <Table1>
                <thead>
                    <tr>
                        <Id>&nbsp;</Id>
                        <Aligned>First Name</Aligned>
                        <Aligned>Last Name</Aligned>
                        <Participation>Participation</Participation>
                    </tr>
                </thead>
                <tbody>
                    {globalState.list && globalState.list.map(people => {
                        return(
                            <tr key={people.id} onDoubleClick={() => twoFunctionsCall(people.fristName,people.lastName)}>
                                <Celula>{people.id}</Celula>
                                <CelulaTd>{people.fristName}</CelulaTd>
                                <CelulaTd>{people.lastName}</CelulaTd>
                                <Celula>{people.participation}%</Celula>
                            </tr>
                        )
                    })}
                </tbody>
            </Table1>
        </Container>
    )
}

export default Table