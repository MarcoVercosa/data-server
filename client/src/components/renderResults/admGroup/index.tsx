import React from 'react'
import { useSelector } from "react-redux"
import { getDataSearchServer } from '../../../redux/reducers/dataSearchServer';
import AdmGroupData from "./admGroupData"
import { AdmGroupDiv } from "./style"

interface ILocalUser {
    Type: string,
    Name: string,
    Source: boolean,
}
function RenderAdmGroup(): JSX.Element {
    const dataComponentSearchBarStore = useSelector(getDataSearchServer)
    let localUsers: ILocalUser[] = dataComponentSearchBarStore.dataSearch.data
    if (!Array.isArray(localUsers)) {//if data come not array, tranform in array
        localUsers = [localUsers]
    }
    return (
        <>
            <h3 style={{ color: "#ededed", display: "flex", justifyContent: "center" }}>ADMINISTRATOR GROUP</h3>
            <AdmGroupDiv>
                <AdmGroupData data={localUsers} />
            </AdmGroupDiv>
        </>
    );
}

export default RenderAdmGroup;
