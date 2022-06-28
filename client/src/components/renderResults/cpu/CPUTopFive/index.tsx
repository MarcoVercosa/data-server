import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Container, ContainerNav } from './style';


interface IDataCPUTopFive {
    data: {
        value: [
            {
                ProcessName: string,
                ID: number,
                CPU: number,
                UserName: string | null,
                Description: string
            }
        ]
    }
}
interface IDataCPUTopFiveMap {
    ProcessName: string,
    ID: number,
    CPU: number,
    UserName: string | null,
    Description: string
}

export default function CPUTopFive({ data }: IDataCPUTopFive) {
    return (
        <>
            {
                data.value.map((dataMap: IDataCPUTopFiveMap, index: number) => {
                    return (
                        <div>
                            <ContainerNav>
                                < Card sx={{ minWidth: 275, maxWidth: 275 }
                                }>
                                    <CardContent>
                                        <Container>
                                            <div>
                                                <h2>{index + 1} Place</h2>
                                            </div>
                                            <div>
                                                <h4>Name:</h4><p>{dataMap.ProcessName}</p>
                                            </div>
                                            <div>
                                                <h4>Caption:</h4><p>{dataMap.ID}</p>
                                            </div>
                                            <div>
                                                <h4>Manufacturer:</h4><p>{dataMap.UserName}</p>
                                            </div>
                                            <div>
                                                <h4>MaxClockSpeed:</h4><p>{dataMap.Description}</p>
                                            </div>
                                            <div>
                                                <h4>Usage:</h4><p>{dataMap.CPU}</p>
                                            </div>
                                        </Container>
                                    </CardContent >
                                    <CardActions>
                                        <Button size="small">More</Button>
                                    </CardActions>
                                </Card >
                            </ContainerNav >
                        </div>
                    )
                })
            }
        </>
    )
}