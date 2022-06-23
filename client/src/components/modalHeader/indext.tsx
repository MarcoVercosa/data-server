import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HttpsIcon from '@mui/icons-material/Https';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Modal from '@mui/material/Modal';
import { Container } from "./style"
import { useState } from 'react';


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 365,
    bgcolor: 'background.paper',
    border: '2px solid #e7eb19',
    boxShadow: 24,
    p: 4,
    borderRadius: "15"
};

interface Iprops {
    openClose: boolean;
    OpenCloseModal: () => void
    ReturnData: (user: string, password: string) => void
}

export default function UserPassModal({ openClose, OpenCloseModal, ReturnData }: Iprops) {
    const [user, setUser] = useState<string>("")
    const [pass, setPass] = useState<string>("")

    function ReturnUserPass() {
        ReturnData(user, pass)
    }
    function HandleUser(event: React.ChangeEvent<HTMLInputElement>) {
        setUser(event.target.value)
    }
    function HandlePass(event: React.ChangeEvent<HTMLInputElement>) {
        setPass(event.target.value)
    }
    return (
        <div>
            <Modal
                open={openClose}
                // onClose={OpenCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} style={{ borderRadius: "50px" }}>
                    <Container>
                        <div>
                            <p>Credentials</p>
                            <div>
                                <TextField
                                    onChange={HandleUser}
                                    label="User"
                                    id="outlined-start-adornment"
                                    sx={{ m: 3, width: '35ch' }}
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start"><AccountCircleIcon /></InputAdornment>,
                                    }}
                                    style={{ backgroundColor: "white" }}
                                />
                            </div>
                            <div>
                                <TextField
                                    onChange={HandlePass}
                                    label="Password"
                                    id="outlined-start-adornment"
                                    sx={{ m: 3, width: '35ch' }}
                                    type="password"
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start"><HttpsIcon /></InputAdornment>,
                                    }}
                                    style={{ backgroundColor: "white" }}
                                />
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-around", marginTop: "40px" }}>
                                <div>
                                    <Button sx={{ width: '12ch' }} variant="contained"
                                        onClick={ReturnUserPass}
                                    >OK</Button>
                                </div>
                                <div>
                                    <Button sx={{ width: '12ch' }} variant="outlined"
                                        onClick={OpenCloseModal}
                                    >Cancel</Button>
                                </div>
                            </div>
                        </div>
                    </Container>
                </Box>
            </Modal>
        </div >
    );
}
