import Chart from "react-google-charts"
import { useContext } from "react"
import { ParticipationContext } from "../../GlobalState/context"

export const PieChart = () => {
    const peopleParticipation = useContext(ParticipationContext)

    const arrayData = peopleParticipation.list.map(people => {
        return [`${people.fristName}`,people.participation]
    })

    const data = [["Pessoa", "Participação"],['Outros',100],...arrayData];
    
    const checkFullChart = () => {
        const sumPeopleParticipation = arrayData.reduce((acc,curr) => {
            acc += curr[1]
            return acc
        },0)
        if(sumPeopleParticipation < 100) {
            data[1][1] = 100 - sumPeopleParticipation
        }
        if(sumPeopleParticipation >= 100) {
            data.splice(1,1)
        }
    }
    
    checkFullChart()

    const options = {
        title: "Participação de cada pessoa",
    };
    return (
        <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={'100%'}
        height={'400px'}
        />
    )
}