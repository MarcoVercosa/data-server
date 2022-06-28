import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Container, ContainerDiv } from './style';


interface ILocalUser {
    Type: string,
    Name: string,
    Source: boolean,
}

export default function AdmGroupData({ data }: { data: ILocalUser[] }) {
    return (
        <>
            {data.map((data: ILocalUser, index: number) => {
                return (
                    <ContainerDiv>
                        <Card sx={{ maxWidth: 250, minWidth: 250 }} style={{ marginBottom: "25px" }}>
                            <CardContent>
                                <Container>
                                    <div>
                                        <h4>Name:</h4><p>{data.Name}</p>
                                    </div>
                                    <div>
                                        <h4>Type:</h4><p>{data.Type}</p>
                                    </div>
                                    <div>
                                        <h4>Source:</h4><p>{`${data.Source}`}</p>
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