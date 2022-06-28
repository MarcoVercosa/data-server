import React from 'react'
import { useSelector } from "react-redux"
import { getDataSearchServer } from '../../../redux/reducers/dataSearchServer';
import LocalUsersData from "./localUserData"
import { LocalUserDataDiv } from "./style"

interface ILocalUser {
    Name: string,
    Description: string,
    AccountExpires: boolean,
    Enabled: boolean,
    PasswordChangeable: boolean,
    PasswordExpires: boolean,
    UserMayChangePassword: boolean,
    PasswordRequired: boolean,
    LastLogon: string,
    PrincipalSource: string,
    ObjectClass: string,
}

function RenderLocalUsers(): JSX.Element {
    const dataComponentSearchBarStore = useSelector(getDataSearchServer)
    const localUsers: ILocalUser[] = dataComponentSearchBarStore.dataSearch.data

    return (
        <>
            <h3 style={{ color: "#ededed", display: "flex", justifyContent: "center" }}>LOCAL USERS</h3>
            <LocalUserDataDiv>
                <LocalUsersData data={localUsers} />
            </LocalUserDataDiv>
        </>
    );
}

export default RenderLocalUsers;
