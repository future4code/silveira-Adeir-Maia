import Chart from "react-google-charts"
import { useContext } from "react"
import { ParticipationContext } from "../../GlobalState/context"
import { Data } from "../Data/Data"
import { Container } from "./style"

export const PieChart = () => {
    const peopleParticipation = useContext(ParticipationContext)

    const arrayData = peopleParticipation.list.map(people => {
        return [`${people.fristName}`,people.participation]
    })

    const data = [["Pessoa", "Participação"],['Outros',100],...arrayData];
    
    const checkFullChart = () => {
        const totalParticipation = arrayData.reduce((acc,curr) => {
            acc += curr[1]
            return acc
        },0)
        if(totalParticipation < 100) {
            data[1][1] = 100 - totalParticipation
        }
        if(totalParticipation === 0 || totalParticipation >= 100) {
            data.splice(1,1)
        }
    }
    
    checkFullChart()

    const options = {
        title: "Participação de cada pessoa",
    };
    return (
        <Container>
            <Data/>
            <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width={'600px'}
            height={'400px'}
            />
        </Container> 
    )
}