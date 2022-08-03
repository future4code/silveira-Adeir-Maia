import { useContext } from "react"
import { ParticipationContext } from "../../GlobalState/context"
import { Aligned,  Celula, CelulaTd,  Id, Participation, Table1 } from "./style"

const Table = () => {
    const listpeople = useContext(ParticipationContext)

    const twoFunctionsCall = (fristName, lastName) => {
        listpeople.editTableDataFn(fristName,lastName)
        listpeople.showEditFn()
    }

    return (
        <>
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
                    {listpeople.list && listpeople.list.map(people => {
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
        </>
    )
}

export default Table