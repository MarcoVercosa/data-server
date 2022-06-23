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
import { Container } from "./style"

interface Iprops {
    RenderResult: (server: string, user: string, password: string, option: string) => void
}

export default function HeaderComponent({ RenderResult }: Iprops): JSX.Element {
    const [selectOption, setSelectOption] = useState<string>("")
    const [serverName, setServerName] = useState<string>("")
    // const [user, setUser] = useState<string>("")
    // const [password, setPassword] = useState<string>("")
    const [openCloseUserPass, setOpenCloseUserPass] = useState<boolean>(false)

    function HandleSelectOption(event: SelectChangeEvent) {
        setSelectOption(event.target.value)
    }
    function HandleServerName(data: string) {
        setServerName(data)
    }

    //open and close modal to get credentials
    function OpenCloseModal() {
        setOpenCloseUserPass(!openCloseUserPass)
    }

    //in the search bar, to type enter verify before if fields is not null
    //and the end open the modal to get credentials
    function GetCredentials(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === 'Enter') {
            if (serverName == "" || serverName == undefined || serverName == null) {
                alert(" Search server field must be filled ")
                return
            }
            if (selectOption == "" || selectOption == undefined || selectOption == null) {
                alert("Options field must be filled ")
                return
            }
            OpenCloseModal()
        }
    }

    //the modal calling this function to send user and password
    //and return data to parent component
    function ReturnDataParentComponent(user: string, password: string) {
        OpenCloseModal()
        RenderResult(serverName, user, password, selectOption)
    }
    return (
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
                        value={serverName}
                        onChange={(data: any) => HandleServerName(data.target.value)}
                        onKeyDown={GetCredentials}
                        startAdornment={<InputAdornment position="start"><SearchIcon style={{ color: "black" }} /></InputAdornment>}
                        label="Search server"
                    />
                </FormControl>
            </div>
            <div>
                <FormControl fullWidth sx={{ m: 1, minWidth: 170 }}>
                    <InputLabel id="demo-simple-select-label">Feature</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selectOption}
                        label="Options"
                        onChange={HandleSelectOption}
                    >
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
            <UserPassModal openClose={openCloseUserPass} OpenCloseModal={OpenCloseModal} ReturnData={ReturnDataParentComponent} />
        </Container>
    )
}

