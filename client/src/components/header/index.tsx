import React, { useState } from 'react'
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import UserPassModal from '../modalHeader/indext';
import LogoHeader from "../../assets/logo-home.png"
import { useDispatch, useSelector } from "react-redux"
import { changeOpenCloseUserPassModal, getSearchBarHeaderComponent } from '../../redux/reducers/searchBarHeaderComponent';
import { getDataSearchServer } from '../../redux/reducers/dataSearchServer';
import { Container, DataDiskHead } from "./style"

interface Iprops {
    RenderResult: (server: string, user: string, password: string, option: string) => void
}

export default function HeaderComponent({ RenderResult }: Iprops): JSX.Element {

    const [selectOption, setSelectOption] = useState<string>("")
    const [serverNameTyping, setServerNameTyping] = useState<string>("")
    const dispatch = useDispatch()
    const { serverName } = useSelector(getSearchBarHeaderComponent)
    const { dateTime } = useSelector(getDataSearchServer)

    function HandleSelectOption(event: SelectChangeEvent) {
        setSelectOption(event.target.value)
    }
    function HandleServerName(data: string) {
        setServerNameTyping(data)
    }
    //open and close modal to get credentials
    function OpenCloseModal(open: boolean) {
        dispatch(changeOpenCloseUserPassModal({ open: open }))
    }
    //in the search bar, to type enter verify before if fields is not null
    //and the end open the modal to get credentials
    function GetCredentials(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === 'Enter') {
            if (serverNameTyping === "" || serverNameTyping === undefined || serverNameTyping === null) {
                alert(" Search server field must be filled ")
                return
            }
            if (selectOption === "" || selectOption === undefined || selectOption === null) {
                alert("Options field must be filled ")
                return
            }
            OpenCloseModal(true)
        }
    }
    //the modal calling this function to send user and password
    //and return data to parent component
    function ReturnDataParentComponent(user: string, password: string) {
        OpenCloseModal(false)
        RenderResult(serverNameTyping, user, password, selectOption)
    }
    return (
        <>
            <Container>
                <div>
                    <img src={LogoHeader} />
                </div>
                <div>
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <InputLabel htmlFor="outlined-adornment-amount">Search server</InputLabel>
                        <OutlinedInput
                            sx={{ width: "50ch" }}
                            id="outlined-adornment-amount"
                            value={serverNameTyping}
                            onChange={(data: any) => HandleServerName(data.target.value)}
                            onKeyDown={GetCredentials}
                            startAdornment={<InputAdornment position="start"><SearchIcon style={{ color: "black" }} /></InputAdornment>}
                            label="Search server"
                        />
                    </FormControl>
                </div>
                <div>
                    <FormControl fullWidth sx={{ m: 1, minWidth: 170 }}>
                        <InputLabel id="demo-simple-select-label">Options</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={selectOption}
                            label="Options"
                            onChange={HandleSelectOption}
                        >
                            {/* the "value" field string is the path to backend */}
                            <MenuItem value={"disks"}>DISKS</MenuItem>
                            <MenuItem value={"cluster"}>CLUSTER</MenuItem>
                            <MenuItem value={"rammemory"}>RAM MEMORY</MenuItem>
                            <MenuItem value={"cpu"}>CPU</MenuItem>
                            <MenuItem value={"localusers"}>LOCAL  USERS</MenuItem>
                            <MenuItem value={"administratorgroup"}>ADM GROUP</MenuItem>
                            <MenuItem value={"inventory"}>INVENTORY</MenuItem>

                        </Select>
                    </FormControl>
                </div>
                <UserPassModal ReturnData={ReturnDataParentComponent} />
            </Container>
            <DataDiskHead>
                <div>
                    <h3>Server: </h3><p>{serverName}</p>
                    <h3>Date: </h3><p>{dateTime}</p>
                </div>
            </DataDiskHead>
        </>
    )
}

