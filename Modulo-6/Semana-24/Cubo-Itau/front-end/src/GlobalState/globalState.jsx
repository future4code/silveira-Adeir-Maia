import { useEffect, useState } from "react"
import { requestDelete, requestInsert, requestPut, requestSelect } from "../Services/requests"
import { ParticipationContext } from "./context"


export const GlobalState = (props) => {
    const [list, setList] = useState([])
    const [edit, setEdit] = useState(false)
    const [editData, setEditData] = useState()

    useEffect(()=> { requestSelect(getAll) },[])

    const getAll = (data) => {
        let updatedList = data.map((element,index) => {
            element.id = index + 1
            return element
        })
        setList(updatedList)
    }

    const add = (data) => {
        let updatedList = [...list,data]
        updatedList = updatedList.map((element,index) => {
            element.id = index + 1
            element.participation = +element.participation
            return element
        })
        setList(updatedList)
        requestInsert(data)
    }

    const del = () => {
        let updatedList = list.filter(a => 
            (a.fristName !== editData.fristName && a.lastName !== editData.lastName)
            )
        updatedList = updatedList.map((element,index) => {
            element.id = index + 1
            return element
        })
        setList(updatedList)
        requestDelete(editData)
    }

    const showEditFn = () => {
        setEdit(edit === false ? true : false)
    }

    const editTableDataFn = (fristName,lastName,participation) => {
        setEditData({fristName,lastName,participation})
    }

    const editParticipation = (participation) => {
        let updatedEditData = editData
        updatedEditData.participation = +participation
        const updatedlst = list.map(people => 
            (people.fristName ===  updatedEditData.fristName && 
            people.lastName === updatedEditData.lastName) ?
            {
                id:people.id, 
                fristName:people.fristName,
                lastName:people.lastName, 
                participation: updatedEditData.participation
            } :
            people
        )
        setList(updatedlst)
        requestPut(updatedEditData)
    }

    const params = {
        list,
        add,
        del,
        edit,
        editData,
        showEditFn,
        editTableDataFn,
        editParticipation
    }

    return (
        <ParticipationContext.Provider value={params}>
            {props.children}
        </ParticipationContext.Provider>
    )
}