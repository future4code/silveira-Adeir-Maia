import { EditInputs } from "../Components/EditInputs/EditInputs";
import Inputs from "../Components/Inputs/inputs";
import { PieChart } from "../Components/PieChart/PieChart";
import Table from "../Components/Table/table";

export default function Home () {
    return(
        <>
            <div>
                <Inputs/>
            </div>
            <div>
                <Table/>
            </div>
            <div>
                <EditInputs/>
            </div>
            <div>
                <PieChart/>
            </div>
        </>
    )
} 