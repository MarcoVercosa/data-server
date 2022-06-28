import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Container, ContainerDiv } from './style';


interface ILocalUserProps {
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

export default function LocalUsersData({ data }: { data: ILocalUserProps[] }) {
    return (
        <>
            {data.map((data: ILocalUserProps) => {
                return (
                    <ContainerDiv>
                        <Card sx={{ maxWidth: 250, minWidth: 250 }} style={{ marginBottom: "25px" }}>
                            <CardContent>
                                <Container>
                                    <div>
                                        <h4>Name:</h4><p>{data.Name}</p>
                                    </div>
                                    <div>
                                        <h4>Description:</h4><p>{data.Description}</p>
                                    </div>
                                    <div>
                                        <h4>Account Expires:</h4><p>{`${data.AccountExpires}`}</p>
                                    </div>
                                    <div>
                                        <h4>Enabled:</h4><p>{`${data.Enabled}`}</p>
                                    </div>
                                    <div>
                                        <h4>Password Changeable:</h4><p>{`${data.PasswordChangeable}`}</p>
                                    </div>
                                    <div>
                                        <h4>Password Expires:</h4><p>{`${data.PasswordExpires}`}</p>
                                    </div>
                                    <div>
                                        <h4>Last Logon:</h4><p>{`${data.LastLogon}`}</p>
                                    </div>
                                    <div>
                                        <h4>Principal Source:</h4><p>{`${data.PrincipalSource}`}</p>
                                    </div>
                                    <div>
                                        <h4>Object Class:</h4><p>{data.ObjectClass}</p>
                                    </div>
                                </Container>
                            </CardContent >
                            <CardActions>
                                <Button size="small">More</Button>
                            </CardActions>

                        </Card >


                    </ContainerDiv>

                )
            })}
        </>
    )
}

