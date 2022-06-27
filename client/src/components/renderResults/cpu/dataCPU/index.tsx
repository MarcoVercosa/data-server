import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Container, ContainerNav } from './style';


interface IDataCPU {
    data: {
        Name: string;
        Caption: string;
        Manufacturer: string;
        MaxClockSpeed: number;
        NumberOfCores: number;
        Usage: number;
    }
}

export default function DataCPU({ data }: IDataCPU) {
    return (
        <>
            <h3 style={{ color: "#ededed" }}>CPU DETAIL</h3>

            <ContainerNav>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Container>
                            <div>
                                <h4>Name:</h4><p>{data.Name}</p>
                            </div>
                            <div>
                                <h4>Caption:</h4><p>{data.Caption}</p>
                            </div>
                            <div>
                                <h4>Manufacturer:</h4><p>{data.Manufacturer}</p>
                            </div>
                            <div>
                                <h4>MaxClockSpeed:</h4><p>{data.MaxClockSpeed}</p>
                            </div>
                            <div>
                                <h4>NumberOfCores:</h4><p>{data.NumberOfCores}</p>
                            </div>
                            <div>
                                <h4>Usage:</h4><p>{data.Usage}%</p>
                            </div>
                        </Container>
                    </CardContent >
                    <CardActions>
                        <Button size="small">More</Button>
                    </CardActions>
                </Card >
            </ContainerNav>
        </>
    )
}

