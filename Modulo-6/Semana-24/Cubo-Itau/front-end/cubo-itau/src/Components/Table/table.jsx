import { Aligned,  Celula, CelulaTd,  Id, Participation, Table1 } from "./style"

const Table = () => {
    return (
        <>
        <div>
            <Table1>
                <thead>
                    <tr>
                        <Id>&nbsp;</Id>
                        <Aligned>First Name</Aligned>
                        <Aligned>Last Name</Aligned>
                        <Participation >Participation</Participation>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <Celula >1</Celula>
                        <CelulaTd >Adeir</CelulaTd>
                        <CelulaTd >Moreira</CelulaTd>
                        <Celula >50%</Celula>
                    </tr>
                </tbody>
            </Table1>
        </div>
        </>
        
    )
}

export default Table